"use client";

import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";

export default function CTA() {
	return (
		<section className="relative overflow-hidden gradient-water py-20 sm:py-28">
			{/* Decorative background circles */}
			<div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-white/20 blur-3xl" />
			<div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-white/20 blur-3xl" />

			<div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="flex flex-col items-center"
				>
					<span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-bold uppercase tracking-widest text-white backdrop-blur-sm shadow-inner">
						<span className="relative flex h-2 w-2">
							<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
							<span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
						</span>
						24/7 Dispatch Available
					</span>
					
					<h2 className="mb-6 text-3xl font-black tracking-tight text-white sm:text-5xl md:text-6xl max-w-3xl">
						Need a plumber right now?
					</h2>
					
					<p className="mb-10 text-lg font-medium text-cyan-50 max-w-2xl mx-auto opacity-90 sm:text-xl">
						Don't let a plumbing emergency damage your property. Our fully licensed Melbourne experts are ready to respond immediately.
					</p>

					<div className="flex flex-col gap-4 sm:flex-row justify-center w-full sm:w-auto">
						<a 
							href="tel:0431234185"
							className="group flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-bold text-[var(--secondary)] shadow-lg transition-all hover:scale-105 hover:bg-slate-50"
						>
							<div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary)] text-white">
								<PhoneCall className="h-4 w-4" />
							</div>
							0431 234 185
						</a>
						<a 
							href="#callback"
							className="flex items-center justify-center rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-lg font-bold text-white backdrop-blur-sm transition-all hover:bg-white hover:text-[var(--secondary)]"
						>
							Request a Callback
						</a>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
