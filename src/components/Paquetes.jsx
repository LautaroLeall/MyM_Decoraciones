// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Gem, ChevronRight } from 'lucide-react';
import { PACKAGES } from '../data/DataPaq';
import '../styles/Paquetes.css';

const Paquetes = () => {
  const navigate = useNavigate();

  return (
    <section className="paquetes-section">
      <div className="paquetes-container text-center">

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <h2 className="paquetes-heading mb-1">Nuestros Paquetes</h2>
          <p className="paquetes-subheading">
            Trabajamos con diferentes escalas de diseño para adaptarnos al espacio de tu salón y a tus necesidades.
          </p>
        </motion.div>

        <div className="paquetes-grid flex flex-wrap justify-center gap-10">

          {PACKAGES.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="paquete-card flex flex-col"
              onClick={() => navigate(`/paquete/${pkg.id}`)}
            >

              <div className="paquete-image-box relative flex items-center justify-center">
                <div className="paquete-icon-box flex items-center justify-center">
                  <Gem size={28} />
                </div>
              </div>

              <div className="paquete-body flex flex-col text-left">
                <h3 className="paquete-title mb-1">
                  {pkg.name}
                </h3>
                <p className="paquete-size mb-3">
                  {pkg.size}
                </p>
                <p className="paquete-desc mb-5">
                  {pkg.shortDesc}
                </p>
                <Link to={`/paquete/${pkg.id}`} className="paquete-link flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                  Ver detalles
                  <ChevronRight size={16} className="paquete-chevron" />
                </Link>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Paquetes;
