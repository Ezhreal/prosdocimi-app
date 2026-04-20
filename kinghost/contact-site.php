<?php
/**
 * Envio do formulário do site (React) na KingHost.
 *
 * PHP 8.2+ no servidor: compatível; não exige mudanças no código. (Também roda em 7.4+.)
 *
 * Recomendado: SMTP autenticado (porta 587). O mail() nativo costuma retornar false nesta hospedagem.
 * 1. Envie contact-site.php + SmtpKinghost.php para public_html/api/
 * 2. Copie smtp-config.example.php → smtp-config.local.php e preencha a senha da caixa MAIL_FROM.
 * 3. MAIL_FROM = conta de e-mail real no painel (a mesma senha vai em smtp-config.local.php).
 * 4. Host SMTP: smtp. + domínio do e-mail (ex.: smtp.prosdocimiconsultoria.com.br).
 *
 * Anti-bot: honeypot, limite por IP, tempo mínimo entre abrir a página e enviar.
 *
 * Opcional: Cloudflare Turnstile ou reCAPTCHA v3.
 */

declare(strict_types=1);

require_once __DIR__ . '/SmtpKinghost.php';

// --- configurar ---
/** Destinatários que recebem cada envio do formulário. */
const MAIL_TO = [
    'ronaldogademar@gmail.com',
    'alexandre@prosdocimiconsultoria.com.br',
];
const MAIL_FROM = 'no-reply@prosdocimiconsultoria.com.br'; // mesma conta no painel KingHost + senha em smtp-config.local.php
const FROM_NAME = 'Site Prosdocimi';

/** Origens permitidas para CORS (URL exata, sem barra final). Inclua www e não-www se usar os dois. */
const ALLOWED_ORIGINS = [
    'https://www.prosdocimiconsultoria.com.br',
    'https://prosdocimiconsultoria.com.br',
    'http://localhost:5173',
    'http://127.0.0.1:5173',
    'http://localhost:4173',
    'http://127.0.0.1:4173',
];

/** Máximo de envios por IP por janela (spam). Pode subir com moderação; muito alto facilita abuso. */
const RATE_LIMIT_MAX = 15;
/** Janela em segundos para RATE_LIMIT_MAX. */
const RATE_LIMIT_WINDOW = 600;

/** Tempo mínimo (ms) na página antes de enviar. Muito baixo (<~1s) favorece bots. */
const MIN_SUBMIT_DELAY_MS = 1500;
/** Tempo máximo (ms) — evita timestamps antigos reaproveitados. */
const MAX_SUBMIT_DELAY_MS = 7200000;
// --- fim configurar ---

function prosdocimi_domain_from_email(string $email): string
{
    $p = strrpos($email, '@');

    return $p !== false ? substr($email, $p + 1) : 'localhost';
}

function client_ip(): string
{
    if (!empty($_SERVER['HTTP_CF_CONNECTING_IP'])) {
        return trim($_SERVER['HTTP_CF_CONNECTING_IP']);
    }
    if (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $parts = explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']);

        return trim($parts[0]);
    }

    return $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
}

/** @return array{ok: bool, message: string} */
function check_rate_limit(string $ip): array
{
    $dir = sys_get_temp_dir();
    $file = $dir . '/prosdocimi-contact-' . hash('sha256', $ip) . '.json';
    $now = time();
    $payload = ['window_start' => $now, 'count' => 0];
    if (is_readable($file)) {
        $raw = @file_get_contents($file);
        $old = json_decode((string) $raw, true);
        if (is_array($old) && isset($old['window_start'], $old['count'])) {
            if ($now - (int) $old['window_start'] < RATE_LIMIT_WINDOW) {
                $payload['window_start'] = (int) $old['window_start'];
                $payload['count'] = (int) $old['count'];
            }
        }
    }
    ++$payload['count'];
    @file_put_contents($file, json_encode($payload));

    if ($payload['count'] > RATE_LIMIT_MAX) {
        return ['ok' => false, 'message' => 'Muitas tentativas. Aguarde alguns minutos ou use o WhatsApp.'];
    }

    return ['ok' => true, 'message' => ''];
}

header('Content-Type: application/json; charset=utf-8');

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '' && in_array($origin, ALLOWED_ORIGINS, true)) {
    header("Access-Control-Allow-Origin: {$origin}");
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    header('Access-Control-Max-Age: 86400');
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método não permitido']);
    exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'JSON inválido']);
    exit;
}

// Honeypot (campo oculto; nome genérico no JSON para não ser preenchido por extensões/autofill)
if (!empty(trim((string) ($data['fld_aux'] ?? '')))) {
    echo json_encode(['success' => true]);
    exit;
}

$ip = client_ip();
$rate = check_rate_limit($ip);
if (!$rate['ok']) {
    http_response_code(429);
    echo json_encode(['success' => false, 'message' => $rate['message']]);
    exit;
}

// Tempo desde que a página React montou (anti POST instantâneo de script)
$pageOpened = isset($data['page_opened_at']) ? (int) $data['page_opened_at'] : 0;
$nowMs = (int) round(microtime(true) * 1000);
if ($pageOpened <= 0) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Recarregue a página e envie novamente.']);
    exit;
}
$elapsed = $nowMs - $pageOpened;
if ($elapsed < MIN_SUBMIT_DELAY_MS || $elapsed > MAX_SUBMIT_DELAY_MS) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Envio inválido ou demasiado rápido. Recarregue a página e tente de novo.']);
    exit;
}

$nome     = trim((string) ($data['nome'] ?? ''));
$telefone = trim((string) ($data['telefone'] ?? ''));
$email    = trim((string) ($data['email'] ?? ''));
$mensagem = trim((string) ($data['mensagem'] ?? ''));

if ($nome === '' || $telefone === '' || $email === '' || $mensagem === '') {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Preencha todos os campos obrigatórios.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'E-mail inválido.']);
    exit;
}

if (mb_strlen($mensagem) < 10) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Mensagem muito curta.']);
    exit;
}

$subject = 'Contato pelo site — ' . $nome;

$body = "Nome: {$nome}\r\n";
$body .= "Telefone: {$telefone}\r\n";
$body .= "E-mail: {$email}\r\n\r\n";
$body .= "Mensagem:\r\n" . $mensagem . "\r\n";

$smtpPass = '';
$smtpDebug = false;
$smtpHostOverride = '';
$smtpPort = 587;
$smtpImplicitTls = false;
$smtpSslRelaxed = false;
$smtpFile = __DIR__ . '/smtp-config.local.php';
if (is_readable($smtpFile)) {
    $smtpCfg = include $smtpFile;
    if (is_array($smtpCfg)) {
        if (isset($smtpCfg['password']) && is_string($smtpCfg['password'])) {
            $smtpPass = trim($smtpCfg['password']);
        }
        if (!empty($smtpCfg['debug'])) {
            $smtpDebug = true;
        }
        if (isset($smtpCfg['smtp_host']) && is_string($smtpCfg['smtp_host']) && trim($smtpCfg['smtp_host']) !== '') {
            $smtpHostOverride = trim($smtpCfg['smtp_host']);
        }
        if (isset($smtpCfg['smtp_port'])) {
            $p = (int) $smtpCfg['smtp_port'];
            if ($p > 0 && $p <= 65535) {
                $smtpPort = $p;
            }
        }
        if (!empty($smtpCfg['smtp_implicit_ssl'])) {
            $smtpImplicitTls = true;
        }
        if (!empty($smtpCfg['smtp_ssl_relaxed'])) {
            $smtpSslRelaxed = true;
        }
    }
}

if ($smtpImplicitTls && $smtpPort === 587) {
    $smtpPort = 465;
}

$domain = prosdocimi_domain_from_email(MAIL_FROM);
$smtpHost = $smtpHostOverride !== '' ? $smtpHostOverride : ('smtp.' . $domain);

$sent = false;
$smtpErr = '';

if ($smtpPass !== '') {
    $smtpRes = ProsdocimiSmtp::send(
        $smtpHost,
        $smtpPort,
        MAIL_FROM,
        $smtpPass,
        MAIL_FROM,
        FROM_NAME,
        MAIL_TO,
        $email,
        $subject,
        $body,
        $domain,
        $smtpImplicitTls,
        $smtpSslRelaxed
    );
    $sent = $smtpRes['ok'];
    $smtpErr = $smtpRes['error'];
} else {
    $headers = [];
    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-Type: text/plain; charset=UTF-8';
    $fromName = function_exists('mb_encode_mimeheader')
        ? mb_encode_mimeheader(FROM_NAME, 'UTF-8', 'Q')
        : FROM_NAME;
    $headers[] = 'From: ' . $fromName . ' <' . MAIL_FROM . '>';
    $headers[] = 'Reply-To: ' . $email;
    $msgId = '<' . time() . '.' . bin2hex(random_bytes(6)) . '@' . $domain . '>';
    $headers[] = 'Message-ID: ' . $msgId;
    $subjectEncoded = '=?UTF-8?B?' . base64_encode($subject) . '?=';
    $hdrBlock = implode("\r\n", $headers);
    $sent = true;
    foreach (MAIL_TO as $toAddr) {
        if (!@mail($toAddr, $subjectEncoded, $body, $hdrBlock, '-f ' . MAIL_FROM)) {
            $sent = false;
            break;
        }
    }
}

if (!$sent) {
    error_log(
        'Prosdocimi contact-site: envio falhou. mail_fallback=' . ($smtpPass === '' ? '1' : '0')
        . ' smtp_err=' . $smtpErr
        . ' host=' . $smtpHost . ':' . $smtpPort . ($smtpImplicitTls ? ' ssl' : '')
        . ' dest=' . implode(',', MAIL_TO)
    );
    http_response_code(500);
    $out = [
        'success' => false,
        'message' => 'Não foi possível enviar agora. Tente o WhatsApp ou o e-mail.',
    ];
    if ($smtpDebug) {
        $out['debug'] = [
            'smtp_password_configured' => $smtpPass !== '',
            'smtp_host' => $smtpHost,
            'smtp_error' => $smtpErr,
            'mail_from' => MAIL_FROM,
            'hint' => $smtpPass === ''
                ? 'Defina password em smtp-config.local.php'
                : 'greeting = SSL/banner; EHLO 0 = sem resposta HELO; TLS = STARTTLS 587; AUTH/RCPT = credenciais/destino. Teste: smtp_ssl_relaxed => true (só debug).',
            'smtp_port' => $smtpPort,
            'smtp_implicit_ssl' => $smtpImplicitTls,
            'smtp_ssl_relaxed' => $smtpSslRelaxed,
        ];
    }
    echo json_encode($out);
    exit;
}

echo json_encode(['success' => true]);
