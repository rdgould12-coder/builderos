import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";
import { SettingsClient } from "./settings-client";

export const metadata: Metadata = { title: "Settings" };

export default async function SettingsPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  return (
    <SettingsClient
      email={user.email || ""}
      profile={profile}
    />
  );
}
