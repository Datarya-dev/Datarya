import { motion } from 'motion/react';
import { labProjects } from '../data/site';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';

export function Lab() {
  return (
    <section id="lab" className="section-wine section-pad">
      <div className="page-shell">
        <SectionHeading dark eyebrow="Exploración" title="DATARYA LAB" description="Experimentamos con datos, IA y tecnología para convertir ideas en demostraciones que se puedan ver y probar." />
        <div className="lab-grid">
          {labProjects.map((project, index) => (
            <Reveal key={project.number} delay={index * 0.05}>
              <motion.article className="lab-card" whileHover={{ y: -6 }} transition={{ duration: 0.25 }}>
                <div className="lab-card-top"><span>{project.number}</span><span>PROYECTO DEMOSTRATIVO</span></div>
                <div className={`lab-visual lab-visual-${index + 1}`} aria-hidden="true">
                  <div className="lab-visual-inner"><span>{project.tag}</span><i /></div>
                </div>
                <h3>{project.title}</h3>
                <p>Exploración de producto y experiencia. No representa a un cliente real ni resultados comerciales.</p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
