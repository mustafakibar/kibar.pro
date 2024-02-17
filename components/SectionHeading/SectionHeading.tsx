import { titleFont } from '@/app/fonts';
import { cn } from '@/lib/utils';
import { ArrowUpRight, SquareStack } from 'lucide-react';
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
    headerIcon = customIcon ? customIcon : <SquareStack />;
  } else {
    headerIcon = null;
  }

  return (
    <Card className={cn(className)} {...props}>
      <CardHeader>
        <div className="flex flex-grow flex-row flex-nowrap text-nowrap">
          <CardTitle
            className={cn(
              titleFont.className,
              'flex flex-row items-center text-4xl font-normal tracking-wide text-foreground/90',
              {
                'gap-1': headerIcon != null,
              },
            )}>
            {headerIcon && <div className="mb-1 mr-1">{headerIcon}</div>}
            {title}
          </CardTitle>

          {viewAllHref && (
            <Link href={viewAllHref}>
              <div className="relative mt-2">
                <div className="text-md absolute mx-4 flex flex-row items-center rounded tracking-tighter text-foreground/70 underline-offset-4 outline-4 outline-offset-4 outline-accent-foreground/40 transition-all duration-300 ease-in hover:cursor-pointer hover:gap-1 hover:px-1 hover:font-black hover:text-accent-foreground hover:underline hover:outline">
                  <span>View all</span>
                  <ArrowUpRight
                    strokeWidth={3}
                    className="text-accent-foreground/70"
                  />
                </div>
              </div>
            </Link>
          )}
        </div>

        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>{children}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  );
};

export { SectionHeading };
