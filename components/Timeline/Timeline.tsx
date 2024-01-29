import { cn } from '@/lib/utils';
import { TimelineProps } from '.';

const Timeline: React.FC<TimelineProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'relative m-4 border-s border-gray-300 dark:border-gray-700',
        className,
      )}>
      {children}
    </div>
  );
};

export { Timeline };
