import { useState, useEffect } from 'react';
import { OWNER_WA, formatRp } from '../lib/products';
import { WaIcon, CloseIcon } from './Icons';

export default function ProductModal({ product, onClose }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const images = product.images || [];

  useEffect(() => {
    setActiveIdx(0); // reset when product changes
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose, product.id]);

  const openWA = () => {
    const priceLabel = product.type === 'custom'
      ? `Mulai ${formatRp(product.price)}`
      : formatRp(product.price);
    const msg = product.type === 'custom'
      ? `Halo Berkat Anugerah Florist\n\nSaya ingin konsultasi untuk:\n\n*${product.name}*\nKategori: ${product.catLabel}\nEstimasi: ${priceLabel}\n\nBisakah bantu mengenai desain dan ketersediaan? Terima kasih!`
      : `Halo Berkat Anugerah Florist\n\nSaya ingin memesan:\n\n*${product.name}*\nKategori: ${product.catLabel}\nHarga: ${priceLabel}\n\nMohon dikonfirmasi ketersediaannya. Terima kasih!`;
    window.open(`https://wa.me/${OWNER_WA}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const prev = () => setActiveIdx(i => (i - 1 + images.length) % images.length);
  const next = () => setActiveIdx(i => (i + 1) % images.length);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>

        {/* ── LEFT: Image Gallery ── */}
        <div className="modal-gallery">

          {/* Main image — fixed aspect ratio, never shifts */}
          <div className="modal-main-wrap">
            <img
              key={images[activeIdx]} // key forces re-render = smooth transition
              src={images[activeIdx]}
              alt={product.name}
              className="modal-main-img-el"
            />
            {/* Prev/next arrows if more than 1 image */}
            {images.length > 1 && (
              <>
                <button className="modal-nav modal-nav-prev" onClick={prev} aria-label="Sebelumnya">‹</button>
                <button className="modal-nav modal-nav-next" onClick={next} aria-label="Selanjutnya">›</button>
              </>
            )}
            {/* Dot indicator */}
            {images.length > 1 && (
              <div className="modal-dots">
                {images.map((_, i) => (
                  <button
                    key={i}
                    className={`modal-dot${i === activeIdx ? ' active' : ''}`}
                    onClick={() => setActiveIdx(i)}
                    aria-label={`Gambar ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Thumbnails — fixed height strip */}
          {images.length > 1 && (
            <div className="modal-thumbs-strip">
              {images.map((src, i) => (
                <button
                  key={i}
                  className={`modal-thumb-btn${i === activeIdx ? ' active' : ''}`}
                  onClick={() => setActiveIdx(i)}
                  aria-label={`Gambar ${i + 1}`}
                >
                  <img src={src} alt={`${product.name} ${i + 1}`} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ── RIGHT: Product Info ── */}
        <div className="modal-info">
          <div>
            <div className="modal-cat">{product.catLabel}</div>
            <h2 className="modal-name">{product.name}</h2>

            <div className="modal-price-row">
              {product.oldPrice && (
                <span className="modal-old-price">{formatRp(product.oldPrice)}</span>
              )}
              <span className="modal-price">
                {product.type === 'custom' ? `Mulai ${formatRp(product.price)}` : formatRp(product.price)}
              </span>
              {product.oldPrice && <span className="modal-promo-tag">Promo</span>}
              {product.type === 'custom' && <span className="modal-custom-tag">Custom</span>}
            </div>

            {product.badge && (
              <div className={`modal-badge ${product.badgeClass || ''}`}>{product.badge}</div>
            )}
          </div>

          <div>
            <div className="modal-divider" />
            <button
              className={`modal-wa-btn${product.type === 'custom' ? ' modal-wa-custom' : ''}`}
              onClick={openWA}
            >
              <WaIcon size={16} />
              {product.type === 'custom' ? 'Konsultasi via WhatsApp' : 'Pesan via WhatsApp'}
            </button>
            <p className="modal-note">
              {product.type === 'custom'
                ? 'Desain, warna, dan ukuran sesuai keinginan Anda.'
                : 'Konfirmasi ketersediaan & jadwal pengiriman via WhatsApp.'}
            </p>
          </div>
        </div>

        {/* Close button */}
        <button className="modal-close" onClick={onClose} aria-label="Tutup">
          <CloseIcon size={14} />
        </button>
      </div>
    </div>
  );
}
