/**
 * Static fallback data used when Google Sheets API is not configured.
 * This keeps the site fully functional out-of-the-box.
 */

const pin = (hash) => `https://i.pinimg.com/736x/${hash}.jpg`;

export const FALLBACK_PRODUCTS = [
  { id:1, name:'Bunga Papan Syukuran Premium',   cat:'bunga-papan',     catLabel:'Bunga Papan',     type:'ready',  badge:'Terlaris', badgeClass:'badge-hot',  price:850000, oldPrice:null,
    images:[pin('0c/eb/83/0ceb83422737b2a2502df33f79182160'),pin('11/da/32/11da32555d233b503e84eb2bacca0392'),pin('78/54/6f/78546f5dac5226e81a5662c224c5e676')] },
  { id:2, name:'Bunga Papan Dukacita Elegan',     cat:'bunga-papan',     catLabel:'Bunga Papan',     type:'ready',  badge:'Dukacita', badgeClass:'',           price:750000, oldPrice:null,
    images:[pin('e7/8a/5c/e78a5c013915c7bfa6d229b1b5780469'),pin('f1/00/eb/f100eb6ff07ae98a7a868434bb4fd975'),pin('d8/7d/26/d87d26a050ef6eaa05f9812da96e9c25')] },
  { id:3, name:'Bunga Papan Pernikahan Custom',   cat:'bunga-papan',     catLabel:'Bunga Papan',     type:'custom', badge:'Custom',   badgeClass:'badge-new',  price:950000, oldPrice:null,
    images:[pin('78/54/6f/78546f5dac5226e81a5662c224c5e676'),pin('28/5b/13/285b138b20e7767db2bfbfcb886b9f4c'),pin('0c/eb/83/0ceb83422737b2a2502df33f79182160')] },
  { id:4, name:'Hand Bouquet Rose Premium',       cat:'bunga-tangan',    catLabel:'Bunga Tangan',    type:'ready',  badge:'Populer',  badgeClass:'badge-hot',  price:450000, oldPrice:null,
    images:[pin('65/ee/50/65ee50252aab2d47e8db4702db1b70b3'),pin('82/4e/5c/824e5c2f6da0f6c5555095cded877a2b'),pin('be/7c/b4/be7cb42d378af65a7db1ccd6226b988c')] },
  { id:5, name:'Buket Pastel Mix',                cat:'bunga-tangan',    catLabel:'Bunga Tangan',    type:'ready',  badge:'Promo',    badgeClass:'badge-sale', price:350000, oldPrice:420000,
    images:[pin('82/4e/5c/824e5c2f6da0f6c5555095cded877a2b'),pin('65/ee/50/65ee50252aab2d47e8db4702db1b70b3'),pin('be/7c/b4/be7cb42d378af65a7db1ccd6226b988c')] },
  { id:6, name:'Buket Sunflower Joy',             cat:'bunga-tangan',    catLabel:'Bunga Tangan',    type:'ready',  badge:'Baru',     badgeClass:'badge-new',  price:380000, oldPrice:null,
    images:[pin('be/7c/b4/be7cb42d378af65a7db1ccd6226b988c'),pin('82/4e/5c/824e5c2f6da0f6c5555095cded877a2b'),pin('65/ee/50/65ee50252aab2d47e8db4702db1b70b3')] },
  { id:7, name:'Rangkaian Meja Minimalis',        cat:'bunga-meja',      catLabel:'Bunga Meja',      type:'ready',  badge:null,       badgeClass:'',           price:320000, oldPrice:null,
    images:[pin('0e/fb/dc/0efbdcb655d08c8f590e26b8975484fb'),pin('98/ab/35/98ab359acaf984c72fd1149c2e4d2b10'),pin('2f/81/4f/2f814f1444ab3a461af2fc9f602fc8be')] },
  { id:8, name:'Bunga Meja Rose & Lily',          cat:'bunga-meja',      catLabel:'Bunga Meja',      type:'ready',  badge:'Favorit',  badgeClass:'badge-hot',  price:280000, oldPrice:null,
    images:[pin('98/ab/35/98ab359acaf984c72fd1149c2e4d2b10'),pin('0e/fb/dc/0efbdcb655d08c8f590e26b8975484fb'),pin('2f/81/4f/2f814f1444ab3a461af2fc9f602fc8be')] },
  { id:9, name:'Bunga Meja Tropical Mix',         cat:'bunga-meja',      catLabel:'Bunga Meja',      type:'ready',  badge:'Baru',     badgeClass:'badge-new',  price:260000, oldPrice:null,
    images:[pin('2f/81/4f/2f814f1444ab3a461af2fc9f602fc8be'),pin('0e/fb/dc/0efbdcb655d08c8f590e26b8975484fb'),pin('98/ab/35/98ab359acaf984c72fd1149c2e4d2b10')] },
  { id:10, name:'Standing Flower Grand Custom',   cat:'standing-flower', catLabel:'Standing Flower', type:'custom', badge:'Custom',   badgeClass:'badge-hot',  price:1200000,oldPrice:null,
    images:[pin('24/15/f1/2415f134e14f980a524e03321d5a6e04'),pin('e6/19/c1/e619c1146b992f25a06cc7332c14a5d1'),pin('8d/29/34/8d2934ba2ba68a04a6a4991aa54039ea')] },
  { id:11, name:'Standing Flower Classic Custom', cat:'standing-flower', catLabel:'Standing Flower', type:'custom', badge:'Custom',   badgeClass:'',           price:950000, oldPrice:null,
    images:[pin('11/fb/2d/11fb2df1a5164f5d459d04d670c75479'),pin('59/96/8f/59968f7ef710bc00e5688a9cae8312fe'),pin('b4/5a/f4/b45af4402f518765a90232524468eb40')] },
  { id:12, name:'Standing Flower Modern Custom',  cat:'standing-flower', catLabel:'Standing Flower', type:'custom', badge:'Custom',   badgeClass:'badge-new',  price:1050000,oldPrice:null,
    images:[pin('61/8d/01/618d01c8baa4b0cfb888e5d0db3f4ac1'),pin('07/28/95/0728956e4d75af15ce5fd69d084c2dcf'),pin('43/5b/a7/435ba72bc25402d5c7401331a4ecca5d')] },
];

export const FALLBACK_TESTIMONIALS = [
  { id:1, nama:'Stefani Kalangi',  kota:'Tomohon',       rating:5, pesan:'Bunga papannya cantik sekali! Tepat waktu dan sesuai yang dibayangkan. Sangat puas dengan pelayanannya.' },
  { id:2, nama:'Rizky Mandagi',    kota:'Manado',        rating:5, pesan:'Pesan hand bouquet untuk wisuda adik, hasilnya luar biasa! Bunganya segar dan tahan lama.' },
  { id:3, nama:'Linda Tangkere',   kota:'Tomohon Utara', rating:5, pesan:'Standing flower untuk pembukaan toko kami sungguh memukau para tamu. Profesional dan berkualitas!' },
];

export const FALLBACK_SETTINGS = {
  wa_number:    '6281244087447',
  announcement: 'Gratis ongkos kirim area Tomohon & Manado 🌸',
  jam_buka:     'Senin–Sabtu: 08.00–20.00 | Minggu: 09.00–17.00',
  nama_toko:    'Berkat Anugerah Florist',
  kota:         'Tomohon, Sulawesi Utara',
};

export const CATEGORIES = [
  { key:'all',             label:'Semua Produk',    icon:'🌸' },
  { key:'bunga-papan',     label:'Bunga Papan',     icon:'🪧' },
  { key:'bunga-tangan',    label:'Bunga Tangan',    icon:'💐' },
  { key:'bunga-meja',      label:'Bunga Meja',      icon:'🌺' },
  { key:'standing-flower', label:'Standing Flower', icon:'🌷' },
];

export const formatRp = (n) => 'Rp ' + Number(n).toLocaleString('id-ID');
