import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background:
            'radial-gradient(ellipse at 30% 20%, #2a1212 0%, #0a0606 80%)',
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'center',
          fontFamily: 'serif',
          fontStyle: 'italic',
          fontWeight: 600,
          letterSpacing: '-0.04em',
          padding: 24,
        }}>
        <span
          style={{
            backgroundImage:
              'linear-gradient(95deg, #f3e3c7 0%, #c89b53 60%, #f3e3c7 100%)',
            backgroundClip: 'text',
            color: 'transparent',
            fontSize: 132,
            lineHeight: 1,
          }}>
          k
        </span>
        <span
          style={{
            color: '#c84545',
            fontSize: 132,
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
