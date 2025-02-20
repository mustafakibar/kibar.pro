'use client';

import { cn } from '@/lib/utils';
import { motion, useMotionValueEvent, useScroll } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { TopProgressBarProps } from '.';

const TopProgressBar: React.FC<TopProgressBarProps> = () => {
  const [enableHideAnim, setEnableHideAnim] = useState(false);
  const { scrollYProgress } = useScroll();
  const lastTimeout = useRef<NodeJS.Timeout | null>(null);

  useMotionValueEvent(scrollYProgress, 'change', () => {
    if (lastTimeout.current) {
      clearTimeout(lastTimeout.current);
      lastTimeout.current = null;
    }

    setEnableHideAnim(false);
    lastTimeout.current = setTimeout(() => setEnableHideAnim(true), 1000);
  });

  useEffect(() => {
    return () => {
      if (lastTimeout.current) {
        clearTimeout(lastTimeout.current);
      }
    };
  }, []);

  return (
    <motion.div
      id="scroll-indicator"
      className={cn(
        'fixed left-0 right-0 top-0 z-20 h-1 bg-secondary dark:bg-primary',
        {
          'h-0.5 opacity-10 transition-all duration-700 ease-in':
            enableHideAnim,
        },
      )}
      transition={{ ease: 'anticipate' }}
      style={{
        scaleX: scrollYProgress,
        originX: 0,
      }}
    />
  );
};

export { TopProgressBar };
