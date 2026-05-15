import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface BadgeProps {
	children: ReactNode;
	className?: string;
}

export default function Badge({ children, className }: BadgeProps) {
	return (
		<span
			className={cn(
				"inline-flex items-center rounded-full bg-[var(--muted)] px-3 py-1 text-xs font-semibold text-[var(--secondary)]",
				className,
			)}
		>
			{children}
		</span>
	);
}
