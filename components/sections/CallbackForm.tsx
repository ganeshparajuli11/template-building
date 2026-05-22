"use client";

import { useState } from "react";
import {
	Phone,
	Mail,
	Clock,
	ShieldCheck,
	Send,
	ChevronDown,
	MapPin,
} from "lucide-react";
import { services } from "@/data/services";

type FormState = {
	name: string;
	phone: string;
	suburb: string;
	service: string;
	message: string;
	honeypot: string;
};

const initialForm: FormState = {
	name: "",
	phone: "",
	suburb: "",
	service: "",
	message: "",
	honeypot: "",
};

export default function CallbackForm() {
	const [formState, setFormState] = useState<FormState>(initialForm);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [feedback, setFeedback] = useState<{
		type: "success" | "error";
		message: string;
	} | null>(null);

	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
	) => {
		const { id, value } = event.target;
		setFormState((current) => ({ ...current, [id]: value }));
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setFeedback(null);
		setIsSubmitting(true);

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formState),
			});

			const payload = (await response.json()) as { success?: boolean; message?: string };

			if (!response.ok || !payload.success) {
				throw new Error(payload.message ?? "Could not submit your request.");
			}

			setFeedback({
				type: "success",
				message:
					"Thanks! Your request has been sent. We’ll contact you shortly.",
			});
			setFormState(initialForm);
		} catch (error) {
			setFeedback({
				type: "error",
				message:
					error instanceof Error
						? error.message
						: "Could not submit your request. Please try again.",
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section
			className="relative overflow-hidden border-y border-slate-200 bg-gradient-to-b from-slate-50 to-white py-16 sm:py-24"
			id="callback"
		>
			<div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12 sm:mb-16">
					<h2 className="text-3xl font-black tracking-tight text-[var(--secondary)] sm:text-4xl md:text-5xl">
						Contact Melbourne PDS
					</h2>
					<p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
						Tell us what you need and our licensed team will call you back quickly.
					</p>
				</div>

				<div className="overflow-hidden rounded-3xl bg-white shadow-2xl shadow-slate-300/40 ring-1 ring-slate-200 lg:flex">
					<div className="flex flex-col justify-between gradient-water p-8 text-white lg:w-5/12 xl:p-10">
						<div>
							<h3 className="text-2xl font-bold">Need urgent help?</h3>
							<p className="mt-3 text-cyan-50 opacity-90">
								Call now for emergency plumbing support in Melbourne.
							</p>

							<div className="mt-8 space-y-6">
								<div className="flex items-center gap-4">
									<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white shadow-inner">
										<Phone className="h-6 w-6" />
									</div>
									<div>
										<p className="text-sm font-semibold uppercase tracking-wider text-cyan-50 opacity-90">
											Call us 24/7
										</p>
										<a
											href="tel:0431234185"
											className="text-2xl font-black text-white transition hover:text-cyan-100"
										>
											0431 234 185
										</a>
									</div>
								</div>

								<div className="flex items-center gap-4">
									<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white shadow-inner">
										<Mail className="h-6 w-6" />
									</div>
									<div>
										<p className="text-sm font-semibold uppercase tracking-wider text-cyan-50 opacity-90">
											Email
										</p>
										<a
											href="mailto:melbournepds@gmail.com"
											className="text-lg font-bold text-white transition hover:text-cyan-100"
										>
											melbournepds@gmail.com
										</a>
									</div>
								</div>

								<div className="flex items-center gap-4">
									<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white shadow-inner">
										<MapPin className="h-6 w-6" />
									</div>
									<div>
										<p className="text-sm font-semibold uppercase tracking-wider text-cyan-50 opacity-90">
											Service area
										</p>
										<p className="text-lg font-bold text-white">Melbourne Metro</p>
									</div>
								</div>
							</div>
						</div>

						<div className="mt-10">
							<hr className="mb-6 border-white/20" />
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

					<div className="p-8 sm:p-10 lg:w-7/12 xl:p-12">
						<h3 className="text-2xl font-bold text-[var(--secondary)]">Request a Callback</h3>
						<p className="mt-2 text-sm text-slate-500">
							Fill out the form and we’ll get back to you as soon as possible.
						</p>

						<form className="mt-8 grid gap-6 sm:grid-cols-2" onSubmit={handleSubmit}>
							<input
								id="honeypot"
								type="text"
								autoComplete="off"
								tabIndex={-1}
								className="hidden"
								value={formState.honeypot}
								onChange={handleChange}
							/>

							<div>
								<label htmlFor="name" className="mb-2 block text-sm font-bold text-slate-700">
									Full Name <span className="text-red-500">*</span>
								</label>
								<input
									type="text"
									id="name"
									value={formState.name}
									onChange={handleChange}
									className="w-full rounded-xl border-2 border-slate-200 bg-slate-50 px-4 py-3 text-[var(--secondary)] outline-none transition focus:border-[var(--primary)] focus:bg-white"
									placeholder="John Smith"
									autoComplete="name"
									required
								/>
							</div>

							<div>
								<label htmlFor="phone" className="mb-2 block text-sm font-bold text-slate-700">
									Phone Number <span className="text-red-500">*</span>
								</label>
								<input
									type="tel"
									id="phone"
									value={formState.phone}
									onChange={handleChange}
									className="w-full rounded-xl border-2 border-slate-200 bg-slate-50 px-4 py-3 text-[var(--secondary)] outline-none transition focus:border-[var(--primary)] focus:bg-white"
									placeholder="0400 000 000"
									autoComplete="tel"
									required
								/>
							</div>

							<div>
								<label htmlFor="suburb" className="mb-2 block text-sm font-bold text-slate-700">
									Suburb
								</label>
								<input
									type="text"
									id="suburb"
									value={formState.suburb}
									onChange={handleChange}
									className="w-full rounded-xl border-2 border-slate-200 bg-slate-50 px-4 py-3 text-[var(--secondary)] outline-none transition focus:border-[var(--primary)] focus:bg-white"
									placeholder="e.g. Richmond"
									autoComplete="address-level2"
								/>
							</div>

							<div>
								<label htmlFor="service" className="mb-2 block text-sm font-bold text-slate-700">
									Service Needed
								</label>
								<div className="relative">
									<select
										id="service"
										value={formState.service}
										onChange={handleChange}
										className="w-full appearance-none rounded-xl border-2 border-slate-200 bg-slate-50 px-4 py-3 pr-10 text-[var(--secondary)] outline-none transition focus:border-[var(--primary)] focus:bg-white"
									>
										<option value="">Select a service...</option>
										{services.map((s) => (
											<option key={s.id} value={s.name}>
												{s.name}
											</option>
										))}
									</select>
									<ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
								</div>
							</div>

							<div className="sm:col-span-2">
								<label htmlFor="message" className="mb-2 block text-sm font-bold text-slate-700">
									Brief Details (Optional)
								</label>
								<textarea
									id="message"
									rows={4}
									value={formState.message}
									onChange={handleChange}
									className="w-full resize-y rounded-xl border-2 border-slate-200 bg-slate-50 px-4 py-3 text-[var(--secondary)] outline-none transition focus:border-[var(--primary)] focus:bg-white"
									placeholder="Describe the issue you're facing..."
								/>
							</div>

							<div className="sm:col-span-2">
								{feedback && (
									<div
										className={`mb-4 rounded-xl px-4 py-3 text-sm font-semibold ${
											feedback.type === "success"
												? "bg-emerald-50 text-emerald-700"
												: "bg-red-50 text-red-700"
										}`}
									>
										{feedback.message}
									</div>
								)}
								<button
									type="submit"
									disabled={isSubmitting}
									className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--primary)] px-8 py-4 text-lg font-bold text-white shadow-md transition hover:bg-[var(--primary-dark)]"
								>
									{isSubmitting ? "Submitting..." : "Submit Callback Request"}
									<Send className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
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