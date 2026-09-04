import { motion } from 'motion/react';
import { services } from '../data/site';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';

export function WhatWeDo() {
  return (
    <section id="que-hacemos" className="section-light section-pad">
      <div className="page-shell">
        <SectionHeading
          eyebrow="Qué hacemos"
          title="Tecnología que tiene sentido para tu negocio."
          description="No necesitas una montaña de herramientas. Necesitas entender qué tienes, qué puedes mejorar y qué vale la pena automatizar."
        />

        <div className="service-list">
          {services.map((service, index) => (
            <Reveal key={service.number} delay={index * 0.05}>
              <motion.a
                href={`#${service.featured ? 'analisis' : service.number === '02' ? 'ia' : 'web'}`}
                className={`service-row ${service.featured ? 'service-row-featured' : ''}`}
                whileHover={{ x: 8 }}
                transition={{ duration: 0.25 }}
              >
                <span className="service-number">{service.number}</span>
                <div className="service-title-block">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
                <span className="service-arrow">↗</span>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
