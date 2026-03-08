import { Link } from 'react-router-dom';
import HeroBanner from '../components/HeroBanner';
import SectionLabel from '../components/SectionLabel';
import InstagramGrid from '../components/InstagramGrid';
import imgParallax from '../assets/images/img-parallax-background.jpg';
import citacaoBg from '../assets/images/citacao-bg-about.jpg';
import alexandre from '../assets/images/alexandre-placeholder-about.png';
import iconMission from '../assets/images/icon-mission.png';
import iconVision from '../assets/images/icon-vision.png';
import iconValues from '../assets/images/icon-values.png';
import iconHow from '../assets/images/icon-how-we-do.png';
import { TEXT_LONG, TEXT_SHORT } from '../constants/texts';
import './Sobre.css';

export default function Sobre() {
  return (
    <>
      <HeroBanner
        sectionLabel="Sobre"
        title="A Prosdocimi"
        subtitle={TEXT_SHORT}
        showLine
        fullWidth
      />

      <section className="sobre-apresentacao">
        <div className="container">
          <div className="sobre-apresentacao-grid">
            <div className="sobre-apresentacao-left">
              <h2>Nulla mus donec a quisque convallis</h2>
            </div>
            <div className="sobre-apresentacao-right">
              <p>
                {TEXT_LONG}
              </p>
              <p>
                {TEXT_LONG}
              </p>
        
              <Link to="/contato" className="sobre-link">Vamos trabalhar juntos →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="sobre-mvv">
        <div className="container">
          <div className="sobre-mvv-grid">
            <div className="sobre-mvv-item">
              <img src={iconMission} alt=""  />
              <h3>Missão</h3>
              <p>{TEXT_SHORT}</p>
            </div>
            <div className="sobre-mvv-item">
              <img src={iconVision} alt=""  />
              <h3>Visão</h3>
              <p>{TEXT_SHORT}</p>
            </div>
            <div className="sobre-mvv-item">
              <img src={iconValues} alt=""  />
              <h3>Valores</h3>
              <p>{TEXT_SHORT}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sobre-parallax" style={{ backgroundImage: `url(${imgParallax})` }} />

      <section className="sobre-o-que-fazemos">
        <div className="container">
          <div className="sobre-o-que-fazemos-grid">
            <div className="sobre-o-que-fazemos-label">
              <SectionLabel>O que fazemos</SectionLabel>
            </div>
            <div className="sobre-o-que-fazemos-content">
              <div className="sobre-cards">
                <div className="sobre-card sobre-card-teal">
                  <h3>Consultoria estratégica</h3>
                  <p>{TEXT_SHORT}</p>
                </div>
                <div className="sobre-card sobre-card-white">

                  <h3>Auditoria responsável</h3>
                  <p>{TEXT_SHORT}</p>
                </div>
                <div className="sobre-card sobre-card-teal">

                  <h3>Treinamento e Palestras</h3>
                  <p>{TEXT_SHORT}</p>
                </div>
              </div>
              <p className="sobre-cards-extra">{TEXT_LONG}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sobre-citacao-text"  style={{ backgroundImage: `url(${citacaoBg})` }}>
        <div className="container">
          <span className="sobre-citacao-quote">"</span>
          <p className="sobre-citacao-p">
            {TEXT_SHORT}
          </p>
        </div>
      </section>

      <section className="sobre-alexandre">
        <div className="container">
          <div className="sobre-alexandre-grid">
            <div className="sobre-alexandre-img-wrap">
              <img src={alexandre} alt="Alexandre Prosdocimi" className="sobre-alexandre-img" />
            </div>
            <div className="sobre-alexandre-content">
              <SectionLabel className="sobre-alexandre-label">Alexandre Prosdocimi</SectionLabel>
              <h2>Alexandre Prosdocimi</h2>
              <p>
                {TEXT_LONG}
              </p>
              <Link to="/contato" className="btn-outline-white">Cta botton</Link>
            </div>
          </div>
        </div>
      </section>

      <InstagramGrid />
    </>
  );
}
