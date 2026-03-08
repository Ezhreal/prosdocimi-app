import SectionLabel from './SectionLabel';
import iconHow from '../assets/images/icon-how-we-do.png';
import lineBg from '../assets/images/line-background-blue.png';
import { TEXT_SHORT } from '../constants/texts';
import './ComoFazemos.css';

const steps = [
  { title: 'Faucibus', text: TEXT_SHORT },
  { title: 'Faucibus', text: TEXT_SHORT },
  { title: 'Faucibus', text: TEXT_SHORT },
];

export default function ComoFazemos({ subtitle }) {
  const sub = subtitle ?? TEXT_SHORT;
  return (
    <section className="como-fazemos">
      <img src={lineBg} alt="" className="como-fazemos-line" aria-hidden />
      <div className="container">
        <SectionLabel className="como-fazemos-label">Como Fazemos</SectionLabel>
        <h2 className="como-fazemos-title">Como Fazemos</h2>
        <p className="como-fazemos-subtitle">{sub}</p>
        <div className="como-fazemos-grid">
          {steps.map((step, i) => (
            <div key={i} className="como-fazemos-item">
              <img src={iconHow} alt=""  />
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
        <div className="como-fazemos-cta">
          <a href="/contato" className="btn-outline-white">CTA Button</a>
        </div>
      </div>
    </section>
  );
}
