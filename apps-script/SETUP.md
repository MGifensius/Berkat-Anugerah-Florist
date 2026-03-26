# Setup Google Sheets CMS — Berkat Anugerah Florist

---

## Langkah 1 — Buat Folder Google Drive untuk Foto

1. Buka [drive.google.com](https://drive.google.com)
2. Klik **+ New → New folder**
3. Beri nama: `Berkat Florist - Foto Produk`
4. Klik kanan folder → **Share** → ubah akses ke **"Anyone with the link" → Viewer**
5. Copy **Folder ID** dari URL browser:
   ```
   https://drive.google.com/drive/folders/  ←INI FOLDER ID NYA→
   ```

---

## Langkah 2 — Buat Google Spreadsheet

1. Buka [sheets.google.com](https://sheets.google.com)
2. Klik **+ Spreadsheet baru**
3. Beri nama: `Berkat Anugerah Florist - Produk`

---

## Langkah 3 — Setup Apps Script

1. Di spreadsheet, klik menu **Extensions → Apps Script**
2. Hapus semua kode yang ada
3. Copy seluruh isi file `Code.gs` dan paste ke editor
4. **Penting:** Ganti baris ini dengan Folder ID dari Langkah 1:
   ```javascript
   const IMAGES_FOLDER_ID = 'PASTE_FOLDER_ID_DISINI';
   ```
5. Klik **Save** (Ctrl+S)

---

## Langkah 4 — Jalankan Setup

1. Di toolbar Apps Script, pilih function **fullSetup**
2. Klik tombol **Run ▶**
3. Izinkan akses saat diminta (klik **Allow**)
4. Spreadsheet akan otomatis punya tab **Products** dan **Instructions**

---

## Langkah 5 — Deploy sebagai Web App

1. Klik **Deploy → New deployment**
2. Klik ikon **⚙** → pilih **Web app**
3. Isi:
   - **Execute as:** Me
   - **Who has access:** Anyone
4. Klik **Deploy**
5. **Copy URL** — bentuknya:
   `https://script.google.com/macros/s/AKfycb.../exec`

---

## Langkah 6 — Tambah ke Vercel

1. Buka [vercel.com](https://vercel.com) → project Berkat Florist
2. **Settings → Environment Variables**
3. Tambah:
   - **Name:** `SHEETS_API_URL`
   - **Value:** URL dari Langkah 5
4. **Save → Redeploy**

---

## Cara Kerja Sehari-hari untuk Klien

### Tambah Produk Baru:
1. **Upload foto** ke folder Drive `Berkat Florist - Foto Produk`
   - Buka drive.google.com → cari folder itu → drag foto dari komputer
   - Nama file pakai huruf kecil + tanda hubung: `bunga-papan-baru-1.jpg`
2. **Buka Spreadsheet** → tab Products
3. **Tambah baris baru** isi sesuai kolom
4. Di kolom `image1`, ketik nama file persis sama: `bunga-papan-baru-1.jpg`
5. Set kolom `active` = **TRUE**
6. Website otomatis update dalam ~2 menit

### Toggle Promo:
| Aksi | Kolom `price` | Kolom `oldPrice` |
|------|--------------|------------------|
| Nyalakan promo | Isi harga PROMO (misal 350000) | Isi harga ASLI (misal 420000) |
| Matikan promo | Kembalikan ke harga normal | **Kosongkan/hapus** |

### Sembunyikan Produk:
- Ubah kolom `active` dari `TRUE` → `FALSE`

### Kolom Products:
| Kolom | Isi | Contoh |
|-------|-----|--------|
| `id` | Nomor urut unik | 1, 2, 3... |
| `name` | Nama produk | Bunga Papan Syukuran |
| `cat` | Kode kategori | `bunga-papan` / `bunga-tangan` / `bunga-meja` / `standing-flower` |
| `catLabel` | Label tampilan | Bunga Papan |
| `type` | Jenis | `ready` atau `custom` |
| `badge` | Label kecil (opsional) | Terlaris / Baru / Promo |
| `badgeClass` | Warna badge | `badge-hot` / `badge-new` / `badge-sale` |
| `price` | Harga (angka) | 850000 |
| `oldPrice` | Harga asli sebelum promo | 950000 (kosongkan jika tidak ada promo) |
| `image1` | Nama file foto 1 | bunga-papan-syukuran-1.jpg |
| `image2` | Nama file foto 2 | bunga-papan-syukuran-2.jpg |
| `image3` | Nama file foto 3 | bunga-papan-syukuran-3.jpg |
| `active` | Tampil di website? | TRUE / FALSE |

### Tips Nama File Foto:
✅ `bunga-papan-syukuran-1.jpg`
✅ `bouquet-rose-premium.jpg`
❌ `Bunga Papan (1).jpg` (ada spasi & tanda kurung)
❌ `IMG_20240315_123456.jpg` (tidak deskriptif)
