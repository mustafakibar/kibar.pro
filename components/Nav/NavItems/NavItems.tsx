'use client';

import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { usePathname } from 'next/navigation';
import { NavItem } from '../NavItem';
import { NAV_ITEMS } from './constants';

const NavItems: React.FC<{
  className?: string;
  isMobile?: boolean;
  onItemClicked?: (text: string, href: string) => void;
}> = ({ className, isMobile = false, onItemClicked }) => {
  const pathname = usePathname();

  return (
    <ul
      className={cn(
        'flex list-none flex-col items-center justify-center gap-5 p-3 md:flex-row md:gap-1',
        className,
      )}>
      {NAV_ITEMS.filter(({ enabled = true }) => enabled).map((item, i) => (
        <motion.li
          animate={{
            x: [20, 0],
            opacity: [0, 1],
          }}
          transition={{
            delay: 0.3 + i * 0.1,
            duration: 0.3,
            ease: 'anticipate',
          }}
          layout
          className={cn({
            'w-full': isMobile,
          })}
          key={item.text.concat(item.href)}>
          <NavItem
            text={item.text}
            href={item.href}
            active={pathname === item.href}
            className={cn({
              'text-2xl': isMobile,
            })}
            onClick={onItemClicked?.bind(this, item.text, item.href)}
          />
        </motion.li>
      ))}
    </ul>
  );
};

export { NavItems };
