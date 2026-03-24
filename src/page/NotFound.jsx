// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, SearchX } from 'lucide-react';
import '../styles/NotFound.css';

const NotFound = () => {
    return (
        <section className="notfound-section flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="notfound-container relative text-center"
            >
                <div className="notfound-icon-wrapper flex items-center justify-center">
                    <SearchX size={48} strokeWidth={1.5} />
                </div>

                <h1 className="notfound-title mb-2">
                    Página no encontrada
                </h1>
                <p className="notfound-desc mb-5.5">
                    Parece que te has perdido buscando la decoración perfecta.
                    <br />
                    La ruta que intentas visitar no existe o fue movida.
                </p>

                <div className="notfound-action flex justify-center">
                    <Link to="/" className="notfound-btn inline-flex items-center gap-3 px-4 py-3">
                        <ArrowLeft size={18} /> Volver al Inicio
                    </Link>
                </div>
            </motion.div>
        </section>
    );
};

export default NotFound;
