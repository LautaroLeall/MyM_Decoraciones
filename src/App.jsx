import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {
  HomePage,
  PaquetesPage,
  ComplementosPage,
  ContratacionPage,
  PaqDetallePage
} from './routes/Routes';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedPackage, setSelectedPackage] = useState(null);

  const navigate = (page, data = null) => {
    setCurrentPage(page);
    setSelectedPackage(data);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col font-global bg-white text-[#0D0D0D] selection:bg-[#F2D5E0] selection:text-[#0D0D0D]">
      <Navbar currentPage={currentPage} navigate={navigate} />

      <main className="flex-grow pt-20">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && <HomePage key="home" navigate={navigate} />}
          {currentPage === 'paquetes' && <PaquetesPage key="paquetes" navigate={navigate} />}
          {currentPage === 'paquete' && <PaqDetallePage key="paquete" pkgId={selectedPackage} navigate={navigate} />}
          {currentPage === 'complementos' && <ComplementosPage key="complementos" />}
          {currentPage === 'contratacion' && <ContratacionPage key="contratacion" />}
        </AnimatePresence>
      </main>

      <Footer navigate={navigate} />
    </div>
  );
}