'use client';

import { Body, Eyebrow, Heading } from '@/components/typography';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { duration, easing } from '@/lib/tokens';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
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
}: ChapterHeadProps) => {
  const reduced = useReducedMotion();
  return (
    <header
      className={cn(
        'flex flex-col gap-3',
        align === 'center' && 'items-center text-center',
        className,
      )}>
      {chapter && <Eyebrow>{chapter}</Eyebrow>}
      <Heading as={headingLevel}>
        {reduced ? (
          title
        ) : (
          <motion.span
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9, ease: easing.emphasis }}
            className="inline-block">
            {title}
          </motion.span>
        )}
      </Heading>
      <AccentLine reduced={reduced} align={align} />
      {description && (
        <Body muted size="lg" className="max-w-prose">
          {description}
        </Body>
      )}
    </header>
  );
};

type AccentLineProps = {
  reduced: boolean;
  align: 'start' | 'center';
};

const AccentLine = ({ reduced, align }: AccentLineProps) => (
  <motion.span
    aria-hidden
    className={cn(
      'from-gold via-gold-bright block h-px w-14 bg-gradient-to-r to-transparent',
      align === 'start' ? 'origin-left' : 'origin-center',
    )}
    initial={reduced ? false : { scaleX: 0, opacity: 0 }}
    whileInView={reduced ? undefined : { scaleX: 1, opacity: 1 }}
    viewport={{ once: true, amount: 1 }}
    transition={{
      duration: duration.slow,
      ease: easing.out,
      delay: 0.35,
    }}
  />
);

export { ChapterHead };
export type { ChapterHeadProps };
