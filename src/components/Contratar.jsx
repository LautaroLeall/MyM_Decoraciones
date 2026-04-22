// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import {
  MessageCircle, Calendar, CreditCard, Sparkles, MapPin,
  Clock, ClipboardCheck, CheckCircle2
} from 'lucide-react';
import '../styles/Contratar.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const Contratar = () => {
  const steps = [
    {
      icon: <ClipboardCheck />,
      title: "1. Propuesta",
      desc: "Contactanos y elegí tu propuesta ideal según el espacio y la logística del lugar."
    },
    {
      icon: <Clock />,
      title: "2. Disponibilidad",
      desc: "Consultamos la disponibilidad de la fecha para asegurarnos de brindarte la mejor atención."
    },
    {
      icon: <CreditCard />,
      title: "3. Reserva",
      desc: "Congelamos tu fecha y el valor de la propuesta mediante el pago de la seña (Transferencia)."
    },
    {
      icon: <Sparkles />,
      title: "4. Confirmación",
      desc: "Una vez recibida la seña, MyM reserva formalmente el cupo para tu celebración."
    },
    {
      icon: <CheckCircle2 />,
      title: "5. Cancelación",
      desc: "El saldo restante se abona el mismo día del evento tras finalizar el armado."
    }
  ];

  const wpUrl = `https://wa.me/5493814430041?text=${encodeURIComponent("¡Hola MyM! ✨ Quiero consultar disponibilidad para reservar una fecha y conocer más sobre el proceso.")}`;

  return (
    <section className="booking-section pt-35 pb-10 mx-auto px-5">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="booking-header text-center mb-12"
      >
        <h1 className="booking-title mb-4">
          Tu Evento Paso a Paso
        </h1>
        <p className="booking-sub">
          Planificación organizada para que solo te preocupes por disfrutar.
        </p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="booking-grid grid gap-8 mb-15"
      >
        {steps.map((step, idx) => (
          <motion.div key={idx} variants={fadeUp} className="booking-step-card relative flex flex-col items-center text-center py-8 px-5">
            <div className="booking-step-num-box flex items-center justify-center mb-4">
              <div className="booking-step-icon">{step.icon}</div>
            </div>
            <div className="booking-step-content">
              <h3 className="booking-step-title mb-3">{step.title}</h3>
              <p className="booking-step-desc">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="booking-cta-box text-center"
      >
        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href={wpUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="booking-cta-btn inline-flex items-center justify-center gap-4 p-4 mx-10"
        >
          <MessageCircle size={24} /> Iniciar Reserva
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Contratar;
