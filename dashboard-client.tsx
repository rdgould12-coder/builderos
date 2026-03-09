import type { Course } from "@/types";

type CourseData = Omit<Course, "id" | "created_at" | "is_published" | "long_description">;

export const COURSES: CourseData[] = [
  { slug: "ai-builder-fundamentals", title: "AI Builder Fundamentals", tier: "foundations", tag: "Beginner", price: 9900, duration: "3-4 hrs", module_count: 6, lesson_count: 18, color: "#818cf8", description: "Build your first 3 apps with Claude. Zero experience needed.", project_outcome: "3 deployed micro-apps", sort_order: 1 },
  { slug: "prompt-engineering-for-builders", title: "Prompt Engineering for Builders", tier: "foundations", tag: "Beginner", price: 9900, duration: "2-3 hrs", module_count: 5, lesson_count: 18, color: "#818cf8", description: "The 7 prompting patterns that ship products.", project_outcome: "Chrome extension + prompt library", sort_order: 2 },
  { slug: "ai-builder-toolkit", title: "The AI Builder Toolkit", tier: "foundations", tag: "Setup", price: 4900, duration: "1.5-2 hrs", module_count: 4, lesson_count: 12, color: "#818cf8", description: "Set up your complete dev environment in 60 minutes.", project_outcome: "Configured dev environment + deployed starter app", sort_order: 3 },
  { slug: "ai-website-builder", title: "AI Website Builder", tier: "websites", tag: "Intermediate", price: 14900, duration: "5-6 hrs", module_count: 8, lesson_count: 28, color: "#22d3ee", description: "Design, code, and deploy professional websites with AI.", project_outcome: "Complete deployed business website", sort_order: 4 },
  { slug: "landing-page-engineering", title: "Landing Page Engineering", tier: "websites", tag: "Intermediate", price: 14900, duration: "4-5 hrs", module_count: 6, lesson_count: 18, color: "#22d3ee", description: "5 high-converting landing pages. Built and deployed.", project_outcome: "5 live landing pages with analytics", sort_order: 5 },
  { slug: "seo-content-sites", title: "SEO Content Sites with AI", tier: "websites", tag: "Intermediate", price: 19900, duration: "5-6 hrs", module_count: 7, lesson_count: 22, color: "#22d3ee", description: "Build content-driven websites that generate organic traffic.", project_outcome: "Deployed content site with 10+ pages", sort_order: 6 },
  { slug: "ai-app-builder", title: "AI App Builder", tier: "apps", tag: "Flagship", price: 29900, duration: "8-10 hrs", module_count: 12, lesson_count: 40, color: "#fbbf24", description: "Idea to deployed SaaS with auth, payments, and email.", project_outcome: "Complete deployed SaaS application", sort_order: 7 },
  { slug: "fullstack-ai-development", title: "Fullstack AI Development", tier: "apps", tag: "Advanced", price: 24900, duration: "8-10 hrs", module_count: 10, lesson_count: 30, color: "#fbbf24", description: "Production-grade architecture, testing, and CI/CD.", project_outcome: "Production app with testing and CI/CD", sort_order: 8 },
  { slug: "mobile-app-creation", title: "Mobile App Creation with AI", tier: "apps", tag: "Intermediate", price: 24900, duration: "8-10 hrs", module_count: 10, lesson_count: 28, color: "#fbbf24", description: "Build and publish cross-platform mobile apps.", project_outcome: "App published on App Store and Google Play", sort_order: 9 },
  { slug: "ai-workflow-automation", title: "AI Workflow Automation", tier: "automation", tag: "Intermediate", price: 19900, duration: "5-6 hrs", module_count: 7, lesson_count: 20, color: "#f59e0b", description: "Automate your business with AI agents and workflows.", project_outcome: "5 deployed automation workflows", sort_order: 10 },
  { slug: "building-ai-agents", title: "Building AI Agents & Tools", tier: "automation", tag: "Advanced", price: 24900, duration: "6-8 hrs", module_count: 8, lesson_count: 22, color: "#f59e0b", description: "Build custom AI agents that do real work.", project_outcome: "3 deployed production AI agents", sort_order: 11 },
  { slug: "ai-powered-apis", title: "AI-Powered APIs & Microservices", tier: "automation", tag: "Advanced", price: 19900, duration: "5-6 hrs", module_count: 7, lesson_count: 19, color: "#f59e0b", description: "Build and monetize API products with AI.", project_outcome: "Deployed, documented, monetized API", sort_order: 12 },
  { slug: "ship-saas-7-days", title: "Ship a SaaS in 7 Days", tier: "advanced", tag: "Sprint", price: 29900, duration: "7 days", module_count: 7, lesson_count: 7, color: "#f87171", description: "The sprint. Idea to revenue in one week.", project_outcome: "Launched SaaS with first users", sort_order: 13 },
  { slug: "ai-startup-playbook", title: "AI Startup Playbook", tier: "advanced", tag: "Business", price: 19900, duration: "4-5 hrs", module_count: 8, lesson_count: 16, color: "#f87171", description: "The business course for AI builders.", project_outcome: "Complete go-to-market plan", sort_order: 14 },
  { slug: "claude-code-mastery", title: "Claude Code Mastery", tier: "advanced", tag: "Expert", price: 24900, duration: "6-8 hrs", module_count: 8, lesson_count: 20, color: "#f87171", description: "Hooks, sub-agents, MCP, and advanced workflows.", project_outcome: "Custom Claude Code workflow with hooks and sub-agents", sort_order: 15 },
];

export const TESTIMONIALS = [
  { name: "Sarah K.", role: "Designer → Developer", text: "Zero coding knowledge to 3 deployed client sites in my first month. This changed everything.", avatar: "S", gradient: ["#818cf8", "#6366f1"] },
  { name: "Marcus J.", role: "Indie Hacker", text: "Shipped my SaaS in 9 days. Already at $1,200 MRR. The 7-Day Sprint is a masterpiece.", avatar: "M", gradient: ["#22d3ee", "#06b6d4"] },
  { name: "Priya T.", role: "Product Manager", text: "Being able to prototype and ship gives me an unfair advantage over every other PM.", avatar: "P", gradient: ["#fbbf24", "#f59e0b"] },
  { name: "Alex R.", role: "Startup Founder", text: "Saved $40K in dev costs building our MVP myself. ROI is absurd.", avatar: "A", gradient: ["#f87171", "#ef4444"] },
  { name: "Jordan L.", role: "Freelancer", text: "Went from $3K to $12K months by adding AI-built websites to my services.", avatar: "J", gradient: ["#a78bfa", "#8b5cf6"] },
  { name: "Mei W.", role: "Career Switcher", text: "Left my accounting job 4 months ago. Now I ship products full-time.", avatar: "W", gradient: ["#34d399", "#10b981"] },
];

export const LOGO_COMPANIES = [
  "Google", "Shopify", "Stripe", "Vercel", "Notion", "Linear", "Meta", "Coinbase",
];
