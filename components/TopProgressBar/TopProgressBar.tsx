'use client';

import { cn } from '@/lib/utils';
import { motion, useMotionValueEvent, useScroll } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { TopProgressBarProps } from '.';

const TopProgressBar: React.FC<TopProgressBarProps> = () => {
  const [enableHideAnim, setEnableHideAnim] = useState(false);
  const { scrollYProgress } = useScroll({
    offset: ['start start', 'end end'],
  });
  const lastTimeout = useRef<NodeJS.Timeout | null>(null);

  useMotionValueEvent(scrollYProgress, 'change', (y) => {
    if (lastTimeout.current) {
      if (enableHideAnim) {
        setEnableHideAnim(false);
      }

      clearTimeout(lastTimeout.current);
      lastTimeout.current = null;
    }

    if (y >= 0.99) {
      if (!enableHideAnim) {
        setEnableHideAnim(true);
        return;
      }
    }

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
      id="top-progress-bar"
      className={cn(
        'from-primary to-secondary fixed top-0 right-0 left-0 z-20 h-0.5 bg-linear-to-r from-25% to-90% shadow-md',
        {
          'h-[1px] opacity-10 transition-all duration-700 ease-in':
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
