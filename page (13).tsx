import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";
import { DashboardClient } from "./dashboard-client";

export const metadata: Metadata = { title: "Dashboard" };

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return null;

  // Fetch enrollments with course info
  const { data: enrollments } = await supabase
    .from("enrollments")
    .select("*, courses(*)")
    .eq("user_id", user.id);

  // Fetch progress
  const { data: progress } = await supabase
    .from("progress")
    .select("lesson_id")
    .eq("user_id", user.id);

  const { data: profile } = await supabase
    .from("profiles")
    .select("streak_count")
    .eq("id", user.id)
    .single();

  return (
    <DashboardClient
      enrollments={enrollments || []}
      completedLessons={progress?.map((p) => p.lesson_id) || []}
      streak={profile?.streak_count || 0}
      userName={user.user_metadata?.full_name || "Builder"}
    />
  );
}
