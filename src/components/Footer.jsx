import { Link } from 'react-router-dom';
import { Instagram, Github, Linkedin } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";
import '../styles/Footer.css';

const Footer = () => {
  const dev = {
    name: "Lautaro Leal",
    github: "https://github.com/LautaroLeall",
    linkedin: "https://www.linkedin.com/in/lauldp/"
  };

  return (
    <footer className="footer relative mt-auto">
      <div className="footer-grid relative flex items-center justify-between">
        <div className="footer-brand">
          <h3 className="footer-section-heading relative mb-4">
            Enlaces Rápidos
          </h3>
          <ul className="footer-links flex flex-col gap-5 p-0 m-0">
            <li>
              <Link to="/paquetes" className="footer-link">Paquetes</Link>
            </li>
            <li>
              <Link to="/complementos" className="footer-link">Complementos</Link>
            </li>
            <li>
              <Link to="/contratacion" className="footer-link">Contratación</Link>
            </li>
          </ul>
        </div>

        <div className="footer-links-col">
          <Link to="/" className="footer-logo-link inline-block">
            <img src="./logo_MyM.png" alt="Logo MyM" className="footer-logo-img" />
          </Link>
        </div>

        <div className="footer-contact-col">
          <div className="footer-social flex gap-6">
            <a
              href={`https://wa.me/5493814430041?text=${encodeURIComponent("Hola MyM, visito su web y quiero pedir un presupuesto.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-btn footer-whatsapp-btn w-full justify-center p-1"
            >
              <FaWhatsapp size={33} />
            </a>
            <a
              href="https://www.instagram.com/mymdecoracionparafiestas/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-btn footer-instagram-btn w-full justify-center p-1"
            >
              <Instagram size={33} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom relative flex flex-col items-center justify-center gap-4">
        <div className="footer-bottom-copy">
          <p>© 2026 MyM Decoraciones.</p>
        </div>

        <div className="footer-dev flex items-center gap-2">
          <span className="footer-dev-text">Desarrollado por</span>
          <span className="footer-dev-name">{dev.name}</span>
          <div className="footer-dev-links flex items-center gap-2">
            <a href={dev.github} target="_blank" rel="noopener noreferrer" aria-label={`GitHub de ${dev.name}`}>
              <Github size={16} />
            </a>
            <a href={dev.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn de ${dev.name}`}>
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
