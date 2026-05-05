import { Container } from '@/components/layout/Container';
import { Marquee } from '@/components/motion/Marquee';
import { Body, Mono } from '@/components/typography';
import { cn } from '@/lib/utils';
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
        <dl className="text-ink-faint font-mono text-sm tracking-widest uppercase">
          <dt className="text-gold mb-2">Now</dt>
          <dd className="flex flex-col gap-1.5 tracking-normal normal-case">
            <div className="flex items-baseline gap-3">
              <span aria-hidden className="text-gold">
                —
              </span>
              <span className="text-ink">
                Shipping kibar.pro v2 across the stack.
              </span>
            </div>
            <div className="flex items-baseline gap-3">
              <span aria-hidden className="text-gold">
                —
              </span>
              <span className="text-ink-muted">
                Exploring Rust + Bun for small CLI tools.
              </span>
            </div>
            <div className="flex items-baseline gap-3">
              <span aria-hidden className="text-gold">
                —
              </span>
              <span className="text-ink-muted">
                Reading about scroll-driven CSS and OKLCH.
              </span>
            </div>
          </dd>
        </dl>
      </div>
    </Container>
  </section>
);

export { HomeHero };
export type { HomeHeroProps };
