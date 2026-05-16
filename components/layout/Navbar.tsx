"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import { useState } from "react";

const navItems = [
	{ label: "Home", href: "/" },
	{ label: "Services", href: "/services" },
	{ label: "Locations", href: "/locations" },
	{ label: "About", href: "/about" },
	{ label: "Contact", href: "/contact" },
];

export default function Navbar() {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);

	const isActive = (href: string) => {
		if (href === "/") return pathname === "/";
		return pathname.startsWith(href);
	};

	return (
		<>
			<header className="sticky top-0 z-50 border-b border-[var(--border)] bg-white/95 backdrop-blur">
				<div className="hidden h-[48px] border-b border-cyan-800/80 bg-[var(--primary)] md:block">
					<div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4 text-sm font-semibold text-white">
						<div className="flex items-center gap-5">
							<a href="tel:0431234185" className="rounded-md transition hover:text-cyan-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
								Call: 0431 234 185
							</a>
							<a href="mailto:melbournepds@gmail.com" className="hidden rounded-md transition hover:text-cyan-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:inline">
								melbournepds@gmail.com
							</a>
							<p className="text-cyan-50">24-hour emergency service</p>
						</div>
						<Link
							href="/contact"
							className="inline-flex min-h-[40px] items-center justify-center rounded-full bg-[var(--accent-warm)] px-6 text-sm font-bold tracking-wide text-white shadow-sm transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
						>
							Emergency Plumbing 24/7
						</Link>
					</div>
				</div>

				<nav className="relative mx-auto flex h-[68px] max-w-6xl items-center justify-between gap-4 px-4 md:h-[76px] md:py-0">
					<Link href="/" aria-label="Melbourne Plumbing and Drainage Solutions home">
						<Image
							src="/logo.png"
							alt="Melbourne Plumbing and Drainage Solutions logo"
							width={320}
							height={98}
							priority
							className="h-11 w-auto md:h-14"
						/>
					</Link>

					<div className="hidden items-center gap-1.5 md:flex">
						{navItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${
									isActive(item.href)
										? "bg-[var(--muted)] text-[var(--primary)]"
										: "text-[var(--secondary)] hover:bg-[var(--muted)] hover:text-[var(--primary)]"
								}`}
							>
								{item.label}
							</Link>
						))}
					</div>

					<div className="hidden items-center gap-2 md:flex">
						<a
							href="tel:0431234185"
							className="inline-flex min-h-11 items-center rounded-full bg-[var(--accent-warm)] px-6 text-sm font-bold text-white shadow-sm transition hover:opacity-90"
						>
							Call 0431 234 185
						</a>
						<Link
							href="/contact"
							className="inline-flex min-h-11 items-center rounded-full border border-[var(--border)] px-6 text-sm font-semibold text-[var(--secondary)] transition hover:bg-[var(--muted)]"
						>
							Request Callback
						</Link>
					</div>

					<div className="flex items-center gap-2 md:hidden">
						<a
							href="tel:0431234185"
							className="inline-flex min-h-11 items-center rounded-xl bg-[var(--accent-warm)] px-3 text-sm font-bold text-white"
							aria-label="Call Melbourne PDS"
						>
							<Phone className="h-4 w-4" />
						</a>
						<button
							type="button"
							onClick={() => setIsOpen((value) => !value)}
							className="inline-flex min-h-11 items-center rounded-xl border border-[var(--border)] px-3 text-[var(--secondary)]"
							aria-expanded={isOpen}
							aria-label="Toggle navigation menu"
						>
							{isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
						</button>
					</div>

					{isOpen ? (
						<div className="absolute inset-x-4 top-full mt-2 rounded-2xl border border-[var(--border)] bg-white p-4 shadow-lg md:hidden">
							<div className="flex flex-col gap-2">
								{navItems.map((item) => (
									<Link
										key={item.href}
										href={item.href}
										onClick={() => setIsOpen(false)}
										className={`rounded-lg px-3 py-2 text-base font-semibold ${
											isActive(item.href)
												? "bg-[var(--muted)] text-[var(--primary)]"
												: "text-[var(--secondary)]"
										}`}
									>
										{item.label}
									</Link>
								))}
							</div>
							<div className="mt-3 grid grid-cols-1 gap-2">
								<a
									href="tel:0431234185"
									className="inline-flex min-h-11 items-center justify-center rounded-xl bg-[var(--accent-warm)] px-4 text-sm font-bold text-white"
								>
									Call 0431 234 185
								</a>
								<a
									href="https://wa.me/61431234185?text=Hi!%20I%20need%20plumbing%20help."
									target="_blank"
									rel="noreferrer"
									className="inline-flex min-h-11 items-center justify-center rounded-xl bg-[var(--accent)] px-4 text-sm font-bold text-white"
								>
									WhatsApp
								</a>
								<Link
									href="/contact"
									onClick={() => setIsOpen(false)}
									className="inline-flex min-h-11 items-center justify-center rounded-xl border border-[var(--border)] px-4 text-sm font-semibold text-[var(--secondary)]"
								>
									Request Callback
								</Link>
							</div>
						</div>
					) : null}
				</nav>
			</header>

			<div className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--border)] bg-white/95 px-3 py-2 backdrop-blur md:hidden">
				<div className="mx-auto grid max-w-6xl grid-cols-3 gap-2">
					<a
						href="tel:0431234185"
						className="inline-flex min-h-11 items-center justify-center gap-1 rounded-xl bg-[var(--accent-warm)] px-2 text-xs font-bold text-white"
					>
						<Phone className="h-4 w-4" />
						Call
					</a>
					<a
						href="https://wa.me/61431234185?text=Hi!%20I%20need%20plumbing%20help."
						target="_blank"
						rel="noreferrer"
						className="inline-flex min-h-11 items-center justify-center gap-1 rounded-xl bg-[var(--accent)] px-2 text-xs font-bold text-white"
					>
						<MessageCircle className="h-4 w-4" />
						WhatsApp
					</a>
					<Link
						href="/contact"
						className="inline-flex min-h-11 items-center justify-center rounded-xl border border-[var(--border)] px-2 text-xs font-semibold text-[var(--secondary)]"
					>
						Callback
					</Link>
				</div>
			</div>
		</>
	);
}
