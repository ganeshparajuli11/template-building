import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface CardProps extends ComponentPropsWithoutRef<"div"> {
	children: ReactNode;
	className?: string;
}

export default function Card({ children, className, ...props }: CardProps) {
	return (
		<div
			{...props}
			className={cn(
				"rounded-2xl border border-[var(--border)] bg-white p-5 shadow-sm",
				className,
			)}
		>
			{children}
		</div>
	);
}
