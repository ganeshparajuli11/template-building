"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import HeroParallax from "@/components/sections/HeroParallax";

const trustItems = [
	"Licensed & Insured",
	"24/7 Emergency",
	"Same Day Response",
	"5-Star Rated",
];

export default function Hero() {
	return (
		<section className="relative isolate flex flex-col overflow-hidden bg-[#f8fafc] md:h-[calc(100vh-110px)] md:justify-center">

			{/* ── DESKTOP: full-bleed background image + directional overlay ── */}
			<HeroParallax />

			{/* ── CONTENT ── */}
			<div className="relative z-10 w-full px-6 py-12 sm:px-10 md:max-w-[54%] md:py-0 md:pl-10 md:pr-6 lg:pl-14 xl:max-w-[52%] xl:pl-20">

				{/* Badge */}
				<motion.div
					initial={{ opacity: 0, y: 14 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.55, ease: "easeOut" }}
					className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-600 ring-1 ring-orange-200"
				>
					<span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-orange-500" aria-hidden="true" />
					24/7 Emergency Plumbing Across Melbourne
				</motion.div>

				{/* Heading — 3-line forced rhythm, scales from 40px → 76px */}
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.65, ease: "easeOut", delay: 0.08 }}
					className="text-[2.5rem] font-black leading-[1.0] tracking-tight text-[#0b1d3a] sm:text-[3.2rem] md:text-[3.6rem] lg:text-[4.2rem] xl:text-[4.75rem]"
				>
					<span className="block">Reliable Melbourne</span>
					<span className="block text-[var(--primary)]">Plumbing &amp; Drainage</span>
					<span className="block">When It Matters Most</span>
				</motion.h1>

				{/* Paragraph */}
				<motion.p
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: "easeOut", delay: 0.16 }}
					className="mt-5 max-w-[460px] text-base leading-relaxed text-slate-600 sm:text-lg md:mt-6 lg:text-[1.2rem]"
				>
					Fast support for blocked drains, leaks, hot water issues, and emergency repairs. Licensed Melbourne experts, ready for same-day response.
				</motion.p>

				{/* CTA buttons */}
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: "easeOut", delay: 0.24 }}
					className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:mt-9"
				>
					<a
						href="tel:0431234185"
						className="inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-[var(--primary)] px-9 text-base font-bold text-white shadow-xl shadow-cyan-200/60 transition hover:bg-[var(--primary-dark)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] lg:text-lg"
					>
						<svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
							<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
						</svg>
						Call 0431 234 185
					</a>
					<Link
						href="/contact"
						className="inline-flex h-14 items-center justify-center rounded-xl border-2 border-slate-300 bg-white/90 px-9 text-base font-bold text-slate-800 backdrop-blur-sm transition hover:border-[var(--primary)] hover:text-[var(--primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] lg:text-lg"
					>
						Request Callback
					</Link>
				</motion.div>

				{/* Trust indicators */}
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.55, ease: "easeOut", delay: 0.34 }}
					className="mt-7 flex flex-wrap gap-x-6 gap-y-2"
				>
					{trustItems.map((label) => (
						<span key={label} className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500">
							<svg className="h-4 w-4 shrink-0 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
								<path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
							</svg>
							{label}
						</span>
					))}
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 18 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, ease: "easeOut", delay: 0.42 }}
					className="mt-10 hidden max-w-[420px] items-center gap-4 rounded-2xl border border-cyan-100 bg-white/80 p-4 shadow-lg shadow-slate-200/40 backdrop-blur sm:flex"
				>
					<div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--primary)] text-white shadow-md shadow-cyan-200/60">
						<span className="text-lg font-black">24</span>
					</div>
					<div>
						<p className="text-sm font-bold uppercase tracking-wider text-[var(--secondary)]">Fast response window</p>
						<p className="text-sm text-slate-600">Melbourne metro service with a calm, professional arrival.</p>
					</div>
				</motion.div>
			</div>

			{/* ── MOBILE: image block below content ── */}
			<div className="relative h-52 w-full overflow-hidden sm:h-64 md:hidden">
				<Image
					src="/images/bg-image.png"
					alt="MPDS licensed plumber standing in front of branded service van, Melbourne"
					fill
					sizes="(max-width: 767px) 100vw"
					className="object-cover object-[35%_center]"
					priority
				/>
			</div>

		</section>
	);
}

