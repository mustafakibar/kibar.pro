'use client';

import React, { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Moon, Sun } from 'lucide-react';
import { ThemeSwitchButtonProps } from '.';

const ThemeSwitchButton: React.FC<ThemeSwitchButtonProps> = ({
  className,
  ...props
}) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  return (
    <DropdownMenu {...props}>
      <DropdownMenuTrigger className={className} {...props}>
        {theme === 'light' ? <Sun /> : <Moon />}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={setTheme.bind(this, 'light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={setTheme.bind(this, 'dark')}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => {}}>System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeSwitchButton;
