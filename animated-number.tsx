"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedNumber } from "@/components/ui/animated-number";

export function Hero() {
  return (
    <section className="relative pt-[150px] pb-[110px]">
      {/* Aurora blobs */}
      <div
        className="absolute pointer-events-none blur-[100px] rounded-full"
        style={{
          width: 650, height: 420, top: -130, left: "50%", marginLeft: -400,
          background: "radial-gradient(ellipse, rgba(99,102,241,0.18), transparent 70%)",
          opacity: 0.55,
        }}
      />
      <div
        className="absolute pointer-events-none blur-[100px] rounded-full animate-float"
        style={{
          width: 500, height: 350, top: -80, right: "-8%",
          background: "radial-gradient(ellipse, rgba(6,182,212,0.09), transparent 70%)",
        }}
      />
      <div
        className="absolute pointer-events-none blur-[100px] rounded-full"
        style={{
          width: 380, height: 280, top: 220, left: "8%",
          background: "radial-gradient(ellipse, rgba(139,92,246,0.07), transparent 70%)",
          animation: "float 16s ease-in-out infinite alternate-reverse",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 relative text-center">
        {/* Pill */}
        <div
          className="inline-flex items-center gap-2.5 rounded-full py-1.5 px-4 pl-3 mb-9 animate-fade-up"
          style={{
            background: "rgba(129,140,248,0.08)",
            border: "1px solid rgba(129,140,248,0.15)",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-breathe" />
          <span className="text-[13px] font-medium text-[#a5b4fc] tracking-[-0.01em]">
            New — Claude Code Mastery is live
          </span>
        </div>

        {/* Heading */}
        <h1
          className="heading text-[clamp(46px,8.5vw,92px)] mx-auto mb-7 max-w-[820px] animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          Build anything{" "}
          <span
            className="bg-clip-text"
            style={{
              background: "linear-gradient(135deg, #818cf8 0%, #a78bfa 25%, #22d3ee 55%, #818cf8 100%)",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            with AI
          </span>
        </h1>

        {/* Subheading */}
        <p
          className="text-[clamp(16px,2.2vw,19px)] text-text-muted max-w-[540px] mx-auto mb-13 leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          The platform for shipping real apps, websites, and SaaS products using Claude, Cursor,
          and modern AI tools. From first line to first dollar.
        </p>

        {/* CTAs */}
        <div
          className="flex gap-3.5 justify-center flex-wrap animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <Link href="/signup">
            <Button size="lg">Start Learning Free</Button>
          </Link>
          <Link href="/courses">
            <Button variant="ghost" size="lg">Browse Courses ↓</Button>
          </Link>
        </div>

        {/* Stats */}
        <div
          className="flex justify-center gap-[clamp(32px,7vw,80px)] mt-[88px] animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          {[
            { value: 12000, suffix: "+", label: "Students" },
            { value: 28, suffix: "", label: "Shipped Projects" },
            { value: 94, suffix: "%", label: "Recommend" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="heading text-[clamp(28px,5vw,44px)]">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-[13px] text-text-faint font-medium mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
