import { navFont } from '@/app/(main)/fonts';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
import { NavItemProps } from '.';

const NavItem: React.FC<NavItemProps> = (
  { text, href, className, active, onClick, ...props },
  ref,
) => {
  return (
    <Link
      href={href}
      shallow
      className={cn({
        'pointer-events-none cursor-none select-none': active,
      })}>
      <div
        onClick={onClick}
        ref={ref}
        className={cn(
          'relative flex px-1 transition-all duration-300 ease-in-out hover:rounded-xl md:text-lg',
          className,
          {
            'hover:bg-foreground/10': !active,
          },
        )}
        {...props}>
        <span
          className={cn(
            navFont.className,
            'p-4',
            {
              'text-accent-foreground opacity-90 duration-75 ease-linear':
                active,
            },
            {
              'opacity-40 hover:opacity-95': !active,
            },
          )}>
          {text}
          {active && (
            <div className="absolute bottom-3 left-0 hidden h-[3%] w-full md:inline-flex">
              <div className="mx-auto w-1/4 rounded-full bg-accent-foreground/80" />
            </div>
          )}
        </span>
      </div>
    </Link>
  );
};

export { NavItem };
