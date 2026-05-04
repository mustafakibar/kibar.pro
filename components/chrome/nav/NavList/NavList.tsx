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
  return (
    <ul
      className={cn(
        'flex list-none gap-1',
        variant === 'vertical'
          ? 'flex-col items-start gap-3'
          : 'flex-row items-center',
        className,
      )}>
      {NAV_ENTRIES.map((entry) => (
        <li key={entry.href}>
          <NavLink
            href={entry.href}
            label={entry.label}
            external={entry.external}
            active={pathname === entry.href}
            onClick={onItemClick}
            className={variant === 'vertical' ? 'text-lg' : ''}
          />
        </li>
      ))}
    </ul>
  );
};

export { NavList };
export type { NavListProps };
