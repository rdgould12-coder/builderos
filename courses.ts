"use client";

export function ProgressRing({
  pct,
  size = 44,
  strokeWidth = 3,
}: {
  pct: number;
  size?: number;
  strokeWidth?: number;
}) {
  const r = (size - strokeWidth) / 2;
  const c = 2 * Math.PI * r;

  return (
    <svg width={size} height={size} className="flex-shrink-0" style={{ transform: "rotate(-90deg)" }}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="rgba(255,255,255,0.06)"
        strokeWidth={strokeWidth}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="#818cf8"
        strokeWidth={strokeWidth}
        strokeDasharray={c}
        strokeDashoffset={c - (pct / 100) * c}
        strokeLinecap="round"
        style={{ transition: "stroke-dashoffset 0.6s cubic-bezier(0.16,1,0.3,1)" }}
      />
    </svg>
  );
}

export function ProgressBar({ pct, height = 4 }: { pct: number; height?: number }) {
  return (
    <div
      className="flex-1 rounded-full"
      style={{ height, background: "rgba(255,255,255,0.06)" }}
    >
      <div
        className="h-full rounded-full bg-accent"
        style={{
          width: `${pct}%`,
          transition: "width 0.6s cubic-bezier(0.16,1,0.3,1)",
        }}
      />
    </div>
  );
}
