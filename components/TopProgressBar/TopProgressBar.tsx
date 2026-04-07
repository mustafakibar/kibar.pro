'use client';

import { cn } from '@/lib/utils';
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react';
import { useEffect, useRef, useState } from 'react';
export type TopProgressBarProps = {};

const TopProgressBar: React.FC<TopProgressBarProps> = () => {
  const [enableHideAnim, setEnableHideAnim] = useState(false);
  const { scrollYProgress } = useScroll();
  const smoothed = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    mass: 0.3,
  });
  const width = useTransform(smoothed, [0, 0.985], ['0%', '100%'], {
    clamp: true,
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

    if (y >= 0.985) {
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
    <div
      id="top-progress-bar"
      className={cn(
        'pointer-events-none fixed top-0 right-0 left-0 z-50 h-[3px] transition-opacity duration-500 ease-out',
        enableHideAnim ? 'opacity-0' : 'opacity-100',
      )}>
      <motion.div
        className="from-primary via-primary to-accent-foreground h-full bg-linear-to-r shadow-[0_0_14px_rgba(255,255,255,0.5)]"
        style={{ width }}
      />
    </div>
  );
};

export { TopProgressBar };
