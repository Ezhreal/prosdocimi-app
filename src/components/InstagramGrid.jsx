import { Instagram } from 'lucide-react';
import SectionLabel from './SectionLabel';
import './InstagramGrid.css';

const INSTAGRAM_URL = 'https://www.instagram.com/prosdocimiconsultoria';

/** Chamada ao Instagram — visual suave, sem feed embutido. */
export default function InstagramGrid() {
  return (
    <section className="instagram-section">
      <div className="instagram-section-bg" aria-hidden />
      <div className="container">
        <div className="instagram-panel instagram-item">
          <div className="instagram-panel-visual instagram-item" aria-hidden>
            <div className="instagram-orbit">
              <div className="instagram-orbit-ring" />
              <div className="instagram-orbit-core">
                <Instagram size={40} strokeWidth={1.75} className="instagram-orbit-icon" />
              </div>
            </div>
          </div>

          <div className="instagram-panel-copy">
            <SectionLabel className="instagram-item">Redes sociais</SectionLabel>
            <h2 className="instagram-title instagram-item">Siga a Prosdocimi no Instagram</h2>
            <p className="instagram-lead instagram-item">
              Conteúdo sobre gestão, obras, treinamentos e o dia a dia de quem constrói resultado com a gente.
            </p>
            <div className="instagram-actions instagram-item">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary instagram-btn"
              >
                <Instagram size={18} strokeWidth={2} aria-hidden />
                Ver perfil @prosdocimiconsultoria
              </a>
              <p className="instagram-hint">
                Abre em nova aba. No celular, pode abrir direto no app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
