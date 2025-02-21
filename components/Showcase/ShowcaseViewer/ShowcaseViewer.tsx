import { GridWrapper } from '@/components/GridWrapper';
import { SectionHeading } from '@/components/SectionHeading';
import { ViewAllButton } from '@/components/ViewAllButton';
import { cn } from '@/lib/utils';
import React from 'react';
import { ShowcaseViewerProps } from '..';

const ShowcaseViewer: React.FC<ShowcaseViewerProps> = ({
  title,
  description,
  className,
  headingIcon,
  viewAllHref,
  children,
  footer,
  ...props
}) => {
  return (
    <div className={cn(className)} {...props}>
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
    </div>
  );
};

export { ShowcaseViewer };
