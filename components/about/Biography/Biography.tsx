import { Body } from '@/components/typography';
import { cn } from '@/lib/utils';

type BiographyProps = {
  className?: string;
};

const Biography = ({ className }: BiographyProps) => (
  <article className={cn('flex flex-col gap-5', className)}>
    <Body size="lg">
      I&apos;ve been building software since 2011, focused on shipping scalable,
      maintainable systems end-to-end — from data layer to UI.
    </Body>
    <Body size="lg" className="text-ink font-medium">
      Day-to-day stack: TypeScript, React, Next.js, Node.js, Rust, Kotlin, React
      Native, and Flutter.
    </Body>
    <Body size="lg" muted>
      I care about clean architecture, strong developer experience, and tools
      that get out of the user&apos;s way. Lately my interests lean toward
      systems programming, AI tooling, and the boring fundamentals that make
      products feel fast and reliable.
    </Body>
  </article>
);

export { Biography };
export type { BiographyProps };
