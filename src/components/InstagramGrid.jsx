import SectionLabel from './SectionLabel';
import instagram01 from '../assets/images/instagram01.jpg';
import instagram02 from '../assets/images/instagram02.jpg';
import instagram03 from '../assets/images/instagram03.jpg';
import './InstagramGrid.css';

const images = [instagram01, instagram02, instagram03];

export default function InstagramGrid() {
  return (
    <section className="instagram-section">
      <div className="container">
        <SectionLabel>Social Media</SectionLabel>
        <h2 className="instagram-title">Nos siga no Instagram</h2>
        <div className="instagram-grid">
          {images.map((src, i) => (
            <a
              key={i}
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="instagram-item"
            >
              <img src={src} alt={`Instagram ${i + 1}`} />
              <span className="instagram-overlay" />
            </a>
          ))}
        </div>
        <div className="instagram-cta">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="btn-primary">
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
