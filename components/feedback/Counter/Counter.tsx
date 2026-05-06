'use client';

import { useReducedMotion } from '@/hooks/useReducedMotion';
import { animate, useInView } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

type CounterProps = {
  value: number;
  /** Animation duration in seconds (default 1.6) */
  duration?: number;
  /** Custom number formatter (e.g. comma separators) */
  format?: (n: number) => string;
  prefix?: string;
  suffix?: string;
  className?: string;
};

const Counter = ({
  value,
  duration = 1.6,
  format,
  prefix = '',
  suffix = '',
  className,
}: CounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(reduced ? value : 0);

  useEffect(() => {
    if (reduced) {
      setDisplay(value);
      return;
    }
    if (!inView) return;
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, duration, reduced]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {format ? format(display) : display}
      {suffix}
    </span>
  );
};

export { Counter };
export type { CounterProps };
