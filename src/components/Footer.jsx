// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Instagram, Github, Linkedin, MessageCircle } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
  const dev = {
    name: "Lautaro Leal",
    github: "https://github.com/LautaroLeall",
    linkedin: "https://www.linkedin.com/in/lauldp/"
  };

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link to="/" className="footer-logo-link">
            <img src="./logo_MyM.png" alt="Logo MyM" className="footer-logo-img" />
          </Link>
          <p className="footer-about">
            Creando espacios fabulosos que quedarán siempre en tu memoria.
          </p>
        </div>

        <div className="footer-links-col">
          <h3 className="footer-section-heading">Enlaces Rápidos</h3>
          <ul className="footer-links">
            <li><Link to="/paquetes" className="footer-link">Paquetes</Link></li>
            <li><Link to="/complementos" className="footer-link">Complementos</Link></li>
            <li><Link to="/contratacion" className="footer-link">Contratación</Link></li>
          </ul>
        </div>

        <div className="footer-contact-col">
          <h3 className="footer-section-heading">Contacto</h3>
          <p className="footer-contact-item">
            <MapPin size={18} className="footer-icon-mint" /> Yerba Buena, Tucumán
          </p>
          <p className="footer-contact-item">
            <Phone size={18} className="footer-icon-mint" /> +54 9 3814 43-0041
          </p>

          <div className="footer-social">
            <a
              href={`https://wa.me/5493814430041?text=${encodeURIComponent("Hola MyM, visito su web y quiero pedir un presupuesto.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-whatsapp-btn w-full justify-center py-2.5 text-sm"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
            <a
              href="https://www.instagram.com/mymdecoracionparafiestas/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-instagram-btn w-full py-2.5 text-sm"
            >
              <Instagram size={18} /> Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-copy">
          <p>© 2026 MyM Decoraciones. Todos los derechos reservados.</p>
        </div>

        <div className="footer-dev">
          <span className="footer-dev-text">Desarrollado por</span>
          <span className="footer-dev-name">{dev.name}</span>
          <div className="footer-dev-links">
            <a href={dev.github} target="_blank" rel="noopener noreferrer" aria-label={`GitHub de ${dev.name}`}>
              <Github size={15} />
            </a>
            <a href={dev.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn de ${dev.name}`}>
              <Linkedin size={15} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
