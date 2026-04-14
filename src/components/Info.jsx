// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Sparkles, Heart, ShieldCheck } from 'lucide-react';
import '../styles/Info.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const Info = () => {
  const features = [
    {
      icon: <Sparkles size={32} />,
      title: "Creatividad Única",
      desc: "Trabajamos con diseños propios para crear espacios únicos que sorprenden y quedan en la memoria de cada invitado."
    },
    {
      icon: <Heart size={32} />,
      title: "Pasión por el Detalle",
      desc: "Nos encargamos de cuidar cada detalle para que vos solo tengas que relajarte y disfrutar de tu celebración."
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "+10 Años de Experiencia",
      desc: "Un equipo preparado, organizado y comprometido que cuenta con más de una década de trayectoria en el rubro."
    }
  ];

  return (
    <section className="info-section relative py-18">
      <div className="info-container mx-auto px-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="info-intro text-center mb-8 mx-auto"
        >
          <span className="info-intro-badge inline-block mb-2 px-4 py-2">
            Excelencia & Diseño
          </span>
          <h2 className="info-intro-title mb-5">
            Sobre MyM Decoración
          </h2>
          <p className="info-intro-text">
            Somos un equipo preparado, organizado y comprometido con cada proyecto.
            Ofrecemos calidad, creatividad y la tranquilidad de saber que cada rincón
            de tu evento está en manos expertas.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="info-grid grid gap-10"
        >
          {features.map((feat, i) => (
            <motion.div key={i} variants={fadeUp} className="info-feature-item flex flex-col items-center text-center px-5 py-10">
              <div className="info-icon-wrapper flex items-center justify-center mb-5">
                {feat.icon}
              </div>
              <h3 className="info-feature-title mb-5">
                {feat.title}
              </h3>
              <p className="info-feature-desc">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Info;
