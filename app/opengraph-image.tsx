import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Mustafa Kibar — Senior Full-Stack Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          background:
            'radial-gradient(circle at 20% 20%, #1e293b 0%, #0a0a0a 60%)',
          color: '#f8fafc',
          fontFamily: 'sans-serif',
        }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            fontSize: 28,
            color: '#94a3b8',
            letterSpacing: 2,
            textTransform: 'uppercase',
          }}>
          <span
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              color: '#fff',
              fontSize: 28,
            }}>
            mk
          </span>
          kibar.pro
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div
            style={{
              fontSize: 84,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}>
            Mustafa Kibar
          </div>
          <div
            style={{
              fontSize: 40,
              color: '#cbd5e1',
              fontWeight: 500,
            }}>
            Senior Full-Stack Engineer
          </div>
          <div
            style={{
              fontSize: 26,
              color: '#94a3b8',
              maxWidth: 900,
              marginTop: 8,
            }}>
            Designing and shipping reliable, performant products across the web
            stack — from API to UI.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: 24,
            color: '#64748b',
          }}>
          <span>Istanbul, Türkiye</span>
          <span>github.com/mustafakibar</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
