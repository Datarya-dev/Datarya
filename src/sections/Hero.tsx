import { motion, useReducedMotion } from 'motion/react';
import { Icon } from '../components/Icon';

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="inicio" className="hero section-dark">
      <div className="hero-grid" aria-hidden="true" />

      <div className="hero-content page-shell">
        <motion.div
          className="hero-kicker"
          initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
        >
          Análisis · IA · Web
        </motion.div>

        <motion.div
          className="hero-tagline"
          initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.34 }}
        >
          <span>Tu negocio genera datos.</span>
          <span>Nosotros les damos sentido.</span>
        </motion.div>

        <div className="hero-bottom">
          <span>Agencia tecnológica independiente</span>
          <button type="button" onClick={() => document.getElementById('analisis')?.scrollIntoView({ behavior: 'smooth' })}>
            Explorar
            <Icon name="arrow" size={18} />
          </button>
        </div>
      </div>

      <div className="hero-scroll-note">Desplázate para descubrir</div>
    </section>
  );
}
