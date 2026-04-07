'use client';

import { brandFont } from '@/app/fonts';
import { HOME_PATH } from '@/lib/constants/paths';
import { BurgerMenu, BurgerMenuOpened } from '@/lib/icons';
import { cn } from '@/lib/utils';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'motion/react';
import Link from 'next/link';
import React, { useState } from 'react';
import { NavItems } from '../Nav';
import { Button } from '../ui/button';

export type HeaderProps = {
  className?: string;
};

const Header: React.FC<HeaderProps> = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const height = useTransform(scrollYProgress, [0, 0.15], [76, 60]);
  const backdropOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 0.85]);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setIsScrolled(latest > 0.05);
  });

  return (
    <motion.header
      className={cn(
        'sticky top-0 right-0 left-0 z-20 mx-auto mb-4 w-full',
        className,
      )}
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={{ height }}>
      <motion.div
        aria-hidden
        className="bg-background/80 absolute inset-0 -z-10 backdrop-blur-md"
        style={{ opacity: isMenuOpen ? 1 : backdropOpacity }}
      />
      <div className="container py-3">
        <div className="flex items-center justify-between">
          <Link
            href={HOME_PATH}
            passHref
            className={cn(
              'from-primary to-secondary inline-block touch-none -space-x-1.5 bg-linear-to-r from-25% to-90% bg-clip-text text-3xl text-transparent hover:cursor-pointer',
              brandFont.className,
            )}
            onClick={() => setIsMenuOpen(false)}>
            <span>m</span>
            <span className="text-4xl">k</span>
          </Link>

          <div className="flex shrink items-center max-md:gap-4 md:flex-row-reverse">
            {/* {!isMenuOpen && <ThemeSwitchButton />} */}
            <motion.div
              whileTap={{ x: -4, opacity: 0.8 }}
              transition={{
                duration: 0.2,
                ease: 'easeIn',
              }}>
              <Button
                className="md:hidden"
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen((open) => !open)}>
                {isMenuOpen ? (
                  <BurgerMenuOpened size={32} />
                ) : (
                  <BurgerMenu size={32} />
                )}
              </Button>
            </motion.div>

            <nav className="hidden md:flex">
              <NavItems isMobile={isMenuOpen} />
            </nav>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden"
              animate={{ opacity: [0, 1] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}>
              <nav className="bg-background absolute left-0 z-10 h-screen w-full py-6 opacity-[.98]">
                <NavItems
                  isMobile={isMenuOpen}
                  onItemClicked={() => setIsMenuOpen(false)}
                />
              </nav>
            </motion.div>
          )}
        </AnimatePresence>

        <div
          aria-hidden
          className={cn(
            'border-foreground/10 pointer-events-none absolute inset-x-0 bottom-0 border-b transition-opacity duration-300',
            isScrolled || isMenuOpen ? 'opacity-100' : 'opacity-0',
          )}
        />
      </div>
    </motion.header>
  );
};

export { Header };
