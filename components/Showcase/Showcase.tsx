import { GridWrapper } from '@/components/GridWrapper';
import { SectionHeading } from '@/components/SectionHeading';
import { Title } from '@/components/typography';
import { ViewAllButton } from '@/components/ViewAllButton';
import { cn } from '@/lib/utils';
import type React from 'react';

type WithChildren = {
  children: React.ReactNode;
  className?: string;
};

export const ShowcaseContainer: React.FC<WithChildren> = ({
  children,
  className,
  ...props
}) => (
  <div
    className={cn(
      'group ring-primary/20 hover:ring-primary/80 dark:ring-primary/30 dark:hover:ring-primary hover:shadow-primary/10 relative rounded-lg p-3 ring-1 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md',
      className,
    )}
    {...props}>
    <div className="flex flex-col gap-3">{children}</div>
  </div>
);

export const ShowcaseHeader: React.FC<WithChildren> = ({
  children,
  className,
  ...props
}) => (
  <div
    className={cn('flex items-center justify-between', className)}
    {...props}>
    {children}
  </div>
);

export const ShowcaseTitle: React.FC<WithChildren> = ({
  children,
  className,
  ...props
}) => (
  <Title className={cn(className)} {...props}>
    {children}
  </Title>
);

export const ShowcaseActionContainer: React.FC<WithChildren> = ({
  children,
  className,
  ...props
}) => (
  <div
    className={cn('text-primary/80 flex items-center gap-2', className)}
    {...props}>
    {children}
  </div>
);

export const ShowcaseDivider: React.FC<{ className?: string }> = ({
  className,
  ...props
}) => (
  <div className="relative" {...props}>
    <div
      className={cn(
        'bg-foreground/15 absolute h-px w-full rounded-md opacity-50',
        className,
      )}
    />
  </div>
);

export const ShowcaseContent: React.FC<WithChildren> = ({
  children,
  className,
  ...props
}) => (
  <div
    className={cn(
      'md:text-md line-clamp-3 flex flex-col gap-2 text-justify text-sm opacity-85',
      className,
    )}
    {...props}>
    {children}
  </div>
);

export const ShowcaseFooter: React.FC<WithChildren> = ({
  children,
  className,
  ...props
}) =>
  children ? (
    <div className={cn('relative flex items-center', className)} {...props}>
      {children}
    </div>
  ) : null;

export type ShowcaseViewerProps = {
  title: string;
  description?: string;
  className?: string;
  headingIcon?: React.ReactNode;
  viewAllHref?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
};

export const ShowcaseViewer: React.FC<ShowcaseViewerProps> = ({
  title,
  description,
  className,
  headingIcon,
  viewAllHref,
  children,
  footer,
  ...props
}) => (
  <section className={cn(className)} {...props}>
    <div className="flex">
      <SectionHeading
        title={title}
        description={description}
        icon={headingIcon}
      />
      {viewAllHref && <ViewAllButton href={viewAllHref} />}
    </div>

    <GridWrapper className="mt-4">{children}</GridWrapper>

    {footer && <div className="flex items-center p-6">{footer}</div>}
  </section>
);
