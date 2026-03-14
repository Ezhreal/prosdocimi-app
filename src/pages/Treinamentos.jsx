import { Link } from 'react-router-dom';
import HeroBanner from '../components/HeroBanner';
import SectionLabel from '../components/SectionLabel';
import headerTraining from '../assets/images/header-training.jpg';
import imgCourse01 from '../assets/images/img-course01.jpg';
import imgCourse02 from '../assets/images/img-course02.jpg';
import iconHow from '../assets/images/icon-how-we-do.png';
import icon01 from '../assets/images/icon-courses01.png';
import icon02 from '../assets/images/icon-courses02.png';
import icon03 from '../assets/images/icon-courses03.png';
import icon04 from '../assets/images/icon-courses04.png';
import workshop01 from '../assets/images/workshop01.jpg';
import workshop02 from '../assets/images/workshop02.jpg';
import workshop03 from '../assets/images/workshop03.jpg';
import workshop04 from '../assets/images/workshop04.jpg';
import workshop05 from '../assets/images/workshop05.jpg';
import workshop06 from '../assets/images/workshop06.jpg';
import workshop07 from '../assets/images/workshop07.jpg';
import workshop08 from '../assets/images/workshop08.jpg';
import { TEXT_LONG, TEXT_SHORT } from '../constants/texts';
import './Treinamentos.css';

const courseTopics = [
  { icon: icon01, title: 'Norma de Desempenho - NBR 15575', text: "Prepare sua construtora para atender as exigências da norma de desempenho habitacional com segurança e eficiência." },
  { icon: icon02, title: 'Compliance e Antissuborno', text: "Entenda as exigências da ISO 37001 e ISO 37301 e fortaleça os mecanismos de integridade, transparência e governança da sua organização." },
  { icon: icon03, title: 'Sistemas de Gestão – SiAC/PBQP-H, ISO 9001, ISO 14001 e ISO 45001 e outros', text: "Atualização, implantação e melhoria dos sistemas de gestão, incluindo qualidade, gestão ambiental, saúde e segurança ocupacional, entre outros modelos de gestão" },
  { icon: icon04, title: 'Formação de Auditores e Coordenadores de Gestão', text: "Capacitação completa para auditores e gestores onde quer que você esteja." },
];

const demandSteps = [
  { title: 'Curso de Interpretação e Implantação do Novo SiAC/PBQP-H 2021 - 16 horas', text: "Venha conhecer as principais mudanças na nova versão do SiAC/PBQP-H. Esta nova versão de 14 de janeiro de 2021 traz importantes novidades no processo de qualificação de laboratórios de controle tecnológico.",button: "Acessar curso", link: "https://www.sympla.com.br/play/curso-de-interpretacao-e-implantacao-do-novo-siac-pbqp-h-2021-16-horas/1182789"},
  { title: 'Curso de Atualização do SiAC/PBQP-H 2021 - 08 horas', text: "Este curso, gravado de forma simples durante um treinamento ao vivo envolvendo auditores e empresas construtoras, traduz de forma simples, clara e objetiva todas as alterações do SiAC/PBQP-H." , button: "Acessar curso", link: "https://www.sympla.com.br/play/curso-de-atualizacao-do-siac-pbqp-h-2021-08-horas/1165401"}, ,
];

const workshops = [workshop01, workshop02, workshop03, workshop04, workshop05, workshop06, workshop07, workshop08];

export default function Treinamentos() {
  return (
    <>
      <HeroBanner
        sectionLabel="Serviços"
        title="Treinamentos"
        subtitle="Capacitação para resultados excepcionais"
        image={headerTraining}
        fullWidth
      />

      <section className="treinamentos-assuntos">
        <div className="container">
          <SectionLabel>Assuntos do Treinamento</SectionLabel>
          <h2>NO que você vai aprender</h2>
          <div className="treinamentos-grid-wrapper">
            <div className="treinamentos-grid-cross" />
            <div className="treinamentos-grid">
              {courseTopics.map((item, i) => (
                <div key={i} className="treinamentos-grid-item">
                  <img src={item.icon} alt=""  />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="treinamentos-demand">
        <div className="container">
          <SectionLabel className="treinamentos-demand-label">Cursos on Demand</SectionLabel>
          <h2>Aprenda no seu tempo</h2>
          <p className="treinamentos-demand-sub">Cursos gravados, disponíveis quando e onde você quiser - com a qualidade técnica que a Prosdocimi garante.</p>
          <div className="treinamentos-demand-grid">
            {demandSteps.map((step, i) => (
              <div key={i} className="treinamentos-demand-item">
                <img src={iconHow} alt=""  />
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                <br /><br />
                <a href={step.link} target='_blank' className="btn-outline-white">{step.button}</a>
              </div>
            ))}
          </div>

        </div>
      </section>

    {/*
<section className="treinamentos-online">
  <div className="treinamentos-split">
    <div className="treinamentos-split-img">
      <img src={imgCourse01} alt="Cursos Online" />
    </div>
    <div className="treinamentos-split-content">
      <SectionLabel>Treinamentos</SectionLabel>
      <h2>Cursos Online</h2>
      <p>{TEXT_LONG}</p>
      <p>{TEXT_LONG}</p>
      <Link to="/contato" className="btn-primary">Cta Botton</Link>
    </div>
  </div>
</section>
*/}

      <section className="treinamentos-company">
        <div className="treinamentos-split treinamentos-split-reverse">
          <div className="treinamentos-split-content">
            <SectionLabel>Treinamentos</SectionLabel>
            <h2>in Company</h2>
            <p>
            Levamos o treinamento até a sua empresa - presencial ou online - com conteúdo adaptado a realidade do seu time e aos desafios do seu setor.
            </p>
            <p>
            Ideal para equipes que precisam de capacitação específica em gestão, auditorias, normas técnicas ou formação de líderes e gestores.
            </p>
            <Link to="/contato" className="btn-primary">Solicitar proposta</Link>
          </div>
          <div className="treinamentos-split-img">
            <img src={imgCourse02} alt="in Company" />
          </div>
        </div>
      </section>

      <section className="treinamentos-galeria">
        <div className="container">
          <h2>Workshops, palestras e treinamentos</h2>
          <div className="treinamentos-workshops">
            <div className="workshop-col">
              <div className="workshop-item workshop-main">
                <img src={workshops[0]} alt="Workshop 1" />
              </div>
              <div className='workshop-photo-row'>
                <div className="workshop-item">
                  <img src={workshops[1]} alt="Workshop 2" />
                </div>
                <div className="workshop-item">
                  <img src={workshops[2]} alt="Workshop 3" />
                </div>
              </div>
           
              <div className="workshop-item workshop-single">
                <img src={workshops[3]} alt="Workshop 4" />
              </div>
            </div>

            <div className="workshop-col workshop-col-reverse">
              <div className="workshop-item workshop-single">
                <img src={workshops[4]} alt="Workshop 5" />
              </div>
              <div className='workshop-photo-row'>
                  <div className="workshop-item">
                    <img src={workshops[5]} alt="Workshop 6" />
                  </div>
                  <div className="workshop-item">
                    <img src={workshops[6]} alt="Workshop 7" />
                  </div>
              </div>
            
              <div className="workshop-item  workshop-main">
                <img src={workshops[7]} alt="Workshop 8" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
