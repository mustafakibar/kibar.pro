import {
  ShowcaseContainer,
  ShowcaseContent,
  ShowcaseDivider,
  ShowcaseFooter,
  ShowcaseHeader,
  ShowcaseMain,
  ShowcaseTitle,
} from '@/components/Showcase';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { CertificateShowcaseProps } from '.';

const CertificateShowcase: React.FC<CertificateShowcaseProps> = ({
  certificate,
  className,
  ...props
}) => {
  const href = certificate.imageUrl || '';

  return (
    <Link
      href={href}
      target="_blank"
      className={cn({ 'pointer-events-none': href == '' })}>
      <ShowcaseContainer
        className={cn('group hover:bg-primary/20', className)}
        {...props}>
        <ShowcaseMain>
          <ShowcaseHeader>
            <ShowcaseTitle className="line-clamp-none group-hover:font-black group-hover:tracking-wider">
              {certificate.title}
            </ShowcaseTitle>
          </ShowcaseHeader>

          <ShowcaseDivider />

          <ShowcaseContent>{certificate.description}</ShowcaseContent>

          <div>
            {certificate.imageUrl && (
              <Image
                className="h-full w-full rounded-md object-contain p-4 transition-transform duration-200 ease-in group-hover:-translate-y-1 group-hover:scale-105 group-hover:shadow-lg group-hover:grayscale"
                src={certificate.imageUrl}
                alt={certificate.title}
                width={256}
                height={256}
                placeholder={certificate.blurDataURL ? 'blur' : 'empty'}
                blurDataURL={certificate.blurDataURL}
              />
            )}
          </div>
        </ShowcaseMain>

        <ShowcaseFooter>
          <span className="text-xs text-muted-foreground">
            {certificate.date}
          </span>
        </ShowcaseFooter>
      </ShowcaseContainer>
    </Link>
  );
};

export { CertificateShowcase };
