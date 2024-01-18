'use client';

import { Moon, Sun } from 'lucide-react';
import { ThemeSwitchButtonProps } from '.';
import { Button } from '../ui/button';
import { useTheme } from 'next-themes';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { useEffect, useState } from 'react';

const ThemeSwitchButton: React.FC<ThemeSwitchButtonProps> = ({
  className,
  ...props
}) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <DropdownMenu {...props}>
      <DropdownMenuTrigger asChild className={className} {...props}>
        <Button variant='ghost'>
          {theme === 'light' ? <Sun /> : <Moon />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={setTheme.bind(this, 'light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={setTheme.bind(this, 'dark')}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={setTheme.bind(this, 'system')}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeSwitchButton;
