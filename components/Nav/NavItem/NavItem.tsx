import { navFont } from '@/app/(main)/fonts';
import { cn } from '@/lib/utils';
import React from 'react';
import { NavItemProps } from '.';

const NavItem: React.FC<NavItemProps> = (
  { text, href, className, active, onClick },
  ref,
) => {
  return (
    <div
      className={cn(
        'relative inline-flex items-center transition-all duration-300 ease-in-out hover:rounded-xl md:px-1',
        className,
        {
          'hover:bg-foreground/10': !active,
        },
      )}>
      <a
        href={href}
        onClick={onClick}
        ref={ref}
        className={cn(
          navFont.className,
          'p-4 text-sm md:text-lg',
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
            <div className="mx-auto w-1/4 rounded-full bg-foreground/80"></div>
          </div>
        )}
      </a>
    </div>
  );
};

export { NavItem };
