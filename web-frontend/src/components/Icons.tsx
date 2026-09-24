type IconProps = { className?: string; filled?: boolean };

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const;

/** A stack of cards, for the deck list. */
export function DecksIcon({ className, filled }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="5" y="3.5" width="14" height="10" rx="2.5" {...stroke} opacity={0.5} />
      <rect
        x="3.5"
        y="8"
        width="17"
        height="12.5"
        rx="3"
        {...stroke}
        fill={filled ? 'currentColor' : 'none'}
        fillOpacity={filled ? 0.16 : 0}
      />
    </svg>
  );
}

export function SearchIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" {...stroke} />
      <path d="M16 16l4.5 4.5" {...stroke} />
    </svg>
  );
}

/** A marked-up page, for the progress tab. */
export function ProgressIcon({ className, filled }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect
        x="4"
        y="3"
        width="16"
        height="18"
        rx="3"
        {...stroke}
        fill={filled ? 'currentColor' : 'none'}
        fillOpacity={filled ? 0.16 : 0}
      />
      <path d="M8 9h8M8 13h5" {...stroke} />
      <path d="M8 17h3" {...stroke} opacity={0.5} />
    </svg>
  );
}

export function ChevronIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M9 5l7 7-7 7" {...stroke} />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" {...stroke} />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7" {...stroke} strokeWidth={2.2} />
    </svg>
  );
}

export function RotateIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M4 12a8 8 0 1 1 2.5 5.8" {...stroke} />
      <path d="M4 18.5V13h5.5" {...stroke} />
    </svg>
  );
}

export function ShuffleIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M3 6h3.5l4 6 4 6H18M3 18h3.5l2-3M15.5 9l2-3H18" {...stroke} />
      <path d="M16 3.5L19.5 6 16 8.5M16 15.5l3.5 2.5-3.5 2.5" {...stroke} />
    </svg>
  );
}

export function ShareIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M12 15V3.5M8.5 7L12 3.5 15.5 7" {...stroke} />
      <path d="M6 11H4.5v9h15v-9H18" {...stroke} />
    </svg>
  );
}
