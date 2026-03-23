// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import '../styles/Contratar.css';

const steps = [
  {
    title: 'Elegí y Cotizá',
    desc: 'Contanos tus ideas por WhatsApp, indicá el tamaño de deco que querés y te pasamos el presupuesto.'
  },
  {
    title: 'Aboná la Seña',
    desc: 'Congelá tu fecha transfiriendo el monto de la seña pactada correspondiente a tu paquete.'
  },
  {
    title: 'Pagá en Cuotas',
    desc: 'Aboná el resto en cuotas sin interés hasta el mismo día del evento (antes que inicie).'
  }
];

const conditions = [
  {
    title: 'Alquiler de Materiales',
    desc: 'Todos los elementos, incluyendo los globos, son puestos en concepto de alquiler. Usamos materiales importados y técnicas de reutilización. No se pueden llevar al finalizar.'
  },
  {
    title: 'Daños y Cuidados',
    desc: 'Cualquier rotura de materiales o daño severo a la alfombra (manchas de comida, barro) será cobrado al finalizar. Confiamos en el buen uso del espacio de exposición.'
  },
  {
    title: 'Reprogramación',
    desc: 'Cambios de fecha requieren 20 días de anticipación. Reprogramaciones pueden sufrir ajustes de precio. Si se cancela, no hay devolución de seña.'
  },
  {
    title: 'Traslado y Flete',
    desc: 'El costo de flete no está incluido en los paquetes base. Se cotiza al contratar y se ajusta 10 días antes del evento basado en distancia y horario.'
  }
];

const Contratar = () => {
  return (
    <div className="contratar-wrapper flex flex-col gap-12">

      {/* Pasos */}
      <section>
        <h2 className="contratar-section-title flex items-center gap-4 mb-8">
          <span className="contratar-step-badge flex items-center justify-center">
            1
          </span> Pasos simples para reservar
        </h2>

        <div className="contratar-steps-grid grid gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="contratar-step-card relative"
            >
              <h3 className="contratar-step-name mb-2">{step.title}</h3>
              <p className="contratar-step-desc">{step.desc}</p>
            </motion.div>
          ))}
        </div>

      </section>

      {/* Condiciones Generales */}
      <section>
        <h2 className="contratar-section-title contratar-conditions-title relative inline-block mb-5">
          Condiciones Generales
        </h2>

        <div className="contratar-conditions-grid grid gap-8 mt-5">
          {conditions.map((cond, i) => (
            <div key={i} className="contratar-condition-card p-8">
              <h3 className="contratar-condition-name mb-2">{cond.title}</h3>
              <p className="contratar-condition-desc">{cond.desc}</p>
            </div>
          ))}
        </div>

      </section>

    </div>
  );
};

export default Contratar;
