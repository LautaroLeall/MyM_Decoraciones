// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../styles/Hero.css';

const Reveal = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
  >
    {children}
  </motion.div>
);

const Hero = () => {
  const navigate = useNavigate();
  const wpUrl = `https://wa.me/5493814430041?text=${encodeURIComponent("¡Hola! Vengo de la web y quiero consultar por una decoración.")}`;

  return (
    <section className="hero-section relative flex items-center justify-center text-center px-5">
      {/* Background */}
      <motion.div
        className="hero-bg-wrapper absolute"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <img
          src="/hero-MyM.png"
          alt="Decoración Premium"
          className="hero-bg-image"
        />
        <div className="hero-bg-overlay absolute"></div>
      </motion.div>

      {/* Content */} 
      <div className="hero-content-inner relative mx-auto pt-10">
        <Reveal>
          <span className="hero-location-badge inline-flex items-center mb-6 px-5 py-2.5">
            San Miguel de Tucumán & Yerba Buena
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="hero-main-title mb-5">
            Diseño exclusivo
            <span className="hero-highlight-text block pr-3">
              para eventos únicos
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="hero-subtitle mx-auto mb-15">
            Conceptos personalizados, creatividad aplicada y una dedicación total para transformar cada espacio en un momento inolvidable.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="hero-actions-group flex flex-col justify-center items-center gap-7">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={wpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta-whatsapp inline-flex items-center justify-center gap-2 px-6 py-5"
            >
              <MessageCircle size={20} /> Cotizar mi evento
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/paquetes')}
              className="hero-cta-secondary inline-flex items-center justify-center gap-2 px-6 py-5"
            >
              Ver propuestas 2026 <ArrowRight size={18} />
            </motion.button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
