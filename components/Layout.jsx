import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { WaIcon, IgIcon } from './Icons';

export default function Layout({ children, title = 'Berkat Anugerah Florist', settings = {} }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();
  const wa = settings.wa_number || '6281244087447';
  const waMsg = encodeURIComponent('Halo Berkat Anugerah Florist, saya ingin konsultasi pesanan bunga.');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (path) => router.pathname === path;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Berkat Anugerah Florist — Toko bunga terbaik di Tomohon, Sulawesi Utara. Hand bouquet, bunga papan, bunga meja, standing flower." />
      </Head>

      <div className="announcement">
        {settings.announcement || 'Gratis konsultasi desain — Pengiriman area Tomohon & Manado'}
        &nbsp;·&nbsp;Pesan via WhatsApp
      </div>

      <header className={scrolled ? 'scrolled' : ''}>
        <div className="header-inner">
          <nav className="nav-left">
            <Link href="/produk" className={`nav-link ${isActive('/produk') ? 'active' : ''}`}>Produk</Link>
            <Link href="/kontak" className={`nav-link ${isActive('/kontak') ? 'active' : ''}`}>Kontak</Link>
          </nav>
          <div className="logo-block">
            <Link href="/">
              <span className="logo-name">Berkat Anugerah</span>
              <span className="logo-tagline">Florist · Tomohon</span>
            </Link>
          </div>
          <div className="nav-right">
            <a href={`https://wa.me/${wa}?text=${waMsg}`} target="_blank" rel="noreferrer" className="header-wa-btn">
              <span className="wa-icon-hdr"><WaIcon size={16} /></span>
              <span>WhatsApp</span>
            </a>
            <button className="hamburger" onClick={() => setMobileOpen(o => !o)} aria-label="Menu">
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="mobile-menu open">
          <Link href="/produk" onClick={() => setMobileOpen(false)}>Produk</Link>
          <Link href="/kontak" onClick={() => setMobileOpen(false)}>Kontak</Link>
          <a href={`https://wa.me/${wa}?text=${waMsg}`} target="_blank" rel="noreferrer" onClick={() => setMobileOpen(false)}>
            WhatsApp Kami
          </a>
        </div>
      )}

      <main>{children}</main>

      <footer className="site-footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="fn">Berkat Anugerah</span>
            <span className="ft">Florist · Tomohon</span>
            <p>Menghadirkan keindahan alam Tomohon — kota bunga Sulawesi Utara — ke setiap momen berharga dalam hidup Anda.</p>
            <div className="footer-socials">
              <a href={`https://wa.me/${wa}?text=${waMsg}`} target="_blank" rel="noreferrer" className="fsoc fsoc-wa" aria-label="WhatsApp">
                <WaIcon size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="fsoc fsoc-ig" aria-label="Instagram">
                <IgIcon size={18} />
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h5>Produk</h5>
            <ul>
              <li><Link href="/produk?cat=bunga-papan">Bunga Papan</Link></li>
              <li><Link href="/produk?cat=bunga-tangan">Bunga Tangan</Link></li>
              <li><Link href="/produk?cat=bunga-meja">Bunga Meja</Link></li>
              <li><Link href="/produk?cat=standing-flower">Standing Flower</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Kontak</h5>
            <ul>
              <li><a href={`https://wa.me/${wa}`}>0812-4408-7447</a></li>
              <li><a href="https://wa.me/6282291744441">0822-9174-4441</a></li>
              <li><a href="https://wa.me/6285399151607">0853-9915-1607</a></li>
              <li>{settings.jam_buka || 'Senin–Sabtu: 08.00–20.00'}</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 Berkat Anugerah Florist. Tomohon, Sulawesi Utara.</span>
          <span>Pesan via <strong>WhatsApp</strong> — Cepat &amp; Mudah</span>
        </div>
      </footer>
    </>
  );
}
