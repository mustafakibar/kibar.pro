'use client';

import { NavList } from '@/components/chrome/nav/NavList';
import { Button } from '@/components/ui/button';
import { HOME_PATH } from '@/lib/constants/paths';
import { BurgerMenu, BurgerMenuOpened } from '@/lib/icons';
import { duration, easing } from '@/lib/tokens';
import { cn } from '@/lib/utils';
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'motion/react';
import Link from 'next/link';
import { useState } from 'react';
import { Monogram } from './Monogram';

const SiteHeader = ({ className }: { className?: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const height = useTransform(scrollYProgress, [0, 0.15], [80, 56]);
  const backdropOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 0.92]);
  const backdropSaturate = useTransform(scrollYProgress, [0, 0.15], [1, 1.4]);
  const backdropFilter = useMotionTemplate`saturate(${backdropSaturate})`;
  const monogramScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.92]);
  const containerPaddingY = useTransform(scrollYProgress, [0, 0.15], [12, 6]);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setIsScrolled(latest > 0.05);
  });

  return (
    <motion.header
      className={cn('sticky top-0 z-20 mx-auto w-full', className)}
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: duration.slow, ease: easing.out }}
      style={{ height }}>
      <motion.div
        aria-hidden
        className="bg-canvas/80 absolute inset-0 -z-10 backdrop-blur-md"
        style={{
          opacity: isMenuOpen ? 1 : backdropOpacity,
          backdropFilter,
          WebkitBackdropFilter: backdropFilter,
        }}
      />
      <motion.div
        className="container flex h-full items-center justify-between"
        style={{
          paddingTop: containerPaddingY,
          paddingBottom: containerPaddingY,
        }}>
        <motion.div style={{ scale: monogramScale }} className="origin-left">
          <Link
            href={HOME_PATH}
            aria-label="kibar.pro home"
            onClick={() => setIsMenuOpen(false)}
            className="focus-visible:ring-gold/50 rounded-sm text-3xl outline-none focus-visible:ring-1">
            <Monogram />
          </Link>
        </motion.div>

        <nav
          id="primary-navigation"
          aria-label="Primary"
          className="hidden md:block">
          <NavList />
        </nav>

        <Button
          className="md:hidden"
          variant="ghost"
          size="icon"
          aria-label={
            isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}>
          {isMenuOpen ? (
            <BurgerMenuOpened className="size-7" />
          ) : (
            <BurgerMenu className="size-7" />
          )}
        </Button>
      </motion.div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-navigation"
            className="md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: duration.normal, ease: easing.inOut }}>
            <nav
              aria-label="Mobile primary"
              className="bg-canvas/95 absolute left-0 z-10 h-dvh w-full px-6 py-10">
              <NavList
                variant="vertical"
                onItemClick={() => setIsMenuOpen(false)}
              />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <span
        aria-hidden
        className={cn(
          'duration-normal via-gold/40 pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent to-transparent transition-opacity',
          isScrolled || isMenuOpen ? 'opacity-100' : 'opacity-0',
        )}
      />
    </motion.header>
  );
};

export { SiteHeader };
