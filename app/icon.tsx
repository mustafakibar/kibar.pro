import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#0a0a0a',
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'center',
          fontFamily: 'serif',
          fontStyle: 'italic',
          fontWeight: 600,
          letterSpacing: '-0.04em',
        }}>
        <span
          style={{
            backgroundImage:
              'linear-gradient(95deg, #f3e3c7 0%, #c89b53 60%, #f3e3c7 100%)',
            backgroundClip: 'text',
            color: 'transparent',
            fontSize: 26,
            lineHeight: 1,
          }}>
          k
        </span>
        <span
          style={{
            color: '#c84545',
            fontSize: 26,
            lineHeight: 1,
            fontStyle: 'normal',
          }}>
          .
        </span>
      </div>
    ),
    { ...size },
  );
}
