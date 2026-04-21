import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { COMPLEMENTOS_DATA, CONDICIONES_EXTRAS } from '../data/DataCom';
import { Sparkles, ChevronRight, X, MessageCircle, Gem, Plus } from 'lucide-react';
import '../styles/Complementos.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const formatCurrency = (val) => new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(val);

const ExtraModal = ({ extra, onClose }) => {
  if (!extra) return null;
  const wpText = `¡Hola MyM! ✨ Quisiera consultar por el adicional: *${extra.name}* (${extra.unit}).`;

  return (
    <div className="addon-modal-overlay fixed flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="addon-modal-bg fixed"
        onClick={onClose}
      />

      <motion.div
        initial={{ scale: 0.9, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 20, opacity: 0 }}
        className="addon-modal-content relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="addon-modal-close absolute flex justify-center items-center">
          <X size={24} />
        </button>

        <div className="addon-modal-image-placeholder flex flex-col justify-center items-center text-center p-8">
          <Gem size={56} strokeWidth={1} />
        </div>

        <div className="addon-modal-body text-center p-8">
          <h3 className="addon-modal-title mb-2">{extra.name}</h3>
          <span className="addon-modal-unit block mb-6">{extra.unit}</span>
          <p className="addon-modal-desc mb-6">{extra.desc}</p>
          <p className="addon-modal-price mb-6">{formatCurrency(extra.price)}</p>

          <motion.a
            whileTap={{ scale: 0.98 }}
            href={`https://wa.me/5493814430041?text=${encodeURIComponent(wpText)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="addon-modal-whatsapp flex items-center justify-center gap-4 p-4 mx-10"
          >
            <MessageCircle size={20} /> Consultar
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

const Complementos = () => {
  const [selectedExtra, setSelectedExtra] = useState(null);

  return (
    <section className="addons-section pt-35 pb-10 mx-auto px-5">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="addons-header text-center mb-12"
      >
        <h1 className="addons-title mb-4">
          Complementos
        </h1>
        <p className="addons-sub">
          Hacen que tu evento sea unico y personalizado.
          <span className="addons-highlight relative block mt-4">
            Disponibles al contratar una propuestas DECO.
          </span>
        </p>
      </motion.div>

      {COMPLEMENTOS_DATA.map((category, catIdx) => (
        <div key={catIdx} className="addons-category-section mb-15">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="addons-category-header flex items-center gap-5 mb-8"
          >
            <Sparkles size={24} className="addons-category-icon" />
            <h2 className="addons-category-title">{category.category}</h2>
            <div className="addons-category-line"></div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="addons-grid grid gap-8"
          >
            {category.items.map((extra) => (
              <motion.div
                key={extra.id}
                variants={fadeUp}
                className="addon-card relative flex flex-col items-center text-center py-8 px-10"
              >
                <div className="addon-icon-box flex items-center justify-center mb-5">
                  <Plus size={28} strokeWidth={1.5} />
                </div>
                <h3 className="addon-name mb-4">{extra.name}</h3>
                <span className="addon-price mb-2">{formatCurrency(extra.price)}</span>
                <span className="addon-unit mb-6">{extra.unit}</span>

                <button
                  onClick={() => setSelectedExtra(extra)}
                  className="addon-card-cta flex items-center justify-center gap-2 p-4"
                >
                  Ver Detalle <ChevronRight size={14} />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}

      {/* Conditions Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="addons-protocol-banner flex flex-col gap-8 p-12"
      >
        <div className="addons-protocol-icon flex justify-center items-center">
          <Gem size={48} strokeWidth={1} />
        </div>
        <div>
          <h3 className="addons-protocol-title mb-8">Protocolos de Alquiler</h3>
          <ul className="addons-protocol-list grid gap-8">
            {CONDICIONES_EXTRAS.map((cond, i) => (
              <li key={i} className="addons-protocol-item flex items-start gap-3">
                <div className="addons-protocol-bullet mt-2"></div>
                <p className="addons-protocol-text">{cond}</p>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedExtra && <ExtraModal extra={selectedExtra} onClose={() => setSelectedExtra(null)} />}
      </AnimatePresence>
    </section>
  );
};

export default Complementos;
