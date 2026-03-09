import { Hero } from "@/components/marketing/hero";
import { LogoMarquee } from "@/components/marketing/logo-marquee";
import { Features } from "@/components/marketing/features";
import { CourseShowcase } from "@/components/marketing/course-showcase";
import { PricingSection } from "@/components/marketing/pricing-section";
import { TestimonialsSection } from "@/components/marketing/testimonials";
import { CTASection } from "@/components/marketing/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <Features />
      <CourseShowcase />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
