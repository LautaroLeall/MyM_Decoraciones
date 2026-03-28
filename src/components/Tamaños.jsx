// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, Smile, Star } from 'lucide-react';
import '../styles/Tamaños.css';

const Tamaños = () => {
  const navigate = useNavigate();
  return (
    <div className="tamanos-wrapper">
      <div className="tamanos-header text-center mb-10">
        <h2 className="tamanos-title mb-3">Elegí el tamaño ideal</h2>
        <p className="tamanos-subtitle">
          Comparamos nuestras opciones para que te sea más fácil decidir. Adaptamos cada diseño a la dimensión seleccionada.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="tamanos-table-container mb-10"
      >
        <table className="tamanos-table text-left">
          <thead className="tamanos-thead">
            <tr>
              <th className="tamanos-th-label"></th>
              <th className="tamanos-th">
                Soft Deco
                <br />
                <span className="tamanos-th-sub">1 Panel</span>
              </th>
              <th className="tamanos-th">
                Mini Deco
                <br />
                <span className="tamanos-th-sub">3 mts</span>
              </th>
              <th className="tamanos-th">
                Express Deco
                <br />
                <span className="tamanos-th-sub">5 mts</span>
              </th>
              <th className="tamanos-th">
                Premium Deco
                <br />
                <span className="tamanos-th-sub">7 mts</span>
              </th>
              <th className="tamanos-th">
                Gigante Deco
                <br />
                <span className="tamanos-th-sub">10 mts</span>
              </th>
            </tr>
          </thead>
          <tbody className="tamanos-tbody">
            <tr className="tamanos-row">
              <td className="tamanos-td-label">Volumen de Globos</td>
              <td className="tamanos-td">Detalle</td>
              <td className="tamanos-td">Básico</td>
              <td className="tamanos-td">Medio</td>
              <td className="tamanos-td">Alto</td>
              <td className="tamanos-td tamanos-td-highlight">Máximo</td>
            </tr>
            <tr className="tamanos-row">
              <td className="tamanos-td-label">Iluminación LED</td>
              <td className="tamanos-td">2 Focos</td>
              <td className="tamanos-td">3 Focos</td>
              <td className="tamanos-td">4 Focos</td>
              <td className="tamanos-td">5 Focos</td>
              <td className="tamanos-td">7 Focos</td>
            </tr>
            <tr className="tamanos-row">
              <td className="tamanos-td-label">Mesas Centrales</td>
              <td className="tamanos-td">1 Cilindro</td>
              <td className="tamanos-td">1 Mesa</td>
              <td className="tamanos-td">3 Cilindros</td>
              <td className="tamanos-td">4 Cilindros</td>
              <td className="tamanos-td">6 Cilindros</td>
            </tr>

            <tr className="tamanos-section-header">
              <td colSpan="6" className="tamanos-section-title">
                <Smile size={16} className="tamanos-section-icon" /> Mundo Infantil
              </td>
            </tr>
            <tr className="tamanos-row">
              <td className="tamanos-td-label">Personajes</td>
              <td className="tamanos-td tamanos-td-sm">1 ind.</td>
              <td className="tamanos-td tamanos-td-sm">1 ind.</td>
              <td className="tamanos-td tamanos-td-sm">1 o más</td>
              <td className="tamanos-td tamanos-td-sm">2 o más</td>
              <td className="tamanos-td tamanos-td-sm">3 o más</td>
            </tr>

            <tr className="tamanos-section-header">
              <td colSpan="6" className="tamanos-section-title">
                <Star size={16} className="tamanos-section-icon" /> Celebraciones Especiales
              </td>
            </tr>
            <tr className="tamanos-row">
              <td className="tamanos-td-label">Cartel con Nombre</td>
              <td className="tamanos-td tamanos-td-muted">No incluye</td>
              <td className="tamanos-td tamanos-td-muted">Adicional</td>
              <td className="tamanos-td tamanos-td-check"><CheckCircle2 className="tamanos-check-icon" size={20} /></td>
              <td className="tamanos-td tamanos-td-check"><CheckCircle2 className="tamanos-check-icon" size={20} /></td>
              <td className="tamanos-td tamanos-td-check"><CheckCircle2 className="tamanos-check-icon" size={20} /></td>
            </tr>
            <tr className="tamanos-btn-row">
              <td className="tamanos-td-empty"></td>
              {['soft', 'mini', 'express', 'premium', 'gigante'].map(id => (
                <td key={id} className="tamanos-td">
                  <button onClick={() => navigate(`/paquete/${id}`)} className="tamanos-detail-btn">
                    Ver detalles
                  </button>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </motion.div>
    </div>
  );
};

export default Tamaños;
