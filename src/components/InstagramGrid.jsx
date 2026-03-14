import SectionLabel from './SectionLabel';
import './InstagramGrid.css';

// Substitua essa URL pela URL de incorporação (iframe) gerada no SnapWidget
const SNAPWIDGET_SRC = 'https://snapwidget.com/embed/SEU_WIDGET_ID_AQUI';

export default function InstagramGrid() {
  return (
    <section className="instagram-section">
      <div className="container">
        <SectionLabel>Social Media</SectionLabel>
        <h2 className="instagram-title">Nos siga no Instagram</h2>

        <div className="instagram-widget-wrap">
          <iframe
            src={SNAPWIDGET_SRC}
            title="Feed do Instagram Prosdocimi"
            className="instagram-widget-iframe"
            allowTransparency
            scrolling="no"
            frameBorder="0"
          />
        </div>

        <div className="instagram-cta">
          <a
            href="https://www.instagram.com/prosdocimiconsultoria"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
