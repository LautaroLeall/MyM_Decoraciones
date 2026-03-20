// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { MessageSquarePlus } from 'lucide-react';
import '../styles/ContactCom.css';

const ContactCom = () => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="contactcom-box"
    >

      <h3 className="contactcom-title">¿Querés agregar estos detalles a tu fiesta?</h3>
      <p className="contactcom-desc">
        Solicitá los complementos con anticipación para asegurar disponibilidad el día de tu evento. Escribinos y armamos tu presupuesto a medida.
      </p>

      <motion.a 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href={`https://wa.me/5493814430041?text=${encodeURIComponent("¡Hola! Quisiera consultar los valores para agregar complementos/extras a mi decoración.")}`} 
        target="_blank" rel="noopener noreferrer"
        className="contactcom-wp-btn px-8 py-4"
      >
        <MessageSquarePlus size={20} /> Agregar Complemento
      </motion.a>

    </motion.div>
  );
};

export default ContactCom;
