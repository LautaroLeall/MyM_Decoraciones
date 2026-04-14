// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Gem, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PACKAGES } from '../data/DataPaq';
import '../styles/Paquetes.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const Reveal = ({ children, className = "", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
    className={className}
  >
    {children}
  </motion.div>
);

const Paquetes = () => {
  const navigate = useNavigate();

  return (
    <section className="paquetes-section relative py-15">
      <div className="paquetes-container mx-auto">
        <Reveal className="paquetes-header text-center mb-10">
          <h2 className="paquetes-title mb-3">
            Elegí tu escala de diseño
          </h2>
          <p className="paquetes-sub mx-auto">
            Propuestas arquitectónicas adaptadas a la dimensión de tu salón.
          </p>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="paquetes-flex flex flex-wrap justify-center gap-10"
        >
          {PACKAGES.map((pkg) => (
            <motion.div
              key={pkg.id}
              variants={fadeUp}
              className="package-card relative flex flex-col"
            >
              <div className="package-card-header relative text-center px-2 py-10">
                <div className="package-card-icon flex items-center justify-center">
                  <Gem size={22} />
                </div>
                <h3 className="package-card-name mb-1">{pkg.name}</h3>
                <span className="package-card-size">{pkg.size}</span>
              </div>

              <div className="package-card-body flex flex-col text-center">
                <p className="package-card-desc mb-8">{pkg.shortDesc}</p>
                <div className="package-card-action">
                  <button
                    onClick={() => navigate(`/paquete/${pkg.id}`)}
                    className="package-card-cta flex items-center justify-center gap-3 p-4"
                  >
                    Explorar diseño <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Paquetes;
