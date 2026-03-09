@import url("https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&f[]=cabinet-grotesk@700,800,900&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;

/* ─── Base ──────────────────────────────────── */
::selection {
  background: #818cf8;
  color: #fff;
}

body {
  font-family: "Satoshi", -apple-system, BlinkMacSystemFont, sans-serif;
  background: #08080a;
  color: #f0f0f3;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* ─── Noise Overlay ─────────────────────────── */
body::before {
  content: "";
  position: fixed;
  inset: -50%;
  width: 200%;
  height: 200%;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  opacity: 0.022;
  pointer-events: none;
  z-index: 200;
}

/* ─── Scrollbar ─────────────────────────────── */
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 3px;
}

/* ─── Custom Utilities ──────────────────────── */
@layer utilities {
  .font-display {
    font-family: "Cabinet Grotesk", "Satoshi", sans-serif;
  }
  .heading {
    font-family: "Cabinet Grotesk", "Satoshi", sans-serif;
    font-weight: 800;
    letter-spacing: -0.035em;
    line-height: 1.08;
  }
  .text-balance {
    text-wrap: balance;
  }
}

/* ─── Component Layer ───────────────────────── */
@layer components {
  .glow-card {
    @apply bg-surface border border-border rounded-card p-7 transition-all duration-300 overflow-hidden relative;
    transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  }
  .glow-card:hover {
    @apply border-border-hover;
    transform: translateY(-3px);
    box-shadow: 0 24px 48px rgba(0, 0, 0, 0.35);
  }

  .btn-primary {
    @apply bg-accent-solid text-white border-0 rounded-button font-semibold cursor-pointer transition-all duration-200;
    font-family: "Satoshi", sans-serif;
    letter-spacing: -0.01em;
    transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  }
  .btn-primary:hover {
    background: #5558e6;
    box-shadow: 0 8px 32px rgba(99, 102, 241, 0.35),
      0 0 0 1px rgba(99, 102, 241, 0.3);
  }

  .btn-ghost {
    @apply bg-surface text-text-secondary border border-border rounded-button font-medium cursor-pointer transition-all duration-200;
    font-family: "Satoshi", sans-serif;
    letter-spacing: -0.01em;
    transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  }
  .btn-ghost:hover {
    @apply bg-surface-hover border-border-hover text-text;
  }

  .input-field {
    @apply bg-[rgba(255,255,255,0.04)] border border-border text-text rounded-input outline-none transition-all duration-200 w-full;
    font-family: "Satoshi", sans-serif;
  }
  .input-field::placeholder {
    @apply text-text-faint;
  }
  .input-field:focus {
    @apply border-accent;
    box-shadow: 0 0 0 3px rgba(129, 140, 248, 0.15),
      0 0 24px rgba(99, 102, 241, 0.08);
  }

  .filter-pill {
    @apply bg-transparent text-text-muted border border-transparent py-1.5 px-4 rounded-full text-[13px] font-medium cursor-pointer transition-all duration-200;
    font-family: "Satoshi", sans-serif;
    transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  }
  .filter-pill:hover {
    @apply text-text-secondary;
  }
  .filter-pill.active {
    @apply bg-surface-hover text-text border-border-hover;
  }

  .kicker {
    @apply text-[12.5px] font-semibold text-accent uppercase tracking-[0.12em] mb-3.5;
  }
}
