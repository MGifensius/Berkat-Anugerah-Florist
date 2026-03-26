/**
 * Centralized SVG icon library for Berkat Anugerah Florist.
 * All icons are pure SVG — no emoji, no external font dependency.
 */

const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.75, strokeLinecap: 'round', strokeLinejoin: 'round' };
const ic = (size = 24) => ({ width: size, height: size, viewBox: '0 0 24 24', ...base });

// ─── Brand / WA / Social ───
export const WaIcon = ({ size = 24, style }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" style={style}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
  </svg>
);

export const IgIcon = ({ size = 24, style }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" style={style}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

// ─── Feature strip icons ───
export const FlowerIcon = ({ size = 24 }) => (
  <svg {...ic(size)}>
    <path d="M12 22V12M12 12C12 12 9 9.5 9 7a3 3 0 016 0c0 2.5-3 5-3 5zM12 12c0 0-4.5-.5-6-3a3 3 0 015.196-3C12.5 7.5 12 12 12 12zM12 12c0 0 4.5-.5 6-3a3 3 0 00-5.196-3C11.5 7.5 12 12 12 12zM12 12c0 0-4.5.5-6 3a3 3 0 005.196 3C12.5 16.5 12 12 12 12zM12 12c0 0 4.5.5 6 3a3 3 0 01-5.196 3C11.5 16.5 12 12 12 12z"/>
  </svg>
);

export const ZapIcon = ({ size = 24 }) => (
  <svg {...ic(size)}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);

export const ChatIcon = ({ size = 24 }) => (
  <svg {...ic(size)}>
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
  </svg>
);

export const PaletteIcon = ({ size = 24 }) => (
  <svg {...ic(size)}>
    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/>
    <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/>
    <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>
    <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 011.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
  </svg>
);

// ─── Category icons ───
export const BoardIcon = ({ size = 24 }) => (
  <svg {...ic(size)}>
    <rect x="3" y="3" width="18" height="14" rx="2"/>
    <path d="M8 21h8M12 17v4"/>
  </svg>
);

export const BouquetIcon = ({ size = 24 }) => (
  <svg {...ic(size)}>
    <path d="M12 22s-8-4.5-8-11.8A8 8 0 0120 10.2C20 17.5 12 22 12 22z"/>
    <path d="M12 22V12"/>
    <path d="M12 12C12 12 8 8.5 8 6a4 4 0 018 0c0 2.5-4 6-4 6z"/>
  </svg>
);

export const VaseIcon = ({ size = 24 }) => (
  <svg {...ic(size)}>
    <path d="M8 2h8l1 6c.5 3-1 6-3 8H10c-2-2-3.5-5-3-8l1-6z"/>
    <path d="M6 22h12M9 2V1M15 2V1"/>
  </svg>
);

export const StandingIcon = ({ size = 24 }) => (
  <svg {...ic(size)}>
    <line x1="12" y1="22" x2="12" y2="10"/>
    <path d="M12 10C12 10 8 6.5 8 4a4 4 0 018 0c0 2.5-4 6-4 6z"/>
    <path d="M12 10C10 9 6 9.5 5 8a3 3 0 014.5-3.9C10.8 5 12 10 12 10z"/>
    <path d="M12 10C14 9 18 9.5 19 8a3 3 0 00-4.5-3.9C13.2 5 12 10 12 10z"/>
    <line x1="8" y1="22" x2="16" y2="22"/>
  </svg>
);

// ─── UI / utility ───
export const StarIcon = ({ size = 16, filled }) => (
  <svg viewBox="0 0 24 24" width={size} height={size}
    fill={filled ? '#c9a96e' : 'none'} stroke="#c9a96e" strokeWidth="1.75"
    strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

export const SearchIcon = ({ size = 15 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);

export const CloseIcon = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

export const PhoneIcon = ({ size = 16 }) => (
  <svg {...ic(size)}>
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.45 10.9a19.79 19.79 0 01-3.07-8.67A2 2 0 012.36 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.27-.71a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
  </svg>
);

export const ClockIcon = ({ size = 16 }) => (
  <svg {...ic(size)}>
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

export const PinIcon = ({ size = 16 }) => (
  <svg {...ic(size)}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

export const TruckIcon = ({ size = 16 }) => (
  <svg {...ic(size)}>
    <rect x="1" y="3" width="15" height="13"/>
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
    <circle cx="5.5" cy="18.5" r="2.5"/>
    <circle cx="18.5" cy="18.5" r="2.5"/>
  </svg>
);

export const ParkingIcon = ({ size = 16 }) => (
  <svg {...ic(size)}>
    <rect x="3" y="3" width="18" height="18" rx="2"/>
    <path d="M9 17V7h4a3 3 0 010 6H9"/>
  </svg>
);

export const ChevronDownIcon = ({ size = 14 }) => (
  <svg {...ic(size)}>
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);

export const GridIcon = ({ size = 16 }) => (
  <svg {...ic(size)}>
    <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
    <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
  </svg>
);

export const ListIcon = ({ size = 16 }) => (
  <svg {...ic(size)}>
    <line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/>
    <line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/>
    <line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>
  </svg>
);

export const TagIcon = ({ size = 14 }) => (
  <svg {...ic(size)}>
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/>
    <line x1="7" y1="7" x2="7.01" y2="7"/>
  </svg>
);

export const UserIcon = ({ size = 16 }) => (
  <svg {...ic(size)}>
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

export const CalendarIcon = ({ size = 16 }) => (
  <svg {...ic(size)}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

export const SendIcon = ({ size = 16 }) => (
  <svg {...ic(size)}>
    <line x1="22" y1="2" x2="11" y2="13"/>
    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
);

export const ArrowRightIcon = ({ size = 14 }) => (
  <svg {...ic(size)}>
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);
