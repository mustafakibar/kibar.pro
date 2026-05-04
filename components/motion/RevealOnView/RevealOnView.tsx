'use client';

import { useReducedMotion } from '@/hooks/useReducedMotion';
import { duration, easing } from '@/lib/tokens';
import * as motion from 'motion/react-client';
import type { ReactNode } from 'react';

type RevealOnViewProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
  once?: boolean;
};

const RevealOnView = ({
  children,
  delay = 0,
  className,
  y = 8,
  once = true,
}: RevealOnViewProps) => {
  const reduced = useReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-10% 0px' }}
      transition={{ duration: duration.slow, delay, ease: easing.out }}>
      {children}
    </motion.div>
  );
};

export { RevealOnView };
export type { RevealOnViewProps };
