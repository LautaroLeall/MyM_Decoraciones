import React from 'react';
import { motion } from 'framer-motion';
import WhatsAppBtn from './WhatsAppBtn';
import '../styles/Hero.css';

const Hero = ({ navigate }) => {
  return (
    <section className="hero-section">
      <motion.div
        className="hero-bg-container"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <img
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80"
          alt="Decoración Eventos"
          className="hero-bg-image"
        />
        <div className="hero-overlay"></div>
      </motion.div>

      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="hero-title"
        >
          Creamos decoraciones únicas para <span className="hero-highlight">eventos inolvidables</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="hero-subtitle"
        >
          Diseños de autoría, calidad premium y puntualidad asegurada. Relajate, nosotros armamos la magia.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="hero-buttons"
        >
          <WhatsAppBtn
            label="Consultar por mi evento"
            text="¡Hola! Vengo de la página web y me gustaría consultar por la decoración para mi evento."
            className="px-8 py-4 text-lg"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('paquetes')}
            className="hero-secondary-btn"
          >
            Ver paquetes disponibles
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
