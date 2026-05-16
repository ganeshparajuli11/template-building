"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, LockKeyhole, Mail } from "lucide-react";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function LoginForm() {
	const router = useRouter();
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setIsSubmitting(true);
		router.push("/dashboard");
	};

	return (
		<Card className="w-full max-w-md border-slate-200 shadow-xl shadow-slate-200/60">
			<div className="mb-6">
				<p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--primary)]">Secure portal</p>
				<h2 className="mt-3 text-3xl font-black tracking-tight text-[var(--secondary)]">Admin login</h2>
				<p className="mt-2 text-sm leading-relaxed text-slate-600">
					Sign in to review leads, SEO performance, analytics summaries, and connector status.
				</p>
			</div>

			<form onSubmit={handleSubmit} className="space-y-5">
				<label className="block">
					<span className="mb-2 flex items-center gap-2 text-sm font-semibold text-[var(--secondary)]">
						<Mail className="h-4 w-4 text-[var(--primary)]" />
						Email address
					</span>
					<input
						type="email"
						name="email"
						autoComplete="email"
						required
						placeholder="admin@melbournepds.com.au"
						className="min-h-12 w-full rounded-xl border border-[var(--border)] bg-white px-4 text-base text-[var(--secondary)] outline-none transition placeholder:text-slate-400 focus:border-[var(--primary)] focus:ring-2 focus:ring-cyan-100"
					/>
				</label>

				<label className="block">
					<span className="mb-2 flex items-center gap-2 text-sm font-semibold text-[var(--secondary)]">
						<LockKeyhole className="h-4 w-4 text-[var(--primary)]" />
						Password
					</span>
					<input
						type="password"
						name="password"
						autoComplete="current-password"
						required
						placeholder="••••••••••••"
						className="min-h-12 w-full rounded-xl border border-[var(--border)] bg-white px-4 text-base text-[var(--secondary)] outline-none transition placeholder:text-slate-400 focus:border-[var(--primary)] focus:ring-2 focus:ring-cyan-100"
					/>
				</label>

				<div className="flex items-center justify-between gap-3 text-sm">
					<label className="flex items-center gap-2 text-slate-600">
						<input type="checkbox" className="h-4 w-4 rounded border-[var(--border)] text-[var(--primary)] focus:ring-[var(--primary)]" />
						Remember me
					</label>
					<a href="mailto:melbournepds@gmail.com" className="font-semibold text-[var(--primary)] hover:underline">
						Need access?
					</a>
				</div>

				<Button type="submit" className="w-full py-3 text-base" disabled={isSubmitting}>
					<span className="inline-flex items-center gap-2">
						{isSubmitting ? "Signing in..." : "Log in to dashboard"}
						<ArrowRight className="h-4 w-4" />
					</span>
				</Button>

				<p className="text-center text-xs leading-relaxed text-slate-500">
					Prototype access screen for the Melbourne PDS admin dashboard.
				</p>
			</form>
		</Card>
	);
}
