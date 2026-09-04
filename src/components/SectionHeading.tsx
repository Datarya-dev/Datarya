import { motion } from 'motion/react';
import type { ReactNode } from 'react';
interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  dark?: boolean;
}

export function SectionHeading({ eyebrow, title, description, dark = false }: SectionHeadingProps) {
  return (
    <div className={`section-heading ${dark ? 'text-on-dark' : ''}`}>
      <motion.p
        className="eyebrow"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.45 }}
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        className="display-heading"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.65, delay: 0.05 }}
      >
        {title}
      </motion.h2>
      {description ? (
        <motion.p
          className="section-description"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.55 }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          {description}
        </motion.p>
      ) : null}
    </div>
  );
}
