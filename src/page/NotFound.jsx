// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, SearchX } from 'lucide-react';
import '../styles/NotFound.css';

const NotFound = () => {
    return (
        <section className="notfound-section">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="notfound-container"
            >
                <div className="notfound-icon-wrapper">
                    <SearchX size={48} strokeWidth={1.5} className="notfound-icon" />
                </div>

                <h1 className="notfound-title">Página no encontrada</h1>

                <p className="notfound-desc">
                    Parece que te has perdido buscando la decoración perfecta. La ruta que intentas visitar no existe o fue movida.
                </p>

                <div className="notfound-action">
                    <Link to="/" className="notfound-btn">
                        <ArrowLeft size={18} /> Volver al Inicio
                    </Link>
                </div>
            </motion.div>
        </section>
    );
};

export default NotFound;
