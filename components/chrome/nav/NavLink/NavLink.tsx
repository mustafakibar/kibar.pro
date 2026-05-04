'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';

type NavLinkProps = {
  href: string;
  label: string;
  active?: boolean;
  external?: boolean;
  className?: string;
  onClick?: () => void;
};

const NavLink = ({
  href,
  label,
  active,
  external,
  className,
  onClick,
}: NavLinkProps) => (
  <Link
    href={href}
    target={external ? '_blank' : undefined}
    rel={external ? 'noopener noreferrer' : undefined}
    onClick={onClick}
    aria-current={active ? 'page' : undefined}
    className={cn(
      'group font-body duration-fast relative inline-flex px-2 py-1 text-sm transition-colors ease-out',
      active ? 'text-ink pointer-events-none' : 'text-ink-muted hover:text-ink',
      className,
    )}>
    <span className="relative">
      {label}
      <span
        aria-hidden
        className={cn(
          'bg-gold duration-normal absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 transition-transform ease-out',
          active ? 'scale-x-100' : 'group-hover:scale-x-100',
        )}
      />
    </span>
  </Link>
);

export { NavLink };
export type { NavLinkProps };
