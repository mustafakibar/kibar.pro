import { Body, Eyebrow, Heading } from '@/components/typography';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type ChapterHeadProps = {
  chapter?: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
  align?: 'start' | 'center';
  headingLevel?: 'h1' | 'h2' | 'h3';
};

const ChapterHead = ({
  chapter,
  title,
  description,
  className,
  align = 'start',
  headingLevel = 'h2',
}: ChapterHeadProps) => (
  <header
    className={cn(
      'flex flex-col gap-3',
      align === 'center' && 'items-center text-center',
      className,
    )}>
    {chapter && <Eyebrow>{chapter}</Eyebrow>}
    <Heading as={headingLevel}>{title}</Heading>
    {description && (
      <Body muted size="lg" className="max-w-prose">
        {description}
      </Body>
    )}
  </header>
);

export { ChapterHead };
export type { ChapterHeadProps };
