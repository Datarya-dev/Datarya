import { motion } from 'motion/react';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';

export function About() {
  return (
    <section id="sobre-mi" className="section-light section-pad about-section">
      <div className="page-shell about-grid">
        <div className="about-portrait-wrap">
          <Reveal>
            <div className="about-portrait" role="img" aria-label="Placeholder para fotografía del fundador">
              <img src="/Datarya/images/founder-placeholder.svg" alt="Placeholder de fotografía del fundador; reemplazar posteriormente" loading="lazy" width="720" height="880" />
              <span>FOTO DEL FUNDADOR · PLACEHOLDER</span>
            </div>
          </Reveal>
        </div>
        <div className="about-copy">
          <SectionHeading eyebrow="Sobre mí" title="Hola, soy Diego." description="Estudiante y apasionado por la tecnología, los datos y la inteligencia artificial." />
          <Reveal>
            <p>Creé Datarya con la idea de acercar estas herramientas a negocios que quieren entender mejor su información y mejorar sus procesos.</p>
            <p>Me interesa construir proyectos que mezclen tecnología con problemas reales: datos, automatización, productos digitales y experimentación.</p>
            <p>Datarya nace de esa curiosidad: hacer que lo técnico se sienta claro, útil y cercano.</p>
          </Reveal>
          <motion.div className="about-signoff" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>DATARYA / desde aquí</motion.div>
        </div>
      </div>
    </section>
  );
}
