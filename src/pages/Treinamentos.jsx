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
  { icon: icon01, title: 'Insights Concepts', text: TEXT_SHORT },
  { icon: icon02, title: 'Insights Concepts', text: TEXT_SHORT },
  { icon: icon03, title: 'Insights Concepts', text: TEXT_SHORT },
  { icon: icon04, title: 'Insights Concepts', text: TEXT_SHORT },
];

const demandSteps = [
  { title: 'Insights Concepts', text: TEXT_SHORT },
  { title: 'Insights Concepts', text: TEXT_SHORT },
  { title: 'Insights Concepts', text: TEXT_SHORT },
];

const workshops = [workshop01, workshop02, workshop03, workshop04, workshop05, workshop06, workshop07, workshop08];

export default function Treinamentos() {
  return (
    <>
      <HeroBanner
        sectionLabel="Serviços"
        title="Treinamentos"
        subtitle={TEXT_SHORT}
        image={headerTraining}
      />

      <section className="treinamentos-assuntos">
        <div className="container">
          <SectionLabel>Assuntos do Treinamento</SectionLabel>
          <h2>Assuntos do Treinamento</h2>
          <div className="treinamentos-grid-wrapper">
            <div className="treinamentos-grid-cross" />
            <div className="treinamentos-grid">
              {courseTopics.map((item, i) => (
                <div key={i} className="treinamentos-grid-item">
                  <img src={item.icon} alt="" width={32} height={32} />
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
          <h2>Cursos on Demand</h2>
          <p className="treinamentos-demand-sub">{TEXT_SHORT}</p>
          <div className="treinamentos-demand-grid">
            {demandSteps.map((step, i) => (
              <div key={i} className="treinamentos-demand-item">
                <img src={iconHow} alt="" width={32} height={32} />
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
          <div className="treinamentos-demand-cta">
            <a href="/contato" className="btn-outline-white">CTA Button to Plataforma</a>
          </div>
        </div>
      </section>

      <section className="treinamentos-online">
        <div className="treinamentos-split">
          <div className="treinamentos-split-img">
            <img src={imgCourse01} alt="Cursos Online" />
          </div>
          <div className="treinamentos-split-content">
            <SectionLabel>Treinamentos</SectionLabel>
            <h2>Cursos Online</h2>
            <p>
              {TEXT_LONG}
            </p>
            <p>
              {TEXT_LONG}
            </p>
            <Link to="/contato" className="btn-primary">Cta Botton</Link>
          </div>
        </div>
      </section>

      <section className="treinamentos-company">
        <div className="treinamentos-split treinamentos-split-reverse">
          <div className="treinamentos-split-content">
            <SectionLabel>Treinamentos</SectionLabel>
            <h2>in Company</h2>
            <p>
              {TEXT_LONG}
            </p>
            <p>
              {TEXT_LONG}
            </p>
            <Link to="/contato" className="btn-primary">Cta Botton</Link>
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
            <div className="workshop-item workshop-large">
              <img src={workshops[0]} alt="Workshop 1" />
            </div>
            <div className="workshop-item"><img src={workshops[1]} alt="Workshop 2" /></div>
            <div className="workshop-item"><img src={workshops[2]} alt="Workshop 3" /></div>
            <div className="workshop-item"><img src={workshops[3]} alt="Workshop 4" /></div>
            <div className="workshop-item"><img src={workshops[4]} alt="Workshop 5" /></div>
            <div className="workshop-item"><img src={workshops[5]} alt="Workshop 6" /></div>
            <div className="workshop-item"><img src={workshops[6]} alt="Workshop 7" /></div>
            <div className="workshop-item"><img src={workshops[7]} alt="Workshop 8" /></div>
          </div>
        </div>
      </section>
    </>
  );
}
