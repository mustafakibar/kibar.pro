import { ChevronUpRight } from '@/lib/icons';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
export type ViewAllButtonProps = {
  className?: string;
  href: string;
};

const ViewAllButton: React.FC<ViewAllButtonProps> = ({
  className,
  href,
  ...props
}) => {
  return (
    <Link href={href} {...props} legacyBehavior>
      <div
        className={cn(
          'group text-foreground/40 hover:text-foreground mx-4 inline-flex items-center text-sm text-nowrap underline-offset-4 transition-all duration-100 ease-in hover:cursor-pointer hover:underline',
          className,
        )}>
        <span>View all</span>
        <ChevronUpRight
          strokeWidth={3}
          className="transition-all duration-200 ease-in group-hover:translate-x-1.5 group-hover:scale-[1.75] group-hover:rotate-[-24deg]"
        />
      </div>
    </Link>
  );
};

export { ViewAllButton };
