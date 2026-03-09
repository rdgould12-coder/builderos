import type { Metadata } from "next";
import { CourseCatalog } from "./catalog-client";

export const metadata: Metadata = {
  title: "Course Catalog",
  description: "15 courses. 28 real projects. From zero to shipped SaaS.",
  openGraph: { images: [{ url: "/og-courses.png" }] },
};

export default function CoursesPage() {
  return <CourseCatalog />;
}
