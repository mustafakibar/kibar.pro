'use client';

import { HOME_PATH } from '@/app/constants';
import { brandFont } from '@/app/fonts';
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
      <div className="relative w-full px-[var(--container-padding)] py-3">
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

            {/* Large screen */}
            <nav className="hidden sm:flex">
              <NavItems />
            </nav>
          </div>
        </div>

        {/* Small screen */}
        {isMenuOpen && (
          <div className="sm:hidden">
            <nav className="absolute left-0 z-10 flex w-full flex-col bg-background py-6">
              <NavItems onItemClicked={setIsMenuOpen.bind(this, false)} />
            </nav>

            <div className="fixed inset-x-0 top-[7rem] h-screen w-screen bg-background/80"></div>
          </div>
        )}

        {/* Header shadow and background blur */}
        <div
          className={cn(
            'absolute inset-0 -z-10 w-full border-b-2 shadow-sm backdrop-blur backdrop-filter dark:bg-gray-950',
            {
              'opacity-90': !isMenuOpen,
            },
          )}></div>
      </div>
    </header>
  );
};

export { Header };
