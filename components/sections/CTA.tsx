"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function CTA() {
	return (
		<section className="bg-[var(--secondary)]">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
				className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 py-12 md:flex-row md:items-center"
			>
				<div>
					<p className="text-sm font-semibold uppercase tracking-wide text-blue-200">Ready to launch</p>
					<h2 className="text-2xl font-bold text-white">Make every call, click, and quote measurable.</h2>
				</div>
				<Button href="/contact">Start with OPEDS</Button>
			</motion.div>
		</section>
	);
}
