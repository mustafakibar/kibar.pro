import { cn } from '@/lib/utils';

type SideStampProps = {
  className?: string;
};

const YEAR = new Date().getFullYear();

/**
 * Fixed vertical brand strip pinned to the right edge, vertically centered to
 * the viewport. Visible on lg+ across every page.
 */
const SideStamp = ({ className }: SideStampProps) => (
  <div
    aria-hidden
    className={cn(
      'text-ink-faint pointer-events-none fixed top-1/2 right-4 z-30 hidden -translate-y-1/2 flex-col items-center gap-4 select-none lg:flex',
      className,
    )}>
    <span className="text-ink-faint font-mono text-[10px] tracking-[0.4em] uppercase [writing-mode:vertical-rl]">
      Mustafa KiBAR
    </span>
    <span
      aria-hidden
      className="via-gold/40 h-16 w-px bg-gradient-to-b from-transparent to-transparent"
    />
    <span className="text-ink-faint font-mono text-[10px] tracking-[0.4em] uppercase [writing-mode:vertical-rl]">
      {YEAR}
    </span>
  </div>
);

export { SideStamp };
export type { SideStampProps };
