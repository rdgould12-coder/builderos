"use client";

import { FadeIn } from "../slide-frame";

interface SlideProps {
  slideId: string;
  isActive: boolean;
}

export function Lesson31Slides({ slideId, isActive }: SlideProps) {
  if (!isActive) return null;
  if (slideId === "title" || slideId === "end") return null;

  if (slideId === "layers") {
    const layers = [
      { icon: "🦴", label: "HTML", desc: "The skeleton — structure", color: "#818cf8" },
      { icon: "🎨", label: "CSS", desc: "The skin — appearance", color: "#22d3ee" },
      { icon: "🧠", label: "JavaScript", desc: "The brain — behavior", color: "#fbbf24" },
    ];
    return (
      <div className="flex gap-5 mt-10 flex-wrap justify-center">
        {layers.map((l, i) => (
          <FadeIn key={i} delay={400 + i * 200} className="flex-1 min-w-[180px] max-w-[240px]">
            <div className="bg-surface border border-border rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">{l.icon}</div>
              <div className="text-lg font-bold font-display mb-1" style={{ color: l.color }}>{l.label}</div>
              <div className="text-xs text-text-muted">{l.desc}</div>
            </div>
          </FadeIn>
        ))}
      </div>
    );
  }

  if (slideId === "html") {
    return (
      <div className="mt-8 max-w-[480px] mx-auto">
        <FadeIn delay={300}>
          <div className="bg-[rgba(0,0,0,0.3)] rounded-2xl p-6 font-mono text-sm leading-relaxed">
            <div className="text-text-faint">&lt;div class=&quot;card&quot;&gt;</div>
            <div className="pl-4 text-accent">&lt;h2&gt;My Project&lt;/h2&gt;</div>
            <div className="pl-4 text-text-secondary">&lt;p&gt;Description here&lt;/p&gt;</div>
            <div className="pl-4 text-[#22d3ee]">&lt;button&gt;View →&lt;/button&gt;</div>
            <div className="text-text-faint">&lt;/div&gt;</div>
          </div>
        </FadeIn>
        <FadeIn delay={500}>
          <div className="mt-4 text-xs text-text-muted text-center">
            Tags label content. Like labeled boxes in a warehouse.
          </div>
        </FadeIn>
      </div>
    );
  }

  if (slideId === "css") {
    return (
      <div className="mt-8 max-w-[480px] mx-auto">
        <FadeIn delay={300}>
          <div className="bg-[rgba(0,0,0,0.3)] rounded-2xl p-6 font-mono text-sm leading-relaxed">
            <div className="text-text-faint">.card {"{"}</div>
            <div className="pl-4"><span className="text-[#22d3ee]">background</span>: <span className="text-[#fbbf24]">#1a1a2e</span>;</div>
            <div className="pl-4"><span className="text-[#22d3ee]">border-radius</span>: <span className="text-[#fbbf24]">16px</span>;</div>
            <div className="pl-4"><span className="text-[#22d3ee]">padding</span>: <span className="text-[#fbbf24]">24px</span>;</div>
            <div className="pl-4"><span className="text-[#22d3ee]">color</span>: <span className="text-[#fbbf24]">white</span>;</div>
            <div className="text-text-faint">{"}"}</div>
          </div>
        </FadeIn>
        <FadeIn delay={500}>
          <div className="mt-4 text-xs text-text-muted text-center">
            Property: value pairs. Change one value, see instant results.
          </div>
        </FadeIn>
      </div>
    );
  }

  if (slideId === "js") {
    return (
      <div className="mt-8 max-w-[480px] mx-auto">
        <FadeIn delay={300}>
          <div className="bg-[rgba(0,0,0,0.3)] rounded-2xl p-6 font-mono text-sm leading-relaxed">
            <div><span className="text-accent">button</span>.<span className="text-[#22d3ee]">addEventListener</span>(<span className="text-[#fbbf24]">&apos;click&apos;</span>, () =&gt; {"{"}</div>
            <div className="pl-4 text-text-secondary">{"// This runs when user clicks"}</div>
            <div className="pl-4"><span className="text-accent">score</span> += <span className="text-[#fbbf24]">1</span>;</div>
            <div className="pl-4"><span className="text-accent">display</span>.<span className="text-[#22d3ee]">textContent</span> = score;</div>
            <div>{"}"});</div>
          </div>
        </FadeIn>
        <FadeIn delay={500}>
          <div className="mt-4 text-xs text-text-muted text-center">
            You&apos;ll rarely edit JS directly. Just describe the behavior you want.
          </div>
        </FadeIn>
      </div>
    );
  }

  if (slideId === "find") {
    return (
      <div className="mt-8 max-w-[420px] mx-auto">
        <FadeIn delay={300}>
          <div className="bg-surface border border-border rounded-2xl p-7 text-center">
            <div className="text-3xl mb-4">⌘F</div>
            <div className="text-lg font-bold font-display mb-3">Find & Change</div>
            <div className="space-y-3 text-left">
              {["See text on screen → Ctrl+F to find it in code", "Change one value → save → see result", "Repeat until it looks right"].map((step, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-text-secondary">
                  <div className="w-6 h-6 rounded-full bg-accent-glow text-accent text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </div>
                  {step}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    );
  }

  return null;
}
