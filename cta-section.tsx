import Link from "next/link";
import { Logo } from "@/components/ui/logo";

const FOOTER_SECTIONS = [
  {
    title: "Courses",
    links: [
      { label: "Foundations", href: "/courses?tier=foundations" },
      { label: "Websites", href: "/courses?tier=websites" },
      { label: "Apps", href: "/courses?tier=apps" },
      { label: "Automation", href: "/courses?tier=automation" },
      { label: "Advanced", href: "/courses?tier=advanced" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Discord", href: "#" },
      { label: "Blog", href: "/blog" },
      { label: "Newsletter", href: "#" },
      { label: "YouTube", href: "#" },
      { label: "Twitter", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Pricing", href: "/pricing" },
      { label: "Affiliates", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Privacy", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border pt-14 pb-9">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-[1.5fr_repeat(3,1fr)] gap-12 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-3.5">
              <Logo size="small" />
            </div>
            <p className="text-sm text-text-faint leading-relaxed max-w-[240px]">
              Learn to build anything with AI. Ship real products, not tutorials.
            </p>
          </div>
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h4 className="text-xs font-semibold text-text-muted uppercase tracking-[0.1em] mb-4">
                {section.title}
              </h4>
              <div className="flex flex-col gap-2.5">
                {section.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm text-text-faint no-underline transition-colors duration-200 hover:text-text-secondary"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-border pt-6 flex justify-between flex-wrap gap-4">
          <p className="text-[13px] text-text-faint">&copy; 2026 BuilderOS. All rights reserved.</p>
          <p className="text-[13px] text-text-faint">Built with Claude, obviously.</p>
        </div>
      </div>
    </footer>
  );
}
