import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
// ICONS
import { PlusCircle, Sparkles, X, AlertTriangle, MessageSquarePlus } from 'lucide-react';
// DATA
import { COMPLEMENTOS_DATA, CONDICIONES_EXTRAS } from '../data/DataCom';
// STYLES
import '../styles/Complementos.css';

const Complementos = () => {
  const [selectedExtra, setSelectedExtra] = useState(null);

  const closeModal = () => setSelectedExtra(null);

  return (
    <section className="complementos-section">
      <div className="complementos-header text-center mb-15">
        <h2 className="complementos-heading mb-3">Complementos de Alta Gama</h2>
        <p className="complementos-subheading">
          Personalizá tu evento llevando la ambientación al siguiente nivel con nuestras opciones adicionales exclusivas.
        </p>
      </div>

      <div className="complementos-catalog">
        {COMPLEMENTOS_DATA.map((cat, idx) => (
          <div key={idx} className="complementos-category">
            <h3 className="category-title">
              <Sparkles size={20} className="category-icon" /> {cat.category}
            </h3>

            <div className="complementos-grid">
              {cat.items.map((item, itemIdx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: itemIdx * 0.05 }}
                  className="complemento-card"
                  onClick={() => setSelectedExtra(item)}
                >
                  <div className="complemento-card-content">
                    <h4 className="complemento-name">{item.name}</h4>
                    <p className="complemento-price-badge">{item.price}</p>
                  </div>
                  <button className="complemento-action-btn">
                    Ver detalles <PlusCircle size={16} />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="condiciones-box">
        <div className="condiciones-header">
          <AlertTriangle size={24} className="condiciones-icon" />
          <h4 className="condiciones-title">Condiciones Importantes de Contratación</h4>
        </div>
        <ul className="condiciones-list">
          {CONDICIONES_EXTRAS.map((condicion, i) => (
            <li key={i} className="condicion-item">{condicion}</li>
          ))}
        </ul>
      </div>

      <AnimatePresence>
        {selectedExtra && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="modal-overlay"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: -10 }}
              onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside
              className="modal-content"
            >
              <button className="modal-close-btn" onClick={closeModal}>
                <X size={24} />
              </button>

              <div className="modal-header-icon">
                <Sparkles size={32} />
              </div>

              <h3 className="modal-title">{selectedExtra.name}</h3>
              <p className="modal-price">{selectedExtra.price}</p>

              <div className="modal-desc-box">
                <p className="modal-desc">{selectedExtra.desc}</p>
              </div>

              <div className="modal-action">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={`https://wa.me/5493814430041?text=${encodeURIComponent(`¡Hola MyM! Quiero consultar sobre el complemento extra: *${selectedExtra.name}* (${selectedExtra.price}).`)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="modal-wp-btn w-full justify-center py-3"
                >
                  <MessageSquarePlus size={20} /> Agregar Complemento
                </motion.a>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Complementos;
