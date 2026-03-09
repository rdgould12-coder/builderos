import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#6366f1",
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"),
  title: {
    default: "BuilderOS — Build anything with AI",
    template: "%s | BuilderOS",
  },
  description:
    "The platform for shipping real apps, websites, and SaaS products using Claude, Cursor, and modern AI tools. From first line to first dollar.",
  keywords: [
    "AI education", "learn to code with AI", "Claude", "Cursor", "build apps",
    "SaaS", "no-code", "AI builder", "ship products",
  ],
  openGraph: {
    type: "website",
    siteName: "BuilderOS",
    title: "BuilderOS — Build anything with AI",
    description: "Ship real apps, websites, and SaaS products with AI tools.",
    images: [{ url: "/og-main.png", width: 1200, height: 630, alt: "BuilderOS" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BuilderOS — Build anything with AI",
    description: "Ship real apps, websites, and SaaS products with AI tools.",
    images: ["/twitter-card.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-bg text-text antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
