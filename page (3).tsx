import type { LessonSlideConfig } from "@/types";

/**
 * Slide configurations for all slide-type lessons.
 * Keyed by lesson ID from Supabase.
 *
 * Each config contains:
 * - slides: visual slide data (id, badge, title, subtitle)
 * - timestamps: seconds where each slide auto-advances during audio
 * - captions: { start, end, text } entries for CC subtitles + transcript
 * - audioFile: filename in Supabase Storage "audio" bucket
 */

// ─── LESSON 1.1: What AI Building Actually Is ────────────
const LESSON_1_1: LessonSlideConfig = {
  audioFile: "audio-1-1.mp3",
  slides: [
    { id: "title", badge: "MODULE 1 · LESSON 1", title: "What AI Building\nActually Is", subtitle: "From zero to your first webpage in 30 minutes." },
    { id: "old-vs-new", badge: "THE SHIFT", title: "A new kind of building" },
    { id: "loop", badge: "THE CORE LOOP", title: "Five steps. Repeat forever." },
    { id: "projects", badge: "WHAT YOU'LL BUILD", title: "3 real apps. Deployed." },
    { id: "tools", badge: "YOUR TOOLKIT", title: "Everything you need (all free)" },
    { id: "end", badge: "LET'S GO", title: "Ready to build?", subtitle: "Next lesson: Setting up your workspace →" },
  ],
  timestamps: [0, 16, 30, 51, 64, 75],
  captions: [
    { start: 0, end: 5, text: "Welcome to AI Builder Fundamentals." },
    { start: 5, end: 10, text: "By the end of this first module, you will have built your first web page using AI." },
    { start: 10, end: 16, text: "Not in a week. Not after learning a bunch of theory. Today." },
    { start: 16, end: 21, text: "Here's what AI building actually is. It's not traditional programming." },
    { start: 21, end: 26, text: "You're not going to memorize syntax or spend months on fundamentals." },
    { start: 26, end: 30, text: "Instead, you're going to learn a loop." },
    { start: 30, end: 36, text: "Describe, Generate, Review, Refine, Ship. That's it." },
    { start: 36, end: 42, text: "You describe what you want in plain English. The AI generates code." },
    { start: 42, end: 46, text: "You look at the result. You tell it what to fix." },
    { start: 46, end: 51, text: "And then you put it on the internet." },
    { start: 51, end: 57, text: "In this course, you'll build three real apps and deploy all of them." },
    { start: 57, end: 64, text: "A personal link-in-bio site, an interactive quiz, and an expense tracker." },
    { start: 64, end: 70, text: "Not tutorials you throw away. Real things at real URLs." },
    { start: 70, end: 75, text: "Let's get your tools set up. Everything you need is free." },
    { start: 75, end: 81, text: "That's the next lesson. Let's go." },
  ],
};

// ─── LESSON 2.1: How to Think in Prompts ─────────────────
const LESSON_2_1: LessonSlideConfig = {
  audioFile: "audio-2-1.mp3",
  slides: [
    { id: "title", badge: "MODULE 2 · LESSON 1", title: "How to Think\nin Prompts", subtitle: "The SPEC framework that turns vague ideas into perfect output." },
    { id: "bad-good", badge: "THE PROBLEM", title: "Why most prompts fail" },
    { id: "spec", badge: "THE FRAMEWORK", title: "SPEC — your prompting system" },
    { id: "spec-example", badge: "SPEC IN ACTION", title: "Applied to your link-in-bio" },
    { id: "layers", badge: "BUILD IN LAYERS", title: "One prompt per job" },
    { id: "library", badge: "PRO TIP", title: "Save everything. Reuse forever." },
    { id: "end", badge: "YOUR TURN", title: "Write your first SPEC", subtitle: "Next lesson: The feedback loop — Prompt → Review → Refine →" },
  ],
  timestamps: [0, 12, 30, 65, 105, 140, 165],
  captions: [
    { start: 0, end: 4, text: "So far you've been writing prompts by feel." },
    { start: 4, end: 8, text: "That works for simple stuff," },
    { start: 8, end: 12, text: "but to build real apps you need a system." },
    { start: 12, end: 16, text: "I use a framework called SPEC." },
    { start: 16, end: 21, text: "S is Structure — what are the pieces of what you're building?" },
    { start: 21, end: 25, text: "P is Purpose — what does each piece do?" },
    { start: 25, end: 30, text: "E is Example — what should it look like? Reference something real." },
    { start: 30, end: 34, text: "C is Constraints — what are the technical limits?" },
    { start: 34, end: 38, text: "Let me show you how this works." },
    { start: 38, end: 44, text: "For our next project, a link-in-bio page, the SPEC looks like this:" },
    { start: 44, end: 50, text: "Structure is a profile section, link list, and footer." },
    { start: 50, end: 56, text: "Purpose is giving someone a single URL with all your important links." },
    { start: 56, end: 62, text: "Example is \"like Linktree but with a dark theme.\"" },
    { start: 62, end: 68, text: "Constraints are single HTML file, mobile-first, no external dependencies." },
    { start: 68, end: 74, text: "Instead of one giant prompt, I break the build into layers." },
    { start: 74, end: 79, text: "First prompt: just the layout with placeholders." },
    { start: 79, end: 83, text: "Second: swap in my real content." },
    { start: 83, end: 87, text: "Third: make it look good." },
    { start: 87, end: 91, text: "Each prompt builds on the last." },
    { start: 91, end: 97, text: "Watch how much better this is than trying to do everything at once." },
    { start: 97, end: 104, text: "The AI stays focused because each prompt has a single clear job." },
    { start: 104, end: 112, text: "Pro tip: save your best prompts in a file called prompts.md in each project folder." },
    { start: 112, end: 120, text: "By the end of this course you'll have a library of patterns you can reuse for anything you build." },
  ],
};

// ─── LESSON 2.2: The Feedback Loop ───────────────────────
const LESSON_2_2: LessonSlideConfig = {
  audioFile: "audio-2-2.mp3",
  slides: [
    { id: "title", badge: "MODULE 2 · LESSON 2", title: "The Feedback Loop", subtitle: "Prompt → Review → Refine. The system that turns AI output into professional quality." },
    { id: "problem", badge: "THE TRAP", title: "Don't accept \"pretty good\"" },
    { id: "checklist", badge: "THE 7-POINT CHECK", title: "60 seconds. Catches 90% of issues." },
    { id: "surgical", badge: "SURGICAL REFINEMENT", title: "Vague vs. precise fixes" },
    { id: "rounds", badge: "THE 3-ROUND SYSTEM", title: "Structure → Visual → Interactions" },
    { id: "end", badge: "YOUR TURN", title: "Review like a pro", subtitle: "Next lesson: Build #1 — Your link-in-bio goes live →" },
  ],
  timestamps: [0, 14, 32, 60, 86, 110],
  captions: [
    { start: 0, end: 5, text: "Most beginners accept the first thing AI gives them." },
    { start: 5, end: 10, text: "It looks pretty good, so they move on." },
    { start: 10, end: 14, text: "That's the trap. Pretty good isn't good enough." },
    { start: 14, end: 20, text: "The feedback loop is what separates amateurs from pros." },
    { start: 20, end: 26, text: "I have a 7-point checklist I run on every single output." },
    { start: 26, end: 32, text: "It takes 60 seconds and catches about 90% of issues." },
    { start: 32, end: 38, text: "Does the layout match what I described?" },
    { start: 38, end: 43, text: "Is the content real — no Lorem ipsum, no placeholders?" },
    { start: 43, end: 48, text: "Does it work on mobile?" },
    { start: 48, end: 53, text: "Are the colors and spacing consistent?" },
    { start: 53, end: 60, text: "Do all links and buttons actually work? Every single one." },
    { start: 60, end: 68, text: "When you find something wrong, be surgical. Don't say 'make it better.'" },
    { start: 68, end: 75, text: "Say exactly what to change: 'Make the heading 48px and left-aligned.'" },
    { start: 75, end: 82, text: "The more specific your refinement, the better the result." },
    { start: 82, end: 86, text: "I do this in three rounds." },
    { start: 86, end: 92, text: "Round one: structure and layout. Get the bones right." },
    { start: 92, end: 98, text: "Round two: visual polish. Colors, fonts, spacing." },
    { start: 98, end: 104, text: "Round three: interactions. Hover states, animations, edge cases." },
    { start: 104, end: 110, text: "Three rounds. That's all it takes." },
    { start: 110, end: 116, text: "Now it's your turn. Review something you've built with the checklist." },
  ],
};

// ─── LESSON 3.1: Reading Code Without Knowing Code ───────
const LESSON_3_1: LessonSlideConfig = {
  audioFile: "audio-3-1.mp3",
  slides: [
    { id: "title", badge: "MODULE 3 · LESSON 1", title: "Reading Code\nWithout Knowing Code", subtitle: "The 20% of code knowledge that handles 80% of situations." },
    { id: "layers", badge: "THREE LAYERS", title: "Every webpage has three parts" },
    { id: "html", badge: "LAYER 1 — HTML", title: "The skeleton" },
    { id: "css", badge: "LAYER 2 — CSS", title: "The skin" },
    { id: "js", badge: "LAYER 3 — JAVASCRIPT", title: "The brain" },
    { id: "find", badge: "THE REAL SKILL", title: "Find it. Change it. Done." },
    { id: "end", badge: "YOUR TURN", title: "Read before you prompt", subtitle: "Next lesson: HTML & CSS — the 20% that matters →" },
  ],
  timestamps: [0, 14, 28, 46, 62, 78, 96],
  captions: [
    { start: 0, end: 5, text: "You don't need to know how to write code to be an AI builder." },
    { start: 5, end: 10, text: "But you do need to know how to read it." },
    { start: 10, end: 14, text: "Not all of it. Just enough to steer." },
    { start: 14, end: 20, text: "Every webpage has three layers." },
    { start: 20, end: 24, text: "HTML is the skeleton — the structure of what's on the page." },
    { start: 24, end: 28, text: "CSS is the skin — how it looks." },
    { start: 28, end: 33, text: "JavaScript is the brain — what it does." },
    { start: 33, end: 38, text: "HTML uses tags like div, h1, p, button." },
    { start: 38, end: 42, text: "It's like labeling boxes in a warehouse." },
    { start: 42, end: 46, text: "You don't need to memorize them all — just spot the patterns." },
    { start: 46, end: 52, text: "CSS controls colors, sizes, spacing, fonts." },
    { start: 52, end: 56, text: "It's the property-value pairs like color: white." },
    { start: 56, end: 62, text: "When you want to change how something looks, CSS is where you go." },
    { start: 62, end: 68, text: "JavaScript makes things interactive — clicks, animations, data." },
    { start: 68, end: 74, text: "You'll rarely edit JS directly. You'll just describe what you want." },
    { start: 74, end: 78, text: "The real skill is find-and-change." },
    { start: 78, end: 84, text: "Use Ctrl+F to search for text you see on screen." },
    { start: 84, end: 90, text: "Change one value. Save. See the result." },
    { start: 90, end: 96, text: "That's it. You can now read code well enough to build with AI." },
    { start: 96, end: 102, text: "Next up — the specific HTML tags and CSS properties you'll use the most." },
  ],
};

// ─── LESSON 3.2: HTML & CSS — The 20% That Matters ──────
const LESSON_3_2: LessonSlideConfig = {
  audioFile: "audio-3-2.mp3",
  slides: [
    { id: "title", badge: "MODULE 3 · LESSON 2", title: "HTML & CSS:\nThe 20% That Matters", subtitle: "10 tags. 10 properties. 5 flexbox rules. That's it." },
    { id: "tags", badge: "HTML CHEAT SHEET", title: "10 tags you'll see everywhere" },
    { id: "css", badge: "CSS CHEAT SHEET", title: "10 properties you'll actually edit" },
    { id: "flex", badge: "FLEXBOX", title: "5 lines that control every layout" },
    { id: "superpower", badge: "THE PAYOFF", title: "Better vocabulary = better prompts" },
    { id: "end", badge: "YOUR TURN", title: "Open your code. Find 5 things.", subtitle: "Next lesson: When AI gets it wrong — debugging basics →" },
  ],
  timestamps: [0, 14, 36, 60, 80, 94],
  captions: [
    { start: 0, end: 5, text: "You don't need to learn all of HTML and CSS." },
    { start: 5, end: 9, text: "Just the 20% you'll actually encounter." },
    { start: 9, end: 14, text: "Here are the 10 HTML tags that appear everywhere." },
    { start: 14, end: 19, text: "Div wraps groups of elements. It's the most common tag." },
    { start: 19, end: 24, text: "H1 through H6 are headings. P is a paragraph." },
    { start: 24, end: 29, text: "A is a link. Button is a button. Img is an image." },
    { start: 29, end: 34, text: "Span wraps inline text. Input is for forms." },
    { start: 34, end: 36, text: "That's it. Ten tags." },
    { start: 36, end: 42, text: "Now the 10 CSS properties you'll actually edit." },
    { start: 42, end: 48, text: "Color, background, font-size, padding, margin." },
    { start: 48, end: 54, text: "Border, border-radius, display, width, and height." },
    { start: 54, end: 60, text: "These handle about 80% of the styling you'll ever need to tweak." },
    { start: 60, end: 66, text: "The secret weapon is flexbox. It controls layouts." },
    { start: 66, end: 72, text: "Display flex. Flex-direction. Justify-content. Align-items. Gap." },
    { start: 72, end: 78, text: "Five properties that handle every layout pattern." },
    { start: 78, end: 84, text: "The payoff is that knowing these terms makes your prompts way better." },
    { start: 84, end: 90, text: "Instead of 'put things next to each other,' you say 'use flexbox with gap 16 pixels.'" },
    { start: 90, end: 94, text: "Better vocabulary equals better AI output." },
    { start: 94, end: 98, text: "Your turn: open your code and find five of these in action." },
  ],
};

// ─── LESSON 5.1: What Full Stack Actually Means ─────────
const LESSON_5_1: LessonSlideConfig = {
  audioFile: "audio-5-1.mp3",
  slides: [
    { id: "title", badge: "MODULE 5 · LESSON 1", title: "What \"Full Stack\"\nActually Means", subtitle: "It sounds scary. It's not. Let me show you." },
    { id: "demystify", badge: "THE TRUTH", title: "It just means: front-end + data" },
    { id: "architecture", badge: "THE ARCHITECTURE", title: "Three layers. That's it." },
    { id: "localstorage", badge: "YOUR DATABASE", title: "localStorage — built into every browser" },
    { id: "build", badge: "WHAT WE'RE BUILDING", title: "Expense tracker — your most complex app" },
    { id: "end", badge: "LET'S BUILD", title: "Spec first. Then Claude.", subtitle: "Next lesson: Build #3 — the expense tracker →" },
  ],
  timestamps: [0, 15, 34, 56, 82, 104],
  captions: [
    { start: 0, end: 5, text: "Full stack. It sounds intimidating." },
    { start: 5, end: 10, text: "Like you need a computer science degree and five years of experience." },
    { start: 10, end: 15, text: "Here's the truth: it just means front-end plus data." },
    { start: 15, end: 20, text: "Front-end is what users see and interact with." },
    { start: 20, end: 25, text: "Logic is what happens when they click things." },
    { start: 25, end: 30, text: "Storage is where data lives between sessions." },
    { start: 30, end: 34, text: "Three layers. That's full stack." },
    { start: 34, end: 40, text: "For storage, we're going to use something called localStorage." },
    { start: 40, end: 46, text: "It's built into every browser. No setup. No database." },
    { start: 46, end: 52, text: "You just save a key-value pair and it persists." },
    { start: 52, end: 56, text: "Close the browser, reopen it — your data is still there." },
    { start: 56, end: 62, text: "Our expense tracker will use all three layers." },
    { start: 62, end: 68, text: "A form to add expenses. Logic to calculate totals." },
    { start: 68, end: 74, text: "localStorage to keep everything between visits." },
    { start: 74, end: 82, text: "Plus a chart that visualizes spending by category. This is our most complex build." },
    { start: 82, end: 88, text: "But the approach is the same. Spec first." },
    { start: 88, end: 94, text: "Write out the structure, purpose, examples, and constraints." },
    { start: 94, end: 100, text: "Then prompt Claude one layer at a time." },
    { start: 100, end: 104, text: "Spec first. Then Claude. Let's build." },
    { start: 104, end: 110, text: "Next lesson, we start the expense tracker from scratch." },
  ],
};

// ─── LESSON 5.3: Data Persistence and State ─────────────
const LESSON_5_3: LessonSlideConfig = {
  audioFile: "audio-5-3.mp3",
  slides: [
    { id: "title", badge: "MODULE 5 · LESSON 3", title: "Data Persistence\nand State", subtitle: "The pattern behind every interactive app you'll ever build." },
    { id: "state", badge: "WHAT IS STATE?", title: "State = your app's current data" },
    { id: "loop", badge: "THE UNIVERSAL LOOP", title: "Action → Update → Save → Render" },
    { id: "evolution", badge: "THE PATH FORWARD", title: "Same pattern. Bigger tools." },
    { id: "prompt", badge: "YOUR NEW SUPERPOWER", title: "Describe the data flow" },
    { id: "end", badge: "PATTERN LEARNED", title: "You think like a developer now.", subtitle: "Next module: Deploy everything and build your portfolio →" },
  ],
  timestamps: [0, 16, 36, 68, 96, 120],
  captions: [
    { start: 0, end: 6, text: "You've built an expense tracker with real data persistence." },
    { start: 6, end: 12, text: "Now let's understand the pattern behind what you just built." },
    { start: 12, end: 16, text: "Because this pattern runs every interactive app." },
    { start: 16, end: 22, text: "State is your app's data at any given moment." },
    { start: 22, end: 28, text: "The list of expenses. The total. The selected category." },
    { start: 28, end: 34, text: "When state changes, the screen updates to match." },
    { start: 34, end: 36, text: "That's it. That's the whole concept." },
    { start: 36, end: 42, text: "The universal loop goes: Action, Update, Save, Render." },
    { start: 42, end: 48, text: "User does something — that's the action." },
    { start: 48, end: 54, text: "Your code updates the state — that's update." },
    { start: 54, end: 60, text: "You save it to localStorage — that's save." },
    { start: 60, end: 66, text: "You redraw the screen to match — that's render." },
    { start: 66, end: 68, text: "Four steps. Every time." },
    { start: 68, end: 76, text: "The tools get bigger but the pattern stays the same." },
    { start: 76, end: 82, text: "Instead of localStorage, you'll use Supabase or Firebase." },
    { start: 82, end: 88, text: "Instead of vanilla JS, you'll use React or Next.js." },
    { start: 88, end: 96, text: "But it's always: action, update, save, render." },
    { start: 96, end: 104, text: "Here's the superpower: you can now describe data flow to AI." },
    { start: 104, end: 112, text: "Instead of 'make it save,' you say 'on submit, update state, persist to localStorage, re-render the list.'" },
    { start: 112, end: 120, text: "That's developer thinking. And you've got it now." },
    { start: 120, end: 128, text: "Next module — we deploy everything and build your portfolio." },
  ],
};

// ─── LESSON 6.3: What's Next — Your Path Forward ────────
const LESSON_6_3: LessonSlideConfig = {
  audioFile: "audio-6-3.mp3",
  slides: [
    { id: "title", badge: "MODULE 6 · LESSON 3", title: "What's Next:\nYour Path Forward", subtitle: "You shipped 4 projects. Here's where it goes from here." },
    { id: "recap", badge: "WHAT YOU BUILT", title: "4 projects. All live." },
    { id: "skills", badge: "WHAT YOU LEARNED", title: "Skills unlocked" },
    { id: "paths", badge: "YOUR NEXT COURSE", title: "Three paths. Pick yours." },
    { id: "end", badge: "CONGRATULATIONS", title: "You're a builder now.", subtitle: "Most people never ship anything. You shipped four things. Keep going." },
  ],
  timestamps: [0, 16, 42, 66, 96],
  captions: [
    { start: 0, end: 5, text: "Let's take a second to appreciate what you've done." },
    { start: 5, end: 10, text: "You started this course with zero building experience." },
    { start: 10, end: 16, text: "Now you have four live projects on the internet." },
    { start: 16, end: 22, text: "A link-in-bio page with your real content." },
    { start: 22, end: 28, text: "A quiz app with real-time scoring and multiple screens." },
    { start: 28, end: 34, text: "An expense tracker with persistent data and charts." },
    { start: 34, end: 40, text: "And a portfolio page that ties them all together." },
    { start: 40, end: 42, text: "Those are real things at real URLs." },
    { start: 42, end: 48, text: "You learned the SPEC prompting framework." },
    { start: 48, end: 54, text: "The feedback loop. How to read code. How to debug." },
    { start: 54, end: 60, text: "Data persistence. State management. Deployment." },
    { start: 60, end: 66, text: "You think like a developer now, even if you've never written a line of code from scratch." },
    { start: 66, end: 72, text: "Where you go next depends on what you want to build." },
    { start: 72, end: 78, text: "If you want beautiful websites — take the Website Builder course." },
    { start: 78, end: 84, text: "If you want SaaS apps with users and payments — take Full Stack Apps." },
    { start: 84, end: 90, text: "If you want to automate your workflow — take the Automation course." },
    { start: 90, end: 96, text: "All three paths build on exactly what you learned here." },
    { start: 96, end: 104, text: "Most people never ship anything. You shipped four things. You're a builder now. Keep going." },
  ],
};

// ─── Lookup by lesson ID ─────────────────────────────────
export const LESSON_SLIDE_CONFIGS: Record<string, LessonSlideConfig> = {
  "c1000001-0101-4000-8000-000000000001": LESSON_1_1,
  "c1000001-0201-4000-8000-000000000001": LESSON_2_1,
  "c1000001-0202-4000-8000-000000000001": LESSON_2_2,
  "c1000001-0301-4000-8000-000000000001": LESSON_3_1,
  "c1000001-0302-4000-8000-000000000001": LESSON_3_2,
  "c1000001-0501-4000-8000-000000000001": LESSON_5_1,
  "c1000001-0503-4000-8000-000000000001": LESSON_5_3,
  "c1000001-0603-4000-8000-000000000001": LESSON_6_3,
};

// Also keyed by slide ID prefix for easy lookup
export const LESSON_SLUG_MAP: Record<string, string> = {
  "1-1": "c1000001-0101-4000-8000-000000000001",
  "2-1": "c1000001-0201-4000-8000-000000000001",
  "2-2": "c1000001-0202-4000-8000-000000000001",
  "3-1": "c1000001-0301-4000-8000-000000000001",
  "3-2": "c1000001-0302-4000-8000-000000000001",
  "5-1": "c1000001-0501-4000-8000-000000000001",
  "5-3": "c1000001-0503-4000-8000-000000000001",
  "6-3": "c1000001-0603-4000-8000-000000000001",
};
