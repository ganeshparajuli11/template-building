import { Clock, ShieldCheck, Star, Truck } from "lucide-react";

const trustItems = [
	{
		title: "24/7 Emergency",
		description: "Rapid response across Melbourne",
		icon: Clock,
	},
	{
		title: "Licensed & Insured",
		description: "VBA registered professionals",
		icon: ShieldCheck,
	},
	{
		title: "100% Satisfaction",
		description: "5-star rated on Google",
		icon: Star,
	},
	{
		title: "Fast Turnaround",
		description: "Same-day service available",
		icon: Truck,
	},
];

export default function TrustBar() {
	return (
		<section className="relative z-20 border-b border-slate-200 bg-white shadow-sm">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 divide-y divide-slate-100 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
					{trustItems.map((item) => {
						const Icon = item.icon;
						return (
							<div key={item.title} className="flex items-center gap-4 px-2 py-6 sm:px-6 lg:px-8">
								<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-[var(--primary)] ring-1 ring-cyan-100 transition-colors hover:bg-[var(--primary)] hover:text-white">
									<Icon className="h-6 w-6" strokeWidth={2} />
								</div>
								<div>
									<h3 className="text-base font-bold text-slate-900">{item.title}</h3>
									<p className="mt-0.5 text-sm font-medium text-slate-500">{item.description}</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}