import { Milestone } from '@/lib/icons';
import { cn } from '@/lib/utils';
import React from 'react';
import { TimelineItemProps } from '.';

const TimelineItem: React.FC<TimelineItemProps> = ({ children, className }) => {
  return (
    <div className={cn('flex gap-x-4', className)}>
      <div className="after:bg-primary relative after:absolute after:start-[0.69rem] after:top-5 after:bottom-0 after:w-[0.13rem] last:after:hidden dark:after:bg-neutral-700">
        <div className="text-primary relative z-10 flex items-center justify-center">
          <Milestone size={24} />
        </div>
      </div>

      <div className="grow pt-1 pb-8">{children}</div>
    </div>
  );
};

export { TimelineItem };
