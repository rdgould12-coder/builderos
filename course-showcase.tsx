"use client";

import { useEffect, useState, type ReactNode } from "react";

interface SlideFrameProps {
  badge: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  isActive: boolean;
}

function FadeIn({
  delay = 0,
  duration = 600,
  children,
  className = "",
}: {
  delay?: number;
  duration?: number;
  children: ReactNode;
  className?: string;
}) {
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVis(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div
      className={className}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(24px)",
        transition: `opacity ${duration}ms cubic-bezier(0.16,1,0.3,1), transform ${duration}ms cubic-bezier(0.16,1,0.3,1)`,
      }}
    >
      {children}
    </div>
  );
}

export function SlideFrame({ badge, title, subtitle, children, isActive }: SlideFrameProps) {
  if (!isActive) return null;

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 py-12">
      <FadeIn delay={100}>
        <div className="inline-block text-[10px] font-bold uppercase tracking-[0.12em] text-accent bg-accent-glow px-3 py-1 rounded-full mb-5">
          {badge}
        </div>
      </FadeIn>

      <FadeIn delay={200}>
        <h2
          className="text-3xl md:text-4xl lg:text-[44px] font-display font-bold tracking-[-0.03em] leading-[1.15] mb-3 whitespace-pre-line"
          style={{ color: "#f0f0f3" }}
        >
          {title}
        </h2>
      </FadeIn>

      {subtitle && (
        <FadeIn delay={350}>
          <p className="text-text-secondary text-base md:text-lg max-w-[540px] leading-relaxed">
            {subtitle}
          </p>
        </FadeIn>
      )}

      {children && (
        <FadeIn delay={400}>
          <div className="mt-8 w-full max-w-[800px]">{children}</div>
        </FadeIn>
      )}
    </div>
  );
}

export { FadeIn };
