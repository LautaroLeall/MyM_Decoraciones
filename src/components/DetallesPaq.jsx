// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PACKAGES } from '../data/DataPaq';
import {
  ArrowLeft,
  CheckCircle2,
  Smile,
  Star,
  Info,
  PartyPopper,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import '../styles/DetallesPaq.css';

const DetallesPaq = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const pkg = PACKAGES.find(p => p.id === id);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  if (!pkg) return <div>Paquete no encontrado</div>;

  const nextImage = () => {
    setCurrentImgIndex((prev) => (prev + 1) % pkg.images.length);
  };

  const prevImage = () => {
    setCurrentImgIndex((prev) => (prev - 1 + pkg.images.length) % pkg.images.length);
  };

  return (
    <div className="detalles-container">

      <button onClick={() => navigate('/paquetes')} className="detalles-back-btn inline-flex items-center p-0 mb-8">
        <ArrowLeft size={20} className="detalles-back-icon mr-2" />
        Volver a comparativa
      </button>

      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="detalles-card">

        <div className="detalles-header relative flex items-center justify-center group">

          <AnimatePresence mode="wait">
            <motion.img
              key={currentImgIndex}
              src={pkg.images[currentImgIndex]}
              alt={`${pkg.name} - Imagen ${currentImgIndex + 1}`}
              className="detalles-header-img"
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0.5 }}
            />
          </AnimatePresence>

          <button
            onClick={prevImage}
            className="btn-img btn-prev-img absolute p-2"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="btn-img-icon" />
          </button>

          <button
            onClick={nextImage}
            className="btn-img btn-next-img absolute p-2"
            aria-label="Siguiente imagen"
          >
            <ChevronRight className="btn-img-icon" />
          </button>

          {/* Pagination indicators */}
          <div className="detalles-pagination absolute flex gap-4">
            {pkg.images.map((_, idx) => (
              <div
                key={idx}
                className={`detalles-pagination-dot ${idx === currentImgIndex ? 'bg-white scale-125' : 'bg-white/50'}`}
              />
            ))}
          </div>
        </div>

        <div className="detalles-content p-8">
          <div className="detalles-top-section flex flex-col justify-between items-start gap-10 mb-10">
            <div className="detalles-title-box">
              <h1 className="detalles-title text-center mb-4">{pkg.name}</h1>
              <span className="detalles-badge inline-block text-center mb-5">
                Dimensión:
                {pkg.size}
              </span>
              <p className="detalles-desc">{pkg.shortDesc}</p>
            </div>

            <div className="detalles-quote-box relative text-center">
              <p className="detalles-quote-sub mb-1 p-0">Cotización a medida</p>
              <p className="detalles-quote-title mb-4">Consultar Valor</p>
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href={`https://wa.me/5493814430041?text=${encodeURIComponent(`¡Hola MyM! Quiero consultar presupuesto para el paquete *${pkg.name}* (${pkg.size}).`)}`}
                target="_blank" rel="noopener noreferrer"
                className="detalles-paq-btn inline-flex items-center justify-center gap-3 mb-0 p-4"
              >
                <PartyPopper size={20} />
                Contratar
              </motion.a>
              <p className="detalles-quote-note text-center mt-4">
                *Flete y traslado se cotizan según zona
              </p>
            </div>
          </div>

          <div className="detalles-features-section pt-10">
            <h3 className="detalles-features-heading mb-5">
              ¿Qué incluye la estructura base?
            </h3>
            <div className="detalles-features-grid grid">
              {pkg.features.map((feature, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }} className="detalles-feature-item flex items-start p-3.5">

                  <CheckCircle2 size={20} className="detalles-feature-icon mr-2" />
                  <span className="detalles-feature-text">{feature}</span>

                </motion.div>
              ))}
            </div>
          </div>

          <div className="detalles-diff-section pt-8 mt-10">
            <div className="detalles-diff-header text-center mb-8">
              <h3 className="detalles-diff-heading mb-1.5">Diferencias según tu evento</h3>
              <p className="detalles-diff-sub">
                Adaptamos el paquete según el estilo de celebración.
              </p>
            </div>
            <div className="detalles-diff-grid grid gap-8">

              <div className="detalles-diff-card detalles-diff-infantil">
                <h4 className="detalles-diff-title -infantil">
                  <Smile className="detalles-diff-icon -infantil" size={24} />
                  Mundo Infantil
                </h4>
                <p className="detalles-diff-desc -infantil">
                  Fantasía, colores y diversión.
                  <br />
                  <strong className="detalles-diff-highlight -infantil">
                    {pkg.infantiles}
                  </strong>
                </p>
              </div>

              <div className="detalles-diff-card detalles-diff-eventos">
                <h4 className="detalles-diff-title -eventos">
                  <Star className="detalles-diff-icon -eventos" size={24} />
                  Celebraciones Especiales
                </h4>
                <p className="detalles-diff-desc -eventos">
                  Elegancia, estética premium y volumen.
                  <br />
                  <strong className="detalles-diff-highlight -eventos">
                    {pkg.eventos}
                  </strong>
                </p>
              </div>

            </div>
          </div>

          <div className="detalles-note-box flex items-start gap-4 mt-10 p-8">
            <Info className="detalles-note-icon" />
            <div>
              <h4 className="detalles-note-title mb-2">Nota importante de diseño</h4>
              <p className="detalles-note-text">
                Inspirándonos en tu temática, utilizaremos nuestros recursos para conseguir un espacio soñado.
                No cuantificamos estrictamente la cantidad de objetos decorativos menores, sino que nos enfocamos en el resultado global.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DetallesPaq;
