// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
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
          src="./hero-MyM.png"
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
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`https://wa.me/5493814430041?text=${encodeURIComponent("¡Hola! Vengo de la página web y me gustaría consultar por la decoración para mi evento.")}`}
            target="_blank" rel="noopener noreferrer"
            className="hero-wp-btn px-8 py-4 text-lg"
          >
            <MessageCircle size={22} /> Consultar por mi evento
          </motion.a>
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
