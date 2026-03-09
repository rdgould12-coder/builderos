"use client";

import { useEffect, useRef } from "react";
import type { CaptionEntry } from "@/types";

interface TranscriptPanelProps {
  captions: CaptionEntry[];
  currentTime: number;
  visible: boolean;
  onSeek: (time: number) => void;
}

export function TranscriptPanel({ captions, currentTime, visible, onSeek }: TranscriptPanelProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<HTMLButtonElement>(null);

  // Auto-scroll to active caption
  useEffect(() => {
    if (!visible || !activeRef.current || !containerRef.current) return;
    activeRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, [currentTime, visible]);

  if (!visible) return null;

  const fmt = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <div className="w-[320px] border-l border-[rgba(255,255,255,0.06)] bg-[rgba(0,0,0,0.3)] flex flex-col flex-shrink-0 hidden lg:flex">
      <div className="px-4 py-3 border-b border-[rgba(255,255,255,0.06)]">
        <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">
          Transcript
        </span>
      </div>
      <div ref={containerRef} className="flex-1 overflow-y-auto p-3 space-y-0.5">
        {captions.map((caption, i) => {
          const isActive = currentTime >= caption.start && currentTime < caption.end;
          return (
            <button
              key={i}
              ref={isActive ? activeRef : undefined}
              onClick={() => onSeek(caption.start)}
              className={`w-full text-left px-3 py-2 rounded-lg transition-colors text-[13px] leading-relaxed border-0 cursor-pointer font-body ${
                isActive
                  ? "bg-[rgba(129,140,248,0.1)] text-white"
                  : "text-text-muted hover:text-text-secondary hover:bg-[rgba(255,255,255,0.03)]"
              }`}
            >
              <span className="text-[10px] text-text-faint font-mono mr-2">
                {fmt(caption.start)}
              </span>
              {caption.text}
            </button>
          );
        })}
      </div>
    </div>
  );
}
