"use client";

import Link from "next/link";

import { ContactActions } from "@/components/ui/ContactActions";

const navItems = [
	{ label: "Services", href: "/services" },
	{ label: "Locations", href: "/locations" },
	{ label: "About", href: "/about" },
	{ label: "Contact", href: "/contact" },
	{ label: "Dashboard", href: "/dashboard" },
];

export default function Navbar() {
	return (
		<header className="sticky top-0 z-20 border-b border-[var(--border)] bg-white/95 backdrop-blur">
			<nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
				<Link href="/" className="text-lg font-black tracking-tight text-[var(--secondary)]">
					OPEDS
				</Link>
				<div className="hidden items-center gap-6 text-sm font-medium text-gray-700 md:flex">
					{navItems.map((item) => (
						<Link key={item.href} href={item.href} className="hover:text-[var(--primary)]">
							{item.label}
						</Link>
					))}
				</div>
				<ContactActions />
			</nav>
		</header>
	);
}
