// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Gem, CheckCircle2, Smile, Star, Info, PartyPopper } from 'lucide-react';
import { PACKAGES } from '../data/DataPaq';
import '../styles/DetallesPaq.css';

const DetallesPaq = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const pkg = PACKAGES.find(p => p.id === id);

  if (!pkg) return <div>Paquete no encontrado</div>;

  return (
    <div className="detalles-container">
      <button onClick={() => navigate('/paquetes')} className="detalles-back-btn">
        <ArrowLeft size={20} className="detalles-back-icon" /> Volver a comparativa
      </button>

      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="detalles-card">
        <div className="detalles-header">
          <div className="detalles-header-icon">
            <Gem size={40} />
          </div>
        </div>

        <div className="detalles-content">
          <div className="detalles-top-section">
            <div className="detalles-title-box">
              <h1 className="detalles-title">{pkg.name}</h1>
              <span className="detalles-badge">Dimensión: {pkg.size}</span>
              <p className="detalles-desc">{pkg.shortDesc}</p>
            </div>

            <div className="detalles-quote-box">
              <p className="detalles-quote-sub">Cotización a medida</p>
              <p className="detalles-quote-title">Consultar Valor</p>
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href={`https://wa.me/5493814430041?text=${encodeURIComponent(`¡Hola MyM! Quiero consultar presupuesto para el paquete *${pkg.name}* (${pkg.size}).`)}`}
                target="_blank" rel="noopener noreferrer"
                className="detalles-paq-btn w-full py-3.5 px-8"
              >
                <PartyPopper size={20} /> Contratar Servicio
              </motion.a>
              <p className="detalles-quote-note">*Flete y traslado se cotizan según zona</p>
            </div>
          </div>

          <div className="detalles-features-section">
            <h3 className="detalles-features-heading">¿Qué incluye la estructura base?</h3>
            <div className="detalles-features-grid">
              {pkg.features.map((feature, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }} className="detalles-feature-item">
                  <CheckCircle2 size={20} className="detalles-feature-icon" />
                  <span className="detalles-feature-text">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="detalles-diff-section">
            <div className="detalles-diff-header">
              <h3 className="detalles-diff-heading">Diferencias según tu evento</h3>
              <p className="detalles-diff-sub">Adaptamos el paquete según el estilo de celebración.</p>
            </div>
            <div className="detalles-diff-grid">
              <div className="detalles-diff-card detalles-diff-infantil">
                <h4 className="detalles-diff-title"><Smile className="detalles-diff-icon-green" size={24} /> Mundo Infantil</h4>
                <p className="detalles-diff-desc">Fantasía, colores y diversión. <strong className="detalles-diff-highlight">{pkg.infantiles}</strong></p>
              </div>
              <div className="detalles-diff-card detalles-diff-eventos">
                <h4 className="detalles-diff-title"><Star className="detalles-diff-icon-gold" size={24} /> Celebraciones Especiales</h4>
                <p className="detalles-diff-desc">Elegancia, estética premium y volumen.<strong className="detalles-diff-highlight">{pkg.eventos}</strong></p>
              </div>
            </div>
          </div>

          <div className="detalles-note-box">
            <Info className="detalles-note-icon" />
            <div>
              <h4 className="detalles-note-title">Nota importante de diseño</h4>
              <p className="detalles-note-text">
                Inspirándonos en tu temática, utilizaremos nuestros recursos para conseguir un espacio soñado. No cuantificamos estrictamente la cantidad de objetos decorativos menores, sino que nos enfocamos en el resultado global.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DetallesPaq;
