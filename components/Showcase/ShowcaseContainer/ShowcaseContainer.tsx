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
        'relative translate-x-0 rounded-lg px-4 py-5 ring-1 ring-primary/5 duration-500 ease-out hover:gap-8 hover:ring-primary dark:ring-primary/25 dark:hover:ring-primary sm:p-5 lg:p-6',
        className,
      )}
      {...props}>
      <div className="flex flex-col gap-5">{children}</div>
    </div>
  );
};

export { ShowcaseContainer };
