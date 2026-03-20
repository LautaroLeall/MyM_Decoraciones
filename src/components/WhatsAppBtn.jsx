import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import '../styles/WhatsAppBtn.css';

const WhatsAppBtn = ({ text, label, className = '' }) => {
  const number = "5493814430041";
  const url = `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
  return (
    <motion.a
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      href={url} target="_blank" rel="noopener noreferrer"
      className={`whatsapp-btn ${className}`}
    >
      <MessageCircle size={20} /> {label}
    </motion.a>
  );
};

export default WhatsAppBtn;
