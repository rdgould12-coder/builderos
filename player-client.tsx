export interface Profile {
  id: string;
  full_name: string | null;
  avatar_url: string | null;
  stripe_customer_id: string | null;
  subscription_status: "free" | "pro" | "lifetime";
  subscription_id: string | null;
  streak_count: number;
  streak_last_date: string | null;
  created_at: string;
  updated_at: string;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  long_description: string | null;
  tier: "foundations" | "websites" | "apps" | "automation" | "advanced";
  tag: string | null;
  color: string;
  price: number;
  duration: string | null;
  module_count: number;
  lesson_count: number;
  project_outcome: string | null;
  is_published: boolean;
  sort_order: number;
  created_at: string;
}

export interface Module {
  id: string;
  course_id: string;
  title: string;
  description: string | null;
  duration: string | null;
  sort_order: number;
}

export interface Lesson {
  id: string;
  module_id: string;
  title: string;
  description: string | null;
  video_url: string | null;
  audio_url: string | null;
  content: string | null;
  lesson_type: "slides" | "video" | "audio";
  duration: string | null;
  sort_order: number;
  is_free: boolean;
}

// Slide deck data types
export interface SlideData {
  id: string;
  badge: string;
  title: string;
  subtitle?: string;
}

export interface CaptionEntry {
  start: number;
  end: number;
  text: string;
}

export interface LessonSlideConfig {
  slides: SlideData[];
  timestamps: number[];
  captions: CaptionEntry[];
  audioFile: string; // filename in Supabase storage
}

export interface Enrollment {
  id: string;
  user_id: string;
  course_id: string;
  enrolled_at: string;
}

export interface Progress {
  id: string;
  user_id: string;
  lesson_id: string;
  completed_at: string;
}

export interface Payment {
  id: string;
  user_id: string;
  stripe_payment_intent_id: string | null;
  stripe_checkout_session_id: string | null;
  amount: number;
  currency: string;
  status: "succeeded" | "pending" | "failed";
  product_type: "course" | "bundle" | "membership";
  product_id: string | null;
  created_at: string;
}

// Extended types for UI
export interface CourseWithProgress extends Course {
  enrollment?: Enrollment;
  completed_lessons: number;
  total_lessons: number;
  progress_pct: number;
}

export interface ModuleWithLessons extends Module {
  lessons: LessonWithProgress[];
}

export interface LessonWithProgress extends Lesson {
  completed: boolean;
}

// Pricing
export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
  stripe_price_id?: string;
}

export const TIERS = ["foundations", "websites", "apps", "automation", "advanced"] as const;
export type Tier = (typeof TIERS)[number];

export const TIER_COLORS: Record<Tier, string> = {
  foundations: "#818cf8",
  websites: "#22d3ee",
  apps: "#fbbf24",
  automation: "#f59e0b",
  advanced: "#f87171",
};

export const TIER_LABELS: Record<Tier, string> = {
  foundations: "Foundations",
  websites: "Websites",
  apps: "Apps",
  automation: "Automation",
  advanced: "Advanced",
};
