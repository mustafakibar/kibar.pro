import React from 'react';
import Image from 'next/image';
import { ThemeSwitchButton } from '../ThemeSwitchButton';
import { NavMenu } from '../NavMenu';
import { HeaderProps } from '.';
import { cn } from '@/lib/utils';

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header
      className={cn(
        'w-full sticky top-0 mx-auto inset-x-0 flex p-4 items-end justify-between',
        className
      )}>
      <div className='relative'>
        <span className='absolute bottom-2 right-2 size-4 text-2xl font-extrabold'>
          Kibar
        </span>
        <Image
          className='w-12 h-12'
          src='/crab.png'
          width={512}
          height={512}
          alt='kibar.pro Logo'
        />
      </div>

      <div className='flex flex-shrink md:flex-row-reverse'>
        <ThemeSwitchButton />
        <NavMenu />
      </div>
    </header>
  );
};

export { Header };
