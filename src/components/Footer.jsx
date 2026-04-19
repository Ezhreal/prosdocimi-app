import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import logo from '../assets/images/logo-prosdocimi.png';
import './Footer.css';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/sobre', label: 'Sobre' },
  { path: '/consultoria', label: 'Consultoria' },
  { path: '/auditoria', label: 'Auditoria' },
  { path: '/treinamentos', label: 'Treinamentos' },
  { path: '/contato', label: 'Contato' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <Link to="/" className="footer-logo">
            <img src={logo} alt="Prosdocimi" height={32} />
          </Link>
          <nav className="footer-links">
            {navLinks.map(({ path, label }) => (
              <Link key={path} to={path}>
                {label}
              </Link>
            ))}
          </nav>
          <div className="footer-social">
            <a href="https://www.facebook.com/prosdocimiconsultoria" target="_blank" rel="noreferrer" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="https://www.instagram.com/prosdocimiconsultoria" target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="https://www.linkedin.com/company/prosdocimiconsultoria/?viewAsMember=true" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-legal">
            <Link to="/termos">Termos de uso</Link>
            <span className="footer-legal-sep" aria-hidden>
              |
            </span>
            <Link to="/privacidade">Política de privacidade</Link>
          </p>
          <p>©2025 - Prosdocimi | Todos direitos reservados</p>
        </div>
      </div>
    </footer>
  );
}
