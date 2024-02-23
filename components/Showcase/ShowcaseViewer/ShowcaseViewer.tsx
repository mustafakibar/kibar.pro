import { titleFont } from '@/app/fonts';
import { cn } from '@/lib/utils';
import { ArrowUpRight, SquareStack } from 'lucide-react';
import Link from 'next/link';
import { ReactNode } from 'react';
import { ShowcaseViewerProps } from '..';

const ShowcaseViewer: React.FC<ShowcaseViewerProps> = ({
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
    <div className={cn(className)} {...props}>
      <div className="space-y-2 py-4 sm:px-2">
        <div className="flex flex-grow flex-nowrap text-nowrap">
          <div
            className={cn(
              titleFont.className,
              'flex items-center text-foreground/90',
              {
                'gap-1': headerIcon != null,
              },
            )}>
            {headerIcon && <div className="mb-1 me-1">{headerIcon}</div>}
            <span className={cn('text-4xl tracking-tight')}>{title}</span>
          </div>

          {viewAllHref && (
            <Link href={viewAllHref}>
              <div className="relative mt-2">
                <div className="text-md group absolute mx-4 flex items-center text-accent-foreground underline-offset-4 transition-all duration-100 ease-in hover:cursor-pointer hover:gap-1 hover:px-1 hover:underline">
                  <span>View all</span>
                  <ArrowUpRight
                    strokeWidth={3}
                    className="text-accent-foreground/70 transition-all duration-700 ease-in-out group-hover:rotate-45 group-hover:scale-125 group-hover:animate-pulse"
                  />
                </div>
              </div>
            </Link>
          )}
        </div>

        {description && (
          <h4 className="text-sm text-muted-foreground">{description}</h4>
        )}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:p-5 md:grid-cols-2 md:gap-8 lg:gap-12 xl:grid-cols-3">
        {children}
      </div>

      {footer && <div className="flex items-center p-6">{footer}</div>}
    </div>
  );
};

export { ShowcaseViewer };
