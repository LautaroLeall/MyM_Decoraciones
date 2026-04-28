// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Instagram, Github, Linkedin, Sparkles } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";

import '../styles/Footer.css';

const Footer = () => {
  const wpUrl = `https://wa.me/5493814430041?text=${encodeURIComponent("¡Hola MyM! ✨ Vengo de la web y quiero consultar por una decoración.")}`;

  const dev = {
    name: "Lautaro Leal",
    github: "https://github.com/LautaroLeall",
    linkedin: "https://www.linkedin.com/in/lauldp/"
  };

  return (
    <footer className="footer-section mt-auto relative">
      <div className="footer-container relative mx-auto my-0">
        <div className="footer-main-grid grid gap-15 mb-10">

          {/* Column 1: Brand */}
          <div className="footer-brand-col">
            <Link to="/" className="footer-logo-link inline-block">
              <img src="/logo-MyM.png" alt="MyM Decoraciones" className="footer-logo-img p-1" />
            </Link>
          </div>

          {/* Column 2: Links */}
          <div className="footer-links-col">
            <h4 className="footer-heading mb-4">
              Navegación
            </h4>
            <ul className="footer-nav-list flex flex-col gap-5 p-0 m-0">
              <li>
                <Link to="/paquetes" className="footer-nav-link inline-flex items-center">
                  Propuestas 2026
                </Link>
              </li>
              <li>
                <Link to="/complementos" className="footer-nav-link inline-flex items-center">
                  Complementos Extras
                </Link>
              </li>
              <li>
                <Link to="/contratacion" className="footer-nav-link inline-flex items-center">
                  Proceso de Contratación
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="footer-contact-col">
            <h4 className="footer-heading mb-4">
              Conectemos
            </h4>
            <div className="footer-social-wrapper flex gap-4">
              <motion.a
                whileTap={{ scale: 0.95 }}
                href="https://www.instagram.com/mymdecoracionparafiestas/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                whileTap={{ scale: 0.95 }}
                href={wpUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn flex items-center justify-center"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={20} />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom flex flex-col items-center justify-between gap-6 pt-8">
          <span className="footer-copyright">
            © 2026 MyM Decoraciones. Todos los derechos reservados.
          </span>
          <div className="footer-dev-col flex items-center gap-2">
            <span className="footer-dev-label">Desarrollado por</span>
            <span className="footer-dev-name">{dev.name}</span>
            <div className="footer-dev-socials flex items-center gap-3 pl-4 ml-2">
              <a href={dev.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={15} />
              </a>
              <a href={dev.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;