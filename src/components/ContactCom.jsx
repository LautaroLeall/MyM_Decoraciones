// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { MessageSquarePlus } from 'lucide-react';
import '../styles/ContactCom.css';

const ContactCom = () => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="contactcom-box relative flex flex-col text-center items-center justify-center px-8 py-15 mx-5 mt-15 mb-30"
    >
      <div className="contactcom-glow absolute" />

      <div className="contactcom-inner relative">
        <h3 className="contactcom-title mb-5">
          ¿Querés agregar estos detalles a tu fiesta?
        </h3>
        <p className="contactcom-desc mb-8">
          Solicitá los complementos con anticipación para asegurar disponibilidad el día de tu evento.
          <br />
          Escribinos y armamos tu presupuesto a medida.
        </p>

        <motion.a
          href={`https://wa.me/5493814430041?text=${encodeURIComponent("¡Hola! Quisiera consultar los valores para agregar complementos/extras a mi decoración.")}`}
          target="_blank" rel="noopener noreferrer"
          className="contactcom-wp-btn inline-flex items-center justify-center gap-5 py-4 px-7"
        >
          <MessageSquarePlus size={20} /> Complementos
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ContactCom;
