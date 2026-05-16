"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	BarChart3,
	Bell,
	Cable,
	FileText,
	LayoutDashboard,
	LifeBuoy,
	LogOut,
	Mail,
	Menu,
	Moon,
	Search,
	Settings,
	Users,
	X,
} from "lucide-react";
import { useState } from "react";

const navItems = [
	{ href: "/dashboard", label: "Overview", icon: LayoutDashboard },
	{ href: "/dashboard/leads", label: "Leads", icon: Users },
	{ href: "/dashboard/seo", label: "SEO", icon: Search },
	{ href: "/dashboard/analytics", label: "Analytics", icon: BarChart3 },
	{ href: "/dashboard/content", label: "Content", icon: FileText },
	{ href: "/dashboard/connectors", label: "Connectors", icon: Cable },
	{ href: "/dashboard/settings", label: "Settings", icon: Settings },
];

const supportItems = [
	{ href: "/dashboard/settings", label: "Support Ticket", icon: LifeBuoy },
	{ href: "/dashboard/settings", label: "Email", icon: Mail },
	{ href: "/dashboard/analytics", label: "Charts", icon: BarChart3 },
];

function getTitle(pathname: string) {
	const current = [...navItems]
		.sort((a, b) => b.href.length - a.href.length)
		.find((item) => pathname === item.href || pathname.startsWith(`${item.href}/`));
	if (!current) return "Dashboard";
	if (current.href === "/dashboard") return "Business Overview";
	return current.label;
}

function getTodayLabel() {
	return new Intl.DateTimeFormat("en-AU", {
		weekday: "short",
		day: "2-digit",
		month: "short",
		year: "numeric",
	}).format(new Date());
}

export default function AdminLayoutShell({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();
	const [mobileOpen, setMobileOpen] = useState(false);
	const pageTitle = getTitle(pathname);
	const todayLabel = getTodayLabel();

	return (
		<div className="min-h-screen bg-[#f3f5f8] text-[#1f2937]">
			<aside className="fixed inset-y-0 left-0 z-40 hidden w-[260px] border-r border-[#e6e9ef] bg-white lg:block">
				<div className="flex h-20 items-center border-b border-[#eef1f5] px-6">
					<div>
						<p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#9aa3b2]">Workspace</p>
						<p className="mt-1 text-2xl font-extrabold tracking-tight text-[#111827]">OPEDS Admin</p>
					</div>
				</div>
				<div className="px-4 pt-5">
					<p className="mb-3 px-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#9aa3b2]">Menu</p>
				</div>
				<nav className="space-y-1 px-4">
					{navItems.map((item) => {
						const Icon = item.icon;
						const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
						return (
							<Link
								key={item.href}
								href={item.href}
								className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
									active
										? "bg-[#eef4ff] text-[#335cff]"
										: "text-[#6b7280] hover:bg-[#f7f8fb] hover:text-[#111827]"
								}`}
							>
								<Icon className="h-4 w-4" />
								{item.label}
							</Link>
						);
					})}
				</nav>

				<div className="px-4 pt-8">
					<p className="mb-3 px-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#9aa3b2]">Support</p>
				</div>
				<nav className="space-y-1 px-4">
					{supportItems.map((item) => {
						const Icon = item.icon;
						return (
							<Link
								key={`${item.href}-${item.label}`}
								href={item.href}
								className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-[#6b7280] transition hover:bg-[#f7f8fb] hover:text-[#111827]"
							>
								<Icon className="h-4 w-4" />
								{item.label}
							</Link>
						);
					})}
				</nav>
			</aside>

			<div className="min-h-screen lg:pl-[260px]">
				<div className="flex min-h-screen flex-1 flex-col">
					<header className="sticky top-0 z-30 border-b border-[#e6e9ef] bg-[#f3f5f8]/95 px-4 py-4 backdrop-blur sm:px-6 lg:px-8">
						<div className="mx-auto flex w-full max-w-[1320px] items-center justify-between gap-4">
							<div className="flex min-w-0 flex-1 items-center gap-3">
								<button
									type="button"
									onClick={() => setMobileOpen(true)}
									className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#e5e7eb] bg-white text-[#6b7280] lg:hidden"
									aria-label="Open admin menu"
								>
									<Menu className="h-5 w-5" />
								</button>
								<div className="hidden h-11 w-11 items-center justify-center rounded-xl border border-[#e5e7eb] bg-white text-[#6b7280] lg:inline-flex">
									<Menu className="h-5 w-5" />
								</div>
								<div className="hidden min-w-0 flex-1 lg:block">
									<div className="relative">
										<Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9ca3af]" />
										<input
											type="text"
											placeholder="Search or type command..."
											className="h-11 w-full rounded-xl border border-[#e5e7eb] bg-white pl-11 pr-20 text-sm text-[#111827] outline-none transition focus:border-[#c7cedb] focus:ring-2 focus:ring-[#eef2f8]"
										/>
										<span className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md border border-[#e5e7eb] bg-[#f9fafb] px-2 py-1 text-[11px] font-semibold text-[#9ca3af]">
											⌘ K
										</span>
									</div>
								</div>
								<div className="lg:hidden">
									<p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8a94a6]">Melbourne PDS</p>
									<h1 className="text-lg font-extrabold tracking-tight text-[#111827]">{pageTitle}</h1>
								</div>
							</div>

							<div className="flex items-center gap-2 sm:gap-3">
								<button
									type="button"
									className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#e5e7eb] bg-white text-[#6b7280]"
									aria-label="Toggle theme"
								>
									<Moon className="h-4 w-4" />
								</button>
								<button
									type="button"
									className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#e5e7eb] bg-white text-[#6b7280]"
									aria-label="Notifications"
								>
									<Bell className="h-4 w-4" />
									<span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#ff8b3d]" />
								</button>
								<button
									type="button"
									className="hidden rounded-xl border border-[#e5e7eb] bg-white px-3 py-2 text-xs font-semibold text-[#52525b] hover:bg-[#f8fafc] sm:inline-flex"
								>
									Last 7 days
								</button>
								<p className="hidden text-xs font-semibold text-[#8a94a6] md:block">{todayLabel}</p>
								<Link
									href="/admin/login"
									className="inline-flex items-center gap-1 rounded-xl border border-[#e5e7eb] bg-white px-3 py-2 text-xs font-semibold text-[#111827] hover:bg-[#f8fafc]"
								>
									<LogOut className="h-3.5 w-3.5" />
									Sign out
								</Link>
							</div>
						</div>
						<div className="mx-auto mt-3 hidden w-full max-w-[1320px] lg:block">
							<p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8a94a6]">Melbourne PDS</p>
							<h1 className="mt-1 text-3xl font-extrabold tracking-tight text-[#111827]">{pageTitle}</h1>
						</div>
					</header>

					<main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
						<div className="mx-auto w-full max-w-[1320px]">{children}</div>
					</main>
				</div>
			</div>

			{mobileOpen ? (
				<div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
					<div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
					<div className="absolute inset-y-0 left-0 w-[260px] border-r border-[#e6e9ef] bg-white">
						<div className="flex h-20 items-center justify-between border-b border-[#eef1f5] px-4">
							<div>
								<p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#9aa3b2]">Workspace</p>
								<p className="mt-1 text-2xl font-extrabold tracking-tight text-[#111827]">OPEDS Admin</p>
							</div>
							<button
								type="button"
								onClick={() => setMobileOpen(false)}
								className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#e5e7eb] text-[#6b7280]"
								aria-label="Close admin menu"
							>
								<X className="h-4 w-4" />
							</button>
						</div>
						<div className="px-4 pt-5">
							<p className="mb-3 px-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#9aa3b2]">Menu</p>
						</div>
						<nav className="space-y-1 px-4 py-5">
							{navItems.map((item) => {
								const Icon = item.icon;
								const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
								return (
									<Link
										key={item.href}
										href={item.href}
										onClick={() => setMobileOpen(false)}
										className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
											active
												? "bg-[#eef4ff] text-[#335cff]"
												: "text-[#6b7280] hover:bg-[#f7f8fb] hover:text-[#111827]"
										}`}
									>
										<Icon className="h-4 w-4" />
										{item.label}
									</Link>
								);
							})}
						</nav>
					</div>
				</div>
			) : null}
		</div>
	);
}
