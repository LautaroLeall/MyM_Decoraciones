// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import {
  ClipboardCheck, Clock, ShieldCheck, Camera,
  CreditCard, CalendarCheck, CheckCircle2
} from 'lucide-react';
import '../styles/ProcessConditions.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const ProcessConditions = () => {
  const steps = [
    {
      icon: <ClipboardCheck size={28} />,
      title: "Elección",
      desc: "El cliente elige su propuesta ideal según el espacio y temática."
    },
    {
      icon: <Clock size={28} />,
      title: "Disponibilidad",
      desc: "Consultamos la disponibilidad de la fecha solicitada."
    },
    {
      icon: <CreditCard size={28} />,
      title: "Reserva",
      desc: "Se realiza el pago de la seña para congelar fecha y precio."
    },
    {
      icon: <CalendarCheck size={28} />,
      title: "Confirmación",
      desc: "MyM reserva formalmente el cupo para tu gran día."
    },
    {
      icon: <CheckCircle2 size={28} />,
      title: "Cancelación",
      desc: "Se abona el resto hasta el mismo día del evento."
    }
  ];

  return (
    <section className="pc-section relative py-20" id="proceso">
      <div className="pc-container mx-auto px-8">

        {/* Proceso de Contratación */}
        <div className="pc-process-block">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="pc-header mbe-11"
          >
            <span className="pc-badge inline-block mb-5 px-4 py-2">
              Cómo trabajamos
            </span>
            <h2 className="pc-title">Proceso de Contratación</h2>
          </motion.div>

          <div className="pc-steps-grid grid gap-10 mb-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="pc-step-card relative flex flex-col items-center text-center"
              >
                <div className="pc-step-number absolute">
                  {i + 1}
                </div>
                <div className="pc-step-icon relative flex items-center justify-center mb-5">
                  {step.icon}
                </div>
                <h4 className="pc-step-title mb-3">
                  {step.title}
                </h4>
                <p className="pc-step-desc">
                  {step.desc}
                </p>
                {i < steps.length - 1 && <div className="pc-step-line"></div>}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProcessConditions;
