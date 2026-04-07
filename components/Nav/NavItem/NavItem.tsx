import { navFont } from '@/app/fonts';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
export type NavItemProps = {
  text: string;
  href: string;
  blank?: boolean;
  active?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
};

const NavItem: React.FC<NavItemProps> = ({
  className,
  text,
  href,
  blank,
  active,
  onClick,
  ...props
}) => {
  return (
    <Link
      rel="noopener noreferrer"
      target={blank ? '_blank' : undefined}
      href={href}
      onClick={onClick}
      aria-current={active ? 'page' : undefined}
      className={cn(
        'group focus-visible:ring-primary relative flex rounded-xl px-1 transition-all duration-300 ease-in-out focus-visible:ring-2 focus-visible:outline-none',
        className,
        {
          'pointer-events-none select-none': active,
          'hover:bg-foreground/10': !active,
        },
      )}
      {...props}>
      <span
        className={cn(
          navFont.className,
          'p-2',
          {
            'text-accent-foreground opacity-90 duration-75 ease-linear': active,
          },
          {
            'opacity-40 group-hover:opacity-95': !active,
          },
        )}>
        {text}
        {active && (
          <span
            aria-hidden
            className="absolute bottom-1.5 left-0 hidden h-[3%] w-full md:inline-flex">
            <span className="bg-accent-foreground/80 mx-auto w-1/12 rounded-full" />
          </span>
        )}
      </span>
    </Link>
  );
};

export { NavItem };
