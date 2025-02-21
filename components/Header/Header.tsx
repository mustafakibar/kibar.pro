'use client';

import { brandFont } from '@/app/(main)/fonts';
import { HOME_PATH } from '@/common/paths';
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
import { HeaderProps } from '.';
import { NavItems } from '../Nav';
import { ThemeSwitchButton } from '../ThemeSwitchButton';
import { Button } from '../ui/button';

const Header: React.FC<HeaderProps> = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrollGoingDown, setIsScrollGoingDown] = useState(false);
  const { scrollYProgress } = useScroll();
  const height = useTransform(scrollYProgress, [0.3, 1], [75, 55]);
  const opacity = useTransform(scrollYProgress, [0.3, 1], [1, 1]);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest > 0.1 && !isScrollGoingDown) {
      setIsScrollGoingDown(true);
    }

    if (latest <= 0.1 && isScrollGoingDown) {
      setIsScrollGoingDown(false);
    }
  });

  return (
    <motion.header
      className={cn(
        'bg-background sticky top-0 right-0 left-0 z-10 mx-auto mb-4 w-full transition-all duration-300',
        className,
      )}
      layout
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        height,
        opacity: isMenuOpen ? 1 : opacity,
        originX: 0,
        originY: 0,
      }}>
      <div className="container py-3">
        <div className="flex items-center justify-between">
          <Link
            href={HOME_PATH}
            passHref
            className={cn(
              'from-primary to-secondary inline-block touch-none -space-x-2.5 bg-linear-to-r from-25% to-90% bg-clip-text text-3xl text-transparent hover:cursor-pointer',
              brandFont.className,
            )}
            onClick={setIsMenuOpen.bind(this, false)}>
            <span>M</span>
            <span>K</span>
          </Link>

          <div className="flex shrink items-center max-md:gap-4 md:flex-row-reverse">
            {!isMenuOpen && <ThemeSwitchButton />}
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
                onClick={setIsMenuOpen.bind(this, !isMenuOpen)}>
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
                  onItemClicked={setIsMenuOpen.bind(this, false)}
                />
              </nav>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Header shadow */}
        <motion.div
          className={cn(
            'shadow-primary/20 dark:shadow-primary/20 absolute inset-0 -z-50 rounded-sm',
            {
              'shadow-xs': isScrollGoingDown,
              'bg-background': !isMenuOpen,
            },
          )}></motion.div>
      </div>
    </motion.header>
  );
};

export { Header };
