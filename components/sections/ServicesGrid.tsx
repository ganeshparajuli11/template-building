import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { services, type ExtendedService } from "@/data/services";

export default function ServicesGrid() {
	return (
		<section className="bg-slate-50 py-20 sm:py-28">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mb-14 text-center md:mb-20">
					<h2 className="text-sm font-bold uppercase tracking-wider text-[var(--primary)]">Our Plumbing Services</h2>
					<p className="mt-3 text-3xl font-black text-[#0b1d3a] sm:text-4xl md:text-5xl">
						Reliable Solutions For Every Issue
					</p>
					<p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
						From minor leaks to major emergencies, our licensed plumbers have the expertise and equipment to get the job done right the first time.
					</p>
				</div>

				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{services.map((service) => {
						const extended = service as ExtendedService;
						const imageSrc = extended.imageUrl || "/images/bg-image.png";

						return (
							<Link
								key={service.id}
								href={`/services`}
								className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-[var(--primary)]/10 hover:ring-[var(--primary)]/30"
							>
								<div className="relative h-48 w-full overflow-hidden bg-slate-100">
									<Image
										src={imageSrc}
										alt={service.name}
										fill
										sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
										className="object-cover transition-transform duration-500 group-hover:scale-105"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
								</div>
								
								<div className="flex flex-1 flex-col p-6">
									<h3 className="text-xl font-bold text-slate-900 group-hover:text-[var(--primary)] transition-colors">{service.name}</h3>
									<p className="mt-2 text-sm leading-relaxed text-slate-600 flex-1">{service.summary}</p>
									
									<div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
										<span className="text-sm font-semibold text-slate-900">
											From ${service.priceFrom}
										</span>
										<span className="inline-flex items-center gap-1 text-sm font-bold text-[var(--primary)] transition-transform group-hover:translate-x-1">
											Learn more <ArrowRight className="h-4 w-4" />
										</span>
									</div>
								</div>
							</Link>
						);
					})}
				</div>

				<div className="mt-14 flex justify-center md:mt-20">
					<Link
						href="/services"
						className="inline-flex h-14 items-center justify-center rounded-full bg-[#0b1d3a] px-8 text-base font-bold text-white shadow-md transition hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b1d3a]"
					>
						View All Services
					</Link>
				</div>
			</div>
		</section>
	);
}