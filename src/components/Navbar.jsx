import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Menu, X } from 'lucide-react';
import logo from '../assets/images/logo-prosdocimi.png';
import './Navbar.css';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/sobre', label: 'Sobre' },
  { path: '/consultoria', label: 'Consultoria' },
  { path: '/auditoria', label: 'Auditoria' },
  { path: '/treinamentos', label: 'Treinamentos' },
  { path: '/contato', label: 'Contato' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="navbar">
      <div className="navbar-inner container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Prosdocimi" height={36} />
        </Link>

        <nav className={`navbar-links ${mobileOpen ? 'open' : ''}`}>
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={location.pathname === path ? 'active' : ''}
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="navbar-right">
          <div className="navbar-social">
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
          <Link to="/contato" className="btn-primary navbar-cta">
            Marque sua Consultoria
          </Link>
        </div>

        <button
          type="button"
          className="navbar-toggle"
          aria-label="Menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
