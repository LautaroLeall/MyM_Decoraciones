// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { MessageSquarePlus } from 'lucide-react';
import '../styles/ContactCom.css';

const ContactCom = () => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="contactcom-box relative flex flex-col items-center text-center"
    >

      <h3 className="contactcom-title mb-5">¿Querés agregar estos detalles a tu fiesta?</h3>
      <p className="contactcom-desc mb-10">
        Solicitá los complementos con anticipación para asegurar disponibilidad el día de tu evento.
        <br />
        Escribinos y armamos tu presupuesto a medida.
      </p>

      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href={`https://wa.me/5493814430041?text=${encodeURIComponent("¡Hola! Quisiera consultar los valores para agregar complementos/extras a mi decoración.")}`}
        target="_blank" rel="noopener noreferrer"
        className="contactcom-wp-btn inline-flex items-center justify-center gap-1 p-4"
      >
        <MessageSquarePlus size={20} /> Agregar Complemento
      </motion.a>

    </motion.div>
  );
};

export default ContactCom;
