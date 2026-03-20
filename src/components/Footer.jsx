import React from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, Phone, Instagram } from 'lucide-react';
import Logo from './Logo';
import WhatsAppBtn from './WhatsAppBtn';
import '../styles/Footer.css';

const Footer = ({ navigate }) => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-logo-section">
            <Logo />
            <div>
              <h2 className="footer-logo-title">MyM</h2>
              <p className="footer-logo-subtitle">Decoración</p>
            </div>
          </div>
          <p className="footer-about">
            Amamos lo que hacemos. Somos un equipo preparado, organizado y comprometido con cada proyecto para crear espacios fabulosos que quedarán siempre en tu memoria.
          </p>
        </div>
        <div>
          <h3 className="footer-section-heading">
            <Star size={16} className="footer-icon-gold" /> Enlaces Rápidos
          </h3>
          <ul className="footer-links">
            <li><button onClick={() => navigate('paquetes')} className="footer-link">Ver Paquetes</button></li>
            <li><button onClick={() => navigate('complementos')} className="footer-link">Complementos Extras</button></li>
            <li><button onClick={() => navigate('contratacion')} className="footer-link">Términos y Condiciones</button></li>
          </ul>
        </div>
        <div>
          <h3 className="footer-section-heading">
            <MapPin size={16} className="footer-icon-gold" /> Contacto & Ubicación
          </h3>
          <p className="footer-contact-item">
            <MapPin size={18} className="footer-icon-gold" /> Yerba Buena, Tucumán, Argentina
          </p>
          <p className="footer-contact-item footer-contact-phone">
            <Phone size={18} className="footer-icon-gold" /> +54 9 3814 43-0041
          </p>
          <div className="footer-social">
            <WhatsAppBtn label="Chatear ahora" text="Hola MyM, visito su web y quiero pedir un presupuesto." className="px-6 py-2.5 text-sm" />
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.instagram.com/mymdecoracionparafiestas/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-instagram-btn"
            >
              <Instagram size={18} /> Instagram
            </motion.a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 MyM Decoración para Fiestas. Todos los derechos reservados.</p>
        <p className="footer-bottom-right">Diseños exclusivos y personalizados.</p>
      </div>
    </footer>
  );
};

export default Footer;
