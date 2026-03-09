"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

export function CTASection() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (email.includes("@")) setSent(true);
  };

  return (
    <section className="py-[100px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-3xl text-center"
            style={{
              border: "1px solid rgba(129,140,248,0.15)",
              background: "linear-gradient(135deg, rgba(129,140,248,0.06), rgba(129,140,248,0.015))",
              padding: "clamp(48px,8vw,88px) clamp(24px,5vw,72px)",
            }}
          >
            {/* Decorative blobs */}
            <div className="absolute -top-[60px] -right-[60px] w-[260px] h-[260px] rounded-full bg-[rgba(129,140,248,0.06)] blur-[60px] pointer-events-none" />
            <div className="absolute -bottom-[40px] -left-[40px] w-[180px] h-[180px] rounded-full bg-[rgba(6,182,212,0.04)] blur-[50px] pointer-events-none" />

            <h2 className="heading text-[clamp(28px,4.5vw,48px)] mb-4 relative">
              Start building today
            </h2>
            <p className="text-text-muted max-w-[440px] mx-auto mb-10 text-base leading-relaxed relative">
              Get the AI Builder Starter Kit — free. Prompt templates, project ideas, and your first
              tutorial.
            </p>

            {!sent ? (
              <div className="flex gap-2.5 justify-center flex-wrap relative max-w-[460px] mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="input-field flex-[1_1_260px] max-w-[300px] px-5 py-3.5 text-[15px]"
                  onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                />
                <Button onClick={handleSubmit} size="md">Get Free Kit</Button>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2.5 text-base font-semibold text-accent animate-fade-up relative">
                <span className="w-6 h-6 rounded-full bg-accent inline-flex items-center justify-center text-xs text-white">
                  ✓
                </span>
                Check your inbox — Starter Kit incoming.
              </div>
            )}

            <p className="text-xs text-text-faint mt-4 relative">
              Free forever · No credit card · Unsubscribe anytime
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
