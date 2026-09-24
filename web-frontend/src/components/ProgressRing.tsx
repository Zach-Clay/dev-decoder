type ProgressRingProps = {
  /** 0 to 1. */
  value: number;
  color: string;
  size?: number;
  /** Shown in the middle. Leave empty for a bare ring. */
  label?: string;
};

export default function ProgressRing({ value, color, size = 34, label }: ProgressRingProps) {
  const radius = size / 2 - 3;
  const circumference = 2 * Math.PI * radius;
  const clamped = Math.min(1, Math.max(0, value));

  return (
    <span
      className="relative inline-flex shrink-0 items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeOpacity={0.3}
          strokeWidth={3}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={3}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - clamped)}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{ transition: 'stroke-dashoffset 500ms cubic-bezier(0.22, 1, 0.36, 1)' }}
        />
      </svg>
      {label ? (
        <span className="absolute font-mono text-[10px] font-medium text-(--color-text-soft)">
          {label}
        </span>
      ) : null}
    </span>
  );
}
