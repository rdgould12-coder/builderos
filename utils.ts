import Link from "next/link";

export function Logo({ size = "default" }: { size?: "small" | "default" }) {
  const s = size === "small" ? "w-7 h-7 rounded-[7px] text-[13px]" : "w-8 h-8 rounded-[9px] text-[15px]";
  const text = size === "small" ? "text-base" : "text-[17px]";

  return (
    <Link href="/" className="flex items-center gap-2.5 no-underline">
      <div
        className={`${s} flex items-center justify-center font-display font-black text-white`}
        style={{
          background: "linear-gradient(135deg, #6366f1, #8b5cf6, #a78bfa)",
          boxShadow: "0 2px 10px rgba(99,102,241,0.3)",
        }}
      >
        B
      </div>
      <span className={`${text} font-display font-extrabold tracking-[-0.04em] text-text`}>
        BuilderOS
      </span>
    </Link>
  );
}
