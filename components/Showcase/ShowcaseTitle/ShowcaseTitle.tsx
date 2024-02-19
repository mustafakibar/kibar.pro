import { cn } from '@/lib/utils';
import { ShowcaseTitleProps } from '..';

const ShowcaseTitle: React.FC<ShowcaseTitleProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <h1
      className={cn('line-clamp-1 text-xl font-semibold', className)}
      {...props}>
      {children}
    </h1>
  );
};

export { ShowcaseTitle };
