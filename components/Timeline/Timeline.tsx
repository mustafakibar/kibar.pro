'use client';

import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { TimelineProps } from '.';

const Timeline: React.FC<TimelineProps> = ({ children, className }) => {
  return (
    // TODO
    <motion.div className={cn(className)} layout>
      {children}
    </motion.div>
  );
};

export { Timeline };
