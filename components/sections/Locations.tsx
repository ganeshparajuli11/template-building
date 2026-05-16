import { locations } from "@/data/locations";
import { MapPin, Clock } from "lucide-react";

export default function Locations() {
	return (
		<section className="bg-slate-50 py-20 sm:py-28" id="locations">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				
				<div className="text-center mb-14 md:mb-20">
					<span className="mb-3 block text-sm font-bold uppercase tracking-widest text-[var(--primary)]">
						Fast & Local
					</span>
					<h2 className="text-3xl font-black tracking-tight text-[var(--secondary)] sm:text-4xl md:text-5xl">
						Melbourne Service Areas
					</h2>
					<p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
						We have fully-stocked vans stationed across Melbourne, ready to dispatch to your location immediately.
					</p>
				</div>

				<div className="grid gap-6 md:grid-cols-3">
					{locations.map((location) => (
						<div 
							key={location.id}
							className="group relative overflow-hidden rounded-3xl bg-white p-8 text-center shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:ring-2 hover:ring-[var(--primary)]"
						>
							<div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-cyan-50 text-[var(--primary)] transition-transform duration-300 group-hover:scale-110 group-hover:bg-cyan-100">
								<MapPin className="h-10 w-10" />
							</div>
							
							<h3 className="text-2xl font-black text-[var(--secondary)]">{location.city}</h3>
							<p className="mt-3 text-slate-500 font-medium min-h-[3rem] px-4">{location.area}</p>
							
							<div className="mt-8 flex items-center justify-center gap-2 rounded-xl bg-slate-50 py-3.5 text-sm font-bold text-[var(--secondary)] transition-colors group-hover:bg-cyan-50">
								<Clock className="h-5 w-5 text-[var(--primary)]" />
								<span>Response: <span className="text-[var(--primary)]">{location.responseTime}</span></span>
							</div>
						</div>
					))}
				</div>

			</div>
		</section>
	);
}