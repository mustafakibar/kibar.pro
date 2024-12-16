import { Title } from '@/components/typography';
import { cn } from '@/lib/utils';
import { ShowcaseTitleProps } from '..';

const ShowcaseTitle: React.FC<ShowcaseTitleProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Title className={cn(className)} {...props}>
      {children}
    </Title>
  );
};

export { ShowcaseTitle };
