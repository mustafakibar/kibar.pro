import { Body, Mono } from '@/components/typography';
import type { Certificate } from '@/lib/data/certificates.data';
import { cn } from '@/lib/utils';

type CredentialsListProps = {
  certificates: readonly Certificate[];
  className?: string;
};

const CredentialsList = ({ certificates, className }: CredentialsListProps) => (
  <ol
    className={cn('divide-rule flex flex-col divide-y', className)}
    role="list">
    {certificates.map((c) => (
      <li key={c.title} className="flex items-baseline gap-4 py-4">
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
