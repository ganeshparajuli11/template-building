"use client";

import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export default function Hero() {
	return (
		<section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-2 md:py-24">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
				className="space-y-5"
			>
				<Badge>Emergency Plumbing + Business OS</Badge>
				<h1 className="text-4xl font-black leading-tight tracking-tight text-[var(--secondary)] md:text-5xl">
					One platform for your website, leads, SEO, and operations.
				</h1>
				<p className="text-lg text-gray-600">
					Keep your public site conversion-focused while your team tracks callbacks, quotes,
					and performance in one admin dashboard.
				</p>
				<div className="flex flex-wrap gap-3">
					<Button href="/contact">Get Instant Callback</Button>
					<Button href="/dashboard" variant="outline">
						View Dashboard
					</Button>
				</div>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, scale: 0.95 }}
				whileInView={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.6, delay: 0.2 }}
				viewport={{ once: true }}
				className="rounded-2xl border border-[var(--border)] bg-gradient-to-br from-blue-50 to-amber-50 p-6"
			>
				<p className="mb-3 text-sm font-semibold text-gray-500">Today at a glance</p>
				<ul className="space-y-3 text-sm text-[var(--secondary)]">
					<li className="rounded-xl bg-white p-3">24 new leads captured</li>
					<li className="rounded-xl bg-white p-3">SEO health score improved to 86%</li>
					<li className="rounded-xl bg-white p-3">17 quote requests from website visitors</li>
				</ul>
			</motion.div>
		</section>
	);
}
