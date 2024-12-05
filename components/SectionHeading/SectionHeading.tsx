import { cn } from '@/lib/utils';
import { SectionHeadingProps } from '.';
import { Heading, Subhead } from '../typography';

const SectionHeading: React.FC<SectionHeadingProps> = ({
  className,
  title,
  titleWrapperClassName,
  subtitle,
  icon,
  ...props
}) => {
  return (
    <div className={cn('py-4 sm:px-2', className)} {...props}>
      <div
        className={cn(
          'flex flex-grow flex-nowrap text-nowrap',
          titleWrapperClassName,
        )}>
        <div
          className={cn('flex items-center text-foreground/90', {
            'gap-1': icon != null,
          })}>
          {icon && <div className="mb-1 me-1">{icon}</div>}
          <Heading>{title}</Heading>
        </div>
      </div>

      {subtitle && <Subhead>{subtitle}</Subhead>}
    </div>
  );
};

export { SectionHeading };
