"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

type DashboardRevealProps = {
	children: ReactNode;
	delay?: number;
	className?: string;
};

export default function DashboardReveal({ children, delay = 0, className = "" }: DashboardRevealProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.24 }}
			transition={{ duration: 0.55, ease: "easeOut", delay }}
			className={className}
		>
			{children}
		</motion.div>
	);
}
