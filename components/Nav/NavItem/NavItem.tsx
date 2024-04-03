import { navFont } from '@/app/fonts';
import { cn } from '@/lib/utils';
import React from 'react';
import { NavItemProps } from '.';

const NavItem = React.forwardRef<HTMLAnchorElement, NavItemProps>(
  ({ text, href, className, active, onClick }, ref) => {
    return (
      <a
        href={href}
        onClick={onClick}
        ref={ref}
        className={cn(
          className,
          navFont.className,
          'relative inline-flex items-center rounded-sm px-3 py-2 opacity-40 transition-all duration-300 ease-in-out hover:rounded-xl hover:bg-foreground/10 hover:underline hover:opacity-95 lg:px-6 lg:py-3',
          {
            'pointer-events-none cursor-none select-none text-accent-foreground/80 opacity-90 md:px-8 md:py-4':
              active,
          },
        )}>
        {text}
        {active && (
          <div className="absolute bottom-1.5 left-0 hidden h-1 w-full sm:inline-flex">
            <div className="mx-auto w-3 rounded-full bg-accent-foreground/80"></div>
          </div>
        )}
      </a>
    );
  },
);

NavItem.displayName = 'NavItem';

export { NavItem };
