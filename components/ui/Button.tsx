import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	href?: string;
	variant?: ButtonVariant;
}

const variantClasses: Record<ButtonVariant, string> = {
	primary: "bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)]",
	secondary: "bg-[var(--secondary)] text-white hover:opacity-95",
	outline: "border border-[var(--border)] bg-white text-[var(--secondary)] hover:bg-[var(--muted)]",
};

const baseClasses =
	"inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition-colors";

export default function Button({
	children,
	href,
	variant = "primary",
	className,
	...props
}: ButtonProps) {
	const classes = cn(baseClasses, variantClasses[variant], className);

	if (href) {
		return (
			<Link href={href} className={classes}>
				{children}
			</Link>
		);
	}

	return (
		<button className={classes} {...props}>
			{children}
		</button>
	);
}
