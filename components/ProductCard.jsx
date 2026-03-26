import { formatRp } from '../lib/products';
import { SearchIcon, TagIcon } from './Icons';

export default function ProductCard({ product, onClick = null }) {
  const handleClick = () => { if (onClick) onClick(product); };
  const hasPromo = Boolean(product.oldPrice);

  return (
    <div
      className="product-card"
      onClick={handleClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e => e.key === 'Enter' && handleClick()) : undefined}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      <div className="product-img">
        <img
          src={product.images[0]}
          alt={product.name}
          style={{ width:'100%',height:'100%',objectFit:'cover',display:'block',transition:'transform .55s ease' }}
          loading="lazy"
        />

        {hasPromo && (
          <div className="product-promo-ribbon">
            <TagIcon size={11} /><span>Promo</span>
          </div>
        )}
        {product.badge && !hasPromo && (
          <div className={`product-badge ${product.badgeClass || ''}`}>{product.badge}</div>
        )}
        <div className="card-hover-overlay">
          <span className="card-preview-hint"><SearchIcon size={14} /> Lihat Detail</span>
        </div>
      </div>

      <div className="product-info">
        <div className="product-cat">{product.catLabel}</div>
        <div className="product-name">{product.name}</div>
        <div className="product-price-row">
          <div className="product-price">
            {hasPromo && <span className="old-price">{formatRp(product.oldPrice)}</span>}
            {product.type === 'custom' ? `Mulai ${formatRp(product.price)}` : formatRp(product.price)}
          </div>
          {product.type === 'custom' && (
            <span className="custom-badge-inline">Custom</span>
          )}
        </div>
      </div>
    </div>
  );
}
