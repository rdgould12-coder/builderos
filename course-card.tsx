"use client";

import { useState, useCallback } from "react";
import { AnimatedMeshBackground } from "./animated-mesh-bg";
import { AudioPlayer } from "./audio-player";
import { CaptionOverlay } from "./caption-overlay";
import { TranscriptPanel } from "./transcript-panel";
import { SlideRenderer } from "./slide-renderer";
import { LESSON_SLIDE_CONFIGS } from "@/data/lessons/slide-configs";

interface LessonPlayerProps {
  lessonId: string;
  audioUrl: string | null;
}

export function LessonPlayer({ lessonId, audioUrl }: LessonPlayerProps) {
  const config = LESSON_SLIDE_CONFIGS[lessonId];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [ccEnabled, setCCEnabled] = useState(true);
  const [transcriptOpen, setTranscriptOpen] = useState(false);
  const [autoAdvance, setAutoAdvance] = useState(true);

  const handleSlideChange = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const handleTimeUpdate = useCallback((time: number) => {
    setCurrentTime(time);
  }, []);

  const handleTranscriptSeek = useCallback((time: number) => {
    // Find the audio element and seek to the time
    const audio = document.querySelector("audio") as HTMLAudioElement | null;
    if (audio) {
      audio.currentTime = time;
    }
  }, []);

  // If no slide config exists for this lesson, render a simple placeholder
  if (!config) {
    return (
      <div className="relative bg-[#08080a] aspect-video max-h-[55vh] flex items-center justify-center">
        <AnimatedMeshBackground />
        <div className="relative z-10 text-center">
          <div className="text-4xl mb-4">🎧</div>
          <div className="text-text-muted text-sm">Audio lesson</div>
        </div>
      </div>
    );
  }

  // Use audio_url from database, or fallback to config audioFile name
  const resolvedAudioUrl = audioUrl || null;

  return (
    <div className="flex flex-1 overflow-hidden">
      {/* Main slide + audio area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Slide viewport */}
        <div className="relative aspect-video max-h-[55vh] flex-shrink-0 overflow-hidden">
          <AnimatedMeshBackground />
          <div className="relative z-10 w-full h-full">
            <SlideRenderer
              lessonId={lessonId}
              slides={config.slides}
              currentSlide={currentSlide}
              onSlideChange={handleSlideChange}
            />
          </div>
          {/* Caption overlay */}
          <CaptionOverlay
            captions={config.captions}
            currentTime={currentTime}
            visible={ccEnabled}
          />
        </div>

        {/* Audio player bar */}
        <AudioPlayer
          audioUrl={resolvedAudioUrl}
          timestamps={config.timestamps}
          currentSlide={currentSlide}
          onSlideChange={handleSlideChange}
          onTimeUpdate={handleTimeUpdate}
          ccEnabled={ccEnabled}
          onCCToggle={() => setCCEnabled(!ccEnabled)}
          transcriptOpen={transcriptOpen}
          onTranscriptToggle={() => setTranscriptOpen(!transcriptOpen)}
          autoAdvance={autoAdvance}
          onAutoAdvanceToggle={() => setAutoAdvance(!autoAdvance)}
        />
      </div>

      {/* Transcript panel (right sidebar) */}
      <TranscriptPanel
        captions={config.captions}
        currentTime={currentTime}
        visible={transcriptOpen}
        onSeek={handleTranscriptSeek}
      />
    </div>
  );
}
