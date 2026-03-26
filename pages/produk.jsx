import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import { PRODUCTS, SETTINGS, CATEGORIES, formatRp } from '../lib/products';
import { GridIcon, ListIcon, CloseIcon } from '../components/Icons';

export default function Produk() {
  const router = useRouter();
  const [activeCat, setActiveCat]     = useState('all');
  const [maxPrice, setMaxPrice]       = useState(null);
  const [absoluteMax, setAbsoluteMax] = useState(5000000);
  const [sortBy, setSortBy]           = useState('default');
  const [listView, setListView]       = useState(false);
  const [mobileFilter, setMobileFilter] = useState(false);
  const [preview, setPreview]         = useState(null);

  useEffect(() => {
    const max     = Math.max(...PRODUCTS.map(p => p.price));
    const rounded = Math.ceil(max / 500000) * 500000;
    setAbsoluteMax(rounded);
    setMaxPrice(rounded);
  }, []);

  useEffect(() => {
    if (router.isReady) {
      const cat = router.query.cat;
      if (cat && CATEGORIES.find(c => c.key === cat)) setActiveCat(cat);
    }
  }, [router.isReady, router.query.cat]);

  const catCounts = {};
  CATEGORIES.forEach(c => {
    catCounts[c.key] = c.key === 'all'
      ? PRODUCTS.length
      : PRODUCTS.filter(p => p.cat === c.key).length;
  });

  const filtered = PRODUCTS
    .filter(p => {
      const catOk   = activeCat === 'all' || p.cat === activeCat;
      const priceOk = maxPrice === null || p.price <= maxPrice;
      return catOk && priceOk;
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc')  return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'name-asc')   return a.name.localeCompare(b.name);
      return 0;
    });

  const setCat = (cat) => {
    setActiveCat(cat);
    router.replace({ query: cat === 'all' ? {} : { cat } }, undefined, { shallow: true });
  };

  const clearFilters = () => {
    setActiveCat('all');
    setMaxPrice(absoluteMax);
    setSortBy('default');
    router.replace({ query: {} }, undefined, { shallow: true });
  };

  const Sidebar = () => (
    <div>
      <div className="fs-section">
        <div className="fs-section-head"><h4>Kategori</h4></div>
        <div className="fs-body">
          <ul className="cat-filter-list">
            {CATEGORIES.map(c => (
              <li key={c.key}
                className={`cat-filter-item ${activeCat === c.key ? 'active' : ''}`}
                onClick={() => setCat(c.key)}>
                <div className="cfi-left">
                  <div className="cfi-dot" />
                  <span className="cfi-label">{c.label}</span>
                </div>
                <span className="cfi-count">{catCounts[c.key] || 0}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {maxPrice !== null && (
        <div className="fs-section">
          <div className="fs-section-head"><h4>Harga Maksimal</h4></div>
          <div className="fs-body">
            <div className="price-range">
              <div className="price-labels">
                <span>Rp 0</span>
                <span>{formatRp(absoluteMax)}</span>
              </div>
              <input type="range" className="range-input"
                min={0} max={absoluteMax} step={100000} value={maxPrice}
                onChange={e => setMaxPrice(Number(e.target.value))} />
              <div className="price-current">Maks: {formatRp(maxPrice)}</div>
            </div>
          </div>
        </div>
      )}

      <div className="fs-section">
        <div className="fs-section-head"><h4>Urutkan</h4></div>
        <div className="fs-body">
          <select className="sort-select" value={sortBy} onChange={e => setSortBy(e.target.value)}>
            <option value="default">Default</option>
            <option value="price-asc">Harga: Terendah</option>
            <option value="price-desc">Harga: Tertinggi</option>
            <option value="name-asc">Nama: A–Z</option>
          </select>
        </div>
      </div>
      <button className="btn-clear-filter" onClick={clearFilters}>Hapus Semua Filter</button>
    </div>
  );

  return (
    <>
    <Layout title="Produk — Berkat Anugerah Florist" settings={SETTINGS}>
      <section className="page-hero" data-bg="PRODUK">
        <p className="ph-tag">Koleksi Kami</p>
        <h1>Rangkaian Bunga <em>Berkualitas</em></h1>
        <p>Temukan rangkaian bunga terbaik untuk setiap momen.</p>
        <div className="breadcrumb">
          <a href="/">Beranda</a><span>/</span>
          <span style={{ color: 'rgba(255,255,255,.7)' }}>Produk</span>
        </div>
      </section>

      <div className="shop-wrapper">
        <aside className="filter-sidebar"><Sidebar /></aside>
        <div className="shop-main">
          <button className="mobile-filter-toggle" onClick={() => setMobileFilter(o => !o)}>
            Filter Produk {mobileFilter ? '▲' : '▼'}
          </button>
          {mobileFilter && <div className="filter-sidebar-mobile open"><Sidebar /></div>}

          <div className="shop-toolbar">
            <div className="st-left">
              <span className="result-count">{filtered.length} Produk</span>
              <div className="active-filters">
                {activeCat !== 'all' && (
                  <div className="af-chip">
                    {CATEGORIES.find(c => c.key === activeCat)?.label}
                    <button onClick={() => setCat('all')}><CloseIcon size={10} /></button>
                  </div>
                )}
                {maxPrice !== null && maxPrice < absoluteMax && (
                  <div className="af-chip">
                    Maks {formatRp(maxPrice)}
                    <button onClick={() => setMaxPrice(absoluteMax)}><CloseIcon size={10} /></button>
                  </div>
                )}
              </div>
            </div>
            <div className="st-right">
              <button className={`view-btn ${!listView ? 'active' : ''}`} onClick={() => setListView(false)}><GridIcon size={15} /></button>
              <button className={`view-btn ${listView ? 'active' : ''}`} onClick={() => setListView(true)}><ListIcon size={15} /></button>
            </div>
          </div>

          <div className={`products-grid ${listView ? 'list-view' : ''}`}>
            {filtered.length === 0 ? (
              <div className="no-results">
                <div className="nr-icon" style={{ fontSize: 32, color: 'var(--accent)' }}>ꫂ❁</div>
                <p>Tidak ada produk yang sesuai filter</p>
                <small>Coba ubah atau hapus filter</small>
              </div>
            ) : (
              filtered.map(p => <ProductCard key={p.id} product={p} onClick={setPreview} />)
            )}
          </div>
        </div>
      </div>
    </Layout>
    {preview && <ProductModal product={preview} onClose={() => setPreview(null)} />}
    </>
  );
}
