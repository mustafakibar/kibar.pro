import {
  ShowcaseContainer,
  ShowcaseHeader,
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
        className={cn(
          'group hover:bg-primary/20 relative w-full overflow-hidden p-1 md:max-w-lg',
          className,
        )}
        {...props}>
        {certificate.imageUrl && (
          <Image
            className="h-48 w-full scale-125 rounded-lg object-cover object-left-top grayscale transition-all duration-300 ease-in group-hover:-translate-y-1 group-hover:scale-100 group-hover:shadow-lg group-hover:grayscale-0"
            src={certificate.imageUrl}
            alt={certificate.title}
            width={512}
            height={512}
            placeholder={certificate.blurDataURL ? 'blur' : 'empty'}
            blurDataURL={certificate.blurDataURL}
          />
        )}

        <ShowcaseHeader className="bg-background absolute -bottom-1 -left-1 flex-col items-baseline rounded-tr-lg rounded-bl-sm border-t-1 border-r-1 px-3 pb-1 shadow-md">
          <span className="text-muted-foreground text-sm">
            {certificate.description} - {certificate.date}
          </span>

          <ShowcaseTitle className="-mt-1 line-clamp-none delay-300 duration-300 group-hover:-skew-y-1">
            {certificate.title}
          </ShowcaseTitle>
        </ShowcaseHeader>
      </ShowcaseContainer>
    </Link>
  );
};

export { CertificateShowcase };
