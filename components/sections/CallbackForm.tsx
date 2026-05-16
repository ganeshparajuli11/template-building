"use client";

import { Phone, Mail, Clock, ShieldCheck, Send, ChevronDown } from "lucide-react";
import { services } from "@/data/services";

export default function CallbackForm() {
	return (
		<section className="relative overflow-hidden bg-slate-100 border-t border-slate-200 py-20 sm:py-28" id="callback">
			
			<div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
				
				<div className="text-center mb-12 sm:mb-16">
					<h2 className="text-3xl font-black tracking-tight text-[var(--secondary)] sm:text-4xl md:text-5xl">
						Need a Plumber Fast?
					</h2>
					<p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
						Leave your details below and one of our licensed Melbourne experts will call you back within 10 minutes.
					</p>
				</div>

				<div className="overflow-hidden rounded-3xl bg-white shadow-2xl shadow-slate-300/50 ring-1 ring-slate-200 lg:flex">
					
					{/* Left: Contact Info & Trust (Vibrant Brand Gradient instead of Dark Theme) */}
					<div className="flex flex-col justify-between gradient-water p-10 text-white lg:w-5/12 xl:p-12">
						<div>
							<h3 className="text-2xl font-bold">Contact Us Directly</h3>
							<p className="mt-3 text-cyan-50 font-medium opacity-90">
								Skip the form for immediate emergency assistance.
							</p>

							<div className="mt-10 space-y-8">
								<div className="flex items-center gap-4">
									<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white shadow-inner">
										<Phone className="h-6 w-6" />
									</div>
									<div>
										<p className="text-sm font-semibold text-cyan-50 uppercase tracking-wider opacity-90">Call us 24/7</p>
										<a href="tel:0431234185" className="text-2xl font-black text-white hover:text-cyan-100 transition drop-shadow-sm">
											0431 234 185
										</a>
									</div>
								</div>
								
								<div className="flex items-center gap-4">
									<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white shadow-inner">
										<Mail className="h-6 w-6" />
									</div>
									<div>
										<p className="text-sm font-semibold text-cyan-50 uppercase tracking-wider opacity-90">Email us</p>
										<a href="mailto:melbournepds@gmail.com" className="text-lg font-bold text-white hover:text-cyan-100 transition break-all drop-shadow-sm">
											melbournepds@gmail.com
										</a>
									</div>
								</div>
							</div>
						</div>

						<div className="mt-12">
							<hr className="mb-8 border-white/20" />
							<ul className="space-y-4">
								<li className="flex items-center gap-3 text-white font-semibold">
									<div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
										<Clock className="h-4 w-4 text-white" />
									</div>
									Average response time: 20-35 mins
								</li>
								<li className="flex items-center gap-3 text-white font-semibold">
									<div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
										<ShieldCheck className="h-4 w-4 text-white" />
									</div>
									Fully Licensed & Insured
								</li>
							</ul>
						</div>
					</div>

					{/* Right: The Form */}
					<div className="p-8 sm:p-10 lg:w-7/12 xl:p-12">
						<h3 className="text-2xl font-bold text-[var(--secondary)]">Request a Callback</h3>
						<p className="mt-2 text-sm text-slate-500">
							Fill out this quick form. We prioritize emergency requests.
						</p>

						<form className="mt-8 grid gap-6 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
							
							{/* Name */}
							<div>
								<label htmlFor="name" className="mb-2 block text-sm font-bold text-slate-700">
									First Name <span className="text-red-500">*</span>
								</label>
								<input
									type="text"
									id="name"
									className="w-full rounded-xl border-2 border-slate-200 bg-slate-50 px-4 py-3 text-[var(--secondary)] outline-none transition focus:border-[var(--primary)] focus:bg-white"
									placeholder="John"
									required
								/>
							</div>

							{/* Phone */}
							<div>
								<label htmlFor="phone" className="mb-2 block text-sm font-bold text-slate-700">
									Phone Number <span className="text-red-500">*</span>
								</label>
								<input
									type="tel"
									id="phone"
									className="w-full rounded-xl border-2 border-slate-200 bg-slate-50 px-4 py-3 text-[var(--secondary)] outline-none transition focus:border-[var(--primary)] focus:bg-white"
									placeholder="0400 000 000"
									required
								/>
							</div>

							{/* Suburb */}
							<div>
								<label htmlFor="suburb" className="mb-2 block text-sm font-bold text-slate-700">
									Suburb
								</label>
								<input
									type="text"
									id="suburb"
									className="w-full rounded-xl border-2 border-slate-200 bg-slate-50 px-4 py-3 text-[var(--secondary)] outline-none transition focus:border-[var(--primary)] focus:bg-white"
									placeholder="e.g. Richmond"
								/>
							</div>

							{/* Service */}
							<div>
								<label htmlFor="service" className="mb-2 block text-sm font-bold text-slate-700">
									Service Needed
								</label>
								<div className="relative">
									<select
										id="service"
										className="w-full appearance-none rounded-xl border-2 border-slate-200 bg-slate-50 px-4 py-3 pr-10 text-[var(--secondary)] outline-none transition focus:border-[var(--primary)] focus:bg-white"
									>
										<option value="">Select a service...</option>
										{services.map((s) => (
											<option key={s.id} value={s.id}>{s.name}</option>
										))}
									</select>
									<ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
								</div>
							</div>

							{/* Message */}
							<div className="sm:col-span-2">
								<label htmlFor="message" className="mb-2 block text-sm font-bold text-slate-700">
									Brief Details (Optional)
								</label>
								<textarea
									id="message"
									rows={4}
									className="w-full resize-y rounded-xl border-2 border-slate-200 bg-slate-50 px-4 py-3 text-[var(--secondary)] outline-none transition focus:border-[var(--primary)] focus:bg-white"
									placeholder="Describe the issue you're facing..."
								></textarea>
							</div>

							{/* Submit & Privacy */}
							<div className="sm:col-span-2">
								<button
									type="submit"
									className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--primary)] px-8 py-4 text-lg font-bold text-white shadow-md transition hover:bg-[var(--primary-dark)]"
								>
									Submit Callback Request <Send className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
								</button>
								<p className="mt-4 text-center text-xs text-slate-500">
									We only use your details to respond to your plumbing request. No spam.
								</p>
							</div>
						</form>
					</div>

				</div>
			</div>
		</section>
	);
}