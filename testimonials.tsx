"use client";

import type { CaptionEntry } from "@/types";

interface CaptionOverlayProps {
  captions: CaptionEntry[];
  currentTime: number;
  visible: boolean;
}

export function CaptionOverlay({ captions, currentTime, visible }: CaptionOverlayProps) {
  if (!visible) return null;

  const active = captions.find((c) => currentTime >= c.start && currentTime < c.end);
  if (!active) return null;

  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 max-w-[80%] z-20 pointer-events-none">
      <div className="bg-[rgba(0,0,0,0.8)] backdrop-blur-sm text-white text-sm leading-relaxed px-5 py-2.5 rounded-lg text-center">
        {active.text}
      </div>
    </div>
  );
}
