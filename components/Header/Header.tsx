import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';
import { HeaderProps } from '.';
import { NavMenu } from '../Nav';
import { ThemeSwitchButton } from '../ThemeSwitchButton';

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header
      className={cn(
        'sticky inset-x-0 top-0 mx-auto flex w-full items-end justify-between p-4',
        className,
      )}>
      <div className="relative">
        <span className="absolute bottom-2 right-2 size-4 text-2xl font-extrabold">
          Kibar
        </span>
        <Image
          className="h-12 w-12"
          src="/crab.png"
          width={512}
          height={512}
          alt="kibar.pro Logo"
        />
      </div>

      <div className="flex flex-shrink items-center justify-center gap-3 sm:flex-row-reverse lg:gap-8">
        <ThemeSwitchButton />
        <NavMenu />
      </div>
    </header>
  );
};

export { Header };
