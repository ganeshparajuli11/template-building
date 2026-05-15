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
					<p className="text-sm font-semibold uppercase tracking-wide text-blue-200">Need a plumber now?</p>
					<h2 className="text-2xl font-bold text-white">Book fast Melbourne plumbing support 24/7.</h2>
				</div>
				<Button href="/contact">Request Emergency Callback</Button>
			</motion.div>
		</section>
	);
}
