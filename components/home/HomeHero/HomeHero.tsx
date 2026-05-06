'use client';

import { Container } from '@/components/layout/Container';
import { Marquee } from '@/components/motion/Marquee';
import { Body, Mono } from '@/components/typography';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/utils';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Wordmark } from './Wordmark';

type HomeHeroProps = {
  className?: string;
};

const STACK = [
  'TypeScript',
  'Rust',
  'Next.js',
  'React',
  'Tailwind v4',
  'Bun',
  'Node.js',
  'Motion',
  'OKLCH',
  'Postgres',
  'Kotlin',
  'Flutter',
  'Docker',
  'AWS',
  'gRPC',
] as const;

const HomeHero = ({ className }: HomeHeroProps) => {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Parallax: wordmark stays slower than scroll → depth illusion
  const wordmarkY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const wordmarkOpacity = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    [1, 0.7, 0],
  );
  const subTextY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section
      ref={ref}
      className={cn(
        'relative isolate flex min-h-[100dvh] flex-col justify-center overflow-hidden py-20 md:py-32',
        'before:bg-glow-gold before:pointer-events-none before:absolute before:top-[20%] before:right-[10%] before:-z-10 before:h-[420px] before:w-[420px] before:rounded-full before:blur-[140px]',
        'after:bg-glow-crimson after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:-z-10 after:h-[360px] after:w-[360px] after:rounded-full after:blur-[120px]',
        className,
      )}>
      <Container>
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <motion.div
            style={
              reduced ? undefined : { y: wordmarkY, opacity: wordmarkOpacity }
            }>
            <Wordmark />
          </motion.div>
          <motion.div style={reduced ? undefined : { y: subTextY }}>
            <div className="text-ink-faint mt-3 flex w-full items-center gap-3">
              <span
                aria-hidden
                className="bg-gold/60 hidden h-px w-8 md:block"
              />
              <Mono className="text-xs tracking-[0.35em] uppercase">
                Senior Engineer · Full-Stack · Istanbul
              </Mono>
              <span
                aria-hidden
                className="from-gold/40 via-gold/10 hidden h-px flex-1 bg-gradient-to-r to-transparent md:block"
              />
            </div>
            <Body size="lg" muted className="mt-6 max-w-2xl">
              Senior full-stack engineer based in Istanbul. I design and ship
              reliable, performant products end-to-end — clean architecture,
              strong developer experience, considered motion.
            </Body>
          </motion.div>
        </div>
      </Container>

      <div className="border-rule mt-12 border-y py-4">
        <Marquee speed={45}>
          {STACK.map((label) => (
            <Mono
              key={label}
              className="text-ink-faint group-hover:text-ink-muted flex items-center gap-12 text-sm tracking-widest uppercase transition-colors">
              <span>{label}</span>
              <span aria-hidden className="bg-gold size-1 rounded-full" />
            </Mono>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export { HomeHero };
export type { HomeHeroProps };
