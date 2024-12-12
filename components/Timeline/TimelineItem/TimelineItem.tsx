import { Milestone } from '@/lib/icons';
import { cn } from '@/lib/utils';
import React from 'react';
import { TimelineItemProps } from '.';

const TimelineItem: React.FC<TimelineItemProps> = ({ children, className }) => {
  return (
    <div className={cn('mb-10 ms-10', className)}>
      <span className="absolute -start-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground ring-8 ring-primary/5 dark:ring-primary/25">
        <Milestone className="h-2/3 w-2/3" />
      </span>
      {children}
    </div>
  );
};

export { TimelineItem };
