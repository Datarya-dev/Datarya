import { motion, useReducedMotion } from 'motion/react';
import { processSteps } from '../data/site';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';

export function Process() {
  const reduceMotion = useReducedMotion();
  return (
    <section id="proceso" className="section-dark section-pad process-section">
      <div className="page-shell">
        <SectionHeading dark eyebrow="El proceso" title="¿Cómo funciona?" description="Sin rodeos. Primero entendemos el problema; después construimos algo que sirva." />
        <div className="process-grid">
          {processSteps.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.05}>
              <motion.article className="process-step" whileHover={reduceMotion ? undefined : { y: -4 }}>
                <div className="process-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                <span className="process-line" aria-hidden="true" />
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
