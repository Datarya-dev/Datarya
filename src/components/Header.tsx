import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { useEffect, useState } from 'react';
import { navItems } from '../data/site';
import { Icon } from './Icon';
import '../styles/corrections.css';

export function Header() {
  const { scrollY } = useScroll();
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);

  // El wordmark nace integrado al mismo eje visual del tagline y luego
  // se transforma progresivamente en la marca de navegación.
  const logoScale = useTransform(scrollY, [0, 520], reduceMotion ? [1, 1] : [1, 0.12]);
  const logoX = useTransform(scrollY, [0, 520], reduceMotion ? ['-48%', '-48%'] : ['-48%', '0%']);
  const logoY = useTransform(scrollY, [0, 520], reduceMotion ? ['9.2vh', '0.3rem'] : ['9.2vh', '0.3rem']);
  const logoLeft = useTransform(scrollY, [0, 520], reduceMotion ? ['50%', '50%'] : ['50%', '1rem']);
  const navOpacity = useTransform(scrollY, [80, 420], reduceMotion ? [1, 1] : [0, 1]);
  const headerOpacity = useTransform(scrollY, [0, 360], reduceMotion ? [1, 1] : [0, 1]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const jump = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="site-header" aria-label="Navegación principal">
      <div className="header-shell">
        <motion.div
          className="brand-flight"
          style={{ scale: logoScale, x: logoX, y: logoY, left: logoLeft }}
          aria-label="DATARYA"
        >
          DATARYA
        </motion.div>
        <motion.div className="nav-surface" style={{ opacity: headerOpacity }} aria-hidden="true" />
        <div className="header-controls">
          <motion.nav className="desktop-nav" style={{ opacity: navOpacity }} aria-label="Secciones">
            {navItems.map((item) => (
              <button key={item.id} type="button" onClick={() => jump(item.id)}>
                {item.label}
              </button>
            ))}
          </motion.nav>
          <div className="header-actions">
            <button
              type="button"
              className="mobile-menu-button"
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
              onClick={() => setOpen((value) => !value)}
            >
              <Icon name={open ? 'close' : 'menu'} size={20} />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-navigation"
            className="mobile-nav"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {navItems.map((item) => (
              <button key={item.id} type="button" onClick={() => jump(item.id)}>
                <span>{item.label}</span>
                <Icon name="arrow" size={18} />
              </button>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
