import React from 'react';
import { motion } from 'framer-motion';
import WhatsAppBtn from './WhatsAppBtn';
import '../styles/ContactCom.css';

const ContactCom = () => {
  const wpText = "¡Hola! Quisiera consultar los valores para agregar complementos/extras a mi decoración.";

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
      <WhatsAppBtn label="Consultar por extras" text={wpText} className="px-8 py-4" />
    </motion.div>
  );
};

export default ContactCom;
