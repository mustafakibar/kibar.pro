import { ImageResponse } from 'next/og';

export const ogSize = { width: 1200, height: 630 } as const;
export const ogContentType = 'image/png';

type OgTemplateProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export function renderOgImage({ eyebrow, title, subtitle }: OgTemplateProps) {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background:
            'radial-gradient(ellipse at 30% 20%, #2a1212 0%, #0a0606 80%)',
          color: '#f3e3c7',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          fontFamily: 'sans-serif',
        }}>
        <div
          style={{
            fontSize: 28,
            letterSpacing: 8,
            textTransform: 'uppercase',
            color: '#c89b53',
            fontWeight: 500,
          }}>
          {eyebrow}
        </div>
        <div
          style={{
            fontWeight: 500,
            fontSize: 140,
            lineHeight: 1,
            letterSpacing: '-0.04em',
            backgroundImage:
              'linear-gradient(95deg, #f3e3c7 0%, #c89b53 60%, #f3e3c7 100%)',
            backgroundClip: 'text',
            color: 'transparent',
            whiteSpace: 'pre-wrap',
          }}>
          {title}
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}>
          <div
            style={{
              fontSize: 22,
              color: '#d4c19b',
              maxWidth: 760,
              lineHeight: 1.4,
            }}>
            {subtitle}
          </div>
          <div style={{ fontSize: 22, color: '#c89b53' }}>kibar.pro</div>
        </div>
      </div>
    ),
    { ...ogSize },
  );
}
