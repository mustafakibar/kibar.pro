'use client';

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { NavItems } from '../NavItem';
import { useState } from 'react';

const NavDrawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Drawer fixed open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <button>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'></path>
          </svg>
        </button>
      </DrawerTrigger>
      <DrawerContent className='h-full w-3/4 m-0 p-0 left-1/4 rounded-r-none rounded-l-xl border-none'>
        <DrawerHeader>
          <button
            className='absolute right-0 mx-7'
            onClick={() => setIsOpen(false)}>
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'></path>
            </svg>
          </button>

          <NavItems className='flex flex-col text-4xl font-semibold' />
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};

export default NavDrawer;
