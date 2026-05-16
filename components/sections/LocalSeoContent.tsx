import Link from "next/link";

const seoLinks = [
	{ href: "/services", label: "Emergency plumbing and blocked drain services" },
	{ href: "/locations", label: "Melbourne suburbs service coverage" },
	{ href: "/contact", label: "Request a same-day plumbing callback" },
	{ href: "/about", label: "Licensed Melbourne PDS plumbing team" },
];

export default function LocalSeoContent() {
	return (
		<section className="bg-white py-16 sm:py-20" aria-labelledby="local-seo-heading">
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<div className="rounded-3xl border border-[var(--border)] bg-slate-50 p-6 sm:p-8 lg:p-10">
					<h2 id="local-seo-heading" className="text-2xl font-black text-[var(--secondary)] sm:text-3xl">
						Trusted Emergency Plumber in Melbourne
					</h2>
					<p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
						Melbourne PDS delivers 24/7 plumbing support for blocked drains, burst pipes, hot water issues,
						and urgent repairs. We are local, licensed, and focused on fast response times across Melbourne
						metro suburbs.
					</p>
					<p className="mt-3 text-base leading-relaxed text-slate-700 sm:text-lg">
						Need immediate help? Call 0431 234 185 for emergency service, or request a callback online for
						transparent pricing and practical plumbing solutions.
					</p>

					<ul className="mt-6 grid gap-3 sm:grid-cols-2">
						{seoLinks.map((link) => (
							<li key={link.href}>
								<Link
									href={link.href}
									className="inline-flex min-h-11 w-full items-center rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-[var(--secondary)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
								>
									{link.label}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}
