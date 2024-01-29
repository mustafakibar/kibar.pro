import { cn } from '@/lib/utils';
import { TimelineTitleProps } from '.';

const TimelineTitle: React.FC<TimelineTitleProps> = ({
  children,
  className,
}) => {
  return (
    <h3
      className={cn(
        'mb-1 flex items-center text-lg font-semibold text-gray-900 dark:text-white',
        className,
      )}>
      {children}
    </h3>
  );
};

export { TimelineTitle };
