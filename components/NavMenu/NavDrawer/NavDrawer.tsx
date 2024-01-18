'use client';

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { NavItems } from '../NavItem';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const NavDrawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button variant='ghost'>
          <Menu />
        </Button>
      </DrawerTrigger>
      <DrawerContent className='h-3/4'>
        <DrawerHeader className='flex flex-col gap-5 items-center justify-center'>
          <NavItems className='p-4 text-2xl' />
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};

export default NavDrawer;
