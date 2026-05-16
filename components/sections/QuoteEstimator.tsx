"use client";

import { useState } from "react";
import { services } from "@/data/services";
import { Calculator, Clock, Zap, Calendar, ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";

const urgencies = [
	{ id: "standard", label: "Standard (24-48h)", fee: 0, icon: Calendar },
	{ id: "sameday", label: "Same Day", fee: 50, icon: Clock },
	{ id: "emergency", label: "Emergency (24/7)", fee: 100, icon: Zap },
];

export default function QuoteEstimator() {
	const [selectedService, setSelectedService] = useState<string>(services[0].id);
	const [selectedUrgency, setSelectedUrgency] = useState<string>("standard");

	const activeService = services.find((s) => s.id === selectedService) || services[0];
	const activeUrgency = urgencies.find((u) => u.id === selectedUrgency) || urgencies[0];

	const estimatedPrice = activeService.priceFrom + activeUrgency.fee;

	return (
		<section className="relative overflow-hidden bg-white py-20 text-slate-900 sm:py-28 border-t border-slate-200">
			{/* Decorative Background Glow */}
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-100/40 via-white to-white pointer-events-none" />
			
			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid gap-12 lg:grid-cols-2 lg:gap-8 xl:gap-16">
					
					{/* Left Content */}
					<div className="flex flex-col justify-center">
						<div className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--primary)] bg-[var(--primary)]/10 px-4 py-2 text-sm font-semibold text-[var(--primary-dark)]">
							<Calculator className="h-4 w-4" />
							Instant Quote Calculator
						</div>
						<h2 className="mt-6 text-3xl font-black tracking-tight text-[var(--secondary)] sm:text-4xl md:text-5xl">
							No Surprises. <br className="hidden lg:block" />
							<span className="text-[var(--primary)]">Transparent Pricing.</span>
						</h2>
						<p className="mt-5 max-w-xl text-lg text-slate-600">
							We believe in upfront, honest pricing. Use our instant estimator to get an approximate starting cost for your plumbing issue based on industry standards.
						</p>
						<ul className="mt-8 space-y-4 text-slate-700 font-medium">
							<li className="flex items-center gap-3">
								<div className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--accent)]/20 text-[var(--accent)]">✓</div>
								$0 Hidden Fees
							</li>
							<li className="flex items-center gap-3">
								<div className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--accent)]/20 text-[var(--accent)]">✓</div>
								Fixed Price Quotes On-Site
							</li>
							<li className="flex items-center gap-3">
								<div className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--accent)]/20 text-[var(--accent)]">✓</div>
								All Payment Methods Accepted
							</li>
						</ul>
					</div>

					{/* Right Interactive Card */}
					<div className="relative rounded-3xl bg-slate-50 p-6 shadow-xl ring-1 ring-slate-200 sm:p-8 lg:p-10">
						
						{/* Step 1: Service */}
						<div className="mb-8">
							<label className="mb-3 block text-sm font-bold text-slate-700 uppercase tracking-wide">
								1. Select Service
							</label>
							<div className="relative">
								<select
									value={selectedService}
									onChange={(e) => setSelectedService(e.target.value)}
									className="w-full appearance-none rounded-xl border-2 border-slate-200 bg-white px-4 py-4 pr-10 text-base font-semibold text-[var(--secondary)] outline-none transition-colors focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--primary)]/10"
								>
									{services.map((service) => (
										<option key={service.id} value={service.id}>
											{service.name} (from ${service.priceFrom})
										</option>
									))}
								</select>
								<ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
							</div>
						</div>

						{/* Step 2: Urgency */}
						<div className="mb-8">
							<label className="mb-3 block text-sm font-bold text-slate-700 uppercase tracking-wide">
								2. Select Response Time
							</label>
							<div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
								{urgencies.map((urgency) => {
									const isSelected = selectedUrgency === urgency.id;
									const Icon = urgency.icon;
									return (
										<button
											key={urgency.id}
											onClick={() => setSelectedUrgency(urgency.id)}
											className={`flex flex-col items-center justify-center gap-2 rounded-xl border-2 p-4 text-center transition-all ${
												isSelected
													? "border-[var(--primary)] bg-[var(--primary)]/10 text-[var(--primary-dark)]"
													: "border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:bg-slate-50"
											}`}
										>
											<Icon className={`h-6 w-6 ${isSelected ? "text-[var(--primary)]" : "text-slate-400"}`} />
											<span className="text-xs font-bold leading-tight">{urgency.label}</span>
										</button>
									);
								})}
							</div>
						</div>

						{/* Result */}
						<div className="rounded-2xl bg-white p-6 text-center ring-1 ring-slate-200 shadow-sm">
							<p className="text-sm font-bold text-slate-500 uppercase tracking-wide">Estimated Starting Price</p>
							<div className="mt-2 flex items-baseline justify-center gap-1 text-[var(--secondary)]">
								<span className="text-3xl font-bold">$</span>
								<span className="text-6xl font-black">{estimatedPrice}</span>
								<span className="text-xl font-medium text-slate-400">*</span>
							</div>
							<p className="mt-3 text-xs font-medium text-slate-500">
								*Final price confirmed on-site before work begins.
							</p>
						</div>

						{/* CTA */}
						<div className="mt-8 flex flex-col gap-3 sm:flex-row">
							<a
								href="tel:0431234185"
								className="flex flex-1 items-center justify-center rounded-xl bg-[var(--warning)] px-6 py-4 text-base font-bold text-white transition hover:brightness-110 shadow-md shadow-orange-500/20"
							>
								Call to Book
							</a>
							<Link
								href="/contact"
								className="flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-6 py-4 text-base font-bold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
							>
								Request Callback <ArrowRight className="h-4 w-4" />
							</Link>
						</div>

					</div>
				</div>
			</div>
		</section>
	);
}