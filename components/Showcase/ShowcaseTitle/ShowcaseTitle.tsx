import { Title } from '@/components/typography';
import { cn } from '@/lib/utils';
import { ShowcaseTitleProps } from '..';

// TODO Create typography component for Title, Description etc.
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
