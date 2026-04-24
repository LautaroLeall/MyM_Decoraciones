import { useParams, Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowLeft, MessageCircle, Sparkles } from 'lucide-react';
import { PACKAGES } from '../data/DataPaq';
import Carrousel from './Carrousel';
import '../styles/DetallesPaq.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const DetallesPaq = () => {
  const { id } = useParams();
  const pkg = PACKAGES.find(p => p.id === id);

  const formatCurrency = (val) => new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(val);

  const wpUrl = `https://wa.me/5493814430041?text=${encodeURIComponent(`¡Hola MyM! ✨ Quiero reservar la propuesta *${pkg.name}* (${pkg.size}). ¿Tienen disponibilidad?`)}`;

  return (
    <div className="details-page-wrapper pt-35 pb-25 mx-auto px-5">
      <div className="details-container my-0 mx-auto">
        <Link to="/paquetes" className="details-back-link inline-flex items-center mb-8">
          <ArrowLeft size={16} className="mr-2" /> Comparar propuestas
        </Link>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="details-grid grid gap-15"
        >
          {/* Visual Side: Carousel */}
          <div className="details-visual-col flex flex-col gap-8">
            <Carrousel images={pkg.images} name={pkg.name} />

            <div className="details-notice-box items-start flex py-4 px-6 gap-3">
              <Sparkles className="details-notice-icon" size={24} />
              <p>
                <strong>Nota de Excelencia:</strong> Las imágenes son ilustrativas. Diseñamos composiciones únicas y personalizadas según la temática elegida para tu evento.
              </p>
            </div>
          </div>

          {/* Info Side: Text, Features, Pricing */}
          <div className="details-info-col flex flex-col">
            <span className="details-badge inline-block mb-2">
              Escala: {pkg.size}
            </span>
            <h1 className="details-title mb-2">{pkg.name}</h1>
            <p className="details-desc">{pkg.shortDesc}</p>

            <div className="details-divider my-5" />

            <h3 className="details-subtitle mb-5">
              ¿Qué incluye este diseño?
            </h3>
            <ul className="details-features-list grid gap-4 p-0 m-0 mb-10">
              {pkg.features.map((feature, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + (idx * 0.05) }}
                  className="flex items-center gap-2.5"
                >
                  <CheckCircle2 size={20} className="details-feature-icon" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>

            <div className="details-action-card text-center p-5">
              <div className="details-price-wrap mb-6">
                <span className="details-price-label block mb-2">
                  Valor Total Estimado
                </span>
                <span className="details-price-main block">
                  {formatCurrency(pkg.price)}
                </span>
                <span className="details-price-sena block mt-1.5">
                  Reserva tu fecha con {formatCurrency(pkg.sena)}
                </span>
              </div>

              <motion.a
                whileTap={{ scale: 0.98 }}
                href={wpUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="details-cta-btn inline-flex items-center justify-center gap-2.5 py-3.5 px-10"
              >
                <MessageCircle size={18} /> Reservar Fecha
              </motion.a>

              <p className="details-terms mt-4">
                * El saldo restante se abona hasta el día del evento.<br />
                * Traslado y viáticos se cotizan según zona geográfica.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default DetallesPaq;
