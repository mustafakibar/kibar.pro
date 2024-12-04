import { Moon, Sun, SunMoon } from '@/lib/icons';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { ThemeSwitchButtonProps } from '.';

const ThemeSwitchButton: React.FC<ThemeSwitchButtonProps> = ({
  className,
  ...props
}) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const changeTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <div
      className={cn(
        'inline-flex rounded-lg p-2 duration-300 hover:cursor-pointer hover:bg-foreground/25',
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
    </div>
  );
};

export { ThemeSwitchButton };
