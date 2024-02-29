import { Title } from '@/components/typography';
import { cn } from '@/lib/utils';
import { ShowcaseTitleProps } from '..';

const ShowcaseTitle: React.FC<ShowcaseTitleProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Title className={cn('line-clamp-1', className)} {...props}>
      {children}
    </Title>
  );
};

export { ShowcaseTitle };
