/**
 * Fetches products from Google Apps Script.
 * Falls back to static products.js if SHEETS_API_URL is not set.
 */

import { PRODUCTS as FALLBACK } from './products';

const API_URL = process.env.SHEETS_API_URL;

export async function getProducts() {
  if (!API_URL) {
    console.log('[sheets] No SHEETS_API_URL — using static fallback');
    return FALLBACK;
  }

  try {
    const res = await fetch(API_URL, { next: { revalidate: 120 } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    const products = data.products;
    if (!Array.isArray(products) || products.length === 0) {
      console.warn('[sheets] Empty response — using fallback');
      return FALLBACK;
    }
    console.log(`[sheets] Loaded ${products.length} products from Sheets`);
    return products;
  } catch (err) {
    console.error('[sheets] Error:', err.message, '— using fallback');
    return FALLBACK;
  }
}
