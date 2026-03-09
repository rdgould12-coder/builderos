"use client";

import Link from "next/link";
import { GlowCard } from "@/components/ui/glow-card";
import { Tag } from "@/components/ui/tag";
import { ProgressBar } from "@/components/ui/progress";
import { formatPrice } from "@/lib/utils";

interface CourseCardProps {
  slug: string;
  title: string;
  description: string | null;
  tag: string | null;
  color: string;
  price: number;
  duration: string | null;
  module_count: number;
  progress?: number;
  enrolled?: boolean;
}

export function CourseCard({
  slug,
  title,
  description,
  tag,
  color,
  price,
  duration,
  module_count,
  progress,
  enrolled,
}: CourseCardProps) {
  return (
    <Link href={`/courses/${slug}`} className="no-underline block h-full">
      <GlowCard color={color} className="h-full flex flex-col p-6">
        <div className="flex justify-between items-center mb-4">
          {tag && <Tag label={tag} color={color} />}
          <span className="text-xs text-text-faint">{module_count} modules</span>
        </div>

        <h3 className="font-display text-[17px] font-bold tracking-[-0.02em] mb-2 leading-tight text-text">
          {title}
        </h3>

        <p className="text-[13.5px] text-text-muted leading-relaxed mb-5 min-h-[42px] flex-1">
          {description}
        </p>

        <div className="flex justify-between items-center">
          <div>
            <span className="heading text-[22px]">{formatPrice(price)}</span>
            <span className="text-xs text-text-faint ml-2">{duration}</span>
          </div>
        </div>

        {enrolled && typeof progress === "number" && (
          <div className="mt-3.5 flex items-center gap-2.5">
            <ProgressBar pct={progress} />
            <span className="text-xs text-text-muted whitespace-nowrap">{progress}%</span>
          </div>
        )}
      </GlowCard>
    </Link>
  );
}
