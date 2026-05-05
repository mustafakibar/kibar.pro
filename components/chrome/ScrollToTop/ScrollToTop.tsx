'use client';

import { ChevronRight } from '@/lib/icons';
import { duration, easing } from '@/lib/tokens';
import { cn } from '@/lib/utils';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'motion/react';
import { useState } from 'react';

const ScrollToTop = ({ className }: { className?: string }) => {
  const [show, setShow] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (y) => {
    setShow(y > 600);
  });

  const onClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          aria-label="Scroll to top"
          onClick={onClick}
          initial={{ opacity: 0, y: 16, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.92 }}
          transition={{ duration: duration.normal, ease: easing.out }}
          className={cn(
            'border-gold/40 bg-canvas/85 text-gold duration-fast hover:border-gold hover:bg-gold/15 focus-visible:ring-gold/60 fixed right-6 bottom-6 z-30 flex size-11 items-center justify-center rounded-full border backdrop-blur-md transition-colors focus-visible:ring-2 focus-visible:outline-none',
            'shadow-[0_8px_24px_-12px_oklch(0_0_0/0.6)]',
            className,
          )}>
          <ChevronRight className="size-5 -rotate-90" strokeWidth={2} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export { ScrollToTop };
