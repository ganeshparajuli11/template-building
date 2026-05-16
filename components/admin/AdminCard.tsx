import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/utils";

type AdminCardProps = ComponentPropsWithoutRef<"div"> & {
	children: ReactNode;
};

export default function AdminCard({ children, className, ...props }: AdminCardProps) {
	return (
		<div
			{...props}
			className={cn(
				"rounded-2xl border border-[#e6e9ef] bg-white p-6 shadow-[0_1px_2px_rgba(16,24,40,0.04)]",
				className,
			)}
		>
			{children}
		</div>
	);
}
