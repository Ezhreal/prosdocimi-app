import './LogoCarousel.css';
import logo3t from '../assets/images/logomarca-3t.jpg';
import logoSamid from '../assets/images/logomarca-samid.jpg';
import logoMca from '../assets/images/logomarca-mca.jpg';
import logoSudoeste from '../assets/images/logomarca-sudoeste.jpg';
import logoLog from '../assets/images/logomarca-log.jpg';
import logoFormula from '../assets/images/logomarca-formula.jpg';
import logoEmccamp from '../assets/images/logomarca-emccamp.jpg';
import logoSas from '../assets/images/logomarca-sas.jpg';

const LOGOS = [
  { src: logo3t, alt: '3T' },
  { src: logoSamid, alt: 'Samid' },
  { src: logoMca, alt: 'MCA' },
  { src: logoSudoeste, alt: 'Sudoeste' },
  { src: logoLog, alt: 'LOG Commercial Properties' },
  { src: logoFormula, alt: 'Fórmula' },
  { src: logoEmccamp, alt: 'Emccamp' },
  { src: logoSas, alt: 'Grupo SAS' },
];

export default function LogoCarousel() {
  return (
    <div className="logo-carousel">
      <div className="logo-carousel-track">
        {[...LOGOS, ...LOGOS].map((logo, index) => (
          <div className="logo-carousel-item" key={index}>
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}

