import { cn } from '@/lib/utils';
import { ShowcaseTitleProps } from '..';

const ShowcaseTitle: React.FC<ShowcaseTitleProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <h2
      className={cn(
        'line-clamp-1 text-xl font-medium text-foreground',
        className,
      )}
      {...props}>
      {children}
    </h2>
  );
};

export { ShowcaseTitle };
