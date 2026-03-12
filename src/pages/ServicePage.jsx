import { Link } from 'react-router-dom';
import HeroBanner from '../components/HeroBanner';
import SectionLabel from '../components/SectionLabel';
import ComoFazemos from '../components/ComoFazemos';
import CaseSection from '../components/CaseSection';
import TestimonialBlock from '../components/TestimonialBlock';
import headerServices from '../assets/images/header-services.jpg';
import casesPortfolio from '../assets/images/cases-portfolio.png';
import lineBg from '../assets/images/line-background-blue.png';
import { TEXT_LONG, TEXT_SHORT } from '../constants/texts';
import './ServicePage.css';

export default function ServicePage({ heroTitle, sectionLabel = 'Serviços', caseLayout }) {
  let cases = caseLayout;

  if (!cases) {
    if (heroTitle === 'Consultorias') {
      cases = [false, true, false];
    } else if (heroTitle === 'Auditorias') {
      cases = [false, true];
    } else {
      cases = [false];
    }
  }

  return (
    <>
      <HeroBanner
        sectionLabel={sectionLabel}
        title={heroTitle}
        subtitle={TEXT_SHORT}
        image={headerServices}
        fullWidth
      />

      <section className="service-desc">
        <div className="container">
          <div className="service-desc-grid-wrap">
            <div className="service-desc-line-col">
              <div className="service-desc-line" />
            </div>
            <div className="service-desc-content">
              <h2>Nulla mus donec a quisque convallis integer</h2>
              <div className="service-desc-grid">
                <p>
                  {TEXT_LONG}
                </p>
                <p>
                  {TEXT_LONG}
                </p>
              </div>
              <Link to="/contato" className="service-desc-link">Vamos trabalhar juntos →</Link>
            </div>
          </div>
        </div>
      </section>

      <ComoFazemos />

      {cases.map((reverse, index) => (
        <CaseSection key={index} reverse={reverse} />
      ))}

      <section className="service-testimonial">
        <TestimonialBlock />
      </section>

      <section
        className="service-portfolio"
        style={{
          backgroundImage: `url(${lineBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="container">
          <div className="service-portfolio-grid">
            <div className="service-portfolio-content">
              <SectionLabel>Portfólio</SectionLabel>
              <h2>Nulla mus donec a quisque convallis</h2>
              <p>
                {TEXT_LONG}
              </p>
              <Link to="/contato" className="btn-primary">Btn de Download</Link>
            </div>
            <div className="service-portfolio-img">
              <img src={casesPortfolio} alt="Portfólio" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
