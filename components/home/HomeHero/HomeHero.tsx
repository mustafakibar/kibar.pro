import { Container } from '@/components/layout/Container';
import { Marquee } from '@/components/motion/Marquee';
import { Body, Mono } from '@/components/typography';
import { CONTACT_PATH } from '@/lib/constants/paths';
import { ChevronUpRight } from '@/lib/icons';
import { cn } from '@/lib/utils';
import Link from 'next/link';
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

const HomeHero = ({ className }: HomeHeroProps) => (
  <section
    className={cn(
      'relative isolate overflow-hidden py-20 md:py-32',
      'before:bg-glow-gold before:pointer-events-none before:absolute before:top-[20%] before:right-[10%] before:-z-10 before:h-[420px] before:w-[420px] before:rounded-full before:blur-[140px]',
      'after:bg-glow-crimson after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:-z-10 after:h-[360px] after:w-[360px] after:rounded-full after:blur-[120px]',
      className,
    )}>
    <div
      aria-hidden
      className="text-ink-faint pointer-events-none absolute top-1/2 right-4 hidden -translate-y-1/2 flex-col items-center gap-4 select-none lg:flex">
      <span className="font-mono text-[10px] tracking-[0.4em] uppercase [writing-mode:vertical-rl]">
        kibar.pro · v2 · since 2011
      </span>
      <span
        aria-hidden
        className="via-gold/40 h-16 w-px bg-gradient-to-b from-transparent to-transparent"
      />
      <span className="font-mono text-[10px] tracking-[0.4em] uppercase [writing-mode:vertical-rl]">
        Istanbul
      </span>
    </div>

    <Container>
      <div className="flex flex-col gap-8">
        <Wordmark />
        <Body size="lg" muted className="max-w-2xl">
          Senior full-stack engineer based in Istanbul. I design and ship
          reliable, performant products end-to-end — clean architecture, strong
          developer experience, considered motion.
        </Body>
        <Marquee
          speed={45}
          className="border-rule -mx-4 mt-6 border-y py-4 md:-mx-8">
          {STACK.map((label) => (
            <Mono
              key={label}
              className="text-ink-faint group-hover:text-ink-muted flex items-center gap-12 text-sm tracking-widest uppercase transition-colors">
              <span>{label}</span>
              <span aria-hidden className="bg-gold size-1 rounded-full" />
            </Mono>
          ))}
        </Marquee>
        <Link
          href={CONTACT_PATH}
          className="group font-body text-ink-muted hover:text-gold mt-2 inline-flex items-center gap-2 text-sm transition-colors">
          <span className="italic">Currently available for senior roles.</span>
          <ChevronUpRight className="duration-normal size-4 transition-transform ease-out group-hover:translate-x-1 group-hover:-rotate-12" />
        </Link>
      </div>
    </Container>
  </section>
);

export { HomeHero };
export type { HomeHeroProps };
