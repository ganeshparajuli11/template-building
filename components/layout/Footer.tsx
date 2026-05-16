import Link from "next/link";
import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

const quickLinks = [
	{ label: "Home", href: "/" },
	{ label: "Services", href: "/services" },
	{ label: "Locations", href: "/locations" },
	{ label: "About", href: "/about" },
	{ label: "Contact", href: "/contact" },
];

const serviceAreas = ["Richmond", "Hawthorn", "Kew", "Point Cook", "Glen Waverley", "Sunbury"];

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="border-t border-[var(--border)] bg-[var(--secondary)] text-slate-100">
			<div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
				<div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
					<div className="space-y-4 lg:col-span-2">
						<p className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-500/10 px-3 py-1 text-xs font-bold tracking-wider text-cyan-200 uppercase">
							24/7 Emergency Plumbing
						</p>
						<h2 className="max-w-md text-2xl font-black leading-tight text-white sm:text-3xl">
							Melbourne Plumbing and Drainage Solutions
						</h2>
						<p className="max-w-lg text-sm leading-relaxed text-slate-300 sm:text-base">
							Licensed, insured, and fast-response plumbers for homes and businesses across Melbourne.
							 Transparent pricing, quality workmanship, and dependable service when it matters most.
						</p>

						<div className="grid gap-3 sm:grid-cols-2">
							<a
								href={`tel:${siteConfig.phoneRaw}`}
								className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[var(--accent-warm)] px-4 text-sm font-bold text-white transition hover:opacity-90"
							>
								<Phone className="h-4 w-4" />
								Call {siteConfig.phone}
							</a>
							<a
								href="https://wa.me/61431234185?text=Hi!%20I%20need%20plumbing%20help."
								target="_blank"
								rel="noreferrer"
								className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[var(--accent)] px-4 text-sm font-bold text-white transition hover:opacity-90"
							>
								<MessageCircle className="h-4 w-4" />
								WhatsApp Us
							</a>
						</div>
					</div>

					<div>
						<h3 className="text-sm font-extrabold tracking-wider text-cyan-200 uppercase">Quick Links</h3>
						<ul className="mt-4 space-y-2">
							{quickLinks.map((item) => (
								<li key={item.href}>
									<Link
										href={item.href}
										className="text-sm text-slate-300 transition hover:text-white"
									>
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className="text-sm font-extrabold tracking-wider text-cyan-200 uppercase">Contact</h3>
						<ul className="mt-4 space-y-3 text-sm text-slate-300">
							<li className="flex items-start gap-2">
								<Phone className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
								<a href={`tel:${siteConfig.phoneRaw}`} className="transition hover:text-white">
									{siteConfig.phone}
								</a>
							</li>
							<li className="flex items-start gap-2">
								<Mail className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
								<a href={`mailto:${siteConfig.email}`} className="break-all transition hover:text-white">
									{siteConfig.email}
								</a>
							</li>
							<li className="flex items-start gap-2">
								<MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
								<p>Servicing all Melbourne metro suburbs</p>
							</li>
							<li className="flex items-start gap-2">
								<Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
								<p>Open 24 hours, 7 days a week</p>
							</li>
						</ul>

						<p className="mt-5 text-xs font-semibold tracking-wide text-slate-400 uppercase">
							Popular service areas
						</p>
						<p className="mt-2 text-sm leading-relaxed text-slate-300">{serviceAreas.join(" • ")}</p>
					</div>
				</div>

				<div className="mt-10 flex flex-col gap-3 border-t border-slate-700/80 pt-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
					<p>© {year} {siteConfig.name}. All rights reserved.</p>
					<div className="flex flex-wrap items-center gap-x-4 gap-y-2">
						<span>Licensed and insured Melbourne plumbing specialists</span>
						<a href={siteConfig.socialLinks.facebook} target="_blank" rel="noreferrer" className="transition hover:text-white">
							Facebook
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
