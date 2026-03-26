import { useState } from 'react';
import Layout from '../components/Layout';
import { PRODUCTS, SETTINGS, OWNER_WA } from '../lib/products';
import { WaIcon, PinIcon, PhoneIcon, ClockIcon, TruckIcon, ParkingIcon, CalendarIcon, UserIcon, ArrowRightIcon } from '../components/Icons';

const PHONES = ['6281244087447', '6282291744441', '6285399151607'];
const PHONE_LABELS = ['0812-4408-7447', '0822-9174-4441', '0853-9915-1607'];

const FAQS = [
  { q: 'Berapa lama proses pembuatan bunga?', a: 'Untuk produk ready, proses 2–4 jam. Untuk dekorasi besar dan standing flower, butuh 1 hari kerja. Kami sarankan pesan H-1.' },
  { q: 'Apakah bisa custom warna dan desain?', a: 'Ya! Semua produk custom bisa disesuaikan warna dan desainnya. Konsultasikan via WhatsApp dan kami beri penawaran terbaik.' },
  { q: 'Area mana yang dilayani pengiriman?', a: 'Kami melayani Tomohon, Manado, Minahasa, Minahasa Utara, dan Minahasa Selatan. Area lain harap hubungi kami terlebih dahulu.' },
  { q: 'Bagaimana cara memesan?', a: 'Pilih produk, klik "Pesan via WhatsApp", lalu chat langsung. Kami konfirmasi ketersediaan dan detail pembayaran via WhatsApp.' },
  { q: 'Bagaimana kalau bunga yang dipesan tidak tersedia?', a: 'Kami akan menghubungi via WhatsApp untuk menawarkan alternatif. Jika tidak ada pilihan cocok, pesanan dibatalkan tanpa biaya.' },
  { q: 'Apakah tersedia kartu ucapan?', a: 'Ya, setiap pesanan bisa disertai kartu ucapan gratis. Cantumkan pesan di catatan saat memesan.' },
];

export default function Kontak() {
  const [form, setForm] = useState({ name: '', phone: '', product: '', date: '', address: '', occasion: '', note: '' });
  const [openFaq, setOpenFaq] = useState(null);
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const jam = SETTINGS.jam_buka || 'Senin–Sabtu: 08.00–20.00\nMinggu: 09.00–17.00';

  const submitWA = () => {
    if (!form.name || !form.phone || !form.product) {
      alert('Nama, nomor WA, dan jenis bunga wajib diisi!');
      return;
    }
    const dateStr = form.date
      ? new Date(form.date).toLocaleDateString('id-ID', { weekday:'long',year:'numeric',month:'long',day:'numeric' })
      : 'Segera';
    const msg = [
      `*PESANAN — Berkat Anugerah Florist*`, ``,
      `Nama: ${form.name}`, `WhatsApp: ${form.phone}`,
      form.address ? `Alamat: ${form.address}` : '',
      ``, `Produk: ${form.product}`,
      form.occasion ? `Acara: ${form.occasion}` : '',
      `Tanggal: ${dateStr}`,
      form.note ? `Catatan: ${form.note}` : '',
      ``, `Mohon konfirmasi pesanan saya. Terima kasih!`,
    ].filter(Boolean).join('\n');
    window.open(`https://wa.me/${OWNER_WA}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const grouped = {};
  PRODUCTS.forEach(p => {
    if (!grouped[p.catLabel]) grouped[p.catLabel] = [];
    grouped[p.catLabel].push(p);
  });

  return (
    <Layout title="Kontak — Berkat Anugerah Florist" settings={SETTINGS}>
      <section className="page-hero" data-bg="KONTAK">
        <p className="ph-tag">Hubungi Kami</p>
        <h1>Kami Siap <em>Membantu</em> Anda</h1>
        <p>Konsultasikan kebutuhan bunga Anda — gratis, cepat, dan tanpa komitmen.</p>
        <div className="breadcrumb">
          <a href="/">Beranda</a><span>/</span>
          <span style={{ color:'rgba(255,255,255,.7)' }}>Kontak</span>
        </div>
      </section>

      <div className="contact-body">
        <div className="info-cards">
          {[
            { Icon: PinIcon,   title: 'Lokasi Toko',       body: 'Jln. Raya Tomohon Kakaskasen Satu\nLingkungan 4, Tomohon Utara\nSulawesi Utara' },
            { Icon: PhoneIcon, title: 'WhatsApp / Telepon', body: PHONE_LABELS.join('\n') },
            { Icon: ClockIcon, title: 'Jam Operasional',    body: jam },
          ].map(({ Icon, title, body }) => (
            <div className="info-card" key={title}>
              <div className="ic-icon"><Icon size={22} /></div>
              <div className="ic-title">{title}</div>
              <div className="ic-body">
                {body.split('\n').map((l, i, a) => <span key={i}>{l}{i < a.length - 1 && <br />}</span>)}
              </div>
            </div>
          ))}
        </div>

        <div className="contact-grid">
          <div className="wa-section">
            <span className="section-tag">Hubungi Langsung</span>
            <h2 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:38,fontWeight:400,color:'var(--charcoal)',margin:'12px 0 14px',lineHeight:1.1 }}>
              Chat via <em style={{ fontStyle:'italic',color:'var(--accent)' }}>WhatsApp</em>
            </h2>
            <p style={{ fontSize:14,color:'var(--mid)',lineHeight:1.75,marginBottom:28,fontWeight:300 }}>
              Cara tercepat untuk konsultasi dan pemesanan. Tim kami siap membalas dalam waktu singkat.
            </p>
            {PHONES.map((p, i) => (
              <a key={p} href={`https://wa.me/${p}?text=${encodeURIComponent('Halo, saya ingin konsultasi pemesanan bunga')}`}
                target="_blank" rel="noreferrer" className="wa-card">
                <div className="wa-card-icon"><WaIcon size={17} /></div>
                <div>
                  <div className="wa-card-num">{PHONE_LABELS[i]}</div>
                  <div className="wa-card-label">{i === 0 ? 'Nomor Utama' : 'Nomor Cadangan'}</div>
                </div>
                <span className="wa-card-arrow"><ArrowRightIcon size={14} /></span>
              </a>
            ))}
            <div className="hours-box">
              <h4>Jam Operasional</h4>
              {jam.split('\n').map(line => {
                const idx = line.indexOf(':');
                const day  = idx > -1 ? line.slice(0, idx).trim() : line;
                const time = idx > -1 ? line.slice(idx + 1).trim() : '';
                return <div key={line} className="hours-row"><span>{day}</span>{time && <span>{time}</span>}</div>;
              })}
            </div>
          </div>

          <div className="order-form-box">
            <div className="ofb-head">
              <div className="icon"><WaIcon size={28} /></div>
              <div><h3>Formulir Pemesanan</h3><p>Isi form, kami hubungi Anda segera via WhatsApp</p></div>
            </div>
            <div className="ofb-body">
              <div className="form-note">
                Form ini untuk semua jenis pesanan. Produk Custom akan dikonsultasikan via WhatsApp setelah submit.
              </div>
              <div className="form-row">
                <div className="form-field">
                  <label><UserIcon size={13} /> Nama Lengkap *</label>
                  <input type="text" value={form.name} onChange={e => set('name', e.target.value)} placeholder="Nama Anda" />
                </div>
                <div className="form-field">
                  <label><PhoneIcon size={13} /> No. WhatsApp *</label>
                  <input type="tel" value={form.phone} onChange={e => set('phone', e.target.value)} placeholder="08xx xxxx xxxx" />
                </div>
              </div>
              <div className="form-field">
                <label>Jenis Bunga *</label>
                <select value={form.product} onChange={e => set('product', e.target.value)}>
                  <option value="">— Pilih Produk —</option>
                  {Object.entries(grouped).map(([label, items]) => (
                    <optgroup key={label} label={label}>
                      {items.map(p => (
                        <option key={p.id}>
                          {p.name} — {p.type === 'custom' ? 'Mulai ' : ''}Rp {p.price.toLocaleString('id-ID')}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                  <option>Custom / Konsultasi Desain</option>
                </select>
              </div>
              <div className="form-row">
                <div className="form-field">
                  <label><CalendarIcon size={13} /> Tanggal Dibutuhkan</label>
                  <input type="date" value={form.date} onChange={e => set('date', e.target.value)} />
                </div>
                <div className="form-field">
                  <label><PinIcon size={13} /> Alamat Pengiriman</label>
                  <input type="text" value={form.address} onChange={e => set('address', e.target.value)} placeholder="Kota / kecamatan" />
                </div>
              </div>
              <div className="form-field">
                <label>Tujuan / Acara</label>
                <select value={form.occasion} onChange={e => set('occasion', e.target.value)}>
                  <option value="">— Pilih Acara —</option>
                  {['Syukuran / Peresmian','Pernikahan','Ulang Tahun','Wisuda','Dukacita / Belasungkawa','Valentine / Anniversary','Dekorasi Kantor / Toko','Lainnya'].map(o => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>
              <div className="form-field">
                <label>Catatan &amp; Preferensi Warna</label>
                <textarea value={form.note} onChange={e => set('note', e.target.value)}
                  placeholder="Contoh: warna merah muda, kartu ucapan tulis nama penerima..." rows={3} />
              </div>
              <button className="btn-submit-wa" onClick={submitWA}>
                <WaIcon size={17} /> Kirim Pesanan via WhatsApp
              </button>
            </div>
          </div>
        </div>

        <div className="map-section">
          <span className="section-tag">Lokasi Kami</span>
          <h3>Temukan <em>Toko Kami</em></h3>
          <p>Jln. Raya Tomohon Kakaskasen Satu, Lingkungan 4, Tomohon Utara, Sulawesi Utara</p>
          <div className="map-wrapper">
            <div className="map-embed">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63744.5!2d124.832!3d1.336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32870c4de97c5d01%3A0x0!2sTomohon%20Utara%2C%20Kota%20Tomohon!5e0!3m2!1sid!2sid!4v1699000000000"
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
            <div className="address-panel">
              <h4>Info Alamat</h4>
              {[
                { Icon: PinIcon,     label: 'Alamat',         val: 'Jln. Raya Tomohon Kakaskasen Satu, Lingk. 4, Tomohon Utara' },
                { Icon: TruckIcon,   label: 'Area Pengiriman', val: 'Tomohon, Manado, Minahasa, dan sekitarnya' },
                { Icon: ParkingIcon, label: 'Parkir',          val: 'Tersedia di depan toko' },
              ].map(({ Icon, label, val }) => (
                <div key={label} className="addr-row">
                  <div className="addr-icon"><Icon size={15} /></div>
                  <div className="addr-text"><strong>{label}</strong>{val}</div>
                </div>
              ))}
              <a href="https://maps.google.com/?q=Tomohon+Utara+Sulawesi+Utara" target="_blank" rel="noreferrer" className="map-link">
                Buka di Google Maps <ArrowRightIcon size={12} />
              </a>
            </div>
          </div>
        </div>

        <div className="faq-section">
          <div className="faq-header">
            <span className="section-tag">FAQ</span>
            <h2 className="section-title" style={{ marginTop:10,fontSize:38 }}>Pertanyaan <em>Umum</em></h2>
            <div className="section-rule" />
          </div>
          <div className="faq-grid">
            {FAQS.map((f, i) => (
              <div key={i} className="faq-item">
                <div className={`faq-q ${openFaq === i ? 'open' : ''}`} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {f.q} <span className="faq-icon">{openFaq === i ? '−' : '+'}</span>
                </div>
                {openFaq === i && <div className="faq-a">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
