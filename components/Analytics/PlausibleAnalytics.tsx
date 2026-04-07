import env from '@/env';
import Script from 'next/script';

type PlausibleAnalyticsProps = {
  nonce?: string;
};

const PlausibleAnalytics = ({ nonce }: PlausibleAnalyticsProps) => {
  if (!env.PLAUSIBLE_DOMAIN || env.IS_DEV) return null;

  return (
    <Script
      defer
      strategy="afterInteractive"
      src={env.PLAUSIBLE_SCRIPT_SRC}
      data-domain={env.PLAUSIBLE_DOMAIN}
      nonce={nonce}
    />
  );
};

export { PlausibleAnalytics };
