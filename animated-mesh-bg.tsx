"use client";

import { FadeIn } from "../slide-frame";

interface SlideProps {
  slideId: string;
  isActive: boolean;
}

export function Lesson21Slides({ slideId, isActive }: SlideProps) {
  if (!isActive) return null;

  if (slideId === "title" || slideId === "end") return null;

  if (slideId === "bad-good") {
    return (
      <div className="flex gap-6 mt-10 flex-wrap justify-center">
        <FadeIn delay={300} className="flex-1 min-w-[250px] max-w-[360px]">
          <div className="bg-surface border border-[rgba(248,113,113,0.15)] rounded-2xl p-7">
            <div className="text-xs font-semibold text-[#f87171] uppercase tracking-[0.08em] mb-4">
              ✗ Vague Prompt
            </div>
            <div className="bg-[rgba(0,0,0,0.3)] rounded-xl p-5 font-mono text-sm text-text-secondary leading-relaxed">
              &ldquo;Make me a website&rdquo;
            </div>
            <div className="mt-4 text-xs text-text-faint">
              Generic result. Placeholder text. Not what you wanted.
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={500} className="flex-1 min-w-[250px] max-w-[360px]">
          <div className="bg-surface border border-accent/20 rounded-2xl p-7">
            <div className="text-xs font-semibold text-accent uppercase tracking-[0.08em] mb-4">
              ✓ SPEC Prompt
            </div>
            <div className="bg-[rgba(0,0,0,0.3)] rounded-xl p-5 font-mono text-sm text-text-secondary leading-relaxed">
              &ldquo;Build a link-in-bio page with a dark theme, profile photo, 5 social links with hover effects, single HTML file, mobile-first&rdquo;
            </div>
            <div className="mt-4 text-xs text-accent/80">
              Specific. Structured. Ships exactly what you want.
            </div>
          </div>
        </FadeIn>
      </div>
    );
  }

  if (slideId === "spec") {
    const items = [
      { letter: "S", label: "Structure", desc: "What are the pieces?", color: "#818cf8" },
      { letter: "P", label: "Purpose", desc: "What does each piece do?", color: "#22d3ee" },
      { letter: "E", label: "Example", desc: "What should it look like?", color: "#fbbf24" },
      { letter: "C", label: "Constraints", desc: "What are the limits?", color: "#f87171" },
    ];
    return (
      <div className="flex gap-4 mt-10 flex-wrap justify-center">
        {items.map((item, i) => (
          <FadeIn key={i} delay={400 + i * 150} className="flex-1 min-w-[150px] max-w-[200px]">
            <div className="bg-surface border border-border rounded-2xl p-6 text-center">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-extrabold font-display mx-auto mb-3"
                style={{ background: `${item.color}20`, color: item.color }}
              >
                {item.letter}
              </div>
              <div className="text-[15px] font-bold font-display mb-1">{item.label}</div>
              <div className="text-xs text-text-muted">{item.desc}</div>
            </div>
          </FadeIn>
        ))}
      </div>
    );
  }

  if (slideId === "spec-example") {
    const rows = [
      { letter: "S", label: "Structure", value: "Profile section, link list, footer" },
      { letter: "P", label: "Purpose", value: "Single URL with all your important links" },
      { letter: "E", label: "Example", value: '"Like Linktree but with a dark theme"' },
      { letter: "C", label: "Constraints", value: "Single HTML, mobile-first, no dependencies" },
    ];
    return (
      <div className="mt-8 max-w-[560px] mx-auto space-y-2">
        {rows.map((row, i) => (
          <FadeIn key={i} delay={400 + i * 120}>
            <div className="flex items-center gap-4 bg-surface border border-border rounded-xl px-5 py-3.5">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-accent-glow text-accent text-sm font-extrabold font-display flex-shrink-0">
                {row.letter}
              </div>
              <div className="flex-1">
                <div className="text-[11px] text-text-faint font-semibold uppercase tracking-wider">
                  {row.label}
                </div>
                <div className="text-sm text-text-secondary">{row.value}</div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    );
  }

  if (slideId === "layers") {
    const layers = [
      { num: "1", label: "Layout", desc: "Structure with placeholders", icon: "🏗" },
      { num: "2", label: "Content", desc: "Swap in real data", icon: "📝" },
      { num: "3", label: "Polish", desc: "Make it look good", icon: "✨" },
    ];
    return (
      <div className="mt-10 max-w-[500px] mx-auto">
        {layers.map((l, i) => (
          <FadeIn key={i} delay={400 + i * 200}>
            <div className="flex items-center gap-4 mb-3">
              <div className="w-10 h-10 rounded-xl bg-accent-glow flex items-center justify-center text-accent text-lg font-bold font-display flex-shrink-0">
                {l.num}
              </div>
              <div className="flex-1 bg-surface border border-border rounded-xl px-5 py-3.5">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{l.icon}</span>
                  <span className="text-[15px] font-bold font-display">{l.label}</span>
                </div>
                <div className="text-xs text-text-muted mt-0.5">{l.desc}</div>
              </div>
              {i < layers.length - 1 && (
                <div className="absolute left-[30px] mt-12 text-text-faint text-xs">↓</div>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    );
  }

  if (slideId === "library") {
    return (
      <div className="mt-8 max-w-[480px] mx-auto">
        <FadeIn delay={400}>
          <div className="bg-surface border border-border rounded-2xl p-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">📁</span>
              <span className="font-mono text-sm text-accent">prompts.md</span>
            </div>
            <div className="bg-[rgba(0,0,0,0.3)] rounded-xl p-5 font-mono text-xs text-text-secondary leading-relaxed space-y-2">
              <div className="text-text-faint"># My Prompt Library</div>
              <div>&nbsp;</div>
              <div className="text-text-faint">## Layout prompts</div>
              <div>- Dark landing page with hero section...</div>
              <div>- Dashboard with sidebar navigation...</div>
              <div>&nbsp;</div>
              <div className="text-text-faint">## Polish prompts</div>
              <div>- Add hover animations with 0.3s ease...</div>
              <div>- Make responsive with mobile breakpoint...</div>
            </div>
            <div className="mt-4 text-xs text-accent/80">
              Save your best prompts. Reuse them forever.
            </div>
          </div>
        </FadeIn>
      </div>
    );
  }

  return null;
}
