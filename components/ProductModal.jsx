import { useState, useEffect } from 'react';
import { OWNER_WA, formatRp } from '../lib/products';
import { WaIcon, CloseIcon } from './Icons';

export default function ProductModal({ product, onClose }) {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const openWA = () => {
    const priceLabel = product.type === 'custom'
      ? `Mulai ${formatRp(product.price)}`
      : formatRp(product.price);
    const msg = product.type === 'custom'
      ? `Halo Berkat Anugerah Florist\n\nSaya ingin konsultasi untuk:\n\n*${product.name}*\nKategori: ${product.catLabel}\nEstimasi: ${priceLabel}\n\nBisakah bantu mengenai desain dan ketersediaan? Terima kasih!`
      : `Halo Berkat Anugerah Florist\n\nSaya ingin memesan:\n\n*${product.name}*\nKategori: ${product.catLabel}\nHarga: ${priceLabel}\n\nMohon dikonfirmasi ketersediaannya. Terima kasih!`;
    window.open(`https://wa.me/${OWNER_WA}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Tutup">
          <CloseIcon size={16} />
        </button>

        {/* Left — Gallery */}
        <div className="modal-gallery">
          <div className="modal-main-img">
            <img src={product.images[activeIdx]} alt={product.name} />
          </div>
          <div className="modal-thumbs">
            {product.images.map((src, i) => (
              <button key={i}
                className={`modal-thumb${i === activeIdx ? ' active' : ''}`}
                onClick={() => setActiveIdx(i)}>
                <img src={src} alt={`${product.name} ${i + 1}`} />
              </button>
            ))}
          </div>
        </div>

        {/* Right — Info */}
        <div className="modal-info">
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
            {product.type === 'custom' && <span className="modal-custom-tag">Custom Order</span>}
          </div>

          {product.badge && (
            <div className={`modal-badge ${product.badgeClass || ''}`}>{product.badge}</div>
          )}

          <div className="modal-divider" />

          <button
            className={`modal-wa-btn${product.type === 'custom' ? ' modal-wa-custom' : ''}`}
            onClick={openWA}>
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
    </div>
  );
}
