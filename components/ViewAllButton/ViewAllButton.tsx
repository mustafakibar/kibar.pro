import { ChevronUpRight } from '@/lib/icons';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
import { ViewAllButtonProps } from '.';

const ViewAllButton: React.FC<ViewAllButtonProps> = ({
  className,
  href,
  ...props
}) => {
  return (
    <Link href={href} {...props} legacyBehavior>
      <div
        className={cn(
          'group mx-4 inline-flex items-center text-nowrap text-sm text-foreground/40 underline-offset-4 transition-all duration-100 ease-in hover:cursor-pointer hover:text-foreground hover:underline',
          className,
        )}>
        <span>View all</span>
        <ChevronUpRight
          strokeWidth={3}
          className="transition-all duration-200 ease-in group-hover:translate-x-1.5 group-hover:rotate-[-24deg] group-hover:scale-[1.75]"
        />
      </div>
    </Link>
  );
};

export { ViewAllButton };
