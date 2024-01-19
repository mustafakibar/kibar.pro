'use client';

import { Moon, Sun, SunMoon } from 'lucide-react';
import { ThemeSwitchButtonProps } from '.';
import { Button } from '../ui/button';
import { useTheme } from 'next-themes';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { useEffect, useState } from 'react';

const ThemeModes = [
  {
    value: 'light',
    label: 'Light',
  },
  {
    value: 'dark',
    label: 'Dark',
  },
  {
    value: 'system',
    label: 'System',
  },
] as const;

const ThemeSwitchButton: React.FC<ThemeSwitchButtonProps> = ({
  className,
  ...props
}) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <DropdownMenu {...props}>
      <DropdownMenuTrigger asChild className={className} {...props}>
        {mounted ? (
          <Button
            variant='ghost'
            className='outline-none border-0 focus:!ring-transparent'>
            {theme === 'light' ? <Sun /> : <Moon />}
          </Button>
        ) : (
          <Button variant='ghost'>
            <SunMoon />
          </Button>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {ThemeModes.map((mode) => (
          <DropdownMenuCheckboxItem
            key={mode.value}
            checked={theme === mode.value}
            disabled={theme === mode.value}
            onClick={setTheme.bind(this, mode.value)}>
            {mode.label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeSwitchButton;
