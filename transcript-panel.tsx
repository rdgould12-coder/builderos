"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { ProgressBar } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { LessonPlayer } from "@/components/player/lesson-player";
import { MarkdownContent } from "@/components/player/markdown-content";
import { AnimatedMeshBackground } from "@/components/player/animated-mesh-bg";
import type { Course, ModuleWithLessons } from "@/types";

interface PlayerProps {
  course: Course;
  modules: ModuleWithLessons[];
  userId: string;
}

export function PlayerClient({ course, modules, userId }: PlayerProps) {
  const router = useRouter();
  const [activeModule, setActiveModule] = useState(0);
  const [activeLesson, setActiveLesson] = useState(0);

  const currentModule = modules[activeModule];
  const currentLesson = currentModule?.lessons?.[activeLesson];

  const totalLessons = modules.reduce((sum, m) => sum + m.lessons.length, 0);
  const completedLessons = modules.reduce(
    (sum, m) => sum + m.lessons.filter((l) => l.completed).length,
    0
  );
  const progressPct = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

  const markComplete = useCallback(async () => {
    if (!currentLesson) return;
    const supabase = createClient();

    await supabase.from("progress").upsert({
      user_id: userId,
      lesson_id: currentLesson.id,
    });

    // Move to next lesson
    if (activeLesson < (currentModule?.lessons?.length || 0) - 1) {
      setActiveLesson((prev) => prev + 1);
    } else if (activeModule < modules.length - 1) {
      setActiveModule((prev) => prev + 1);
      setActiveLesson(0);
    }

    router.refresh();
  }, [currentLesson, userId, activeLesson, activeModule, currentModule, modules, router]);

  const navigateToLesson = useCallback((moduleIndex: number, lessonIndex: number) => {
    setActiveModule(moduleIndex);
    setActiveLesson(lessonIndex);
  }, []);

  if (!currentModule || !currentLesson) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-64px)]">
        <p className="text-text-muted">No lessons found for this course.</p>
      </div>
    );
  }

  const isSlideLesson = currentLesson.lesson_type === "slides";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] h-[calc(100vh-64px)]">
      {/* Main content */}
      <div className="flex flex-col overflow-hidden">
        {/* Media area — slides or audio-only */}
        <div className="flex-shrink-0">
          {isSlideLesson ? (
            <LessonPlayer
              lessonId={currentLesson.id}
              audioUrl={currentLesson.audio_url}
            />
          ) : currentLesson.video_url ? (
            <div className="bg-black aspect-video max-h-[55vh] flex items-center justify-center relative">
              <video
                src={currentLesson.video_url}
                controls
                className="w-full h-full object-contain"
              />
            </div>
          ) : currentLesson.audio_url ? (
            /* Audio-only lesson (no slides) */
            <div className="relative bg-[#08080a] aspect-video max-h-[40vh] flex items-center justify-center">
              <AnimatedMeshBackground />
              <div className="relative z-10 text-center">
                <div className="text-5xl mb-4">🎧</div>
                <h3 className="text-xl font-display font-bold mb-2">{currentLesson.title}</h3>
                <p className="text-text-muted text-sm mb-6 max-w-md mx-auto">{currentLesson.description}</p>
                <audio
                  src={currentLesson.audio_url}
                  controls
                  className="mx-auto"
                  style={{ filter: "invert(1) hue-rotate(180deg)", opacity: 0.7 }}
                />
              </div>
            </div>
          ) : (
            /* No media placeholder */
            <div className="relative bg-[#08080a] aspect-video max-h-[40vh] flex items-center justify-center">
              <AnimatedMeshBackground />
              <div className="relative z-10 text-center">
                <div
                  className="w-[60px] h-[60px] rounded-full flex items-center justify-center mx-auto mb-2.5 text-[22px]"
                  style={{
                    background: "rgba(129,140,248,0.85)",
                    boxShadow: "0 4px 24px rgba(129,140,248,0.3)",
                  }}
                >
                  📖
                </div>
                <p className="text-text-faint text-[13px]">Written lesson — scroll down to start</p>
              </div>
            </div>
          )}
        </div>

        {/* Lesson info + content area */}
        <div className="p-6 px-7 flex-1 overflow-y-auto">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs text-accent font-semibold">
              Module {activeModule + 1}
            </span>
            <span className="text-text-faint">·</span>
            <span className="text-xs text-text-faint">Lesson {activeLesson + 1}</span>
            {currentLesson.lesson_type && (
              <>
                <span className="text-text-faint">·</span>
                <span className={`text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded ${
                  isSlideLesson
                    ? "text-accent bg-accent-glow"
                    : "text-text-faint bg-surface"
                }`}>
                  {currentLesson.lesson_type}
                </span>
              </>
            )}
          </div>

          <h2 className="text-[22px] font-bold font-display tracking-[-0.02em] mb-3.5">
            {currentLesson.title}
          </h2>

          {currentLesson.description && (
            <p className="text-text-muted text-sm leading-[1.7] mb-6">
              {currentLesson.description}
            </p>
          )}

          {/* Written tutorial content */}
          {currentLesson.content && (
            <div className="mb-8 pb-8 border-b border-border">
              <MarkdownContent content={currentLesson.content} />
            </div>
          )}

          <div className="flex gap-2.5 mb-6 flex-wrap">
            {["📁 Source Files", "📝 Exercise", "💬 Discussion"].map((label) => (
              <button key={label} className="btn-ghost px-4 py-2.5 text-[13px]">
                {label}
              </button>
            ))}
          </div>

          <Button onClick={markComplete} className="w-full py-3.5 text-[15px]">
            {currentLesson.completed ? "Completed ✓" : "Mark Complete & Continue →"}
          </Button>
        </div>
      </div>

      {/* Sidebar — course outline */}
      <div className="border-l border-border overflow-y-auto bg-[rgba(255,255,255,0.008)] hidden lg:block">
        <div className="p-4 px-5 border-b border-border">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-bold font-display">{course.title}</span>
            <button
              onClick={() => router.push("/dashboard")}
              className="text-text-muted text-xs py-1 px-2 bg-transparent border-0 cursor-pointer hover:text-text font-body"
            >
              ✕
            </button>
          </div>
          <div className="flex items-center gap-2.5">
            <ProgressBar pct={progressPct} height={3} />
            <span className="text-xs text-text-muted">{progressPct}%</span>
          </div>
        </div>

        {modules.map((mod, mi) => (
          <div key={mod.id}>
            <button
              onClick={() => {
                setActiveModule(mi);
                setActiveLesson(0);
              }}
              className={`w-full text-left py-3 px-4 border-0 border-b border-[rgba(255,255,255,0.03)] cursor-pointer font-body transition-colors duration-150 ${
                mi === activeModule
                  ? "bg-[rgba(129,140,248,0.05)]"
                  : "bg-transparent hover:bg-surface"
              }`}
              style={{ color: "#f0f0f3" }}
            >
              <div className="flex justify-between items-center">
                <span className="text-[13px] font-semibold">
                  {mi + 1}. {mod.title}
                </span>
                <span className="text-[11px] text-text-faint">{mod.duration}</span>
              </div>
            </button>

            {mi === activeModule && mod.lessons.length > 0 && (
              <div className="bg-[rgba(0,0,0,0.2)]">
                {mod.lessons.map((lesson, li) => (
                  <button
                    key={lesson.id}
                    onClick={() => navigateToLesson(mi, li)}
                    className={`w-full text-left py-2.5 px-4 pl-8 border-0 border-b border-[rgba(255,255,255,0.02)] cursor-pointer font-body flex items-center gap-2.5 ${
                      li === activeLesson ? "bg-[rgba(129,140,248,0.08)]" : "bg-transparent"
                    }`}
                  >
                    <span
                      className="w-[18px] h-[18px] rounded-full flex-shrink-0 flex items-center justify-center text-[9px] text-white"
                      style={{
                        border: lesson.completed ? "none" : "1.5px solid rgba(255,255,255,0.12)",
                        background: lesson.completed ? "#818cf8" : "transparent",
                      }}
                    >
                      {lesson.completed ? "✓" : ""}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span
                          className="text-[13px] whitespace-nowrap overflow-hidden text-ellipsis"
                          style={{
                            color: li === activeLesson ? "#f0f0f3" : "#a0a0b0",
                          }}
                        >
                          {lesson.title}
                        </span>
                        {lesson.lesson_type === "slides" && (
                          <span className="text-[9px] text-accent flex-shrink-0">▶</span>
                        )}
                      </div>
                      <div className="text-[11px] text-text-faint">{lesson.duration}</div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
