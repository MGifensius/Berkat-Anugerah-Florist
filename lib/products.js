/**
 * ╔══════════════════════════════════════════════════════════════╗
 *  BERKAT ANUGERAH FLORIST — Product Catalog
 *
 *  TOGGLE PROMO per product:
 *    ON  → set oldPrice to original price, lower price to promo price
 *    OFF → set oldPrice: null
 *
 *  HIDE → comment the block with // or delete it
 *  ADD  → copy a block, give new id/name/images/price
 * ╚══════════════════════════════════════════════════════════════╝
 */

const img = (f) => `/images/products/${f}`;

export const PRODUCTS = [

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  //  PAPAN BUNGA — flat printed banner on stand
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id: 1, name: 'Papan Bunga',
    cat: 'papan-bunga', catLabel: 'Papan Bunga', type: 'ready',
    badge: null, badgeClass: '',
    price: 500000, oldPrice: null,
    images: [img('BungaPapanVLow1.jpeg'), img('BungaPapanVLow2.jpeg'), img('BungaPapanVLow3.jpeg')],
  },
  {
    id: 2, name: 'Papan Bunga',
    cat: 'papan-bunga', catLabel: 'Papan Bunga', type: 'ready',
    badge: null, badgeClass: '',
    price: 600000, oldPrice: null,
    images: [img('PapanBunga_Duka_Putih1.jpeg'), img('PapanBunga_Duka_Putih2.jpeg'), img('BungaPapanLow3.jpeg')],
  },
  {
    id: 3, name: 'Papan Bunga Ucapan',
    cat: 'papan-bunga', catLabel: 'Papan Bunga', type: 'ready',
    badge: null, badgeClass: '',
    price: 600000, oldPrice: null,
    images: [img('PapanBunga_GrandOpening1.jpeg'), img('BungaPapanLow1.jpeg'), img('BungaPapanLow2.jpeg')],
  },
  {
    id: 4, name: 'Papan Bunga Pernikahan',
    cat: 'papan-bunga', catLabel: 'Papan Bunga', type: 'ready',
    badge: null, badgeClass: '',
    price: 750000, oldPrice: null,
    images: [img('PapanBunga_Wedding1.jpeg'), img('PapanBunga_Wedding2.jpeg')],
  },
  {
    id: 5, name: 'Papan Bunga Duka Besar',
    cat: 'papan-bunga', catLabel: 'Papan Bunga', type: 'ready',
    badge: null, badgeClass: '',
    price: 800000, oldPrice: null,
    images: [img('PapanBunga_Duka_Besar1.jpeg'), img('BungaPapanVLow1.jpeg')],
  },
  {
    id: 6, name: 'Papan Bunga Premium',
    cat: 'papan-bunga', catLabel: 'Papan Bunga', type: 'ready',
    badge: 'Premium', badgeClass: 'badge-hot',
    price: 1500000, oldPrice: null,
    images: [img('BungaPapanLow1.jpeg'), img('BungaPapanLow2.jpeg'), img('BungaPapanLow3.jpeg')],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  //  STANDING FLOWER — free-standing floral arrangement
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id: 7, name: 'Standing Flower Duka',
    cat: 'standing-flower', catLabel: 'Standing Flower', type: 'custom',
    badge: null, badgeClass: '',
    price: 500000, oldPrice: null,
    images: [img('PapanBungaDuka1.jpeg'), img('Standing_Duka_Putih_Silver1.jpeg')],
  },
  {
    id: 8, name: 'Standing Flower Pink',
    cat: 'standing-flower', catLabel: 'Standing Flower', type: 'custom',
    badge: null, badgeClass: '',
    price: 600000, oldPrice: null,
    images: [img('Standing_Pink_Merah1.jpeg'), img('Standing_Duka_Pink_Putih1.jpeg'), img('Standing_Pernikahan_Pink1.jpeg')],
  },
  {
    id: 9, name: 'Standing Flower Putih Lily',
    cat: 'standing-flower', catLabel: 'Standing Flower', type: 'custom',
    badge: null, badgeClass: '',
    price: 700000, oldPrice: null,
    images: [img('Standing_Lily_Putih1.jpeg'), img('Standing_Duka_AllWhite1.jpeg'), img('Standing_Duka_Lily1.jpeg')],
  },
  {
    id: 10, name: 'Standing Flower Duka Double',
    cat: 'standing-flower', catLabel: 'Standing Flower', type: 'custom',
    badge: null, badgeClass: '',
    price: 1000000, oldPrice: null,
    images: [img('PapanBungaDukaDouble1.jpeg'), img('Standing_Duka_Lily1.jpeg')],
  },
  {
    id: 11, name: 'Standing Bunga Lingkaran',
    cat: 'standing-flower', catLabel: 'Standing Flower', type: 'custom',
    badge: null, badgeClass: '',
    price: 500000, oldPrice: null,
    images: [img('StandingCircle1.jpeg'), img('StandingCircle2.jpeg')],
  },
  {
    id: 12, name: 'Standing Bunga Wreath Duka',
    cat: 'standing-flower', catLabel: 'Standing Flower', type: 'custom',
    badge: null, badgeClass: '',
    price: 600000, oldPrice: null,
    images: [img('Standing_Duka_Wreath1.jpeg'), img('Standing_Duka_Wreath2.jpeg'), img('Standing_Duka_Wreath3.jpeg')],
  },
  {
    id: 13, name: 'Standing Bunga Wreath Premium',
    cat: 'standing-flower', catLabel: 'Standing Flower', type: 'custom',
    badge: 'Premium', badgeClass: 'badge-hot',
    price: 900000, oldPrice: null,
    images: [img('Standing_Duka_Wreath4.jpeg'), img('Standing_Duka_Wreath5.jpeg'), img('Standing_Duka_Wreath1.jpeg')],
  },
  {
    id: 14, name: 'Standing Bunga Hati',
    cat: 'standing-flower', catLabel: 'Standing Flower', type: 'custom',
    badge: null, badgeClass: '',
    price: 800000, oldPrice: null,
    images: [img('Standing_Heart_Gold1.jpeg'), img('Standing_Heart_Peach1.jpeg')],
  },
  {
    id: 15, name: 'Standing Fresh Flower',
    cat: 'standing-flower', catLabel: 'Standing Flower', type: 'custom',
    badge: null, badgeClass: '',
    price: 1000000, oldPrice: null,
    images: [img('StandingFreshFlower1.jpeg'), img('StandingFreshFlower2.jpeg')],
  },
  {
    id: 16, name: 'Standing Flower Premium',
    cat: 'standing-flower', catLabel: 'Standing Flower', type: 'custom',
    badge: 'Premium', badgeClass: 'badge-hot',
    price: 1500000, oldPrice: null,
    images: [img('StandingPremium1.jpeg'), img('Standing_Duka_Silver1.jpeg')],
  },
  {
    id: 17, name: 'Bingkai Foto Bunga',
    cat: 'standing-flower', catLabel: 'Standing Flower', type: 'custom',
    badge: null, badgeClass: '',
    price: 1200000, oldPrice: null,
    images: [img('BingkaiFoto1.jpeg')],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  //  DEKORASI DUKA — full funeral room decoration packages
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id: 18, name: 'Salib Bunga',
    cat: 'dekorasi-duka', catLabel: 'Dekorasi Duka', type: 'custom',
    badge: null, badgeClass: '',
    price: 800000, oldPrice: null,
    images: [img('SalibBunga1.jpeg'), img('Salib_Putih_Polos1.jpeg'), img('Salib_Putih_Lily1.jpeg')],
  },
  {
    id: 19, name: 'Salib Bunga Premium',
    cat: 'dekorasi-duka', catLabel: 'Dekorasi Duka', type: 'custom',
    badge: 'Premium', badgeClass: 'badge-hot',
    price: 1500000, oldPrice: null,
    images: [img('Salib_Ungu_Peach1.jpeg'), img('SalibBunga1.jpeg')],
  },
  {
    id: 20, name: 'Bunga Peti',
    cat: 'dekorasi-duka', catLabel: 'Dekorasi Duka', type: 'custom',
    badge: null, badgeClass: '',
    price: 1000000, oldPrice: null,
    images: [img('BungaPeti_Putih1.jpeg'), img('BungaPeti_Warni1.jpeg')],
  },
  {
    id: 21, name: 'Dekorasi Duka',
    cat: 'dekorasi-duka', catLabel: 'Dekorasi Duka', type: 'custom',
    badge: null, badgeClass: '',
    price: 5000000, oldPrice: null,
    images: [img('DekorasiDuka1.jpeg'), img('DekorasiDuka2.jpeg'), img('DekorasiDuka3.jpeg')],
  },
  {
    id: 22, name: 'Dekorasi Duka Elegan',
    cat: 'dekorasi-duka', catLabel: 'Dekorasi Duka', type: 'custom',
    badge: null, badgeClass: '',
    price: 6000000, oldPrice: null,
    images: [img('DekorasiDukaElegan1.jpeg'), img('DekorasiDuka_Gold1.jpeg'), img('DekorasiDuka_Church1.jpeg')],
  },
  {
    id: 23, name: 'Dekorasi Duka Premium',
    cat: 'dekorasi-duka', catLabel: 'Dekorasi Duka', type: 'custom',
    badge: 'Premium', badgeClass: 'badge-hot',
    price: 7000000, oldPrice: null,
    images: [img('DekorasiDukaPremium1.jpeg'), img('DekorasiDukaPremium2.jpeg'), img('DekorasiDuka_Pink_Putih1.jpeg')],
  },
  {
    id: 24, name: 'Dekorasi Duka Mewah',
    cat: 'dekorasi-duka', catLabel: 'Dekorasi Duka', type: 'custom',
    badge: 'Premium', badgeClass: 'badge-hot',
    price: 8000000, oldPrice: null,
    images: [img('DekorasiDuka_Purple_Rose1.jpeg'), img('DekorasiDuka_Purple_White1.jpeg'), img('DekorasiDuka_White1.jpeg')],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  //  DEKORASI GEREJA
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id: 25, name: 'Dekorasi Gereja',
    cat: 'dekorasi-pesta', catLabel: 'Dekorasi Pesta', type: 'custom',
    badge: null, badgeClass: '',
    price: 2000000, oldPrice: null,
    images: [img('DekorasiGereja1.jpeg'), img('DekorasiGereja2.jpeg'), img('DekorasiGereja3.jpeg')],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  //  DEKORASI PESTA
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id: 26, name: 'Dekorasi Pesta',
    cat: 'dekorasi-pesta', catLabel: 'Dekorasi Pesta', type: 'custom',
    badge: null, badgeClass: '',
    price: 1500000, oldPrice: null,
    images: [img('DekorasiPesta1.jpg'), img('DekorasiPesta2.jpeg')],
  },
  {
    id: 27, name: 'Dekorasi Mobil',
    cat: 'dekorasi-pesta', catLabel: 'Dekorasi Pesta', type: 'custom',
    badge: null, badgeClass: '',
    price: 800000, oldPrice: null,
    images: [img('DekorasiMobil1.jpeg')],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  //  HAND BUCKET / BOUQUET
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id: 28, name: 'Flower Bouquet',
    cat: 'hand-bucket', catLabel: 'Hand Bucket', type: 'ready',
    badge: null, badgeClass: '',
    price: 350000, oldPrice: null,
    images: [img('FlowerBouquet.jpeg')],
  },
  {
    id: 29, name: 'Bouquet Kuning & Orange',
    cat: 'hand-bucket', catLabel: 'Hand Bucket', type: 'ready',
    badge: null, badgeClass: '',
    price: 400000, oldPrice: null,
    images: [img('HBouquet_Yellow_Orange1.jpeg')],
  },
  {
    id: 35, name: 'Bouquet Purple & White',
    cat: 'hand-bucket', catLabel: 'Hand Bucket', type: 'ready',
    badge: null, badgeClass: '',
    price: 450000, oldPrice: null,
    images: [img('HBouquet_Purple_White1.jpeg')],
  },
  {
    id: 30, name: 'Hand Bucket Wedding',
    cat: 'hand-bucket', catLabel: 'Hand Bucket', type: 'custom',
    badge: null, badgeClass: '',
    price: 750000, oldPrice: null,
    images: [img('HandBucketWedding1.jpeg'), img('HandBucketWedding2.jpeg'), img('HandBucketWedding3.jpeg')],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  //  KALUNG BUNGA
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id: 31, name: 'Kalung Bunga',
    cat: 'lainnya', catLabel: 'Lainnya', type: 'ready',
    badge: null, badgeClass: '',
    price: 150000, oldPrice: null,
    images: [img('Kalung_Kuning_Merah1.jpeg'), img('Kalung_Rose_Putih1.jpeg')],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  //  CORSAGE / BOUTONNIERE
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id: 32, name: 'Corsage Bunga',
    cat: 'lainnya', catLabel: 'Lainnya', type: 'ready',
    badge: null, badgeClass: '',
    price: 50000, oldPrice: null,
    images: [img('Corsage_Pink_Putih1.jpeg'), img('Corsage_Kuning_Putih1.jpeg'), img('Corsage_Kuning2.jpeg')],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  //  BUNGA MEJA / VAS
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id: 33, name: 'Bunga Meja',
    cat: 'bunga-meja', catLabel: 'Bunga Meja', type: 'ready',
    badge: null, badgeClass: '',
    price: 250000, oldPrice: null,
    images: [img('BungaMeja1.jpeg')],
  },
  {
    id: 34, name: 'Bunga Vas',
    cat: 'bunga-meja', catLabel: 'Bunga Meja', type: 'ready',
    badge: null, badgeClass: '',
    price: 300000, oldPrice: null,
    images: [img('BungaVas_Merah_Putih1.jpeg'), img('BungaVas_Merah_Putih2.jpeg')],
  },

];

// ── SITE SETTINGS ─────────────────────────────────────────────────
export const SETTINGS = {
  wa_number:    '6281244087447',
  announcement: 'Gratis konsultasi desain — Pengiriman area Tomohon & Manado',
  jam_buka:     'Senin–Sabtu: 08.00–20.00\nMinggu: 09.00–17.00',
  nama_toko:    'Berkat Anugerah Florist',
  kota:         'Tomohon, Sulawesi Utara',
};

// ── TESTIMONIALS ──────────────────────────────────────────────────
export const TESTIMONIALS = [
  { id: 1, nama: 'Stefani Kalangi',  kota: 'Tomohon',       rating: 5, pesan: 'Dekorasi dukanya sangat elegan dan bermartabat. Tim Berkat sangat profesional dan membantu di masa sulit kami.' },
  { id: 2, nama: 'Rizky Mandagi',    kota: 'Manado',        rating: 5, pesan: 'Hand bucket wedding-nya luar biasa cantik! Sesuai tema pernikahan kami. Sangat puas!' },
  { id: 3, nama: 'Linda Tangkere',   kota: 'Tomohon Utara', rating: 5, pesan: 'Standing flower untuk acara pembukaan toko kami sungguh memukau. Profesional dan berkualitas!' },
];

// ── CATEGORIES ────────────────────────────────────────────────────
export const CATEGORIES = [
  { key: 'all',             label: 'Semua Produk'    },
  { key: 'papan-bunga',     label: 'Papan Bunga'     },
  { key: 'standing-flower', label: 'Standing Flower' },
  { key: 'dekorasi-duka',   label: 'Dekorasi Duka'   },
  { key: 'hand-bucket',     label: 'Hand Bucket'     },
  { key: 'dekorasi-pesta',  label: 'Dekorasi Pesta'  },
  { key: 'bunga-meja',      label: 'Bunga Meja'      },
  { key: 'lainnya',         label: 'Lainnya'         },
];

export const OWNER_WA = '6281244087447';
export const formatRp  = (n) => 'Rp ' + Number(n).toLocaleString('id-ID');
