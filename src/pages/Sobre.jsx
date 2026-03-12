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
        subtitle="Mais de 20 anos transformando gestão em resultados."
        showLine
        fullWidth
        className="header-about-line"
      />

      <section className="sobre-apresentacao">
        <div className="container">
          <div className="sobre-apresentacao-grid">
            <div className="sobre-apresentacao-left">
              <h2>Uma trajetória construída com propósito</h2>
            </div>
            <div className="sobre-apresentacao-right">
              <p>
              Fundada em 14 de outubro de 2002 em Belo Horizonte, a Prosdocimi Consultoria nasceu com um proposito claro: entregar qualidade de verdade. Ao longo de mais de duas décadas, crescemos atuando em construção civil, incorporação imobiliária, projetos de instalações complementares, incluindo infraestrutura e em consultoria, auditoria e treinamentos em sistemas de gestão.
              </p>
              <p>
              Nosso trabalho já impactou dezenas de empresas em todo o Brasil - em setores como construção civil, transportes, indústria, mineração e prestação de serviços. Somos comprometidos com a excelência técnica em tudo o que fazemos.
              </p>
        
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
              <p>Proporcionar soluções inteligentes em consultoria, auditoria e treinamentos que garantam a maximização dos resultados e a alta performance dos nossos clientes.</p>
            </div>
            <div className="sobre-mvv-item">
              <img src={iconVision} alt=""  />
              <h3>Visão</h3>
              <p>Ser reconhecida como referência nacional em consultoria, auditoria e treinamentos em gestão, pela excelência técnica e pelo impacto real nos resultados dos nossos clientes.</p>
            </div>
            <div className="sobre-mvv-item">
              <img src={iconValues} alt=""  />
              <h3>Valores</h3>
              <p>Profissionalismo, dedicação e respeito<br></br>Transparência, honestidade e integridade<br></br>Comprometimento com os resultados e com as pessoas.
</p>
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
                  <p>Implantação e melhoria de sistemas de gestão, processos e projetos com foco em resultados reais.</p>
                </div>
                <div className="sobre-card sobre-card-white">

                  <h3>Auditoria responsável</h3>
                  <p>Avaliações imparciais que identificam desvios reais e geram planos de melhoria concretos.</p>
                </div>
                <div className="sobre-card sobre-card-teal">

                  <h3>Treinamento e Palestras</h3>
                  <p>Capacitando equipes em todo o Brasil, de forma presencial, online ou “in company”</p>
                </div>
              </div>
              <p className="sobre-cards-extra">A Prosdocimi atua para elevar o nível de controle e performance das empresas, conectando auditorias técnicas com treinamentos eficazes e consultoria estratégica.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sobre-citacao-text"  style={{ backgroundImage: `url(${citacaoBg})` }}>
        <div className="container">
          <span className="sobre-citacao-quote">"</span>
          <p className="sobre-citacao-p">
          Acreditamos que, através da gestão comprometida, podemos alcançar resultados cada vez melhores, aumentar a produtividade e contribuir para a sustentabilidade dos nossos parceiros e clientes.  
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
              <SectionLabel className="sobre-alexandre-label">FUNDADOR</SectionLabel>
              <h2>Alexandre Prosdocimi</h2>
              <p>
              Engenheiro civil pela UFMG e fundador da Prosdocimi Consultoria e Prosdocimi Soluções.               Alexandre Prosdocimi atua há mais de 20 anos ajudando empresas de diferentes portes e segmentos a organizarem processos, fortalecerem a governança e alcançarem melhores resultados. Especialista em Gestão da Qualidade e em Inspeção de Projetos e Obras de Infraestrutura, já apoiou mais de 150 empresas em todo o Brasil com consultorias, auditorias e treinamentos voltados à prática, viabilidade e impacto real. Mineiro, pai de dois filhos, apaixonado por viagens, leitura, esportes e bons encontros em família, conecta sua experiência técnica a valores como transparência, respeito e compromisso genuíno com as pessoas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <InstagramGrid />
    </>
  );
}
