"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

type ScrollRevealProps = {
	children: ReactNode;
	delay?: number;
	className?: string;
};

export default function ScrollReveal({ children, delay = 0, className = "" }: ScrollRevealProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 28 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.22 }}
			transition={{ duration: 0.7, ease: "easeOut", delay }}
			className={className}
		>
			{children}
		</motion.div>
	);
}
