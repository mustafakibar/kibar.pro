import { cn } from '@/lib/utils';
import { ShowcaseContainerProps } from '..';

const ShowcaseContainer: React.FC<ShowcaseContainerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'ring-primary/20 hover:ring-primary dark:ring-primary/30 dark:hover:ring-primary translate-x-0 rounded-lg p-3 ring-2 duration-500 ease-out hover:gap-8',
        className,
      )}
      {...props}>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
};

export { ShowcaseContainer };
