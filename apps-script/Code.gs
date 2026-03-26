/**
 * ═══════════════════════════════════════════════════════════════
 *  BERKAT ANUGERAH FLORIST — Google Apps Script Backend
 *  Deploy: Extensions → Apps Script → Deploy → Web App
 *          Execute as: Me | Who has access: Anyone
 * ═══════════════════════════════════════════════════════════════
 */

// ✅ Folder ID sudah diisi dari Drive kamu
const IMAGES_FOLDER_ID = '1dVoVZ75elhJ5gK-80qkTOlxV9ApYwxbl';

// ─── MAIN HANDLER ────────────────────────────────────────────────
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ products: getProducts() }))
    .setMimeType(ContentService.MimeType.JSON);
}

// ─── BUILD IMAGE MAP: filename → thumbnail URL ────────────────────
// Scans the Drive folder once and caches by filename (lowercase).
function buildImageMap() {
  const map = {};
  try {
    const folder = DriveApp.getFolderById(IMAGES_FOLDER_ID);
    const files  = folder.getFiles();
    while (files.hasNext()) {
      const file = files.next();
      const key  = file.getName().toLowerCase().trim();
      // thumbnail URL — works publicly if folder is shared "Anyone with the link"
      map[key] = `https://drive.google.com/thumbnail?id=${file.getId()}&sz=w800`;
    }
  } catch (err) {
    Logger.log('buildImageMap error: ' + err.message);
  }
  return map;
}

// Resolve an image column value to a URL.
// Accepts: filename (e.g. "rose.jpg"), full URL, or Drive share link.
function resolveImage(val, imageMap) {
  if (!val) return null;
  const v = String(val).trim();
  if (!v) return null;

  // Already a full URL
  if (v.startsWith('http://') || v.startsWith('https://')) {
    // Convert drive.google.com/file/d/ID/view → thumbnail
    const m = v.match(/\/d\/([a-zA-Z0-9_-]{20,})/);
    if (m) return `https://drive.google.com/thumbnail?id=${m[1]}&sz=w800`;
    return v;
  }

  // Filename — look up in map (case-insensitive)
  return imageMap[v.toLowerCase()] || null;
}

// ─── GET PRODUCTS ─────────────────────────────────────────────────
function getProducts() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Products');
  if (!sheet) return [];

  const imageMap = buildImageMap();
  const rows     = sheet.getDataRange().getValues();
  const headers  = rows[0];
  const g        = (row, key) => {
    const i = headers.indexOf(key);
    return i > -1 ? row[i] : '';
  };

  return rows.slice(1)
    .filter(r => String(g(r, 'active')).toLowerCase() === 'true')
    .map(r => {
      const oldRaw  = g(r, 'oldPrice');
      const hasPromo = oldRaw !== '' && oldRaw != null && !isNaN(Number(oldRaw)) && Number(oldRaw) > 0;

      const images = [
        resolveImage(g(r, 'image1'), imageMap),
        resolveImage(g(r, 'image2'), imageMap),
        resolveImage(g(r, 'image3'), imageMap),
      ].filter(Boolean);

      return {
        id:         Number(g(r, 'id'))     || 0,
        name:       String(g(r, 'name'))   || '',
        cat:        String(g(r, 'cat'))    || '',
        catLabel:   String(g(r, 'catLabel')) || '',
        type:       String(g(r, 'type') || 'ready'),
        badge:      g(r, 'badge')      || null,
        badgeClass: String(g(r, 'badgeClass') || ''),
        price:      Number(g(r, 'price'))  || 0,
        oldPrice:   hasPromo ? Number(oldRaw) : null,
        images,
      };
    })
    .filter(p => p.images.length > 0 && p.name && p.price > 0);
}

// ─── SETUP ───────────────────────────────────────────────────────
function setupSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let s = ss.getSheetByName('Products');
  if (s) ss.deleteSheet(s);
  s = ss.insertSheet('Products');

  const headers = ['id','name','cat','catLabel','type','badge','badgeClass','price','oldPrice','image1','image2','image3','active'];
  s.getRange(1, 1, 1, headers.length).setValues([headers]);

  // Style header
  const hdr = s.getRange(1, 1, 1, headers.length);
  hdr.setBackground('#1a1a1a').setFontColor('#ffffff').setFontWeight('bold');
  s.getRange(1, headers.indexOf('oldPrice') + 1)
   .setNote('PROMO ON  → isi harga asli di sini\nPROMO OFF → kosongkan');

  // Column widths
  s.setColumnWidth(2, 240); // name
  s.setColumnWidth(10, 220); s.setColumnWidth(11, 220); s.setColumnWidth(12, 220);
  s.setFrozenRows(1);

  // Pre-fill with real Berkat Florist products
  const data = [
    [1,  'Papan Bunga',               'papan-bunga',     'Papan Bunga',     'ready',  '',        '',           500000,  '', 'BungaPapanVLow1.jpeg',     'BungaPapanVLow2.jpeg',     'BungaPapanVLow3.jpeg',    true],
    [2,  'Papan Bunga',               'papan-bunga',     'Papan Bunga',     'ready',  '',        '',           600000,  '', 'BungaPapanLow1.jpeg',      'BungaPapanLow2.jpeg',      'BungaPapanLow3.jpeg',     true],
    [3,  'Papan Bunga Premium',       'papan-bunga',     'Papan Bunga',     'custom', 'Premium', 'badge-hot',  1500000, '', 'BungaPapanLow1.jpeg',      'BungaPapanLow2.jpeg',      'BungaPapanLow3.jpeg',     true],
    [4,  'Standing Fresh Flower',     'standing-flower', 'Standing Flower', 'custom', '',        '',           1000000, '', 'StandingFreshFlower1.jpeg','StandingFreshFlower2.jpeg','',                        true],
    [5,  'Standing Bunga Lingkaran',  'standing-flower', 'Standing Flower', 'custom', '',        '',           500000,  '', 'StandingCircle1.jpeg',     'StandingCircle2.jpeg',     '',                        true],
    [6,  'Dekorasi Duka',             'dekorasi-duka',   'Dekorasi Duka',   'custom', '',        '',           5000000, '', 'DekorasiDuka1.jpeg',       'DekorasiDuka2.jpeg',       'DekorasiDuka3.jpeg',      true],
    [7,  'Hand Bucket Wedding',       'hand-bucket',     'Hand Bucket',     'custom', '',        '',           750000,  '', 'HandBucketWedding1.jpeg',  'HandBucketWedding2.jpeg',  'HandBucketWedding3.jpeg', true],
    [8,  'Flower Bouquet',            'hand-bucket',     'Hand Bucket',     'ready',  '',        '',           350000,  '', 'FlowerBouquet.jpeg',       '',                         '',                        true],
    [9,  'Dekorasi Pesta',            'dekorasi-pesta',  'Dekorasi Pesta',  'custom', '',        '',           1500000, '', 'DekorasiPesta1.jpg',       'DekorasiPesta2.jpeg',      '',                        true],
    [10, 'Bunga Meja',                'bunga-meja',      'Bunga Meja',      'ready',  '',        '',           250000,  '', 'BungaMeja1.jpeg',          '',                         '',                        true],
  ];
  s.getRange(2, 1, data.length, headers.length).setValues(data);

  SpreadsheetApp.getUi().alert('✅ Sheet "Products" berhasil dibuat dengan 10 produk awal!\n\nJangan lupa deploy sebagai Web App.');
}
