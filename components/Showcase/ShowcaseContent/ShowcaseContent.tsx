import { cn } from '@/lib/utils';
import { ShowcaseContentProps } from '..';

const ShowcaseContent: React.FC<ShowcaseContentProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <p
      className={cn(
        'md:text-md line-clamp-3 text-justify text-sm opacity-85',
        className,
      )}
      {...props}>
      {children}
    </p>
  );
};

export { ShowcaseContent };
