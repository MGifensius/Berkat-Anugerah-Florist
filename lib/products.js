/**
 * ╔══════════════════════════════════════════════════════════════╗
 *  BERKAT ANUGERAH FLORIST — Product Catalog
 *
 *  TOGGLE PROMO per product:
 *    ON  → set oldPrice to original price, lower price to promo price
 *          example:  price: 550000, oldPrice: 600000
 *    OFF → set oldPrice: null
 *
 *  HIDE a product → comment out its block with // or delete it
 *  ADD a product  → copy a block, change id/name/images/price
 * ╚══════════════════════════════════════════════════════════════╝
 */

const img = (f) => `/images/products/${f}`;

export const PRODUCTS = [

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  //  PAPAN BUNGA
  //  Flower board on a stand — banner printed by client
  //  VLow = simpler crown, smaller | Low = fuller, denser crown
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id: 1,
    name: 'Papan Bunga',
    cat: 'papan-bunga', catLabel: 'Papan Bunga',
    type: 'ready',
    badge: null, badgeClass: '',
    price: 500000, oldPrice: null,
    images: [
      img('BungaPapanVLow1.jpeg'),
      img('BungaPapanVLow2.jpeg'),
      img('BungaPapanVLow3.jpeg'),
    ],
  },
  {
    id: 2,
    name: 'Papan Bunga Premium',
    cat: 'papan-bunga', catLabel: 'Papan Bunga',
    type: 'ready',
    badge: 'Premium', badgeClass: 'badge-hot',
    price: 1500000, oldPrice: null,
    images: [
      img('BungaPapanLow1.jpeg'),
      img('BungaPapanLow2.jpeg'),
      img('BungaPapanLow3.jpeg'),
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  //  STANDING FLOWER
  //  Free-standing floral arrangement (no banner)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id: 3,
    name: 'Standing Flower Duka',
    cat: 'standing-flower', catLabel: 'Standing Flower',
    type: 'custom',
    badge: null, badgeClass: '',
    price: 500000, oldPrice: null,
    // Pink/white chrysanthemum + red anthurium on stand
    images: [
      img('PapanBungaDuka1.jpeg'),
    ],
  },
  {
    id: 4,
    name: 'Standing Flower Duka Double',
    cat: 'standing-flower', catLabel: 'Standing Flower',
    type: 'custom',
    badge: null, badgeClass: '',
    price: 1000000, oldPrice: null,
    // Two standing arrangements side-by-side, yellow & white
    images: [
      img('PapanBungaDukaDouble1.jpeg'),
    ],
  },
  {
    id: 5,
    name: 'Standing Bunga Lingkaran',
    cat: 'standing-flower', catLabel: 'Standing Flower',
    type: 'custom',
    badge: null, badgeClass: '',
    price: 500000, oldPrice: null,
    images: [
      img('StandingCircle1.jpeg'),
      img('StandingCircle2.jpeg'),
    ],
  },
  {
    id: 6,
    name: 'Standing Fresh Flower',
    cat: 'standing-flower', catLabel: 'Standing Flower',
    type: 'custom',
    badge: null, badgeClass: '',
    price: 1000000, oldPrice: null,
    images: [
      img('StandingFreshFlower1.jpeg'),
      img('StandingFreshFlower2.jpeg'),
    ],
  },
  {
    id: 7,
    name: 'Standing Flower Premium',
    cat: 'standing-flower', catLabel: 'Standing Flower',
    type: 'custom',
    badge: 'Premium', badgeClass: 'badge-hot',
    price: 1500000, oldPrice: null,
    // Very full tall arrangement with premium ribbons
    images: [
      img('StandingPremium1.jpeg'),
      img('StandingFreshFlower1.jpeg'),
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  //  DEKORASI DUKA
  //  Full funeral decoration packages
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id: 8,
    name: 'Salib Bunga',
    cat: 'dekorasi-duka', catLabel: 'Dekorasi Duka',
    type: 'custom',
    badge: null, badgeClass: '',
    price: 800000, oldPrice: null,
    // Cross-shaped arrangement on stand, white & gold
    images: [
      img('SalibBunga1.jpeg'),
    ],
  },
  {
    id: 9,
    name: 'Dekorasi Duka',
    cat: 'dekorasi-duka', catLabel: 'Dekorasi Duka',
    type: 'custom',
    badge: null, badgeClass: '',
    price: 5000000, oldPrice: null,
    images: [
      img('DekorasiDuka1.jpeg'),
      img('DekorasiDuka2.jpeg'),
      img('DekorasiDuka3.jpeg'),
    ],
  },
  {
    id: 10,
    name: 'Dekorasi Duka Elegan',
    cat: 'dekorasi-duka', catLabel: 'Dekorasi Duka',
    type: 'custom',
    badge: null, badgeClass: '',
    price: 6000000, oldPrice: null,
    // Full arch + floor arrangement, white/yellow complete setup
    images: [
      img('DekorasiDukaElegan1.jpeg'),
      img('DekorasiDuka1.jpeg'),
    ],
  },
  {
    id: 11,
    name: 'Dekorasi Duka Premium',
    cat: 'dekorasi-duka', catLabel: 'Dekorasi Duka',
    type: 'custom',
    badge: 'Premium', badgeClass: 'badge-hot',
    price: 7000000, oldPrice: null,
    // Elaborate full-room setup, casket surround, chandelier draping
    images: [
      img('DekorasiDukaPremium1.jpeg'),
      img('DekorasiDukaPremium2.jpeg'),
      img('DekorasiDukaElegan1.jpeg'),
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  //  HAND BUCKET
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id: 12,
    name: 'Flower Bouquet',
    cat: 'hand-bucket', catLabel: 'Hand Bucket',
    type: 'ready',
    badge: null, badgeClass: '',
    price: 350000, oldPrice: null,
    images: [
      img('FlowerBouquet.jpeg'),
    ],
  },
  {
    id: 13,
    name: 'Hand Bucket Wedding',
    cat: 'hand-bucket', catLabel: 'Hand Bucket',
    type: 'custom',
    badge: null, badgeClass: '',
    price: 750000, oldPrice: null,
    images: [
      img('HandBucketWedding1.jpeg'),
      img('HandBucketWedding2.jpeg'),
      img('HandBucketWedding3.jpeg'),
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  //  DEKORASI PESTA
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id: 14,
    name: 'Dekorasi Pesta',
    cat: 'dekorasi-pesta', catLabel: 'Dekorasi Pesta',
    type: 'custom',
    badge: null, badgeClass: '',
    price: 1500000, oldPrice: null,
    images: [
      img('DekorasiPesta1.jpg'),
      img('DekorasiPesta2.jpeg'),
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  //  BUNGA MEJA
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id: 15,
    name: 'Bunga Meja',
    cat: 'bunga-meja', catLabel: 'Bunga Meja',
    type: 'ready',
    badge: null, badgeClass: '',
    price: 250000, oldPrice: null,
    images: [
      img('BungaMeja1.jpeg'),
    ],
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
];

export const OWNER_WA = '6281244087447';
export const formatRp  = (n) => 'Rp ' + Number(n).toLocaleString('id-ID');
