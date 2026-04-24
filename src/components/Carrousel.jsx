import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/Carrousel.css';

const Carrousel = ({ images = [], name = 'Decoración' }) => {
  const [index, setIndex] = useState(0);

  const handleNext = () => setIndex((prev) => (prev + 1) % images.length);
  const handlePrev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="carrousel-wrapper flex flex-col gap-3">
      <div className="carrousel-main relative">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            alt={`${name} - Vista ${index + 1}`}
            className="carrousel-img absolute"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=1200';
            }}
          />
        </AnimatePresence>

        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="carrousel-btn absolute flex justify-center items-center btn-left">
              <ChevronLeft size={14} />
            </button>
            <button
              onClick={handleNext}
              className="carrousel-btn absolute flex justify-center items-center btn-right">
              <ChevronRight size={14} />
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="carrousel-thumbnails flex gap-2 pb-1.5">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`carrousel-thumb p-0 ${i === index ? 'active' : ''}`}
              aria-label={`Ver imagen ${i + 1}`}
            >
              <img src={img} alt={`Miniatura ${i + 1}`} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Carrousel;
