import { cn } from '@/lib/utils';
import { Milestone } from 'lucide-react';
import { TimelineItemProps } from '.';

const TimelineItem: React.FC<TimelineItemProps> = ({ children, className }) => {
  return (
    <div className={cn('mb-10 ms-8', className)}>
      <span className="absolute -start-4 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
        <Milestone className="h-4 w-4 text-blue-800 dark:text-blue-300" />
      </span>

      {children}
    </div>
  );
};

export { TimelineItem };
