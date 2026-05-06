'use client';

import { NavLink } from '@/components/chrome/nav/NavLink';
import { NAV_ENTRIES } from '@/lib/data/nav.data';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

type NavListProps = {
  className?: string;
  variant?: 'horizontal' | 'vertical';
  onItemClick?: () => void;
};

const NavList = ({
  className,
  variant = 'horizontal',
  onItemClick,
}: NavListProps) => {
  const pathname = usePathname();
  const isVertical = variant === 'vertical';
  return (
    <ul
      className={cn(
        'flex list-none',
        isVertical
          ? 'flex-col items-stretch gap-1'
          : 'flex-row items-center gap-1',
        className,
      )}>
      {NAV_ENTRIES.map((entry) => (
        <li key={entry.href} className={isVertical ? 'w-full' : undefined}>
          <NavLink
            href={entry.href}
            label={entry.label}
            external={entry.external}
            active={pathname === entry.href}
            onClick={onItemClick}
            className={
              isVertical
                ? 'flex w-full items-center justify-between px-3 py-3 text-lg'
                : ''
            }
          />
        </li>
      ))}
    </ul>
  );
};

export { NavList };
export type { NavListProps };
