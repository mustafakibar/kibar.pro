import { Body, Caption, Subhead } from '@/components/typography';
import { USES } from '@/lib/data/uses.data';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type UsesIndexProps = {
  className?: string;
};

const UsesIndex = ({ className }: UsesIndexProps) => (
  <dl
    className={cn(
      'grid grid-cols-1 gap-y-8 md:grid-cols-[140px_1fr] md:gap-x-12',
      className,
    )}>
    {USES.map((cat) => (
      <div key={cat.category} className="contents">
        <dt>
          <Subhead className="text-gold">{cat.category}</Subhead>
        </dt>
        <dd className="flex flex-col gap-2">
          {cat.items.map((item) => (
            <div key={item.name} className="flex flex-col">
              {item.link ? (
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-ink duration-fast hover:text-gold underline-offset-4 transition-colors hover:underline">
                  {item.name}
                </Link>
              ) : (
                <Body className="text-ink">{item.name}</Body>
              )}
              {item.label && <Caption>{item.label}</Caption>}
            </div>
          ))}
        </dd>
      </div>
    ))}
  </dl>
);

export { UsesIndex };
export type { UsesIndexProps };
