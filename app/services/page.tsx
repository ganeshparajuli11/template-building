import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ServicesGrid from "@/components/sections/ServicesGrid";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
	title: "Plumbing Services Melbourne | Blocked Drains, Hot Water & More",
	description:
		"Full-range plumbing services in Melbourne: blocked drains, burst pipes, hot water systems, leak detection, bathroom renovations & more. Call Melbourne PDS today.",
	path: "/services",
	keywords: [
		"plumbing services Melbourne",
		"blocked drain plumber Melbourne",
		"hot water system Melbourne",
		"leak detection Melbourne",
		"burst pipe repair Melbourne",
		"bathroom renovation plumber Melbourne",
	],
});

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 pt-10">
        <h1 className="text-3xl font-black text-[var(--secondary)]">Services</h1>
        <p className="mt-2 text-gray-600">SEO-friendly service pages for every high-intent plumbing need.</p>
      </main>
      <ServicesGrid />
      <Footer />
    </div>
  );
}