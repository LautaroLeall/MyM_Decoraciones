// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import '../styles/Tamaños.css';

const packagesData = [
  {
    id: 'soft', name: 'Soft Deco', size: '2 mts', highlight: false,
    features: [
      "Fondo Personalizado 1.5 mts",
      "Alfombra 2 mts",
      "Mesa Central + Detalles",
      "Cartelería LED",
      "Iluminación (2 Reflectores)",
      "1 Bouquet 2m + 3 burbujas",
      "1 Plataforma + 1 Personaje"
    ]
  },
  {
    id: 'mini', name: 'Mini Deco', size: '3 mts', highlight: false,
    features: [
      "Fondo Personalizado 3 mts",
      "Alfombra 3 mts",
      "1 Mesa Central + 2 Secundarias",
      "4 Bandejas de pie + 4 espejadas",
      "Cartelería LED + Nombre",
      "Iluminación (4 Reflectores)",
      "1 Bq 2m + 2 Bq 1m + 4 burbujas",
      "1 Plataforma + 2 Personajes"
    ]
  },
  {
    id: 'express', name: 'Deco Express', size: '6 mts', highlight: false,
    features: [
      "Fondo Personalizado 6 mts",
      "Alfombra 6 mts",
      "1 Mesa Central + 4 Secundarias",
      "6 Bandejas de pie + 6 espejadas",
      "Cartelería LED + Nombre",
      "Iluminación (6 Reflectores)",
      "2 Bq 2m + 1 Bq 1m + 6 burbujas",
      "2 Plataformas + 3 Personajes"
    ]
  },
  {
    id: 'premium', name: 'Deco Premium', size: '8 mts', highlight: false,
    features: [
      "Fondo Personalizado 8 mts",
      "Alfombra 8 mts",
      "1 Mesa Central + 6 Secundarias",
      "8 Bandejas de pie + 8 espejadas",
      "Cartelería LED + Nombre",
      "Iluminación (8 Reflectores)",
      "2 Bq 2m + 2 Bq 1.5m + 10 burbujas",
      "3 Plataformas + 4 Personajes"
    ]
  },
];

const Tamaños = () => {
  const navigate = useNavigate();

  return (
    <div className="tamanos-wrapper py-35 mx-auto px-5">
      <div className="tamanos-header text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="tamanos-title mb-4"
        >
          Descubrí tu <span className="text-beige">DECO</span> perfecta
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="tamanos-subtitle"
        >
          Elegí el tamaño que mejor se adapta a tu espacio.
        </motion.p>
      </div>

      <div className="tamanos-cards-grid grid gap-5">
        {packagesData.map((pkg, idx) => (
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * idx, duration: 0.6 }}
            className="tamanos-card relative flex flex-col py-10 px-6"
          >

            <div className="tamanos-card-header text-center mb-5 pb-5">
              <h3 className="tamanos-card-title mb-1.5">{pkg.name}</h3>
              <span className="tamanos-card-size inline-block py-1.5 px-4">{pkg.size}</span>
            </div>

            <div className="tamanos-card-body mb-8">
              <ul className="tamanos-card-features flex flex-col gap-5 p-0 m-0">
                {pkg.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2">
                    <Check size={16} className="tamanos-check-icon mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="tamanos-card-footer mt-auto">
              <button
                onClick={() => navigate(`/paquete/${pkg.id}`)}
                className="tamanos-card-btn inline-flex items-center justify-center gap-1 p-4"
              >
                Ver detalles <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Tamaños;
