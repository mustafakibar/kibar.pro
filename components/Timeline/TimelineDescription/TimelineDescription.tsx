import { cn } from '@/lib/utils';
export type TimelineDescriptionProps = {
  className?: string;
  children: React.ReactNode;
};

const TimelineDescription: React.FC<TimelineDescriptionProps> = ({
  children,
  className,
}) => {
  return (
    <span
      className={cn(
        'mb-2 block text-sm leading-none font-normal text-gray-400 dark:text-gray-500',
        className,
      )}>
      {children}
    </span>
  );
};

export { TimelineDescription };
