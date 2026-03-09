"use client";

import { FadeIn } from "../slide-frame";

interface SlideProps {
  slideId: string;
  isActive: boolean;
}

function LoopStep({
  icon,
  label,
  desc,
  index,
  active,
}: {
  icon: string;
  label: string;
  desc: string;
  index: number;
  active?: boolean;
}) {
  return (
    <FadeIn delay={400 + index * 200} className="flex-1 min-w-[140px]">
      <div
        className="rounded-2xl p-5 text-center transition-all duration-500"
        style={{
          background: active ? "rgba(129,140,248,0.08)" : "rgba(255,255,255,0.025)",
          border: `1px solid ${active ? "rgba(129,140,248,0.25)" : "rgba(255,255,255,0.06)"}`,
          transform: active ? "scale(1.05)" : "scale(1)",
        }}
      >
        <div className="text-3xl mb-2">{icon}</div>
        <div className="text-[15px] font-bold font-display mb-1">{label}</div>
        <div className="text-xs text-text-muted leading-relaxed">{desc}</div>
      </div>
    </FadeIn>
  );
}

function ProjectCard({
  emoji,
  title,
  desc,
  color,
  delay,
}: {
  emoji: string;
  title: string;
  desc: string;
  color: string;
  delay: number;
}) {
  return (
    <FadeIn delay={delay} className="flex-1 min-w-[200px]">
      <div className="bg-surface border border-border rounded-2xl p-7 relative overflow-hidden">
        <div
          className="absolute -top-5 -right-5 w-[100px] h-[100px] rounded-full blur-[30px] pointer-events-none"
          style={{ background: `${color}10` }}
        />
        <div className="text-4xl mb-3">{emoji}</div>
        <div className="text-[17px] font-bold font-display mb-1.5 tracking-[-0.02em]">{title}</div>
        <div className="text-[13px] text-text-secondary leading-relaxed">{desc}</div>
        <div
          className="mt-4 inline-block text-[11px] font-semibold uppercase tracking-[0.06em] px-3 py-1 rounded-md"
          style={{ color, background: `${color}12` }}
        >
          Deployed to the internet
        </div>
      </div>
    </FadeIn>
  );
}

function ToolRow({
  icon,
  name,
  desc,
  delay,
}: {
  icon: string;
  name: string;
  desc: string;
  delay: number;
}) {
  return (
    <FadeIn delay={delay}>
      <div className="flex items-center gap-4 bg-surface border border-border rounded-xl px-5 py-4 mb-2">
        <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-accent-glow text-[22px] flex-shrink-0">
          {icon}
        </div>
        <div>
          <div className="text-[15px] font-bold font-display">{name}</div>
          <div className="text-[13px] text-text-muted">{desc}</div>
        </div>
        <div className="ml-auto text-[11px] text-[#34d399] font-semibold bg-[rgba(52,211,153,0.1)] px-2.5 py-1 rounded-md">
          FREE
        </div>
      </div>
    </FadeIn>
  );
}

export function Lesson11Slides({ slideId, isActive }: SlideProps) {
  if (!isActive) return null;

  if (slideId === "title") return null; // Handled by SlideFrame

  if (slideId === "old-vs-new") {
    return (
      <div className="flex gap-6 mt-10 flex-wrap justify-center">
        <FadeIn delay={300} className="flex-1 min-w-[250px] max-w-[360px]">
          <div className="bg-surface border border-border rounded-2xl p-7">
            <div className="text-xs font-semibold text-[#f87171] uppercase tracking-[0.08em] mb-4">
              Traditional Developer
            </div>
            <div className="text-5xl mb-4 opacity-80">🧱</div>
            <div className="text-sm text-text-secondary leading-[1.7]">
              Learns syntax for months.<br />
              Builds brick by brick.<br />
              Ships after weeks of work.
            </div>
            <div className="mt-5 text-3xl font-extrabold font-display text-[#f87171]">
              6+ months
            </div>
            <div className="text-xs text-text-faint mt-1">to first shipped project</div>
          </div>
        </FadeIn>
        <FadeIn delay={500} className="flex-1 min-w-[250px] max-w-[360px]">
          <div className="bg-surface border border-accent/20 rounded-2xl p-7 ring-1 ring-accent/10">
            <div className="text-xs font-semibold text-accent uppercase tracking-[0.08em] mb-4">
              AI Builder
            </div>
            <div className="text-5xl mb-4">⚡</div>
            <div className="text-sm text-text-secondary leading-[1.7]">
              Learns to communicate intent.<br />
              Builds with an AI partner.<br />
              Ships on day one.
            </div>
            <div className="mt-5 text-3xl font-extrabold font-display text-accent">
              30 minutes
            </div>
            <div className="text-xs text-text-faint mt-1">to first shipped project</div>
          </div>
        </FadeIn>
      </div>
    );
  }

  if (slideId === "loop") {
    const steps = [
      { icon: "💬", label: "Describe", desc: "Tell AI what to build" },
      { icon: "⚡", label: "Generate", desc: "AI writes the code" },
      { icon: "👁", label: "Review", desc: "Check the result" },
      { icon: "🔧", label: "Refine", desc: "Request changes" },
      { icon: "🚀", label: "Ship", desc: "Deploy to the web" },
    ];
    return (
      <div className="flex gap-3 mt-10 flex-wrap justify-center">
        {steps.map((s, i) => (
          <LoopStep key={i} {...s} index={i} active={false} />
        ))}
      </div>
    );
  }

  if (slideId === "projects") {
    return (
      <div className="flex gap-5 mt-8 flex-wrap justify-center">
        <ProjectCard
          emoji="🔗"
          title="Link-in-Bio"
          desc="Custom landing page with your links, styled your way."
          color="#22d3ee"
          delay={400}
        />
        <ProjectCard
          emoji="❓"
          title="Quiz App"
          desc="Multi-screen quiz with scoring, progress, animations."
          color="#fbbf24"
          delay={550}
        />
        <ProjectCard
          emoji="💰"
          title="Expense Tracker"
          desc="Full CRUD with persistent storage and charts."
          color="#34d399"
          delay={700}
        />
      </div>
    );
  }

  if (slideId === "tools") {
    return (
      <div className="mt-6 max-w-[500px] mx-auto">
        <ToolRow icon="🤖" name="Claude" desc="Your AI coding partner" delay={400} />
        <ToolRow icon="📝" name="VS Code" desc="Free code editor" delay={550} />
        <ToolRow icon="🌐" name="Chrome" desc="Browser with DevTools" delay={700} />
        <ToolRow icon="🚀" name="Vercel" desc="Free deployment hosting" delay={850} />
      </div>
    );
  }

  if (slideId === "end") return null; // Handled by SlideFrame

  return null;
}
