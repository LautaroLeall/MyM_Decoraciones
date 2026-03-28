// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { PACKAGES } from '../data/DataPaq';
import {
    ChevronLeft,
    ChevronRight
} from 'lucide-react';

const Carrousel = () => {
    const { id } = useParams();
    const pkg = PACKAGES.find(p => p.id === id);
    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    if (!pkg) return <div>Paquete no encontrado</div>;

    const nextImage = () => {
        setCurrentImgIndex((prev) => (prev + 1) % pkg.images.length);
    };

    const prevImage = () => {
        setCurrentImgIndex((prev) => (prev - 1 + pkg.images.length) % pkg.images.length);
    };

    return (
        <div className="detalles-header relative flex items-center justify-center group">

            <AnimatePresence mode="wait">
                <motion.img
                    key={currentImgIndex}
                    src={pkg.images[currentImgIndex]}
                    alt={`${pkg.name} - Imagen ${currentImgIndex + 1}`}
                    className="detalles-header-img"
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0.5 }}
                />
            </AnimatePresence>

            <button
                onClick={prevImage}
                className="btn-img btn-prev-img absolute p-2"
                aria-label="Imagen anterior"
            >
                <ChevronLeft className="btn-img-icon" />
            </button>

            <button
                onClick={nextImage}
                className="btn-img btn-next-img absolute p-2"
                aria-label="Siguiente imagen"
            >
                <ChevronRight className="btn-img-icon" />
            </button>

            {/* Pagination indicators */}
            <div className="detalles-pagination absolute flex gap-4">
                {pkg.images.map((_, idx) => (
                    <div
                        key={idx}
                        className={`detalles-pagination-dot ${idx === currentImgIndex ? 'bg-white scale-125' : 'bg-white/50'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carrousel;
