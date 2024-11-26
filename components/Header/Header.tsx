'use client';

import { HOME_PATH } from '@/app/(main)/constants';
import { brandFont } from '@/app/(main)/fonts';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import { HeaderProps } from '.';
import { NavItems } from '../Nav';
import { ThemeSwitchButton } from '../ThemeSwitchButton';
import { Button } from '../ui/button';

const Header: React.FC<HeaderProps> = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={cn(
        'sticky inset-x-0 top-0 z-10 mx-auto mb-4 w-full',
        className,
      )}>
      <div className="relative w-full">
        <div className="container py-3">
          <div className="flex items-center justify-between">
            <Link
              href={HOME_PATH}
              passHref
              className={cn(
                'inline-block touch-none bg-gradient-to-r from-primary to-secondary bg-clip-text px-1 text-3xl text-transparent md:text-4xl lg:text-5xl',
                brandFont.className,
              )}>
              kibAr
            </Link>
            <div className="flex flex-shrink items-center justify-center gap-3 sm:flex-row-reverse lg:gap-8">
              <ThemeSwitchButton />
              <Button
                className="flex sm:hidden"
                variant="ghost"
                size="icon"
                onClick={setIsMenuOpen.bind(this, !isMenuOpen)}>
                {isMenuOpen ? <X /> : <Menu />}
              </Button>

              <nav className="hidden sm:flex">
                <NavItems />
              </nav>
            </div>
          </div>

          {isMenuOpen && (
            <div className="sm:hidden">
              <nav className="absolute left-0 z-10 flex w-full flex-col bg-transparent py-6">
                <NavItems onItemClicked={setIsMenuOpen.bind(this, false)} />
              </nav>

              {/* Background overlay */}
              <div
                className="fixed inset-x-0 top-[4.9rem] h-screen w-screen bg-background opacity-95"
                onClick={setIsMenuOpen.bind(this, false)}
              />
            </div>
          )}

          {/* Header shadow */}
          <div
            className={cn(
              'absolute inset-0 -z-10 w-full border-b-2 shadow-sm',
              {
                'bg-background': isMenuOpen,
                'opacity-90 backdrop-blur backdrop-filter': !isMenuOpen,
              },
            )}></div>
        </div>
      </div>
    </header>
  );
};

export { Header };
