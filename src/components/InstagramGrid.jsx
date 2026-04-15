import { Instagram } from 'lucide-react';
import SectionLabel from './SectionLabel';
import './InstagramGrid.css';

const INSTAGRAM_URL = 'https://www.instagram.com/prosdocimiconsultoria';

/** Chamada simples ao perfil do Instagram (sem feed embutido). */
export default function InstagramGrid() {
  return (
    <section className="instagram-section">
      <div className="container">
        <SectionLabel className="instagram-item">Redes sociais</SectionLabel>
        <h2 className="instagram-title instagram-item">Instagram</h2>
        <p className="instagram-lead instagram-item">
          Acompanhe novidades, projetos e conteúdos da Prosdocimi no nosso perfil oficial.
        </p>
        <div className="instagram-cta instagram-item">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary instagram-btn"
          >
            <Instagram size={18} strokeWidth={2} aria-hidden />
            @prosdocimiconsultoria
          </a>
        </div>
      </div>
    </section>
  );
}
