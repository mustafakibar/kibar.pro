import { Envelope, Github, SocialX } from '@/lib/icons';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ContactProps } from '.';
import { ContactItemProps } from './type';

const contacts: ContactItemProps[] = [
  { icon: Envelope, href: 'mailto:mustafa@kibar.pro' },
  { icon: Github, href: 'https://github.com/mustafakibar' },
  { icon: SocialX, href: 'https://x.com/kibarpro' },
];

const Contact: React.FC<ContactProps> = ({ className }) => {
  return (
    <div
      className={cn(
        'flex flex-row items-center gap-8 align-middle text-2xl text-gray-600 dark:text-gray-200',
        className,
      )}>
      {/* TODO hover effects. */}
      {contacts.map(({ icon: Icon, href }, idx) => (
        <Link href={href} target="_blank" key={idx}>
          <Icon className="hover:text-gray-950" />
        </Link>
      ))}
    </div>
  );
};

export { Contact };
