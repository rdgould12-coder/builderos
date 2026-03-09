"use client";

import Link from "next/link";
import { ProgressRing } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { GlowCard } from "@/components/ui/glow-card";
import { Tag } from "@/components/ui/tag";
import { COURSES } from "@/data/courses";

interface DashboardClientProps {
  enrollments: Array<{
    id: string;
    course_id: string;
    courses: {
      id: string;
      title: string;
      slug: string;
      tag: string;
      color: string;
      duration: string;
      lesson_count: number;
      tier: string;
    };
  }>;
  completedLessons: string[];
  streak: number;
  userName: string;
}

export function DashboardClient({
  enrollments,
  completedLessons,
  streak,
  userName,
}: DashboardClientProps) {
  const hasEnrollments = enrollments.length > 0;

  // Calculate progress per course (simplified — in production you'd join lesson IDs per course)
  const enrolledCourses = enrollments.map((e) => ({
    ...e.courses,
    progress: Math.min(
      100,
      Math.round((completedLessons.length / Math.max(e.courses.lesson_count, 1)) * 100)
    ),
  }));

  const currentCourse = enrolledCourses.find(
    (c) => c.progress > 0 && c.progress < 100
  );

  // Recommended courses (not enrolled)
  const enrolledSlugs = new Set(enrollments.map((e) => e.courses.slug));
  const recommended = COURSES.filter((c) => !enrolledSlugs.has(c.slug)).slice(0, 3);

  return (
    <div className="max-w-[840px] mx-auto px-6 py-10">
      <div className="mb-10">
        <h1 className="heading text-[28px] mb-1">Welcome back{userName ? `, ${userName.split(" ")[0]}` : ""}</h1>
        <p className="text-text-muted text-[15px]">
          {hasEnrollments ? "Pick up where you left off." : "Start your first course today."}
        </p>
      </div>

      {/* Current course */}
      {currentCourse && (
        <div
          className="rounded-card p-7 mb-7 animate-fade-in"
          style={{
            background: "linear-gradient(135deg, rgba(129,140,248,0.07), rgba(129,140,248,0.02))",
            border: "1px solid rgba(129,140,248,0.15)",
          }}
        >
          <div className="flex justify-between items-start flex-wrap gap-4">
            <div className="flex-1">
              {currentCourse.tag && <Tag label={currentCourse.tag} color={currentCourse.color} />}
              <h2 className="text-[21px] font-bold font-display tracking-[-0.02em] mt-3 mb-1.5">
                {currentCourse.title}
              </h2>
              <p className="text-text-muted text-sm">
                {currentCourse.progress}% complete · {currentCourse.duration}
              </p>
            </div>
            <ProgressRing pct={currentCourse.progress} size={56} strokeWidth={4} />
          </div>
          <Link href={`/learn/${currentCourse.id}`}>
            <Button className="mt-5" size="sm">Continue Learning →</Button>
          </Link>
        </div>
      )}

      {/* Enrolled courses */}
      {hasEnrollments && (
        <>
          <h3 className="text-base font-bold font-display mb-4">Your Courses</h3>
          <div className="flex flex-col gap-2.5 mb-7">
            {enrolledCourses.map((course) => (
              <Link key={course.id} href={`/learn/${course.id}`} className="no-underline">
                <div className="glow-card flex items-center justify-between py-4 px-5">
                  <div className="flex items-center gap-4">
                    <ProgressRing pct={course.progress} size={38} strokeWidth={2.5} />
                    <div>
                      <div className="text-[15px] font-semibold text-text">{course.title}</div>
                      <div
                        className="text-xs mt-0.5"
                        style={{
                          color:
                            course.progress === 100
                              ? "#34d399"
                              : course.progress > 0
                              ? "#fbbf24"
                              : "#404050",
                        }}
                      >
                        {course.progress === 100
                          ? "Completed"
                          : course.progress > 0
                          ? `${course.progress}% complete`
                          : "Not started"}{" "}
                        · {course.duration}
                      </div>
                    </div>
                  </div>
                  <span className="text-text-muted text-lg">→</span>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}

      {/* Streak */}
      {streak > 0 && (
        <div className="glow-card flex items-center gap-4 mb-7">
          <div className="text-4xl">🔥</div>
          <div>
            <div className="text-lg font-bold font-display">{streak}-day streak</div>
            <div className="text-[13px] text-text-muted">
              You&apos;ve been building every day. Keep it up.
            </div>
          </div>
        </div>
      )}

      {/* Empty state */}
      {!hasEnrollments && (
        <div className="text-center py-16">
          <div className="text-6xl mb-6">🚀</div>
          <h2 className="text-xl font-bold font-display mb-3">Start your journey</h2>
          <p className="text-text-muted text-sm max-w-[400px] mx-auto mb-6">
            Browse our courses and start building real projects with AI today.
          </p>
          <Link href="/courses">
            <Button size="md">Browse Courses →</Button>
          </Link>
        </div>
      )}

      {/* Recommended */}
      {recommended.length > 0 && (
        <>
          <h3 className="text-base font-bold font-display mt-10 mb-4">Recommended Next</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {recommended.map((course) => (
              <Link key={course.slug} href={`/courses/${course.slug}`} className="no-underline">
                <GlowCard className="p-5">
                  {course.tag && <Tag label={course.tag} color={course.color} />}
                  <h4 className="text-[15px] font-bold font-display mt-3 mb-1.5 tracking-[-0.01em] text-text">
                    {course.title}
                  </h4>
                  <p className="text-[13px] text-text-muted leading-relaxed">{course.description}</p>
                  <div className="mt-3.5 text-lg font-extrabold font-display">
                    ${(course.price / 100).toFixed(0)}
                  </div>
                </GlowCard>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
