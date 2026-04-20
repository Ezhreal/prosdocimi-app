<?php
// prosdocimi-2026-04: SEM arrow function (fn). Se o erro citar "fn" na linha ~31, o servidor ainda tem ficheiro ANTIGO — subir de novo este ficheiro por FTP.
/**
 * SMTP mínimo — KingHost: 587 + STARTTLS (padrão) ou 465 + SSL implícito (smtp_implicit_ssl no config).
 * PHP 7.4+ / 8.2+.
 */
declare(strict_types=1);

final class ProsdocimiSmtp
{
    /** Vários métodos — em alguns servidores STREAM_CRYPTO_METHOD_TLS_CLIENT falha após STARTTLS. */
    private static function enableCryptoAfterStartTls($socket): bool
    {
        $methods = [];
        if (defined('STREAM_CRYPTO_METHOD_TLSv1_2_CLIENT') && defined('STREAM_CRYPTO_METHOD_TLSv1_3_CLIENT')) {
            $methods[] = STREAM_CRYPTO_METHOD_TLSv1_2_CLIENT | STREAM_CRYPTO_METHOD_TLSv1_3_CLIENT;
        }
        if (defined('STREAM_CRYPTO_METHOD_TLSv1_2_CLIENT')) {
            $methods[] = STREAM_CRYPTO_METHOD_TLSv1_2_CLIENT;
        }
        $methods[] = STREAM_CRYPTO_METHOD_TLS_CLIENT;

        foreach ($methods as $method) {
            if (@stream_socket_enable_crypto($socket, true, $method) === true) {
                return true;
            }
        }

        return false;
    }

    /**
     * Contexto SSL com SNI. $setCryptoMethod false = deixa o OpenSSL negociar (evita falhas em alguns hosts).
     *
     * @return resource
     */
    private static function buildSslStreamContext(string $peerHost, bool $relaxedVerify, bool $setCryptoMethod)
    {
        $ssl = [
            'peer_name' => $peerHost,
            'SNI_enabled' => true,
        ];
        if ($relaxedVerify) {
            $ssl['verify_peer'] = false;
            $ssl['verify_peer_name'] = false;
            $ssl['allow_self_signed'] = true;
        } else {
            $ssl['verify_peer'] = true;
            $ssl['verify_peer_name'] = true;
        }
        if ($setCryptoMethod && defined('STREAM_CRYPTO_METHOD_TLSv1_2_CLIENT')) {
            $crypto = STREAM_CRYPTO_METHOD_TLSv1_2_CLIENT;
            if (defined('STREAM_CRYPTO_METHOD_TLSv1_3_CLIENT')) {
                $crypto |= STREAM_CRYPTO_METHOD_TLSv1_3_CLIENT;
            }
            $ssl['crypto_method'] = $crypto;
        }

        return stream_context_create(['ssl' => $ssl]);
    }

    /**
     * Porta 465: várias combinações — PHP muitas vezes devolve ssl (0) sem texto até verificação relaxada ou tls://.
     *
     * @return array{0: resource|false, 1: string}
     */
    private static function connectImplicitTls(string $host, int $port, bool $userRelaxed)
    {
        $plans = [];
        if ($userRelaxed) {
            $plans[] = ['ssl', true, true];
            $plans[] = ['tls', true, true];
            $plans[] = ['ssl', true, false];
            $plans[] = ['tls', true, false];
        } else {
            $plans[] = ['ssl', false, true];
            $plans[] = ['tls', false, true];
            $plans[] = ['ssl', true, true];
            $plans[] = ['tls', true, true];
            $plans[] = ['ssl', true, false];
            $plans[] = ['tls', true, false];
        }

        $lastDetail = '';
        foreach ($plans as $plan) {
            [$wrap, $relaxed, $crypto] = $plan;
            $ctx = self::buildSslStreamContext($host, $relaxed, $crypto);
            $target = $wrap . '://' . $host . ':' . $port;
            $errno = 0;
            $errstr = '';
            $socket = @stream_socket_client(
                $target,
                $errno,
                $errstr,
                45,
                STREAM_CLIENT_CONNECT,
                $ctx
            );
            if ($socket !== false) {
                return [$socket, ''];
            }
            $le = error_get_last();
            $msg = trim($errstr . ' ' . (is_array($le) ? (string) ($le['message'] ?? '') : ''));
            if ($msg === '') {
                $msg = 'errno=' . $errno;
            }
            $tag = $wrap . ($relaxed ? '+relaxed' : '+strict') . ($crypto ? '' : '+nocrypto');
            $lastDetail = $tag . ': ' . $msg;
        }

        return [false, $lastDetail];
    }

    /** @param callable(string): int $send */
    private static function smtpHeloSequence(callable $send, string $ehloDomain): int
    {
        $last = 0;
        $cmds = [
            'EHLO ' . $ehloDomain,
            'HELO ' . $ehloDomain,
            'EHLO localhost',
            'HELO localhost',
        ];
        foreach ($cmds as $cmd) {
            $code = $send($cmd);
            $last = $code;
            if ($code === 250) {
                return 250;
            }
        }

        return $last;
    }

    /**
     * @param list<string> $toEmails destinatários (um envio SMTP, vários RCPT TO)
     * @param bool $implicitTls true = ligação ssl:// na porta (ex. 465), sem STARTTLS
     * @param bool $sslRelaxedVerify só diagnóstico: desliga verificação do certificado (menos seguro)
     * @return array{ok: bool, error: string}
     */
    public static function send(
        string $host,
        int $port,
        string $username,
        string $password,
        string $fromEmail,
        string $fromName,
        array $toEmails,
        string $replyTo,
        string $subject,
        string $bodyPlain,
        string $ehloDomain,
        bool $implicitTls = false,
        bool $sslRelaxedVerify = false
    ): array {
        $toEmails = array_map('trim', $toEmails);
        $toEmails = array_filter($toEmails);
        $toEmails = array_values(array_unique($toEmails));
        foreach ($toEmails as $addr) {
            if (!filter_var($addr, FILTER_VALIDATE_EMAIL)) {
                return ['ok' => false, 'error' => 'RCPT invalid'];
            }
        }
        if ($toEmails === []) {
            return ['ok' => false, 'error' => 'RCPT empty'];
        }
        $errno = 0;
        $errstr = '';
        if ($implicitTls) {
            [$socket, $sslDetail] = self::connectImplicitTls($host, $port, $sslRelaxedVerify);
            if ($socket === false) {
                return ['ok' => false, 'error' => 'ssl ' . $sslDetail];
            }
        } else {
            $socket = @stream_socket_client(
                "tcp://{$host}:{$port}",
                $errno,
                $errstr,
                45,
                STREAM_CLIENT_CONNECT
            );
            if ($socket === false) {
                return ['ok' => false, 'error' => "tcp {$errstr} ({$errno})"];
            }
        }

        stream_set_timeout($socket, 45);

        $read = static function () use ($socket): string {
            $all = '';
            while (($line = fgets($socket, 8192)) !== false) {
                $all .= $line;
                if (strlen($line) >= 4 && $line[3] === ' ') {
                    break;
                }
            }

            return $all;
        };

        $send = static function (string $cmd) use ($socket, $read): int {
            fwrite($socket, $cmd . "\r\n");

            $resp = $read();
            if ($resp === '') {
                return 0;
            }

            return (int) substr($resp, 0, 3);
        };

        $greeting = $read();
        $gLine = ltrim($greeting);
        if ($gLine === '' || strpos($gLine, '220') !== 0) {
            fclose($socket);

            return ['ok' => false, 'error' => 'greeting'];
        }

        $code = self::smtpHeloSequence($send, $ehloDomain);
        if ($code !== 250) {
            fclose($socket);

            return ['ok' => false, 'error' => "EHLO {$code}"];
        }

        if (!$implicitTls) {
            $code = $send('STARTTLS');
            if ($code !== 220) {
                fclose($socket);

                return ['ok' => false, 'error' => "STARTTLS {$code}"];
            }

            if (!self::enableCryptoAfterStartTls($socket)) {
                fclose($socket);

                return ['ok' => false, 'error' => 'TLS'];
            }

            $code = self::smtpHeloSequence($send, $ehloDomain);
            if ($code !== 250) {
                fclose($socket);

                return ['ok' => false, 'error' => "EHLO2 {$code}"];
            }
        }

        $code = $send('AUTH LOGIN');
        if ($code !== 334) {
            fclose($socket);

            return ['ok' => false, 'error' => "AUTH {$code}"];
        }

        $code = $send(base64_encode($username));
        if ($code !== 334) {
            fclose($socket);

            return ['ok' => false, 'error' => "AUTH user {$code}"];
        }

        $code = $send(base64_encode($password));
        if ($code !== 235) {
            fclose($socket);

            return ['ok' => false, 'error' => "AUTH pass {$code}"];
        }

        $code = $send('MAIL FROM:<' . $fromEmail . '>');
        if ($code !== 250) {
            fclose($socket);

            return ['ok' => false, 'error' => "MAIL FROM {$code}"];
        }

        foreach ($toEmails as $toEmail) {
            $code = $send('RCPT TO:<' . $toEmail . '>');
            if ($code !== 250 && $code !== 251) {
                fclose($socket);

                return ['ok' => false, 'error' => "RCPT {$toEmail} {$code}"];
            }
        }

        $code = $send('DATA');
        if ($code !== 354) {
            fclose($socket);

            return ['ok' => false, 'error' => "DATA {$code}"];
        }

        $at = strrpos($fromEmail, '@');
        $msgDomain = $at !== false ? substr($fromEmail, $at + 1) : $ehloDomain;

        $encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
        $fromNameEnc = function_exists('mb_encode_mimeheader')
            ? mb_encode_mimeheader($fromName, 'UTF-8', 'Q')
            : $fromName;

        $bodyNorm = str_replace(["\r\n", "\r"], "\n", $bodyPlain);
        $bodyNorm = str_replace("\n", "\r\n", $bodyNorm);
        $bodyNorm = preg_replace('/^\./m', '..', $bodyNorm);

        $mid = '<' . time() . '.' . bin2hex(random_bytes(5)) . '@' . $msgDomain . '>';

        $headers = [];
        $headers[] = 'Message-ID: ' . $mid;
        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'Content-Type: text/plain; charset=UTF-8';
        $headers[] = 'From: ' . $fromNameEnc . ' <' . $fromEmail . '>';
        $toParts = [];
        foreach ($toEmails as $addr) {
            $toParts[] = '<' . $addr . '>';
        }
        $toHeader = implode(', ', $toParts);
        $headers[] = 'To: ' . $toHeader;
        $headers[] = 'Reply-To: ' . $replyTo;
        $headers[] = 'Subject: ' . $encodedSubject;

        $payload = implode("\r\n", $headers) . "\r\n\r\n" . $bodyNorm;

        fwrite($socket, $payload . "\r\n.\r\n");

        $resp = $read();
        $endCode = (int) substr($resp, 0, 3);

        $send('QUIT');
        fclose($socket);

        if ($endCode !== 250) {
            return ['ok' => false, 'error' => "DATAend {$endCode}"];
        }

        return ['ok' => true, 'error' => ''];
    }
}
