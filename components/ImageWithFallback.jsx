/**
 * ImageWithFallback
 * Shows a beautiful gradient + emoji if the image URL fails to load.
 * Prevents any broken-image icons from ever appearing.
 */
import { useState } from 'react';

const CATEGORY_CONFIG = {
  'bunga-papan':     { gradient: 'linear-gradient(145deg,#e8d5c4,#c9a96e)', emoji: '🌸', label: 'Bunga Papan' },
  'bunga-tangan':    { gradient: 'linear-gradient(145deg,#fde8ec,#e8a0a0)', emoji: '💐', label: 'Bunga Tangan' },
  'bunga-meja':      { gradient: 'linear-gradient(145deg,#d4ecd4,#7ab87a)', emoji: '🌺', label: 'Bunga Meja'  },
  'standing-flower': { gradient: 'linear-gradient(145deg,#e8e0f8,#a87ac8)', emoji: '🌷', label: 'Standing Flower' },
  'default':         { gradient: 'linear-gradient(145deg,#f5ede4,#b5885c)', emoji: '🌸', label: 'Bunga'       },
};

export default function ImageWithFallback({ src, alt, cat = 'default', style = {}, className = '', loading = 'lazy', ...rest }) {
  const [failed, setFailed] = useState(false);
  const cfg = CATEGORY_CONFIG[cat] || CATEGORY_CONFIG.default;

  if (failed) {
    return (
      <div
        className={className}
        style={{
          background: cfg.gradient,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          width: '100%',
          height: '100%',
          ...style,
        }}
      >
        <span style={{ fontSize: 52, lineHeight: 1 }}>{cfg.emoji}</span>
        <span style={{
          fontSize: 10,
          color: 'rgba(90,60,30,0.65)',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          fontFamily: "'Jost', sans-serif",
          fontWeight: 500,
          textAlign: 'center',
          padding: '0 12px',
        }}>
          {alt || cfg.label}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      loading={loading}
      onError={() => setFailed(true)}
      {...rest}
    />
  );
}
