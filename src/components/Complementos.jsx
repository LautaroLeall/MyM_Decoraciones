import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { EXTRAS } from '../data/DataCom';
import '../styles/Complementos.css';

const Complementos = () => {
  return (
    <div className="complementos-grid">
      {EXTRAS.map((extra, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: idx * 0.1 }}
          className="complemento-card"
        >
          <div className="complemento-icon-wrapper">
            <Sparkles size={24} />
          </div>
          <h3 className="complemento-name">{extra.name}</h3>
          <span className="complemento-price">{extra.price}</span>
          <span className="complemento-unit">{extra.unit}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default Complementos;
