import { LOGO_COMPANIES } from "@/data/courses";

export function LogoMarquee() {
  return (
    <section className="border-t border-b border-border py-5 overflow-hidden">
      <div className="flex animate-marquee w-max">
        {[0, 1].map((i) => (
          <div key={i} className="flex items-center gap-13 pr-13">
            <span className="text-xs text-text-faint font-medium whitespace-nowrap">
              Students from
            </span>
            {LOGO_COMPANIES.map((company) => (
              <span
                key={company}
                className="text-sm font-bold tracking-[-0.02em] text-text-faint whitespace-nowrap font-display"
              >
                {company}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
