// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import {
  CalendarCheck, AlertCircle, XOctagon, Package, Truck,
  Camera, Home, LayoutTemplate, ShieldAlert, Star, Sparkles
} from 'lucide-react';
import '../styles/Requisitos.css';

const Reveal = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
    className={className}
  >
    {children}
  </motion.div>
);

const detalles = [
  {
    icon: CalendarCheck,
    title: "Reserva y Seña",
    desc: "Con la seña reservas la fecha y se descontará del valor total del servicio."
  },
  {
    icon: AlertCircle,
    title: "Reprogramaciones",
    desc: "Con 20 días de aviso previo se actualizará el precio según la nueva fecha si fuera necesario. A partir de 15 días de anticipación, la seña pierde validez."
  },
  {
    icon: XOctagon,
    title: "Cancelaciones",
    desc: "En caso de cancelación, la seña no es reembolsable (sin excepción)."
  },
  {
    icon: Package,
    title: "Condición de los Elementos",
    desc: "Todos los elementos son puestos en concepto de alquiler, incluso los globos."
  },
  {
    icon: Truck,
    title: "Traslado",
    desc: "Valor adicional que será calculado según la distancia y horario del evento (a definir 10 días antes del evento)."
  },
  {
    icon: Camera,
    title: "Sugerencia Fotográfica",
    desc: "Recomendamos dejar libre el frente del armado para aprovechar las mejores tomas fotográficas."
  },
  {
    icon: Home,
    title: "Ubicación del Armado",
    desc: "Importante: La Deco solo puede ser armada en interiores o semi interiores (no al aire libre ni sobre césped)."
  },
  {
    icon: LayoutTemplate,
    title: "Espacios Múltiples",
    desc: "Podés contratar la cantidad de espacios que necesites (Candy bar, exposición para pastelería, exhibición de merchandising, etc)."
  },
  {
    icon: ShieldAlert,
    title: "Cuidado y Responsabilidad",
    desc: "Daños o extravíos se cobrarán al finalizar la fiesta. Confiamos en el buen uso y las buenas costumbres de nuestros clientes."
  },
  {
    icon: Star,
    title: "Nuestro Compromiso",
    desc: "Garantizamos calidad, creatividad, puntualidad y responsabilidad en cada uno de tus eventos."
  }
];

const Requisitos = () => {
  return (
    <section className="req-section py-20 px-5">
      <Reveal className="req-card relative mx-auto px-5 py-10">
        <div className="req-glow absolute" />

        <div className="req-inner relative">
          <div className="text-center mb-10">
            <h2 className="req-title text-center mb-4">
              Detalles de Contratación
            </h2>
            <p className="req-subtitle text-center my-0 mx-auto">
              Todo lo que necesitás saber para que tu evento sea perfecto, organizado y sin sorpresas.
            </p>
          </div>

          <div className="req-grid grid gap-8 mt-10">
            {detalles.map((item, idx) => (
              <Reveal key={idx} delay={idx * 0.05} className="req-item flex items-start gap-3">
                <div className="req-icon-wrapper flex items-center justify-center">
                  <item.icon size={18} />
                </div>
                <div className="req-text-wrapper">
                  <h3 className="req-item-title mb-1">{item.title}</h3>
                  <p className="req-item-desc">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="req-divider my-10 mx-auto" />

          <Reveal delay={0.2} className="req-themes-box relative text-center p-8">
            <Sparkles size={28} className="req-themes-icon" />
            <h3 className="req-themes-title mb-4">Temáticas, Estilos y Colores</h3>
            <p className="req-themes-text">
              En M y M realizamos decoraciones de todas las temáticas y estilos, estudiamos tu temática en particular para crear una decoración única, adaptada a la propuesta que vos elijas y al espacio que tengas destinado para su armado. Elegís el estilo y colores, después nosotros nos ocupamos de darle vida, con ideas creativas y ese toque especial que hace que cada evento sea distinto.
            </p>
          </Reveal>
        </div>
      </Reveal>
    </section>
  );
};

export default Requisitos;
