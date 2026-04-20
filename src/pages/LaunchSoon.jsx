import { useEffect, useState } from 'react';
import { LAUNCH_AT_MS, getLaunchDisplay } from '../constants/launch';
import logoWhite from '../assets/images/logo-prosdocimi-white.png';
import './LaunchSoon.css';

function pad2(n) {
  return String(n).padStart(2, '0');
}

function splitRemaining(ms) {
  const totalSec = Math.max(0, Math.floor(ms / 1000));
  const days = Math.floor(totalSec / 86400);
  const hours = Math.floor((totalSec % 86400) / 3600);
  const minutes = Math.floor((totalSec % 3600) / 60);
  const seconds = totalSec % 60;
  return { days, hours, minutes, seconds };
}

export default function LaunchSoon({ onLaunchReached }) {
  const [remainingMs, setRemainingMs] = useState(() =>
    Math.max(0, LAUNCH_AT_MS - Date.now())
  );

  useEffect(() => {
    const tick = () => {
      const next = Math.max(0, LAUNCH_AT_MS - Date.now());
      setRemainingMs(next);
      if (next <= 0) onLaunchReached();
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [onLaunchReached]);

  const { days, hours, minutes, seconds } = splitRemaining(remainingMs);
  const { dateLine, hourLabel, dateTimeAttr } = getLaunchDisplay();

  return (
    <div className="launch-soon">
      <div className="launch-soon__bg" aria-hidden>
        <span className="launch-soon__orb launch-soon__orb--a" />
        <span className="launch-soon__orb launch-soon__orb--b" />
        <span className="launch-soon__orb launch-soon__orb--c" />
        <span className="launch-soon__grid" />
        <span className="launch-soon__vignette" />
      </div>

      <div className="launch-soon__layout">
        <header className="launch-soon__brand">
          <div className="launch-soon__logo-wrap">
            <img
              className="launch-soon__logo"
              src={logoWhite}
              alt="Prosdocimi"
              width={200}
              height={52}
            />
          </div>
          <p className="launch-soon__badge">
            <span className="launch-soon__badge-dot" aria-hidden />
            Novo site
          </p>
          <h1 className="launch-soon__title">
            Uma nova experiência
            <span className="launch-soon__title-line"> está chegando</span>
          </h1>
          <p className="launch-soon__lede">
            Preparamos um ambiente mais claro, rápido e alinhado ao jeito Prosdocimi
            de pensar gestão e resultados.
          </p>
          <div className="launch-soon__meta">
            <time className="launch-soon__date" dateTime={dateTimeAttr}>
              {dateLine}
            </time>
            <span className="launch-soon__meta-sep" aria-hidden>
              ·
            </span>
            <span className="launch-soon__hour">{hourLabel}</span>
          </div>
        </header>

        <section
          className="launch-soon__timer"
          aria-label="Contagem regressiva para o lançamento"
        >
          <div className="launch-soon__timer-label">Falta pouco</div>
          <div className="launch-soon__countdown" role="timer" aria-live="polite">
            {days > 0 && (
              <>
                <div className="launch-soon__unit">
                  <span className="launch-soon__value">{days}</span>
                  <span className="launch-soon__label">
                    {days === 1 ? 'dia' : 'dias'}
                  </span>
                </div>
                <span className="launch-soon__sep" aria-hidden>
                  :
                </span>
              </>
            )}
            <div className="launch-soon__unit">
              <span className="launch-soon__value">{pad2(hours)}</span>
              <span className="launch-soon__label">horas</span>
            </div>
            <span className="launch-soon__sep" aria-hidden>
              :
            </span>
            <div className="launch-soon__unit">
              <span className="launch-soon__value">{pad2(minutes)}</span>
              <span className="launch-soon__label">min</span>
            </div>
            <span className="launch-soon__sep" aria-hidden>
              :
            </span>
            <div className="launch-soon__unit launch-soon__unit--pulse">
              <span className="launch-soon__value">{pad2(seconds)}</span>
              <span className="launch-soon__label">seg</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
