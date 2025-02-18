import { cn } from '@/lib/utils';
import { TimelineDescriptionProps } from '.';

const TimelineDescription: React.FC<TimelineDescriptionProps> = ({
  children,
  className,
}) => {
  return (
    <span
      className={cn(
        'mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500',
        className,
      )}>
      {children}
    </span>
  );
};

export { TimelineDescription };
