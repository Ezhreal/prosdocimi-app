import { Instagram } from 'lucide-react';
import SectionLabel from './SectionLabel';
import './InstagramGrid.css';

const INSTAGRAM_URL = 'https://www.instagram.com/prosdocimiconsultoria';
const HANDLE = '@prosdocimiconsultoria';

/** Bloco de chamada para o Instagram — sem widget/API; leva o usuário ao perfil no app ou navegador. */
export default function InstagramGrid() {
  return (
    <section className="instagram-section">
      <div className="container">
        <SectionLabel className="instagram-item">Instagram</SectionLabel>
        <h2 className="instagram-title instagram-item">Acompanhe a Prosdocimi</h2>
        <p className="instagram-lead instagram-item">
          Novidades em consultoria e auditoria, treinamentos, obras e bastidores do dia a dia — tudo direto no nosso perfil.
        </p>

        <div className="instagram-cta-card">
          <div className="instagram-mosaic instagram-item" aria-hidden="true">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className={`instagram-mosaic-cell instagram-mosaic-cell--${i}`} />
            ))}
          </div>

          <div className="instagram-cta-body">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-handle instagram-item"
            >
              <Instagram size={22} strokeWidth={2} aria-hidden />
              <span>{HANDLE}</span>
            </a>
            <p className="instagram-cta-text instagram-item">
              Toque no botão para abrir o perfil oficial, seguir a Prosdocimi e acompanhar posts e stories quando quiser.
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary instagram-follow-btn instagram-item"
            >
              <Instagram size={18} strokeWidth={2} aria-hidden />
              Seguir no Instagram
            </a>
            <p className="instagram-footnote instagram-item">
              Abre em nova aba — no celular pode abrir direto no app, se estiver instalado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
