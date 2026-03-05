import SectionLabel from './SectionLabel';
import iconHow from '../assets/images/icon-how-we-do.png';
import lineBg from '../assets/images/line-background-blue.png';
import './ComoFazemos.css';

const steps = [
  { title: 'Faucibus', text: 'Volutpat commodo at dictum amet tincidunt facilisis id lorem eu vitae cursus auctor laoreet.' },
  { title: 'Faucibus', text: 'Volutpat commodo at dictum amet tincidunt facilisis id lorem eu vitae cursus auctor laoreet.' },
  { title: 'Faucibus', text: 'Volutpat commodo at dictum amet tincidunt facilisis id lorem eu vitae cursus auctor laoreet.' },
];

export default function ComoFazemos({ subtitle = 'Sollicitudin eros nulla mus donec quisque convallis integer condimentum volutpat.' }) {
  return (
    <section className="como-fazemos">
      <img src={lineBg} alt="" className="como-fazemos-line" aria-hidden />
      <div className="container">
        <SectionLabel className="como-fazemos-label">Como Fazemos</SectionLabel>
        <h2 className="como-fazemos-title">Como Fazemos</h2>
        <p className="como-fazemos-subtitle">{subtitle}</p>
        <div className="como-fazemos-grid">
          {steps.map((step, i) => (
            <div key={i} className="como-fazemos-item">
              <img src={iconHow} alt="" width={32} height={32} />
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
