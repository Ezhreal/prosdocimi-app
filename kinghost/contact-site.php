<?php
/**
 * Envio do formulário do site (React) via mail() da KingHost.
 *
 * Anti-bot: honeypot (campo website), limite por IP, tempo mínimo entre abrir a página e enviar.
 *
 * 1. Envie este ficheiro para a hospedagem (ex.: public_html/api/contact-site.php).
 * 2. Ajuste MAIL_TO, MAIL_FROM e ALLOWED_ORIGINS abaixo.
 * 3. MAIL_FROM tem de ser uma conta de e-mail REAL criada no painel KingHost nesse domínio.
 * 4. No projeto React, defina VITE_CONTACT_ENDPOINT com a URL HTTPS completa deste script.
 *
 * Opcional mais tarde: Cloudflare Turnstile ou Google reCAPTCHA v3 (exige chaves e verificação por API).
 */

declare(strict_types=1);

// --- configurar ---
const MAIL_TO   = 'consultoria@prosdocimiconsultoria.com.br';
const MAIL_FROM = 'noreply@prosdocimiconsultoria.com.br'; // criar esta caixa na KingHost (ou usar outra existente)
const FROM_NAME = 'Site Prosdocimi';

/** Origens permitidas para CORS (URL exata, sem barra final). Inclua www e não-www se usar os dois. */
const ALLOWED_ORIGINS = [
    'https://www.prosdocimiconsultoria.com.br',
    'https://prosdocimiconsultoria.com.br',
    'http://localhost:5173',
    'http://127.0.0.1:5173',
];

/** Máximo de envios por IP por janela de tempo (spam). */
const RATE_LIMIT_MAX = 5;
/** Janela em segundos para RATE_LIMIT_MAX. */
const RATE_LIMIT_WINDOW = 600;

/** Tempo mínimo (ms) entre page_opened_at e o envio — bots costumam enviar quase instantâneo. */
const MIN_SUBMIT_DELAY_MS = 2500;
/** Tempo máximo (ms) — evita timestamps antigos reaproveitados. */
const MAX_SUBMIT_DELAY_MS = 7200000;
// --- fim configurar ---

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

// Honeypot anti-bot (campo oculto "website" — humanos não preenchem)
if (!empty($data['website'] ?? '')) {
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

$headers = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-Type: text/plain; charset=UTF-8';
$fromName = function_exists('mb_encode_mimeheader')
    ? mb_encode_mimeheader(FROM_NAME, 'UTF-8', 'Q')
    : FROM_NAME;
$headers[] = 'From: ' . $fromName . ' <' . MAIL_FROM . '>';
$headers[] = 'Reply-To: ' . $email;

$subjectEncoded = '=?UTF-8?B?' . base64_encode($subject) . '?=';
// -f define o remetente do envelope (muitas hospedagens exigem para mail() funcionar)
$sent = @mail(MAIL_TO, $subjectEncoded, $body, implode("\r\n", $headers), '-f ' . MAIL_FROM);

if (!$sent) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Não foi possível enviar agora. Tente o WhatsApp ou o e-mail.']);
    exit;
}

echo json_encode(['success' => true]);
