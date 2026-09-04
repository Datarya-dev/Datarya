import { motion, useInView, useReducedMotion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

export function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const visible = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(reduceMotion ? value : '—');

  useEffect(() => {
    if (!visible || reduceMotion) {
      if (visible) setDisplay(value);
      return;
    }

    const match = value.match(/([^0-9]*)([0-9,.]+)(.*)/);
    if (!match) {
      setDisplay(value);
      return;
    }

    const [, prefix, raw, suffix] = match;
    const finalNumber = Number(raw.replace(/,/g, ''));
    const start = performance.now();
    const duration = 850;

    const frame = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(finalNumber * eased);
      setDisplay(`${prefix}${current.toLocaleString('en-US')}${suffix}`);
      if (progress < 1) requestAnimationFrame(frame);
    };

    requestAnimationFrame(frame);
  }, [reduceMotion, value, visible]);

  return <motion.span ref={ref}>{display}</motion.span>;
}
