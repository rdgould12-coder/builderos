"use client";

import { Reveal } from "@/components/ui/reveal";
import { GlowCard } from "@/components/ui/glow-card";

const FEATURES = [
  {
    num: "28",
    unit: "shipped projects",
    title: "Ship, don't study",
    desc: "Every module ends with a deployed project. Not a quiz. A real thing on the internet.",
  },
  {
    num: "15",
    unit: "courses",
    title: "AI-native workflow",
    desc: "Learn Claude, Cursor, v0, and the full modern stack. Build 10x faster than traditional development.",
  },
  {
    num: "5",
    unit: "tiers",
    title: "From zero to SaaS",
    desc: "Structured paths from absolute beginner to launching profitable products. No prerequisites.",
  },
];

export function Features() {
  return (
    <section className="py-[120px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <Reveal>
          <div className="text-center mb-[72px]">
            <p className="kicker">Why BuilderOS</p>
            <h2 className="heading text-[clamp(30px,4.5vw,48px)]">
              Stop learning. Start shipping.
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {FEATURES.map((feature, i) => (
            <Reveal key={i} delay={i * 120}>
              <GlowCard>
                <div className="text-[52px] font-black font-display text-accent tracking-[-0.04em] leading-none mb-1">
                  {feature.num}
                </div>
                <div className="text-xs text-text-muted font-medium uppercase tracking-[0.08em] mb-5">
                  {feature.unit}
                </div>
                <h3 className="text-xl font-bold font-display tracking-[-0.02em] mb-2.5 text-text">
                  {feature.title}
                </h3>
                <p className="text-[14.5px] text-text-muted leading-relaxed">{feature.desc}</p>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
