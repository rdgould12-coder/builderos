import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { DashboardShell } from "@/components/dashboard/shell";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  // Fetch profile
  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  return (
    <DashboardShell
      user={{
        id: user.id,
        email: user.email || "",
        name: profile?.full_name || user.user_metadata?.full_name || "Builder",
        avatar: profile?.avatar_url || null,
        streak: profile?.streak_count || 0,
      }}
    >
      {children}
    </DashboardShell>
  );
}
