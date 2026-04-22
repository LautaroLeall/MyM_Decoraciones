// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { MessageCircle, Sparkles } from 'lucide-react';
import '../styles/CtaFinal.css';

const Reveal = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
    className={className}
  >
    {children}
  </motion.div>
);

const CtaFinal = () => {
  const wpUrl = `https://wa.me/5493814430041?text=${encodeURIComponent("¡Hola MyM! ✨ Vengo de la web y quiero consultar disponibilidad para mi evento.")}`;

  return (
    <section className="cta-final-section py-12 px-5">
      <Reveal className="cta-final-card relative text-center mx-auto px-5 py-9">
        <div className="cta-final-glow absolute" />
        <div className="cta-final-inner relative">
          <h2 className="cta-final-title mb-5">¿Hablamos de tu evento?</h2>
          <p className="cta-final-subtitle mx-auto mb-8">
            Nuestro calendario 2026 se está llenando.
            <br />
            Escribinos ahora para verificar disponibilidad y congelar el valor con tu seña.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={wpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-final-whatsapp inline-flex items-center justify-center gap-5 py-4 px-7"
          >
            <MessageCircle size={24} /> Cotizar
          </motion.a>

          <div className="cta-final-footer flex items-center justify-center gap-4 mt-8">
            <Sparkles size={16} />
            <span className="cta-final-tagline">MYM DECORACION 2026</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default CtaFinal;
