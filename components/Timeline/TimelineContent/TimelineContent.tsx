import { cn } from '@/lib/utils';
import { TimelineContentProps } from '.';

const TimelineContent: React.FC<TimelineContentProps> = ({
  children,
  className,
}) => {
  return (
    <p
      className={cn(
        'mb-4 text-base font-normal text-gray-500 dark:text-gray-400',
        className,
      )}>
      {children}
    </p>
  );
};

export { TimelineContent };
