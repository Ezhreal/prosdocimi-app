import SectionLabel from './SectionLabel';
import imgCase01 from '../assets/images/img-case01.jpg';
import imgCase02 from '../assets/images/img-case02.jpg';
import imgCase03 from '../assets/images/img-case03.jpg';
import imgCase04 from '../assets/images/img-case04.jpg';
import './CaseSection.css';

const insights = [
  { title: 'Insights Concepts', text: 'Volutpat commodo at dictum amet tincidunt facilisis id lorem eu vitae cursus.' },
  { title: 'Insights Concepts', text: 'Volutpat commodo at dictum amet tincidunt facilisis id lorem eu vitae cursus.' },
  { title: 'Insights Concepts', text: 'Volutpat commodo at dictum amet tincidunt facilisis id lorem eu vitae cursus.' },
];

export default function CaseSection() {
  return (
    <section className="case-section">
      <div className="container">
        <div className="case-grid">
          <div className="case-content">
            <SectionLabel>Nosso Trabalho</SectionLabel>
            <h2>Case Nome do Projeto</h2>
            <p className="case-desc">
              Volutpat commodo at dictum amet tincidunt facilisis id lorem eu vitae cursus auctor laoreet fermentum adipiscing. Consequat enim mollis mauris vulputate phasellus neque.
            </p>
            <div className="case-insights">
              {insights.map((item, i) => (
                <div key={i} className="case-insight">
                  <span className="case-insight-quote">"</span>
                  <div>
                    <p className="case-insight-title">{item.title}</p>
                    <p className="case-insight-text">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="case-photos">
            <div className="case-photo-main">
              <img src={imgCase01} alt="Case 1" />
            </div>
            <div className="case-photo-row">
              <img src={imgCase02} alt="Case 2" />
              <img src={imgCase04} alt="Case 4" />
            </div>
            <div className="case-photo-single">
              <img src={imgCase03} alt="Case 3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
