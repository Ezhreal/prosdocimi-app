import { Link } from 'react-router-dom';
import SectionLabel from '../components/SectionLabel';
import TestimonialBlock from '../components/TestimonialBlock';
import LogoCarousel from '../components/LogoCarousel';
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
          <SectionLabel>Bem-vindo à Prosdocimi</SectionLabel>
          <h1>Gestão de verdade. Resultados que você vê.</h1>
     
          <div className="home-hero-btns">
            <Link to="/consultoria" className="btn-outline">Conheça nossos serviços</Link>
            <Link to="/contato" className="btn-primary">Solicite uma proposta</Link>
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
              <h2>Soluções de gestão focadas em alta performance e resultados reais. </h2>
              <p>
              Da consultoria ao treinamento, apoiamos sua empresa em cada etapa da jornada para uma gestão mais eficiente, certificada e sustentável.
              </p>
              <div className="home-services-cards">
                <div className="home-service-card">
                  <img src={iconConsulting} alt=""  />
                  <h3>Consultoria</h3>
                  <p>Gestão que transforma - Inteligência em consultoria para impulsionar resultados</p>
                  <Link to="/consultoria" className="btn-primary">Saber mais</Link>
                </div>
                <div className="home-service-card">
                  <img src={iconAudit} alt=""  />
                  <h3>Auditorias</h3>
                  <p>Avaliações imparciais. Resultados reais.</p>
                  <Link to="/auditoria" className="btn-primary">Saber mais</Link>
                </div>
                <div className="home-service-card">
                  <img src={iconTraining} alt=""  />
                  <h3>Treinamentos</h3>
                  <p>Capacitação estratégica para quem busca liderar o mercado.</p>
                  <Link to="/treinamentos" className="btn-primary">Saber mais</Link>
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
              <h2>Mais de 20 anos construindo qualidade</h2>
              <p>
              A Prosdocimi atua como uma parceira estratégica para empresas que buscam aprimorar seus processos internos, garantir a conformidade e aumentar a eficiência operacional. Seus principais objetivos envolvem fornecer inteligência em auditoria e consultoria para impulsionar resultados e capacitação individual ou para equipes focadas na excelência.
              </p>
              <Link to="/sobre" className="btn-primary">Conheça nossa história</Link>
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
              <h2>Quem somos</h2>
              <p className="home-sobre-intro">
                A Prosdocimi atua em consultoria, auditoria e treinamentos em gestão, ajudando organizações a alcançar melhores resultados com agilidade e excelência. 
              </p>
              <div className="home-sobre-mvv">
                <p><strong>Missão.</strong><br />Incorporar, projetar, construir e propor soluções com o melhor custo-benefício - com agilidade, respeito e qualidade - em busca da satisfação de cada cliente.</p>
                <p><strong>Visão.</strong><br />Ser reconhecida como referencia nacional em consultoria, auditoria e treinamentos em gestão, pela excelência técnica e pelo impacto real nos resultados.</p>
              </div>
              <Link to="/sobre" className="btn-outline-white">Mais sobre nós</Link>
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
          <h2>Empresas que confiam na Prosdocimi</h2>
          <p className="home-clientes-desc">
          Ao longo de mais de duas décadas, construímos parcerias sólidas com empresas dos mais diversos setores em todo o Brasil.
          </p>
          <div className="home-clientes-logos">
            <LogoCarousel />
          </div>
        </div>
      </section>

      <TestimonialBlock />
      <InstagramGrid />
    </>
  );
}
