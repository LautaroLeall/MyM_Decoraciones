import React from 'react';
import { CheckCircle2, MapPin } from 'lucide-react';
import '../styles/Requisitos.css';

const requisitos = [
  'Solo Interiores: Por razones de seguridad y preservación, las decoraciones no se arman al aire libre ni sobre césped natural.',
  'Ubicación final: Una vez montada la estructura, no se puede mover de lugar. Te pedimos definir bien el espacio antes de nuestro armado.',
  'Sugerencia fotográfica: Evitá colocar las mesas de invitados pegadas al frente de la decoración para garantizar tomas completas y despejadas.'
];

const Requisitos = () => {
  return (
    <section className="requisitos-section">
      <h2 className="requisitos-title">
        <MapPin className="requisitos-title-icon" /> Requisitos del Espacio
      </h2>
      <ul className="requisitos-list">
        {requisitos.map((text, i) => (
          <li key={i} className="requisitos-item">
            <CheckCircle2 className="requisitos-check" size={20} />
            <p>{text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Requisitos;
