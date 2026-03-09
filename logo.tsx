"use client";

import { Reveal } from "@/components/ui/reveal";
import { TESTIMONIALS } from "@/data/courses";

export function TestimonialsSection() {
  return (
    <section className="py-[120px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <Reveal>
          <div className="text-center mb-14">
            <p className="kicker">Results</p>
            <h2 className="heading text-[clamp(30px,4.5vw,48px)]">
              Builders ship. Proof below.
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={i} delay={i * 70}>
              <div className="glow-card h-full">
                <p className="text-[14.5px] text-text-secondary leading-[1.7] mb-5">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-[10px] flex items-center justify-center text-[13px] font-bold text-white"
                    style={{
                      background: `linear-gradient(135deg, ${t.gradient[0]}, ${t.gradient[1]})`,
                    }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-text-faint">{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
