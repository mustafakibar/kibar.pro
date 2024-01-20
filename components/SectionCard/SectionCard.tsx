import { cn } from '@/lib/utils';
import { Hash } from 'lucide-react';
import { ReactNode } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { SectionCardProps } from './type';

const SectionCard: React.FC<SectionCardProps> = ({
  title,
  description,
  className,
  hideIcon,
  customIcon,
  children,
  footer,
  ...props
}) => {
  let headerIcon: ReactNode | null;

  if (!hideIcon) {
    headerIcon = customIcon ? customIcon : <Hash />;
  } else {
    headerIcon = null;
  }

  return (
    <Card className={className} {...props}>
      <CardHeader>
        <div className="flex flex-initial">
          {headerIcon}

          <CardTitle
            className={cn({
              'ml-2': (headerIcon = !null),
            })}>
            {title}
          </CardTitle>
        </div>

        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>{children}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  );
};

export default SectionCard;
