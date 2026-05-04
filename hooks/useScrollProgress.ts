'use client';

import { useScroll, useSpring, useTransform } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

const useScrollProgress = () => {
  const [hide, setHide] = useState(false);
  const { scrollYProgress } = useScroll();
  const smoothed = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    mass: 0.3,
  });
  const width = useTransform(smoothed, [0, 0.985], ['0%', '100%'], {
    clamp: true,
  });
  const lastTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const unsub = scrollYProgress.on('change', (y) => {
      if (lastTimeout.current) {
        clearTimeout(lastTimeout.current);
        lastTimeout.current = null;
        if (hide) setHide(false);
      }
      if (y >= 0.985 && !hide) {
        setHide(true);
        return;
      }
      lastTimeout.current = setTimeout(() => setHide(true), 1000);
    });
    return () => {
      unsub();
      if (lastTimeout.current) clearTimeout(lastTimeout.current);
    };
  }, [hide, scrollYProgress]);

  return { width, hide };
};

export { useScrollProgress };
