'use client';

import { Moon, Sun, SunMoon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { ThemeSwitchButtonProps } from '.';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

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
        <Button
          variant="ghost"
          className="w-9 border-0 px-0 outline-none focus:!ring-transparent">
          {!mounted ? <SunMoon /> : theme === 'light' ? <Moon /> : <Sun />}
        </Button>
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

export { ThemeSwitchButton };
