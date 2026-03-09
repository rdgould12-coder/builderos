"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface AudioPlayerProps {
  audioUrl: string | null;
  timestamps: number[];
  currentSlide: number;
  onSlideChange: (index: number) => void;
  onTimeUpdate: (time: number) => void;
  ccEnabled: boolean;
  onCCToggle: () => void;
  transcriptOpen: boolean;
  onTranscriptToggle: () => void;
  autoAdvance: boolean;
  onAutoAdvanceToggle: () => void;
}

export function AudioPlayer({
  audioUrl,
  timestamps,
  currentSlide,
  onSlideChange,
  onTimeUpdate,
  ccEnabled,
  onCCToggle,
  transcriptOpen,
  onTranscriptToggle,
  autoAdvance,
  onAutoAdvanceToggle,
}: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const scrubberRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [dragging, setDragging] = useState(false);

  // Time update handler
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      const t = audio.currentTime;
      setCurrentTime(t);
      onTimeUpdate(t);

      // Auto-advance slides
      if (autoAdvance && timestamps.length > 0) {
        let slideIdx = 0;
        for (let i = timestamps.length - 1; i >= 0; i--) {
          if (t >= timestamps[i]) {
            slideIdx = i;
            break;
          }
        }
        if (slideIdx !== currentSlide) {
          onSlideChange(slideIdx);
        }
      }
    };

    const handleDurationChange = () => setDuration(audio.duration || 0);
    const handleEnded = () => setPlaying(false);

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleDurationChange);
    audio.addEventListener("durationchange", handleDurationChange);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleDurationChange);
      audio.removeEventListener("durationchange", handleDurationChange);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [autoAdvance, timestamps, currentSlide, onSlideChange, onTimeUpdate]);

  const togglePlayPause = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || !audioUrl) return;
    if (playing) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
    }
    setPlaying(!playing);
  }, [playing, audioUrl]);

  // Scrubber drag logic
  const seek = useCallback(
    (clientX: number) => {
      const audio = audioRef.current;
      const bar = scrubberRef.current;
      if (!audio || !bar || !duration) return;
      const rect = bar.getBoundingClientRect();
      const pct = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      audio.currentTime = pct * duration;
      setCurrentTime(pct * duration);
    },
    [duration]
  );

  useEffect(() => {
    if (!dragging) return;
    const handleMove = (e: MouseEvent) => seek(e.clientX);
    const handleUp = () => setDragging(false);
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleUp);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleUp);
    };
  }, [dragging, seek]);

  const fmt = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  const pct = duration > 0 ? (currentTime / duration) * 100 : 0;

  // Slide markers on scrubber
  const markers = timestamps
    .filter((_, i) => i > 0)
    .map((t) => (duration > 0 ? (t / duration) * 100 : 0));

  if (!audioUrl) {
    return (
      <div className="h-12 px-4 flex items-center justify-center text-text-muted text-xs">
        Audio coming soon
      </div>
    );
  }

  return (
    <div className="relative bg-[rgba(0,0,0,0.5)] backdrop-blur-md border-t border-[rgba(255,255,255,0.06)]">
      <audio ref={audioRef} src={audioUrl} preload="metadata" />

      {/* Scrubber bar */}
      <div
        ref={scrubberRef}
        className="h-[6px] cursor-pointer relative group"
        onMouseDown={(e) => {
          setDragging(true);
          seek(e.clientX);
        }}
      >
        <div className="absolute inset-0 bg-[rgba(255,255,255,0.08)]" />
        <div
          className="absolute inset-y-0 left-0 bg-accent transition-[width] duration-75"
          style={{ width: `${pct}%` }}
        />
        {/* Slide markers */}
        {markers.map((pos, i) => (
          <div
            key={i}
            className="absolute top-0 bottom-0 w-[2px] bg-[rgba(255,255,255,0.2)]"
            style={{ left: `${pos}%` }}
          />
        ))}
        {/* Thumb */}
        <div
          className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ left: `${pct}%`, transform: `translate(-50%, -50%)` }}
        />
      </div>

      {/* Controls */}
      <div className="h-11 px-4 flex items-center gap-3">
        {/* Play/Pause */}
        <button
          onClick={togglePlayPause}
          className="w-8 h-8 rounded-full flex items-center justify-center bg-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.14)] transition-colors text-white text-xs flex-shrink-0"
        >
          {playing ? "⏸" : "▶"}
        </button>

        {/* Time */}
        <span className="text-[11px] text-text-muted font-mono tabular-nums min-w-[72px]">
          {fmt(currentTime)} / {fmt(duration)}
        </span>

        <div className="flex-1" />

        {/* Auto-advance toggle */}
        <button
          onClick={onAutoAdvanceToggle}
          className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded transition-colors ${
            autoAdvance
              ? "text-accent bg-accent-glow"
              : "text-text-faint hover:text-text-muted"
          }`}
        >
          Auto
        </button>

        {/* CC toggle */}
        <button
          onClick={onCCToggle}
          className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded border transition-colors ${
            ccEnabled
              ? "text-white bg-accent border-accent"
              : "text-text-faint border-[rgba(255,255,255,0.1)] hover:text-text-muted"
          }`}
        >
          CC
        </button>

        {/* Transcript toggle */}
        <button
          onClick={onTranscriptToggle}
          className={`text-[11px] px-2 py-1 rounded transition-colors ${
            transcriptOpen
              ? "text-accent bg-accent-glow"
              : "text-text-faint hover:text-text-muted"
          }`}
          title="Toggle transcript"
        >
          ☰
        </button>
      </div>
    </div>
  );
}
