'use client';

import { cn } from '@/lib/utils';
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
      {NAV_ITEMS.map((item) => (
        <li
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
        </li>
      ))}
    </ul>
  );
};

export { NavItems };
