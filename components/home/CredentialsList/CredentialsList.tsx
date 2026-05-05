import { Body, Mono } from '@/components/typography';
import type { Certificate } from '@/lib/data/certificates.data';
import { cn } from '@/lib/utils';

type CredentialsListProps = {
  certificates: readonly Certificate[];
  className?: string;
};

const ROMANS = [
  'i',
  'ii',
  'iii',
  'iv',
  'v',
  'vi',
  'vii',
  'viii',
  'ix',
  'x',
] as const;

const CredentialsList = ({ certificates, className }: CredentialsListProps) => (
  <ol
    className={cn('divide-rule flex flex-col divide-y', className)}
    role="list">
    {certificates.map((c, idx) => (
      <li key={c.title} className="flex items-baseline gap-4 py-4">
        <span className="font-display text-gold w-10 shrink-0 text-base italic">
          {ROMANS[idx] ?? `${idx + 1}.`}
        </span>
        <span className="flex-1">
          <Body className="text-ink font-medium">{c.title}</Body>
          <Body size="sm" muted className="mt-0.5">
            {c.description}
          </Body>
        </span>
        <Mono className="text-ink-faint">{c.date}</Mono>
      </li>
    ))}
  </ol>
);

export { CredentialsList };
export type { CredentialsListProps };
