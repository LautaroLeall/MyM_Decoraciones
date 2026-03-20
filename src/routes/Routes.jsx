import React from 'react';
import { motion } from 'framer-motion';

// Page wrapper for transitions
const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

// --- HOME ---
import Hero from '../components/Hero';
import Info from '../components/Info';
import Paquetes from '../components/Paquetes';

export const HomePage = ({ navigate }) => (
  <PageTransition>
    <Hero navigate={navigate} />
    <Info />
    <Paquetes navigate={navigate} />
  </PageTransition>
);

// --- PAQUETES ---
import Tamaños from '../components/Tamaños';

export const PaquetesPage = ({ navigate }) => (
  <PageTransition>
    <div style={{ paddingTop: '5rem' }}>
      <Tamaños navigate={navigate} />
    </div>
  </PageTransition>
);

// --- COMPLEMENTOS ---
import Complementos from '../components/Complementos';
import ContactCom from '../components/ContactCom';

export const ComplementosPage = () => (
  <PageTransition>
    <div className="pt-12 pb-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0D0D0D] mb-4">Complementos y Extras</h1>
        <p className="text-lg text-[#0D0D0D]/70 max-w-2xl mx-auto">
          Llevá tu evento al siguiente nivel agregando estos elementos especiales a tu espacio principal.
          <span className="block mt-2 font-bold text-[#D9B97E]">Disponibles solo al contratar un paquete principal.</span>
        </p>
      </div>
      <Complementos />
      <ContactCom />
    </div>
  </PageTransition>
);

// --- CONTRATACION ---
import Contratar from '../components/Contratar';
import Requisitos from '../components/Requisitos';

export const ContratacionPage = () => (
  <PageTransition>
    <div className="pt-12 pb-16 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0D0D0D] mb-4">¿Cómo Contratar?</h1>
        <p className="text-lg text-[#0D0D0D]/70 max-w-2xl mx-auto">Todo lo que necesitas saber de forma clara y transparente.</p>
      </div>
      <div className="space-y-12">
        <Contratar />
        <Requisitos />
      </div>
    </div>
  </PageTransition>
);

// --- PAQDETALLES ---
import DetallesPaq from '../components/DetallesPaq';

export const PaqDetallePage = ({ pkgId, navigate }) => (
  <PageTransition>
    <div style={{ paddingTop: '5rem' }}>
      <DetallesPaq pkgId={pkgId} navigate={navigate} />
    </div>
  </PageTransition>
);
