"use client";

import { useState } from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { GlowCard } from "@/components/ui/glow-card";
import { Button } from "@/components/ui/button";

const PLANS = [
  {
    name: "Free",
    monthly: "$0",
    annual: "$0",
    period: "",
    desc: "Start building today",
    features: ["AI Builder Starter Kit", "1 free mini-course", "Community Discord", "Project templates"],
    cta: "Get Started",
    popular: false,
    href: "/signup",
  },
  {
    name: "Pro",
    monthly: "$39",
    annual: "$29",
    period: "/mo",
    desc: "Everything to ship products",
    features: [
      "All 15 courses + future",
      "Private Discord channels",
      "Weekly live Q&A",
      "Certificates & templates",
      "Priority support",
    ],
    cta: "Join Pro",
    popular: true,
    href: "/signup?plan=pro",
  },
  {
    name: "Lifetime",
    monthly: "$999",
    annual: "$999",
    period: "once",
    desc: "Pay once, learn forever",
    features: [
      "Everything in Pro forever",
      "All future courses free",
      "Cohort program discounts",
      "1-on-1 onboarding call",
      "Early access to content",
    ],
    cta: "Get Lifetime",
    popular: false,
    href: "/signup?plan=lifetime",
  },
];

export function PricingSection() {
  const [billing, setBilling] = useState<"monthly" | "annual">("annual");

  return (
    <section id="pricing" className="py-[120px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <Reveal>
          <div className="text-center mb-14">
            <p className="kicker">Pricing</p>
            <h2 className="heading text-[clamp(30px,4.5vw,48px)] mb-3.5">Invest in building</h2>
            <p className="text-text-muted text-base max-w-[520px] mx-auto mb-8">
              Start free. No credit card. No BS.
            </p>

            <div className="inline-flex bg-surface rounded-[10px] p-[3px] border border-border">
              {(["monthly", "annual"] as const).map((plan) => (
                <button
                  key={plan}
                  onClick={() => setBilling(plan)}
                  className={`px-5 py-2 rounded-lg text-[13px] font-medium cursor-pointer border-0 transition-all duration-200 font-body ${
                    billing === plan
                      ? "bg-surface-hover text-text"
                      : "bg-transparent text-text-muted"
                  }`}
                >
                  {plan === "annual" ? "Annual · save 25%" : "Monthly"}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[980px] mx-auto">
          {PLANS.map((plan, i) => (
            <Reveal key={i} delay={i * 100}>
              <GlowCard
                color={plan.popular ? "#818cf8" : "#404050"}
                className={`h-full ${
                  plan.popular
                    ? "border-[rgba(129,140,248,0.25)]"
                    : ""
                }`}
                style={
                  plan.popular
                    ? { background: "linear-gradient(135deg, rgba(129,140,248,0.06), rgba(129,140,248,0.015))" }
                    : undefined
                }
              >
                {plan.popular && (
                  <div
                    className="absolute -top-px left-10 right-10 h-0.5 rounded"
                    style={{ background: "linear-gradient(90deg, transparent, #818cf8, transparent)" }}
                  />
                )}

                <h3 className="text-lg font-bold font-display mb-1">{plan.name}</h3>
                <p className="text-[13px] text-text-muted mb-6">{plan.desc}</p>

                <div className="mb-7">
                  <span className="heading text-[44px]">
                    {billing === "annual" ? plan.annual : plan.monthly}
                  </span>
                  {plan.period && (
                    <span className="text-sm text-text-muted ml-1">{plan.period}</span>
                  )}
                </div>

                <Link href={plan.href}>
                  <Button
                    variant={plan.popular ? "primary" : "ghost"}
                    className="w-full py-3.5 text-sm mb-7"
                  >
                    {plan.cta}
                  </Button>
                </Link>

                <div className="flex flex-col gap-3">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2.5 text-sm text-text-secondary"
                    >
                      <span className="text-accent text-[13px] font-bold">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
