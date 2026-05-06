import { ChapterHead } from '@/components/layout/ChapterHead';
import { Container } from '@/components/layout/Container';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type PageShellProps = {
  title: ReactNode;
  description?: ReactNode;
  /** Right-aligned slot beside the title (e.g. ViewToggle) */
  toolbar?: ReactNode;
  /** Width applied to the content region. Header is always wide for cross-page alignment. */
  contentSize?: 'wide' | 'narrow';
  /** Extra classes on the content Container */
  contentClassName?: string;
  /** Extra classes on the header Container */
  headerClassName?: string;
  children?: ReactNode;
};

const PageShell = ({
  title,
  description,
  toolbar,
  contentSize = 'wide',
  contentClassName,
  headerClassName,
  children,
}: PageShellProps) => (
  <>
    <Container className={cn('pt-12 pb-4', headerClassName)}>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <ChapterHead
          title={title}
          description={description}
          headingLevel="h1"
        />
        {toolbar}
      </div>
    </Container>

    {children !== undefined && (
      <Container size={contentSize} className={cn('py-8', contentClassName)}>
        {children}
      </Container>
    )}
  </>
);

export { PageShell };
export type { PageShellProps };
