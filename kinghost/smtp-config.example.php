<?php
/**
 * Copie para smtp-config.local.php no servidor (mesma pasta que contact-site.php).
 * Não commite smtp-config.local.php.
 */
declare(strict_types=1);

return [
    'password' => 'SENHA_DA_CAIXA_MAIL_FROM',

    // Opcional: só para descobrir o erro — a resposta JSON traz o campo "debug". Desligue depois (false ou apague a linha).
    // 'debug' => true,

    // Opcional: host SMTP (omissão = smtp. + domínio do MAIL_FROM).
    // 'smtp_host' => 'smtp.prosdocimiconsultoria.com.br',

    // Porta 465 com SSL desde o início (se "TLS" na 587 ou "EHLO 0" na 465 sem SNI).
    // 'smtp_implicit_ssl' => true,

    // Só teste: ignora validação do certificado. Remova quando o envio estiver OK.
    // 'smtp_ssl_relaxed' => true,
];
