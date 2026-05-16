"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function HeroParallax() {
	const frameRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			return;
		}

		let animationFrame = 0;

		const updateParallax = () => {
			const frame = frameRef.current;
			if (!frame) return;

			const rect = frame.getBoundingClientRect();
			const viewportHeight = window.innerHeight || 1;
			const progress = Math.min(1, Math.max(0, (viewportHeight - rect.top) / (viewportHeight + rect.height)));
			const offset = Math.round(progress * 28);

			frame.style.setProperty("--hero-parallax", `${offset}px`);
			frame.style.setProperty("--hero-parallax-reverse", `${Math.round(offset * -0.45)}px`);
		};

		const onScroll = () => {
			window.cancelAnimationFrame(animationFrame);
			animationFrame = window.requestAnimationFrame(updateParallax);
		};

		updateParallax();
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onScroll);

		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onScroll);
			window.cancelAnimationFrame(animationFrame);
		};
	}, []);

	return (
		<div ref={frameRef} className="absolute inset-0 hidden overflow-hidden md:block" aria-hidden="true">
			<div className="absolute inset-0 will-change-transform [transform:translate3d(0,var(--hero-parallax,0px),0)]">
				<Image
					src="/images/bg-image.png"
					alt=""
					fill
					sizes="(min-width: 768px) 60vw, 100vw"
					className="object-cover object-right scale-[1.12]"
					priority
					quality={90}
				/>
			</div>

			<div className="absolute inset-0 will-change-transform [transform:translate3d(0,var(--hero-parallax-reverse,0px),0)]">
				<div
					className="absolute inset-0"
					style={{
						background:
							"linear-gradient(90deg, rgba(248,250,252,0.97) 0%, rgba(248,250,252,0.92) 30%, rgba(248,250,252,0.60) 55%, rgba(248,250,252,0.15) 75%, rgba(248,250,252,0.02) 100%)",
					}}
				/>
				<div className="absolute left-12 top-16 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl motion-safe:animate-[pulse_8s_ease-in-out_infinite]" />
				<div className="absolute right-8 top-36 h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl motion-safe:animate-[pulse_10s_ease-in-out_infinite]" />
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: [0, -10, 0] }}
					transition={{ opacity: { duration: 0.4 }, y: { duration: 5.5, repeat: Infinity, ease: "easeInOut" } }}
					className="absolute bottom-10 right-10 hidden w-64 rounded-2xl border border-white/60 bg-white/85 p-4 shadow-2xl shadow-slate-300/30 backdrop-blur lg:block"
				>
					<p className="text-xs font-extrabold uppercase tracking-wider text-[var(--primary)]">Live service mode</p>
					<p className="mt-1 text-sm font-semibold text-slate-800">Emergency plumbing, blocked drains, and hot water help across Melbourne.</p>
				</motion.div>
			</div>
		</div>
	);
}