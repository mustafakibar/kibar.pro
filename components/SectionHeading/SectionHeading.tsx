import { cn } from '@/lib/utils';
import { ArrowUpRight, Hash } from 'lucide-react';
import Link from 'next/link';
import { ReactNode } from 'react';
import { SectionHeadingProps } from '.';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  description,
  className,
  hideIcon,
  customIcon,
  viewAllHref,
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
    <Card className={cn(className)} {...props}>
      <CardHeader>
        <div className="flex flex-initial">
          {headerIcon}

          <CardTitle className={cn({ 'ml-2': (headerIcon = !null) })}>
            {title}
          </CardTitle>

          {viewAllHref && (
            <div className="text-md mx-5 flex flex-row items-center">
              <Link href={viewAllHref}>View all</Link>
              <ArrowUpRight size={16} />
            </div>
          )}
        </div>

        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>{children}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  );
};

export default SectionHeading;
