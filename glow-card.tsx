"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { label: "Courses", href: "/courses" },
  { label: "Pricing", href: "/pricing" },
  { label: "Community", href: "#community" },
  { label: "Blog", href: "/blog" },
];

export function MarketingNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] h-16 flex items-center justify-center transition-all duration-400 ease-smooth ${
        scrolled
          ? "bg-[rgba(8,8,10,0.88)] backdrop-blur-[24px] backdrop-saturate-[180%] border-b border-border"
          : ""
      }`}
    >
      <div className="max-w-[1200px] w-full px-6 flex items-center justify-between">
        <Logo />
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-text-muted no-underline text-[13.5px] font-medium py-1.5 px-3.5 rounded-lg transition-all duration-200 hover:text-text hover:bg-surface"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex gap-2 items-center">
          <Link
            href="/login"
            className="hidden md:block text-text-muted no-underline text-[13.5px] font-medium py-1.5 px-3.5 rounded-lg transition-all duration-200 hover:text-text hover:bg-surface"
          >
            Log in
          </Link>
          <Link href="/signup">
            <Button size="sm" className="rounded-[9px]">Start Free</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
