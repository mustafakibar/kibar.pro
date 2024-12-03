import { navFont } from '@/app/(main)/fonts';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
import { NavItemProps } from '.';

const NavItem: React.FC<NavItemProps> = (
  { text, href, className, active, onClick },
  ref,
) => {
  return (
    <Link href={href} shallow>
      <div
        onClick={onClick}
        ref={ref}
        className={cn(
          'relative flex w-full items-center justify-center text-sm transition-all duration-300 ease-in-out hover:rounded-xl md:px-1 md:text-lg',
          className,
          {
            'hover:bg-foreground/10': !active,
          },
        )}>
        <span
          className={cn(
            navFont.className,
            'p-4',
            {
              'pointer-events-none cursor-none select-none opacity-90 duration-75 ease-linear':
                active,
            },
            {
              'opacity-40 hover:opacity-95': !active,
            },
          )}>
          {text}
          {active && (
            <div className="absolute bottom-3 left-0 hidden h-[3%] w-full sm:inline-flex">
              <div className="mx-auto w-1/4 rounded-full bg-foreground/80" />
            </div>
          )}
        </span>
      </div>
    </Link>
  );
};

export { NavItem };
