"use client";

import { useEffect } from "react";
import { SlideFrame } from "./slide-frame";
import { Lesson11Slides } from "./slides/lesson-1-1";
import { Lesson21Slides } from "./slides/lesson-2-1";
import { Lesson22Slides } from "./slides/lesson-2-2";
import { Lesson31Slides } from "./slides/lesson-3-1";
import type { SlideData } from "@/types";

interface SlideRendererProps {
  lessonId: string;
  slides: SlideData[];
  currentSlide: number;
  onSlideChange: (index: number) => void;
}

// Map lesson IDs to their custom slide components
const SLIDE_COMPONENTS: Record<
  string,
  React.ComponentType<{ slideId: string; isActive: boolean }>
> = {
  "c1000001-0101-4000-8000-000000000001": Lesson11Slides,
  "c1000001-0201-4000-8000-000000000001": Lesson21Slides,
  "c1000001-0202-4000-8000-000000000001": Lesson22Slides,
  "c1000001-0301-4000-8000-000000000001": Lesson31Slides,
  // Remaining lessons use generic slide rendering:
  // 3-2, 5-1, 5-3, 6-3 — add custom components here when ready
};

export function SlideRenderer({
  lessonId,
  slides,
  currentSlide,
  onSlideChange,
}: SlideRendererProps) {
  const CustomSlides = SLIDE_COMPONENTS[lessonId];
  const slide = slides[currentSlide];

  // Keyboard arrow key navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        onSlideChange(Math.min(slides.length - 1, currentSlide + 1));
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        onSlideChange(Math.max(0, currentSlide - 1));
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [currentSlide, slides.length, onSlideChange]);

  if (!slide) return null;

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Slide navigation dots */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => onSlideChange(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 border-0 cursor-pointer ${
              i === currentSlide
                ? "w-6 bg-accent"
                : i < currentSlide
                ? "bg-accent/40"
                : "bg-[rgba(255,255,255,0.15)]"
            }`}
          />
        ))}
      </div>

      {/* Prev/Next click zones */}
      <button
        className="absolute left-0 top-0 bottom-0 w-[15%] z-10 cursor-pointer bg-transparent border-0 opacity-0 hover:opacity-100 flex items-center justify-start pl-4"
        onClick={() => onSlideChange(Math.max(0, currentSlide - 1))}
        disabled={currentSlide === 0}
      >
        <div className="w-8 h-8 rounded-full bg-[rgba(255,255,255,0.08)] flex items-center justify-center text-text-muted text-sm">
          ‹
        </div>
      </button>
      <button
        className="absolute right-0 top-0 bottom-0 w-[15%] z-10 cursor-pointer bg-transparent border-0 opacity-0 hover:opacity-100 flex items-center justify-end pr-4"
        onClick={() => onSlideChange(Math.min(slides.length - 1, currentSlide + 1))}
        disabled={currentSlide === slides.length - 1}
      >
        <div className="w-8 h-8 rounded-full bg-[rgba(255,255,255,0.08)] flex items-center justify-center text-text-muted text-sm">
          ›
        </div>
      </button>

      {/* Slide content */}
      <SlideFrame
        badge={slide.badge}
        title={slide.title}
        subtitle={slide.subtitle}
        isActive={true}
      >
        {CustomSlides && (
          <CustomSlides slideId={slide.id} isActive={true} />
        )}
      </SlideFrame>
    </div>
  );
}
