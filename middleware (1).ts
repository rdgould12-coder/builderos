"use client";

import { useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: ReactNode;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export function GlowCard({ children, color = "#818cf8", className, style, onClick }: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [glow, setGlow] = useState({ x: 0, y: 0, active: false });

  return (
    <div
      ref={ref}
      className={cn("glow-card", onClick && "cursor-pointer", className)}
      style={style}
      onClick={onClick}
      onMouseMove={(e) => {
        const rect = ref.current?.getBoundingClientRect();
        if (rect) {
          setGlow({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
            active: true,
          });
        }
      }}
      onMouseLeave={() => setGlow((prev) => ({ ...prev, active: false }))}
    >
      <div
        className="absolute inset-0 transition-opacity duration-400 pointer-events-none"
        style={{
          background: `radial-gradient(420px circle at ${glow.x}px ${glow.y}px, ${color}11, transparent 60%)`,
          opacity: glow.active ? 1 : 0,
        }}
      />
      <div className="relative z-[1]">{children}</div>
    </div>
  );
}
