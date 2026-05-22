import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import CallbackForm from "@/components/sections/CallbackForm";
import { createMetadata } from "@/lib/seo";
import { Mail, Phone, Clock } from "lucide-react";

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
			<main>
				<section className="border-b border-slate-200 bg-slate-50 py-12 sm:py-16">
					<div className="mx-auto max-w-6xl px-4">
						<h1 className="text-4xl font-black text-[var(--secondary)] sm:text-5xl">
							Contact Us
						</h1>
						<p className="mt-4 max-w-2xl text-lg text-slate-600">
							Need plumbing support in Melbourne? Call us now or send your details
							using the form below.
						</p>

						<div className="mt-8 grid gap-4 md:grid-cols-3">
							<a
								href="tel:0431234185"
								className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5"
							>
								<Phone className="h-5 w-5 text-[var(--primary)]" />
								<p className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
									Phone
								</p>
								<p className="mt-1 text-lg font-bold text-[var(--secondary)]">
									0431 234 185
								</p>
							</a>
							<a
								href="mailto:melbournepds@gmail.com"
								className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5"
							>
								<Mail className="h-5 w-5 text-[var(--primary)]" />
								<p className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
									Email
								</p>
								<p className="mt-1 text-lg font-bold text-[var(--secondary)] break-all">
									melbournepds@gmail.com
								</p>
							</a>
							<div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
								<Clock className="h-5 w-5 text-[var(--primary)]" />
								<p className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
									Availability
								</p>
								<p className="mt-1 text-lg font-bold text-[var(--secondary)]">
									Emergency 24/7
								</p>
							</div>
						</div>
					</div>
				</section>
				<CallbackForm />
			</main>
			<Footer />
		</div>
	);
}