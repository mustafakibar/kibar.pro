import { cn } from '@/lib/utils';
import { ShowcaseDividerProps } from '..';

const ShowcaseDivider: React.FC<ShowcaseDividerProps> = ({
  className,
  ...props
}) => {
  return (
    <div className="relative h-1" {...props}>
      <div
        className={cn(
          'absolute h-1/2 w-full rounded-md bg-foreground/15 outline outline-2 outline-offset-1 outline-primary/10',
          className,
        )}></div>
    </div>
  );
};

export { ShowcaseDivider };
