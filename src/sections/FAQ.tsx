import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { faqs } from '../data/site';
import { Icon } from '../components/Icon';
import { SectionHeading } from '../components/SectionHeading';

export function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="section-light section-pad faq-section">
      <div className="page-shell faq-grid">
        <SectionHeading eyebrow="Preguntas frecuentes" title="Lo esencial, antes de empezar." description="Algunas respuestas para saber si Datarya encaja contigo." />
        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = open === index;
            return (
              <div className={`faq-item ${isOpen ? 'open' : ''}`} key={faq.question}>
                <button type="button" className="faq-trigger" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? -1 : index)}>
                  <span>{faq.question}</span><Icon name={isOpen ? 'close' : 'plus'} size={17} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? <motion.div className="faq-answer" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}><p>{faq.answer}</p></motion.div> : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
