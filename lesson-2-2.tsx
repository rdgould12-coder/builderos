"use client";

import { type ReactNode } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

interface ShellProps {
  user: {
    id: string;
    email: string;
    name: string;
    avatar: string | null;
    streak: number;
  };
  children: ReactNode;
}

const NAV_ITEMS = [
  { id: "dashboard", label: "Dashboard", href: "/dashboard", icon: "◻" },
  { id: "courses", label: "Courses", href: "/courses", icon: "▦" },
  { id: "settings", label: "Settings", href: "/settings", icon: "⚙" },
];

export function DashboardShell({ user, children }: ShellProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
  };

  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="h-16 flex items-center justify-between px-6 border-b border-border bg-[rgba(8,8,10,0.95)] backdrop-blur-[20px] sticky top-0 z-50">
        <div className="flex items-center gap-5">
          <Link href="/dashboard" className="flex items-center gap-2 no-underline">
            <div
              className="w-7 h-7 rounded-[7px] flex items-center justify-center font-display font-black text-white text-[13px]"
              style={{
                background: "linear-gradient(135deg, #6366f1, #8b5cf6, #a78bfa)",
                boxShadow: "0 2px 10px rgba(99,102,241,0.3)",
              }}
            >
              B
            </div>
            <span className="text-base font-display font-extrabold tracking-[-0.04em] text-text">
              BuilderOS
            </span>
          </Link>

          <div className="flex gap-0.5">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`px-3.5 py-1.5 rounded-lg text-[13px] font-medium no-underline transition-all duration-150 flex items-center gap-1.5 ${
                  pathname.startsWith(item.href)
                    ? "bg-surface-hover text-text"
                    : "text-text-muted hover:text-text-secondary"
                }`}
              >
                <span className="text-[11px]">{item.icon}</span> {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3.5">
          {user.streak > 0 && (
            <span className="text-[13px] text-text-muted">🔥 {user.streak}</span>
          )}
          <button
            onClick={handleLogout}
            className="text-text-faint text-xs hover:text-text-muted transition-colors bg-transparent border-0 cursor-pointer font-body"
          >
            Log out
          </button>
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold cursor-pointer text-white"
            style={{ background: "linear-gradient(135deg, #818cf8, #a78bfa)" }}
          >
            {initials}
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="animate-fade-in">{children}</div>
    </div>
  );
}
