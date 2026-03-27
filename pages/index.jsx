import { useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import { PRODUCTS, TESTIMONIALS, SETTINGS } from '../lib/products';
import { WaIcon, ZapIcon, ChatIcon, PaletteIcon, StarIcon, ArrowRightIcon } from '../components/Icons';

const BungaSegarIcon = () => (
  <span style={{ fontSize: 26, lineHeight: 1, color: 'var(--accent)', fontFamily: 'serif', display: 'block' }}>
    ꫂ❁
  </span>
);

const FEATURES = [
  { Icon: BungaSegarIcon, title: 'Bunga Segar',       sub: 'Langsung dari kebun Tomohon' },
  { Icon: ZapIcon,        title: 'Same Day Delivery',  sub: 'Order sebelum jam 14.00' },
  { Icon: ChatIcon,       title: 'Free Konsultasi',    sub: 'Via WhatsApp kapan saja' },
  { Icon: PaletteIcon,    title: 'Custom Design',      sub: 'Sesuai tema & keinginan' },
];

const CAT_TILES = [
  { key: 'papan-bunga',     emoji: '🪧', label: 'Papan Bunga',    sub: 'Mulai Rp 500.000' },
  { key: 'standing-flower', emoji: '🌷', label: 'Standing Flower',sub: 'Mulai Rp 500.000' },
  { key: 'dekorasi-duka',   emoji: '🕊',  label: 'Dekorasi Duka',  sub: 'Mulai Rp 800.000' },
  { key: 'hand-bucket',     emoji: '💐', label: 'Hand Bucket',    sub: 'Mulai Rp 350.000' },
];

export default function Home() {
  const featured = PRODUCTS.slice(0, 8);
  const wa    = SETTINGS.wa_number;
  const waMsg = encodeURIComponent('Halo Berkat Anugerah Florist, saya ingin konsultasi pesanan bunga.');
  const [preview, setPreview] = useState(null);

  return (
    <>
    <Layout title="Berkat Anugerah Florist — Tomohon" settings={SETTINGS}>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-eyebrow">Kota Bunga Tomohon</p>
          <h1>Rangkaian <em>Bunga</em><br />Untuk Setiap Momen</h1>
          <p>Dari sukacita hingga belasungkawa, kami hadir dengan rangkaian bunga segar berkualitas tinggi khas Sulawesi Utara.</p>
          <div className="hero-btns">
            <Link href="/produk" className="btn-primary">Lihat Koleksi</Link>
            <a href={`https://wa.me/${wa}?text=${waMsg}`} target="_blank" rel="noreferrer" className="btn-wa">
              <WaIcon size={17} /> WhatsApp Kami
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <img src="/images/products/HandBucketWedding1.jpeg"
            alt="Rangkaian bunga segar Berkat Anugerah Florist"
            style={{ width:'100%',height:'100%',objectFit:'cover',objectPosition:'center',display:'block' }} />
        </div>
      </section>

      {/* ── FEATURES STRIP ── */}
      <div className="features-strip">
        {FEATURES.map(({ Icon, title, sub }) => (
          <div className="fst-item" key={title}>
            <div className="fst-icon"><Icon size={28} /></div>
            <div className="fst-title">{title}</div>
            <div className="fst-desc">{sub}</div>
          </div>
        ))}
      </div>

      {/* ── CATEGORY TILES ── */}
      <div className="cat-strip">
        {CAT_TILES.map(({ key, emoji, label, sub }) => (
          <Link href={`/produk?cat=${key}`} className="cat-tile" key={key}>
            <div className="ct-icon"><span className="cat-emoji">{emoji}</span></div>
            <div>
              <div className="ct-label">{label}</div>
              <div className="ct-sub">{sub}</div>
            </div>
          </Link>
        ))}
      </div>

      {/* ── FEATURED PRODUCTS ── */}
      <section className="featured-section">
        <div className="featured-header">
          <div>
            <span className="section-tag">Pilihan Terbaik</span>
            <h2 className="section-title" style={{ marginTop: 12 }}>Produk <em>Unggulan</em></h2>
            <div className="section-rule" />
          </div>
          <Link href="/produk" className="btn-outline" style={{ display:'flex',alignItems:'center',gap:8 }}>
            Lihat Semua <ArrowRightIcon />
          </Link>
        </div>
        <div className="products-grid-home">
          {featured.map(p => <ProductCard key={p.id} product={p} onClick={setPreview} />)}
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      {TESTIMONIALS.length > 0 && (
        <section className="testi-section">
          <div className="testi-inner">
            <div className="section-header-center">
              <span className="section-tag">Yang Mereka Katakan</span>
              <h2 className="section-title" style={{ marginTop: 12 }}>Ulasan <em>Pelanggan</em></h2>
              <div className="section-rule" />
            </div>
            <div className="testi-grid">
              {TESTIMONIALS.map(t => (
                <div className="testi-card" key={t.id}>
                  <div className="tq-mark">"</div>
                  <p className="testi-text">{t.pesan}</p>
                  <div className="testi-author">
                    <div className="ta-avatar">{t.nama[0]}</div>
                    <div>
                      <div className="ta-name">{t.nama}</div>
                      <div className="ta-city">{t.kota}</div>
                      <div className="ta-stars">
                        {[1,2,3,4,5].map(i => <StarIcon key={i} size={13} filled={i <= t.rating} />)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="cta-inner">
          <span className="section-tag" style={{ color: 'var(--accent)' }}>Siap Memesan?</span>
          <h2 className="section-title" style={{ marginTop: 12 }}>Hubungi Kami <em>Sekarang</em></h2>
          <div className="section-rule" style={{ margin: '16px auto 24px' }} />
          <p>Konsultasi gratis, pengiriman cepat, bunga selalu segar dari Tomohon.</p>
          <div className="cta-btns" style={{ marginTop: 36 }}>
            <a href={`https://wa.me/${wa}?text=${waMsg}`} target="_blank" rel="noreferrer" className="btn-wa">
              <WaIcon size={17} /> Chat WhatsApp
            </a>
          </div>
        </div>
      </section>

    </Layout>
    {preview && <ProductModal product={preview} onClose={() => setPreview(null)} />}
    </>
  );
}
