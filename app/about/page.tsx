import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Card from "@/components/ui/Card";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
	title: "About Melbourne PDS | Licensed Local Plumbers You Can Trust",
	description:
		"Melbourne Plumbing & Drainage Solutions — licensed, VBA-registered plumbers serving all Melbourne suburbs. Honest pricing, no hidden fees, fast response.",
	path: "/about",
	keywords: [
		"licensed plumber Melbourne",
		"VBA registered plumber",
		"local plumber Melbourne",
		"trusted plumber Melbourne",
	],
});

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-black text-[var(--secondary)]">About Melbourne PDS</h1>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Card>
            <h2 className="text-xl font-bold text-[var(--secondary)]">Mission</h2>
            <p className="mt-2 text-sm text-gray-600">
			  Deliver reliable, honest, and fast plumbing support across Melbourne homes and businesses.
            </p>
          </Card>
          <Card>
            <h2 className="text-xl font-bold text-[var(--secondary)]">Approach</h2>
            <p className="mt-2 text-sm text-gray-600">
			  Licensed workmanship, clear pricing, and practical solutions for emergencies and scheduled jobs.
            </p>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}