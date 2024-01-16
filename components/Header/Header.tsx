import React from 'react';
import Image from 'next/image';
import { ThemeSwitchButton } from '../ThemeSwitchButton';
import { NavMenu } from '../NavMenu';

const Header: React.FC = () => {
  return (
    <header className='w-full mx-auto flex p-4 items-end justify-between'>
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

      <div className='flex flex-shrink gap-5'>
        <ThemeSwitchButton />
        <NavMenu />
      </div>
    </header>
  );
};

export { Header };
