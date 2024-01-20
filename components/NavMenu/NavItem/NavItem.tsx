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
          'inline-flex rounded-sm px-3 py-2 opacity-60 transition-all duration-300 ease-in-out hover:opacity-95 lg:px-6 lg:py-3',
          [
            active &&
              'pointer-events-none cursor-none select-none opacity-100 bg-blend-multiply shadow-sm shadow-primary',
          ],
        )}>
        {text}
      </a>
    );
  },
);

NavItem.displayName = 'NavItem';

export default NavItem;
