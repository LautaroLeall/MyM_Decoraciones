// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Star, Sparkles, Calendar } from 'lucide-react';
import '../styles/Info.css';

const features = [
  {
    icon: <Star size={32} />,
    title: "+8 Años de Experiencia",
    desc: "Calidad óptima y los mejores diseños de autor para que tu fiesta sea única."
  },
  {
    icon: <Sparkles size={32} />,
    title: "Diseños Personalizados",
    desc: "Nos inspiramos en tu temática utilizando ideas creativas y de vanguardia."
  },
  {
    icon: <Calendar size={32} />,
    title: "Facilidades de Pago",
    desc: "Reservá tu fecha con una seña y aboná el resto en cuotas sin interés."
  }
];

const Info = () => {
  return (
    <section className="info-section">
      <div className="info-grid">
        {features.map((feat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
            className="info-card"
          >
            <div className="info-icon-wrapper">{feat.icon}</div>
            <h3 className="info-title">{feat.title}</h3>
            <p className="info-desc">{feat.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Info;
