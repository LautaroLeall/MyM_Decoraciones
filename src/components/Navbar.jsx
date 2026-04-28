import { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  // Controla apertura/cierre del menú mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Detecta scroll para cambiar estilos del navbar
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'Inicio' },
    { path: '/paquetes', label: 'Paquetes' },
    { path: '/complementos', label: 'Complementos' },
    { path: '/contratacion', label: 'Proceso' },
  ];

  const wpUrl =
    'https://wa.me/5493814430041?text=' +
    encodeURIComponent(
      '¡Hola MyM! ✨ Vengo de la web y quiero consultar por una decoración.'
    );

  return (
    <header className={`navbar-header fixed ${scrolled ? 'scrolled' : 'transparent'}`}>
      <div className="navbar-container mx-auto px-8">
        <div className="navbar-inner flex justify-between items-center">
          <div
            className="navbar-logo-group flex items-center"
            onClick={() => {
              setIsMenuOpen(false);
              navigate('/');
            }}
          >
            <div className="navbar-logo-image-container flex items-center">
              <img
                src="/logo-MyM-sinFondo.png"
                alt="MyM Decoraciones Logo"
                className="navbar-logo-img"
              />
            </div>
          </div>

          {/* MENÚ DESKTOP */}
          <nav className="navbar-desktop-nav items-center gap-12">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `navbar-nav-link relative ${isActive ? 'active' : 'inactive'}`
                }
              >
                {link.label}

                {/* Indicador animado debajo del link activo */}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navIndicator"
                    className="navbar-link-indicator absolute"
                  />
                )}
              </NavLink>
            ))}

            {/* Botón WhatsApp Desktop */}
            <motion.a
              whileTap={{ scale: 0.95 }}
              href={wpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-cta-button inline-flex items-center justify-center gap-2 px-5 py-3.5"
            >
              <MessageCircle size={18} />
              Contactar
            </motion.a>
          </nav>

          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="navbar-mobile-toggle block"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MENÚ MOBILE ANIMADO */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="navbar-mobile-menu block absolute mt-3"
          >
            <div className="navbar-mobile-inner flex flex-col gap-2 py-5 px-10">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}

                  className={({ isActive }) =>
                    `navbar-mobile-link block text-center ${isActive ? 'active' : 'inactive'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}

              {/* Botón WhatsApp Mobile */}
              <motion.a
                whileTap={{ scale: 0.95 }}
                href={wpUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="navbar-mobile-cta flex items-center justify-center gap-3 px-auto py-3.5 mt-3"
              >
                <MessageCircle size={20} />
                Contactar
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;