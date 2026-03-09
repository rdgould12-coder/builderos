"use client";

import { useState } from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { CourseCard } from "@/components/marketing/course-card";
import { Button } from "@/components/ui/button";
import { COURSES } from "@/data/courses";

const TIERS = ["All", "foundations", "websites", "apps", "advanced"] as const;
const TIER_LABELS: Record<string, string> = {
  All: "All",
  foundations: "Foundations",
  websites: "Websites",
  apps: "Apps",
  advanced: "Advanced",
};

export function CourseShowcase() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All"
    ? COURSES.slice(0, 8)
    : COURSES.filter((c) => c.tier === filter);

  return (
    <section id="courses" className="py-[120px] relative">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(99,102,241,0.035), transparent 70%)" }}
      />

      <div className="max-w-[1200px] mx-auto px-6 relative">
        <Reveal>
          <div className="text-center mb-12">
            <p className="kicker">Course Catalog</p>
            <h2 className="heading text-[clamp(30px,4.5vw,48px)] mb-3.5">
              15 courses. 28 real projects.
            </h2>
            <p className="text-text-muted text-base leading-relaxed max-w-[520px] mx-auto">
              From first prompt to production SaaS. Every course ships something real.
            </p>
          </div>
        </Reveal>

        <div className="flex justify-center gap-1.5 mb-11 flex-wrap">
          {TIERS.map((tier) => (
            <button
              key={tier}
              className={`filter-pill ${filter === tier ? "active" : ""}`}
              onClick={() => setFilter(tier)}
            >
              {TIER_LABELS[tier]}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filtered.map((course, i) => (
            <Reveal key={course.slug} delay={i * 60}>
              <CourseCard
                slug={course.slug}
                title={course.title}
                description={course.description}
                tag={course.tag}
                color={course.color}
                price={course.price}
                duration={course.duration}
                module_count={course.module_count}
              />
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="text-center mt-12">
            <Link href="/courses">
              <Button variant="ghost" size="md">View All 15 Courses →</Button>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
