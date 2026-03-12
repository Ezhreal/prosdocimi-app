import SectionLabel from './SectionLabel';
import imgCase01 from '../assets/images/img-case01.jpg';
import imgCase02 from '../assets/images/img-case02.jpg';
import imgCase03 from '../assets/images/img-case03.jpg';
import imgCase04 from '../assets/images/img-case04.jpg';
import { TEXT_LONG, TEXT_SHORT } from '../constants/texts';
import './CaseSection.css';

const defaultInsights = [
  { title: 'Insights Concepts', text: TEXT_SHORT },
  { title: 'Insights Concepts', text: TEXT_SHORT },
  { title: 'Insights Concepts', text: TEXT_SHORT },
];

export default function CaseSection({
  reverse = false,
  title,
  description,
  bullets,
}) {
  const items = bullets && bullets.length ? bullets : defaultInsights;

  const content = (
    <div className="case-content">
      <SectionLabel>Nosso Trabalho</SectionLabel>
      <h2>{title || 'Case Nome do Projeto'}</h2>
      <p className="case-desc">
        {description || TEXT_LONG}
      </p>
      <div className="case-insights">
        {items.map((item, i) => (
          <div key={i} className="case-insight">
            <span className="case-insight-number">{String(i + 1).padStart(2, '0')}</span>
            <div className="case-insight-body">
              <p className="case-insight-title">{item.title}</p>
              <p className="case-insight-text">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const photos = (
    <div className="case-photos">
      <div className="case-photo-main">
        <img src={imgCase01} alt="Case 1" />
      </div>
      <div className="case-photo-row">
        <img src={imgCase02} alt="Case 2" />
        <img src={imgCase03} alt="Case 3" />
      </div>
      <div className="case-photo-single">
        <img src={imgCase04} alt="Case 4" />
      </div>
    </div>
  );

  return (
    <section className="case-section">
      <div className="container">
        <div className={`case-grid ${reverse ? 'case-grid--reverse' : ''}`}>
          {reverse ? (
            <>
              {photos}
              {content}
            </>
          ) : (
            <>
              {content}
              {photos}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
