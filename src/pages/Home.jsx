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
import './Home.css';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="home-hero">
        <div className="container home-hero-inner">
          <SectionLabel>Bem vindo a Prosdocimi</SectionLabel>
          <h1>Nulla mus donec a quisque convallis integer</h1>
          <p className="home-hero-p">
            Sollicitudin eros nulla mus donec a quisque convallis integer condimentum volutpat commodo at dictum amet tincidunt.
          </p>
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
            <div className="home-services-left">
              <SectionLabel>O que fazemos</SectionLabel>
              <h2>O que fazemos</h2>
              <p>
                Volutpat commodo at dictum amet tincidunt facilisis id lorem eu vitae cursus auctor laoreet fermentum adipiscing.
              </p>
            </div>
            <div className="home-services-cards">
              <div className="home-service-card">
                <img src={iconConsulting} alt="" width={32} height={32} />
                <h3>Consultoria</h3>
                <p>Volutpat commodo at dictum amet tincidunt facilisis id lorem eu vitae cursus.</p>
                <Link to="/consultoria" className="btn-outline">Saber mais</Link>
              </div>
              <div className="home-service-card">
                <img src={iconAudit} alt="" width={32} height={32} />
                <h3>Auditorias</h3>
                <p>Volutpat commodo at dictum amet tincidunt facilisis id lorem eu vitae cursus.</p>
                <Link to="/auditoria" className="btn-outline">Saber mais</Link>
              </div>
              <div className="home-service-card">
                <img src={iconTraining} alt="" width={32} height={32} />
                <h3>Treinamentos</h3>
                <p>Volutpat commodo at dictum amet tincidunt facilisis id lorem eu vitae cursus.</p>
                <Link to="/treinamentos" className="btn-outline">Saber mais</Link>
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
            <div className="home-grupo-left">
              <SectionLabel>O Grupo Prosdocimi</SectionLabel>
              <h2>O Grupo Prosdocimi</h2>
              <p>
                Volutpat commodo at dictum amet tincidunt facilisis id lorem eu vitae cursus auctor laoreet fermentum adipiscing. Consequat enim mollis mauris vulputate phasellus neque.
              </p>
              <Link to="/sobre" className="btn-primary">Saiba Mais</Link>
            </div>
            <div className="home-grupo-right" />
          </div>
        </div>
      </section>

      {/* Sobre Nós */}
      <section className="home-sobre">
        <div className="container">
          <div className="home-sobre-grid">
            <div className="home-sobre-content">
              <img src={lineBg} alt="" className="home-sobre-line" aria-hidden />
              <h2>Sobre nós</h2>
              <p>
                Volutpat commodo at dictum amet tincidunt facilisis id lorem eu vitae cursus auctor laoreet fermentum adipiscing.
              </p>
              <div className="home-sobre-mvv">
                <p><strong>Missão.</strong> Consequat enim mollis mauris vulputate phasellus neque, eros turpis et eu adipiscing id tempor.</p>
                <p><strong>Visão.</strong> Consequat enim mollis mauris vulputate phasellus neque, eros turpis et eu adipiscing id tempor.</p>
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
          <h2>Nossos Clientes e Parceiros</h2>
          <p className="home-clientes-desc">
            Volutpat commodo at dictum amet tincidunt facilisis id lorem eu vitae cursus auctor laoreet.
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
