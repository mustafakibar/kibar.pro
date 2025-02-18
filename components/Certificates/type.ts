type ParallaxCertificatesProps = {
  className?: string;
};

type Certificate = {
  title: string;
  description: string;
  imageUrl?: string;
  blurDataURL?: string;
  date: string;
};

export type { Certificate, ParallaxCertificatesProps };
