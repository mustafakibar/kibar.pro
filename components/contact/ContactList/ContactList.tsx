import { SocialRow } from '@/components/contact/SocialRow';
import { SOCIALS } from '@/lib/data/socials.data';
import { cn } from '@/lib/utils';

type ContactListProps = {
  className?: string;
};

const ContactList = ({ className }: ContactListProps) => (
  <div className={cn('flex flex-col', className)}>
    {SOCIALS.map((s) => (
      <SocialRow key={s.href} social={s} />
    ))}
  </div>
);

export { ContactList };
export type { ContactListProps };
