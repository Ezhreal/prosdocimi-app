import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/images/logo-prosdocimi.png';
import './Navbar.css';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/sobre', label: 'Sobre' },
  {
    label: 'Serviços',
    dropdown: [
      { path: '/consultoria', label: 'Consultoria' },
      { path: '/treinamentos', label: 'Treinamentos' },
      { path: '/auditoria', label: 'Auditoria' },
    ],
  },
  { path: '/contato', label: 'Contato' },
];

const servicePaths = ['/consultoria', '/treinamentos', '/auditoria'];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const isServiceActive = servicePaths.includes(location.pathname);

  return (
    <header className="navbar">
      <div className="navbar-inner container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Prosdocimi" height={36} />
        </Link>

        <nav className={`navbar-links ${mobileOpen ? 'open' : ''}`}>
          {navLinks.map((item) => {
            if (item.dropdown) {
              return (
                <div
                  key={item.label}
                  className={`navbar-dropdown ${servicesOpen ? 'open' : ''}`}
                  onMouseEnter={() => !mobileOpen && setServicesOpen(true)}
                  onMouseLeave={() => !mobileOpen && setServicesOpen(false)}
                >
                  <button
                    type="button"
                    className={`navbar-dropdown-trigger ${isServiceActive ? 'active' : ''}`}
                    onClick={() => mobileOpen && setServicesOpen(!servicesOpen)}
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <ChevronDown size={16} className="navbar-dropdown-icon" />
                  </button>
                  <ul className="navbar-dropdown-menu">
                    {item.dropdown.map(({ path, label }) => (
                      <li key={path}>
                        <Link
                          to={path}
                          className={location.pathname === path ? 'active' : ''}
                          onClick={() => {
                            setMobileOpen(false);
                            setServicesOpen(false);
                          }}
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }
            return (
              <Link
                key={item.path}
                to={item.path}
                className={location.pathname === item.path ? 'active' : ''}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
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
            Fale conosco
          </Link>
        </div>

        <button
          type="button"
          className="navbar-toggle"
          aria-label="Menu"
          onClick={() => {
          setMobileOpen(!mobileOpen);
          if (mobileOpen) setServicesOpen(false);
        }}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
