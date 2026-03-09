import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { PlayerClient } from "@/components/player/player-client";

export const metadata: Metadata = { title: "Course Player" };

type Props = { params: Promise<{ id: string }> };

export default async function CoursePlayerPage({ params }: Props) {
  const { id: courseId } = await params;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  // Fetch course
  const { data: course } = await supabase
    .from("courses")
    .select("*")
    .eq("id", courseId)
    .single();

  if (!course) notFound();

  // Check enrollment
  const { data: enrollment } = await supabase
    .from("enrollments")
    .select("id")
    .eq("user_id", user.id)
    .eq("course_id", courseId)
    .single();

  if (!enrollment) redirect(`/courses/${course.slug}`);

  // Fetch modules with lessons
  const { data: modules } = await supabase
    .from("modules")
    .select("*, lessons(*)")
    .eq("course_id", courseId)
    .order("sort_order")
    .order("sort_order", { referencedTable: "lessons" });

  // Fetch user progress
  const { data: progress } = await supabase
    .from("progress")
    .select("lesson_id")
    .eq("user_id", user.id);

  const completedIds = new Set(progress?.map((p) => p.lesson_id) || []);

  return (
    <PlayerClient
      course={course}
      modules={(modules || []).map((m) => ({
        ...m,
        lessons: (m.lessons || []).map((l: { id: string }) => ({
          ...l,
          completed: completedIds.has(l.id),
        })),
      }))}
      userId={user.id}
    />
  );
}
