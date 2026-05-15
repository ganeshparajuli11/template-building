import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import CallbackForm from "@/components/sections/CallbackForm";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
	title: "Contact Melbourne PDS | Call 0431 234 185 for Emergency Plumbing",
	description:
		"Get in touch with Melbourne Plumbing & Drainage Solutions. Call 0431 234 185 for 24/7 emergency plumbing or submit a callback request online.",
	path: "/contact",
	keywords: [
		"contact plumber Melbourne",
		"emergency plumber call Melbourne",
		"plumber callback Melbourne",
		"plumbing quote Melbourne",
	],
});

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 pt-10">
        <h1 className="text-3xl font-black text-[var(--secondary)]">Contact</h1>
        <p className="mt-2 text-gray-600">Call, message, or request a callback for urgent support.</p>
      </main>
      <CallbackForm />
      <Footer />
    </div>
  );
}