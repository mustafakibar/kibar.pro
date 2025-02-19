import { cn } from '@/lib/utils';
import { ShowcaseStampProps } from '..';

const ShowcaseStamp: React.FC<ShowcaseStampProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <span
      className={cn(
        'pointer-events-none absolute bottom-0 right-0 touch-none rounded-tl-full bg-foreground/10 px-3 text-xs text-foreground/30',
        className,
      )}
      {...props}>
      {children}
    </span>
  );
};

export { ShowcaseStamp };
