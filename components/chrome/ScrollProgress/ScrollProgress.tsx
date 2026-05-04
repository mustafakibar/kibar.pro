'use client';

import { useScrollProgress } from '@/hooks/useScrollProgress';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

const ScrollProgress = () => {
  const { width, hide } = useScrollProgress();
  return (
    <div
      aria-hidden
      className={cn(
        'duration-slow pointer-events-none fixed inset-x-0 top-0 z-50 h-[3px] transition-opacity ease-out',
        hide ? 'opacity-0' : 'opacity-100',
      )}>
      <motion.div
        className="from-gold via-gold-bright to-gold h-full bg-gradient-to-r"
        style={{ width }}
      />
    </div>
  );
};

export { ScrollProgress };
