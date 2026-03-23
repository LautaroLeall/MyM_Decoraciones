import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { COMPLEMENTOS_DATA, CONDICIONES_EXTRAS } from '../data/DataCom';
import {
  PlusCircle,
  Sparkles,
  X,
  AlertTriangle,
  MessageSquarePlus
} from 'lucide-react';
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

      <div className="complementos-catalog flex flex-col gap-10 mb-5">
        {COMPLEMENTOS_DATA.map((cat, idx) => (
          <div key={idx} className="complementos-category">
            <h3 className="category-title flex items-center gap-2 pb-1 mb-6">
              <Sparkles size={20} className="category-icon" />
              {cat.category}
            </h3>

            <div className="complementos-grid grid gap-8">
              {cat.items.map((item, itemIdx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: itemIdx * 0.05 }}
                  className="complemento-card relative flex flex-col justify-between gap-5 p-5"
                  onClick={() => setSelectedExtra(item)}
                >
                  <div className="complemento-card-content">
                    <h4 className="complemento-name mb-2 pl-2">{item.name}</h4>
                    <p className="complemento-price-badge inline-block ml-2">{item.price}</p>
                  </div>
                  <button className="complemento-action-btn flex items-center justify-between">
                    Ver detalles <PlusCircle size={16} />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="condiciones-box p-10">
        <div className="condiciones-header flex items-center gap-3 mb-6">
          <AlertTriangle size={22} className="condiciones-icon" />
          <h4 className="condiciones-title">Condiciones Importantes de Contratación</h4>
        </div>
        <ul className="condiciones-list grid gap-8 p-0 m-0">
          {CONDICIONES_EXTRAS.map((condicion, i) => (
            <li key={i} className="condicion-item relative pl-4">{condicion}</li>
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
            className="modal-overlay fixed flex items-center justify-center p-5"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: -10 }}
              onClick={(e) => e.stopPropagation()}
              className="modal-content relative text-center"
            >
              <button className="modal-close-btn absolute flex items-center justify-center p-3" onClick={closeModal}>
                <X size={24} />
              </button>

              <div className="modal-header-icon flex items-center justify-center">
                <Sparkles size={32} />
              </div>

              <h3 className="modal-title mb-4">{selectedExtra.name}</h3>
              <p className="modal-price inline-block mb-6">{selectedExtra.price}</p>

              <div className="modal-desc-box mb-8">
                <p className="modal-desc">{selectedExtra.desc}</p>
              </div>

              <div className="modal-action flex justify-center">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={`https://wa.me/5493814430041?text=${encodeURIComponent(`¡Hola MyM! Quiero consultar sobre el complemento extra: *${selectedExtra.name}* (${selectedExtra.price}).`)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="modal-wp-btn inline-flex items-center justify-center gap-2 p-3"
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
