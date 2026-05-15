import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Locations from "@/components/sections/Locations";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
	title: "Plumber All Melbourne Suburbs | Point Cook, Berwick, Glen Waverley & More",
	description:
		"Melbourne Plumbing & Drainage Solutions services all suburbs — Point Cook, Berwick, Glen Waverley, Sunbury, Werribee, Frankston and surrounding areas. Same-day available.",
	path: "/locations",
	keywords: [
		"plumber Point Cook",
		"plumber Berwick",
		"plumber Glen Waverley",
		"plumber Sunbury",
		"plumber Werribee",
		"plumber Frankston",
		"Melbourne suburbs plumber",
	],
});

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 pt-10">
        <h1 className="text-3xl font-black text-[var(--secondary)]">Locations</h1>
      <p className="mt-2 text-gray-600">Fast service coverage across Melbourne suburbs and metro corridors.</p>
      </main>
      <Locations />
      <Footer />
    </div>
  );
}