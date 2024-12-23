import { Milestone } from '@/lib/icons';
import { cn } from '@/lib/utils';
import React from 'react';
import { TimelineItemProps } from '.';

const TimelineItem: React.FC<TimelineItemProps> = ({ children, className }) => {
  return (
    <div className={cn('flex gap-x-4', className)}>
      <div className="relative after:absolute after:bottom-0 after:start-3.5 after:top-5 after:w-px after:-translate-x-[0.5px] after:bg-primary/80 last:after:hidden dark:after:bg-neutral-700">
        <div className="relative z-10 flex size-7 items-center justify-center">
          <Milestone size={24} />
        </div>
      </div>

      <div className="grow pb-8 pt-1">{children}</div>
    </div>
  );
};

export { TimelineItem };
