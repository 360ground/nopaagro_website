type P = { className?: string };

export const ArrowRight = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
    <path d="M3 10h13m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ArrowUpRight = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
    <path d="M6 14 14 6m-7 0h7v7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Phone = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
    <path d="M4.5 3h3l1.5 4-2 1.2a9 9 0 0 0 4.8 4.8L13 11l4 1.5v3a1.5 1.5 0 0 1-1.6 1.5C8.9 16.5 3.5 11.1 3 4.6A1.5 1.5 0 0 1 4.5 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

export const Mail = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
    <rect x="2.75" y="4.5" width="14.5" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="m3.5 5.5 6.5 5 6.5-5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

export const Pin = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
    <path d="M10 17.5s5.5-5 5.5-9.5a5.5 5.5 0 1 0-11 0c0 4.5 5.5 9.5 5.5 9.5Z" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="10" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export const Check = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
    <path d="m4.5 10.5 3.5 3.5 7.5-8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ArrowLeft = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
    <path d="M17 10H4m5-5-5 5 5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
