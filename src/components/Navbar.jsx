import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import WhatsAppBtn from './WhatsAppBtn';
import '../styles/Navbar.css';

const Navbar = ({ currentPage, navigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigate = (page) => {
    navigate(page);
    setIsMenuOpen(false);
  };

  const navPages = ['home', 'paquetes', 'complementos', 'contratacion'];
  const labels = { home: 'Inicio', paquetes: 'Paquetes', complementos: 'Complementos', contratacion: 'Contratación' };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-wrapper">
          {/* Logo */}
          <div className="navbar-logo group" onClick={() => handleNavigate('home')}>
            <Logo />
            <div>
              <h1 className="navbar-logo-title">MyM</h1>
              <p className="navbar-logo-subtitle">Decoración</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="navbar-desktop-menu">
            {navPages.map(page => (
              <button
                key={page}
                onClick={() => handleNavigate(page)}
                className={`navbar-link ${currentPage === page ? 'navbar-link-active' : ''}`}
              >
                {labels[page]}
                {currentPage === page && <motion.div layoutId="activeTab" className="navbar-active-indicator" />}
              </button>
            ))}
            <WhatsAppBtn label="Pedir Presupuesto" text="¡Hola! Quisiera realizar una consulta sobre decoraciones." className="px-5 py-2 text-sm" />
          </div>

          {/* Mobile Menu Button */}
          <div className="navbar-mobile-toggle">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="navbar-hamburger">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="navbar-mobile-wrapper"
          >
            <div className="navbar-mobile-menu">
              {navPages.map(page => (
                <button key={page} onClick={() => handleNavigate(page)} className="navbar-mobile-link">
                  {labels[page]}
                </button>
              ))}
              <WhatsAppBtn label="Pedir Presupuesto" text="¡Hola! Quisiera consultar..." className="w-full py-3 mt-4" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
