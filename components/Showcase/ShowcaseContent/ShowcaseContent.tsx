import { cn } from '@/lib/utils';
import { ShowcaseContentProps } from '..';

const ShowcaseContent: React.FC<ShowcaseContentProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'md:text-md line-clamp-3 flex flex-col gap-2 text-justify text-sm opacity-85',
        className,
      )}
      {...props}>
      {children}
    </div>
  );
};

export { ShowcaseContent };
