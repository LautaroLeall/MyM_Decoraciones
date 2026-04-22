// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles } from 'lucide-react';
import '../styles/NotFound.css';

const NotFound = () => {
    return (
        <section className="notfound-section relative flex items-center justify-center text-center px-5">
            {/* Background Image Setup */}
            <motion.div
                className="notfound-bg-wrapper absolute"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
            >
                <img
                    src="/hero-MyM.png"
                    alt="Página no encontrada"
                    className="notfound-bg-image absolute"
                />
                <div className="notfound-bg-overlay absolute" />
            </motion.div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="notfound-content-inner relative z-10 mx-auto"
            >
                <span className="notfound-badge inline-flex items-center mb-6 px-5 py-2.5">
                    Error 404 <Sparkles size={14} className="ml-2" />
                </span>

                <h1 className="notfound-title mb-5">
                    Página no
                    <span className="notfound-highlight-text block pr-3">
                        encontrada
                    </span>
                </h1>

                <p className="notfound-subtitle mx-auto mb-10">
                    Parece que te has perdido buscando la decoración perfecta.
                    <br />
                    La ruta que intentas visitar no existe o fue movida.
                </p>

                <motion.div
                    whileTap={{ scale: 0.95 }}
                >
                    <Link to="/" className="notfound-cta inline-flex items-center justify-center gap-3 px-6 py-4">
                        <ArrowLeft size={20} /> Volver al Inicio
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default NotFound;
