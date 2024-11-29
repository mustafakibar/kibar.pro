import { cn } from '@/lib/utils';
import { ShowcaseDividerProps } from '..';

const ShowcaseDivider: React.FC<ShowcaseDividerProps> = ({
  className,
  ...props
}) => {
  return (
    <div className="relative" {...props}>
      <div
        className={cn(
          'absolute h-[1px] w-full rounded-md bg-foreground/15 opacity-50',
          className,
        )}
      />
    </div>
  );
};

export { ShowcaseDivider };
