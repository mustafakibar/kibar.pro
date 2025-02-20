'use client';

import { Moon, Sun, SunMoon } from '@/lib/icons';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { ThemeSwitchButtonProps } from '.';

const ThemeSwitchButton: React.FC<ThemeSwitchButtonProps> = ({
  className,
  ...props
}) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const changeTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <motion.div
      whileTap={{ scale: 0.7 }}
      className={cn(
        'rounded-lg p-2 text-gray-600 duration-300 hover:cursor-pointer hover:bg-foreground/25 dark:text-gray-400',
        className,
      )}
      onClick={changeTheme.bind(this)}
      {...props}>
      {!mounted ? (
        <SunMoon size={24} />
      ) : theme === 'light' ? (
        <Moon size={24} />
      ) : (
        <Sun size={24} />
      )}
    </motion.div>
  );
};

export { ThemeSwitchButton };
