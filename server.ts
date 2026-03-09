export function Tag({ label, color }: { label: string; color: string }) {
  return (
    <span
      className="text-[11px] font-semibold uppercase tracking-[0.06em] px-2.5 py-1 rounded-md"
      style={{ color, background: `${color}12` }}
    >
      {label}
    </span>
  );
}
