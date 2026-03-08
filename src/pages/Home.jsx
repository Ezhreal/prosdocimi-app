import { Link } from 'react-router-dom';
import SectionLabel from '../components/SectionLabel';
import TestimonialBlock from '../components/TestimonialBlock';
import InstagramGrid from '../components/InstagramGrid';
import imgParallax from '../assets/images/img-parallax-background.jpg';
import douglasImg from '../assets/images/douglas-lopez-WFItslWB89M-unsplash 1.png';
import homeDetailAbout from '../assets/images/home-detail-about.jpg';
import lineBg from '../assets/images/line-background-blue.png';
import iconConsulting from '../assets/images/home-icon-consulting.png';
import iconAudit from '../assets/images/home-icon-audit.png';
import iconTraining from '../assets/images/home-icon-treining.png';
import { TEXT_LONG, TEXT_SHORT } from '../constants/texts';
import './Home.css';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        className="home-hero"
        style={{
          backgroundImage: `url(${lineBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="container home-hero-inner">
          <SectionLabel>Bem vindo a Prosdocimi</SectionLabel>
          <h1>Nulla mus donec a quisque convallis integer</h1>
     
          <div className="home-hero-btns">
            <Link to="/consultoria" className="btn-outline">Descobrir nossos serviços</Link>
            <Link to="/contato" className="btn-primary">Marque uma Consultoria</Link>
          </div>
        </div>
      </section>

      {/* Parallax 1 */}
      <section className="home-parallax" style={{ backgroundImage: `url(${imgParallax})` }} />

      {/* O Que Fazemos */}
      <section className="home-services">
        <div className="container">
          <div className="home-services-grid">
            <div className="home-services-label">
              <SectionLabel>O que fazemos</SectionLabel>
            </div>
            <div className="home-services-content">
              <h2>Nulla mus donec a quisque convallis integer</h2>
              <p>
                {TEXT_SHORT}
              </p>
              <div className="home-services-cards">
                <div className="home-service-card">
                  <img src={iconConsulting} alt=""  />
                  <h3>Consultoria</h3>
                  <p>{TEXT_SHORT}</p>
                  <Link to="/consultoria" className="btn-outline">Saber mais</Link>
                </div>
                <div className="home-service-card">
                  <img src={iconAudit} alt=""  />
                  <h3>Auditorias</h3>
                  <p>{TEXT_SHORT}</p>
                  <Link to="/auditoria" className="btn-outline">Saber mais</Link>
                </div>
                <div className="home-service-card">
                  <img src={iconTraining} alt=""  />
                  <h3>Treinamentos</h3>
                  <p>{TEXT_SHORT}</p>
                  <Link to="/treinamentos" className="btn-outline">Saber mais</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax 2 */}
      <section className="home-parallax" style={{ backgroundImage: `url(${douglasImg})` }} />

      {/* O Grupo Prosdocimi */}
      <section className="home-grupo">
        <div className="container">
          <div className="home-grupo-grid">
            <div className="home-grupo-label">
              <SectionLabel>O Grupo Prosdocimi</SectionLabel>
            </div>
            <div className="home-grupo-content">
              <h2>Nulla mus donec a quisque convallis integer</h2>
              <p>
                {TEXT_LONG}
              </p>
              <Link to="/sobre" className="btn-primary">Saiba Mais</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Nós */}
      <section className="home-sobre">
        <div className="container">
          <div className="home-sobre-grid">
            <div className="home-sobre-content">
              <img src={lineBg} alt="" className="home-sobre-line" aria-hidden />
              <h2>Nulla mus donec a quisque convallis integer</h2>
              <p>
                {TEXT_LONG}
              </p>
              <div className="home-sobre-mvv">
                <p><strong>Missão.</strong> {TEXT_SHORT}</p>
                <p><strong>Visão.</strong> {TEXT_SHORT}</p>
              </div>
              <Link to="/sobre" className="btn-outline-white">Mais botton</Link>
            </div>
            <div className="home-sobre-img">
              <img src={homeDetailAbout} alt="Sobre nós" />
            </div>
          </div>
        </div>
      </section>

      {/* Clientes e Parceiros - carrossel simplificado */}
      <section className="home-clientes">
        <div className="container">
          <SectionLabel>Nossos Clientes e Parceiros</SectionLabel>
          <h2>Nulla mus donec a quisque convallis integer</h2>
          <p className="home-clientes-desc">
            {TEXT_SHORT}
          </p>
          <div className="home-clientes-logos">
            <p className="home-clientes-placeholder">Logos de parceiros (carrossel)</p>
          </div>
        </div>
      </section>

      <TestimonialBlock />
      <InstagramGrid />
    </>
  );
}
