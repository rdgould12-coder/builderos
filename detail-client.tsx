import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center px-6">
      <div>
        <div className="text-7xl mb-6 opacity-50">404</div>
        <h1 className="heading text-3xl mb-3">Page not found</h1>
        <p className="text-text-muted mb-8 max-w-[400px] mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/">
          <Button size="md">Go Home →</Button>
        </Link>
      </div>
    </div>
  );
}
