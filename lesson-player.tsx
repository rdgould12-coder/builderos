"use client";

import { FadeIn } from "../slide-frame";

interface SlideProps {
  slideId: string;
  isActive: boolean;
}

export function Lesson22Slides({ slideId, isActive }: SlideProps) {
  if (!isActive) return null;
  if (slideId === "title" || slideId === "end") return null;

  if (slideId === "problem") {
    return (
      <div className="mt-10 max-w-[480px] mx-auto">
        <FadeIn delay={300}>
          <div className="bg-surface border border-border rounded-2xl p-7 text-center">
            <div className="text-5xl mb-4">😐</div>
            <div className="text-xl font-bold font-display mb-3">&ldquo;Looks pretty good...&rdquo;</div>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-2 flex-1 rounded-full bg-[rgba(255,255,255,0.08)] max-w-[200px]">
                <div className="h-2 rounded-full bg-[#fbbf24]" style={{ width: "65%" }} />
              </div>
              <span className="text-sm text-[#fbbf24] font-bold">65%</span>
            </div>
            <div className="text-sm text-text-muted leading-relaxed">
              65% quality isn&apos;t shipping quality.
              <br />The difference between amateur and pro is the feedback loop.
            </div>
          </div>
        </FadeIn>
      </div>
    );
  }

  if (slideId === "checklist") {
    const checks = [
      "Layout matches description?",
      "Real content — no placeholders?",
      "Works on mobile?",
      "Colors & spacing consistent?",
      "All links/buttons work?",
      "Loading states handled?",
      "Edge cases covered?",
    ];
    return (
      <div className="mt-6 max-w-[420px] mx-auto">
        {checks.map((c, i) => (
          <FadeIn key={i} delay={300 + i * 100}>
            <div className="flex items-center gap-3 py-2.5 border-b border-[rgba(255,255,255,0.04)]">
              <div className="w-5 h-5 rounded border border-accent/30 flex items-center justify-center text-[10px] text-accent flex-shrink-0">
                {i + 1}
              </div>
              <span className="text-sm text-text-secondary">{c}</span>
            </div>
          </FadeIn>
        ))}
      </div>
    );
  }

  if (slideId === "surgical") {
    return (
      <div className="flex gap-6 mt-10 flex-wrap justify-center">
        <FadeIn delay={300} className="flex-1 min-w-[240px] max-w-[340px]">
          <div className="bg-surface border border-[rgba(248,113,113,0.15)] rounded-2xl p-6">
            <div className="text-xs font-semibold text-[#f87171] uppercase tracking-[0.08em] mb-3">✗ Vague</div>
            <div className="bg-[rgba(0,0,0,0.3)] rounded-xl p-4 font-mono text-sm text-text-muted leading-relaxed">
              &ldquo;Make it look better&rdquo;
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={500} className="flex-1 min-w-[240px] max-w-[340px]">
          <div className="bg-surface border border-accent/20 rounded-2xl p-6">
            <div className="text-xs font-semibold text-accent uppercase tracking-[0.08em] mb-3">✓ Surgical</div>
            <div className="bg-[rgba(0,0,0,0.3)] rounded-xl p-4 font-mono text-sm text-text-secondary leading-relaxed">
              &ldquo;Make the heading 48px, left-aligned, and add 24px bottom margin&rdquo;
            </div>
          </div>
        </FadeIn>
      </div>
    );
  }

  if (slideId === "rounds") {
    const rounds = [
      { num: "1", label: "Structure", desc: "Get the bones right", color: "#818cf8" },
      { num: "2", label: "Visual", desc: "Colors, fonts, spacing", color: "#22d3ee" },
      { num: "3", label: "Interactions", desc: "Hover states, animations, edge cases", color: "#34d399" },
    ];
    return (
      <div className="mt-10 max-w-[440px] mx-auto">
        {rounds.map((r, i) => (
          <FadeIn key={i} delay={400 + i * 200}>
            <div className="flex items-center gap-4 mb-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold font-display flex-shrink-0"
                style={{ background: `${r.color}20`, color: r.color }}
              >
                {r.num}
              </div>
              <div className="flex-1 bg-surface border border-border rounded-xl px-5 py-3.5">
                <div className="text-[15px] font-bold font-display">{r.label}</div>
                <div className="text-xs text-text-muted">{r.desc}</div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    );
  }

  return null;
}
