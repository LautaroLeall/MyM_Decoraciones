import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageSquare } from 'lucide-react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const navLinks = [
    { path: '/', label: 'Inicio' },
    { path: '/paquetes', label: 'Paquetes' },
    { path: '/complementos', label: 'Complementos' },
    { path: '/contratacion', label: 'Contratación' }
  ];

  const isActive = (path) => pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-wrapper">

          {/* 🔹 Logo */}
          <Link to="/" className="navbar-logo group">
            <div>
              <img src="./logo_MyM.png" alt="Logo MyM" className='w-20 h-20 rounded-full' />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="navbar-desktop-menu">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`navbar-link ${isActive(link.path) ? 'navbar-link-active' : ''}`}
              >
                {link.label}
              </Link>
            ))}

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`https://wa.me/5493814430041?text=${encodeURIComponent("¡Hola! Quisiera realizar una consulta general.")}`}
              target="_blank" rel="noopener noreferrer"
              className="navbar-contact-btn px-5 py-2 text-sm"
            >
              <MessageSquare size={16} /> Contactar
            </motion.a>
          </div>

          {/* Mobile Button */}
          <div className="navbar-mobile-toggle">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="navbar-hamburger"
            >
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
            className="navbar-mobile-menu"
          >
            <div className="navbar-mobile-links">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`navbar-mobile-link ${isActive(link.path) ? 'navbar-mobile-link-active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <div className="mt-4">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={`https://wa.me/5493814430041?text=${encodeURIComponent("¡Hola! Quisiera realizar una consulta general.")}`}
                  target="_blank" rel="noopener noreferrer"
                  className="navbar-contact-btn w-full py-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <MessageSquare size={18} /> Contactar
                </motion.a>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;