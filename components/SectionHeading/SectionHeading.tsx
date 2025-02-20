import { cn } from '@/lib/utils';
import { SectionHeadingProps } from '.';
import { Heading, Subhead } from '../typography';

const SectionHeading: React.FC<SectionHeadingProps> = ({
  className,
  title,
  titleWrapperClassName,
  description,
  icon,
  ...props
}) => {
  return (
    <div className={cn(className)} {...props}>
      <div
        className={cn(
          'flex grow flex-nowrap text-nowrap',
          titleWrapperClassName,
        )}>
        <div
          className={cn('text-foreground/90 flex items-center', {
            'gap-4': icon != null,
          })}>
          {icon && <div className="mb-1">{icon}</div>}
          <Heading>{title}</Heading>
        </div>
      </div>

      {description && <Subhead className="ml-[2px]">{description}</Subhead>}
    </div>
  );
};

export { SectionHeading };
