import { Container } from '@/components/layout/Container';
import { Body, Eyebrow, Subhead } from '@/components/typography';
import { CONTACT_PATH } from '@/lib/constants/paths';
import { ChevronUpRight } from '@/lib/icons';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Wordmark } from './Wordmark';

type HomeHeroProps = {
  className?: string;
};

const HomeHero = ({ className }: HomeHeroProps) => (
  <section
    className={cn(
      'relative isolate overflow-hidden py-20 md:py-32',
      'before:bg-glow-gold before:pointer-events-none before:absolute before:top-[20%] before:right-[10%] before:-z-10 before:h-[420px] before:w-[420px] before:rounded-full before:blur-[140px]',
      'after:bg-glow-crimson after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:-z-10 after:h-[360px] after:w-[360px] after:rounded-full after:blur-[120px]',
      className,
    )}>
    <Container>
      <div className="flex flex-col gap-8">
        <Eyebrow>§ 0 — INDEX</Eyebrow>
        <Wordmark />
        <Subhead className="max-w-xl text-2xl">
          — shipping reliable systems since 2011.
        </Subhead>
        <Body size="lg" muted className="max-w-2xl">
          Senior full-stack engineer based in Istanbul. I design and ship
          reliable, performant products end-to-end — clean architecture, strong
          developer experience, considered motion.
        </Body>
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
