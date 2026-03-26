# 🌸 Berkat Anugerah Florist

Website katalog bunga profesional untuk **Berkat Anugerah Florist** — Tomohon, Sulawesi Utara.

Pelanggan browsing produk lalu langsung memesan via **WhatsApp**. Tidak ada keranjang belanja atau payment gateway — sederhana, cepat, dan efektif.

---

## ✨ Fitur

- 🌸 **Katalog 12 produk** dengan filter kategori dan harga
- 💬 **Pesan via WhatsApp** — pesan sudah terisi otomatis dengan detail produk
- 📱 **Fully responsive** — mobile, tablet, desktop
- ⚡ **Next.js 15** — cepat dan SEO-friendly
- 🔒 **0 vulnerabilities** — bersih dari security issues
- 🎨 **Desain minimalis premium** — tipografi elegan, animasi halus

---

## 🚀 Jalankan Lokal

```bash
# 1. Clone repo
git clone https://github.com/username/berkat-florist.git
cd berkat-florist

# 2. Install dependencies
npm install

# 3. Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000)

**Tidak perlu konfigurasi apapun** — tidak ada `.env` yang dibutuhkan.

---

## 🌐 Deploy ke Vercel

### Cara 1: Deploy via GitHub (Direkomendasikan)

1. **Push ke GitHub:**
   ```bash
   git init
   git add .
   git commit -m "feat: Berkat Anugerah Florist initial release"
   git branch -M main
   git remote add origin https://github.com/username/berkat-florist.git
   git push -u origin main
   ```

2. **Deploy di Vercel:**
   - Buka [vercel.com](https://vercel.com) → Login dengan GitHub
   - Klik **"New Project"** → pilih repo `berkat-florist`
   - Klik **"Deploy"** — selesai! ✅

3. **Tidak perlu set Environment Variables** — website langsung live.

### Cara 2: Deploy via Vercel CLI

```bash
npm i -g vercel
vercel
```

---

## 📁 Struktur Project

```
berkat-florist/
├── pages/
│   ├── _app.jsx             → App wrapper
│   ├── _document.jsx        → HTML document (Google Fonts, favicon)
│   ├── index.jsx            → Halaman Beranda
│   ├── produk.jsx           → Katalog Produk + Filter
│   └── kontak.jsx           → Kontak + Form WhatsApp + FAQ
├── components/
│   ├── Layout.jsx            → Header + Footer
│   ├── ProductCard.jsx       → Kartu produk + tombol WhatsApp
│   └── ImageWithFallback.jsx → Gambar dengan fallback elegan
├── lib/
│   └── products.js           → Data 12 produk + config WhatsApp
└── styles/
    └── globals.css           → Semua CSS (tanpa framework)
```

---

## 🛒 Alur Pemesanan

```
Pelanggan buka website
        ↓
Pilih produk di halaman /produk
        ↓
Klik "Pesan via WA" (ready) atau "Konsultasi WA" (custom)
        ↓
WhatsApp terbuka — pesan terisi otomatis dengan detail produk
        ↓
Chat langsung dengan owner untuk konfirmasi & pembayaran
```

---

## ⚙️ Konfigurasi

Semua konfigurasi ada di **`lib/products.js`**:

```js
// Nomor WhatsApp owner (format: 62 + nomor tanpa 0)
export const OWNER_WA = '6281244087447';

// Tambah / edit produk di array PRODUCTS
// Ganti foto dengan ID dari pexels.com (gratis)
```

---

## 📦 Tech Stack

| Teknologi | Versi |
|-----------|-------|
| Next.js | 15.5.12 |
| React | 18 |
| CSS Vanilla | — |
| Pexels CDN | — |

---

## 📞 Kontak Florist

**Berkat Anugerah Florist**
📍 Tomohon, Sulawesi Utara
📱 [0812-4408-7447](https://wa.me/6281244087447)
