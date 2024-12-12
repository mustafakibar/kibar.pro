import { CERTIFICATES_PATH } from '@/app/(main)/constants';
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
import Link from 'next/link';
import { CertificateShowcaseProps } from '.';

const CertificateShowcase: React.FC<CertificateShowcaseProps> = ({
  certificate,
  className,
  ...props
}) => {
  const href = certificate.title
    ? `${CERTIFICATES_PATH}//${certificate.title}`
    : '';

  return (
    <Link href={href} className={cn({ 'pointer-events-none': href == '' })}>
      <ShowcaseContainer className={cn(className)} {...props}>
        <ShowcaseMain>
          <ShowcaseHeader>
            <ShowcaseTitle>{certificate.title}</ShowcaseTitle>
          </ShowcaseHeader>

          <ShowcaseDivider />

          <ShowcaseContent>{certificate.description}</ShowcaseContent>
        </ShowcaseMain>

        <ShowcaseFooter>
          <span>{certificate.date}</span>
        </ShowcaseFooter>
      </ShowcaseContainer>
    </Link>
  );
};

export { CertificateShowcase };
