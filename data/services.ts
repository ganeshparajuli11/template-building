import type { Service } from "@/types";

export interface ExtendedService extends Service {
	imageUrl?: string;
}

export const services: ExtendedService[] = [
	{
		id: "service-blocked-drains",
		name: "Blocked Drains",
		slug: "blocked-drains",
		summary: "High-pressure jet blasting to clear tough clogs and blockages fast.",
		priceFrom: 89,
		imageUrl: "/images/service-blocked-drains.png",
	},
	{
		id: "service-burst-pipes",
		name: "Burst Pipes",
		slug: "burst-pipes",
		summary: "24/7 emergency response to repair burst pipes and stop water damage.",
		priceFrom: 120,
		imageUrl: "/images/service-leaking-taps.png", // Reuse placeholder
	},
	{
		id: "service-hot-water",
		name: "Hot Water Systems",
		slug: "hot-water-systems",
		summary: "Repair, replacement, and installation of all hot water heaters.",
		priceFrom: 150,
		imageUrl: "/images/service-hot-water.png",
	},
	{
		id: "service-gas-fitting",
		name: "Gas Fitting",
		slug: "gas-fitting",
		summary: "Safe gas appliance installation and leak detection by licensed fitters.",
		priceFrom: 130,
		imageUrl: "/images/service-hot-water.png", // Reuse placeholder
	},
	{
		id: "service-leaking-taps",
		name: "Leaking Taps",
		slug: "leaking-taps",
		summary: "Fix dripping taps to save water and reduce your utility bills.",
		priceFrom: 69,
		imageUrl: "/images/service-leaking-taps.png",
	},
	{
		id: "service-cctv",
		name: "CCTV Inspections",
		slug: "cctv-inspections",
		summary: "Advanced camera inspections to diagnose hidden pipe issues accurately.",
		priceFrom: 199,
		imageUrl: "/images/service-blocked-drains.png", // Reuse placeholder
	},
	{
		id: "service-bathroom",
		name: "Bathroom Renovations",
		slug: "bathroom-renovations",
		summary: "Complete plumbing for your bathroom remodels and upgrades.",
		priceFrom: 499,
		imageUrl: "/images/service-bathroom.png",
	},
	{
		id: "service-pipe-relining",
		name: "Pipe Relining",
		slug: "pipe-relining",
		summary: "No-dig pipe repair solutions to restore damaged drains efficiently.",
		priceFrom: 899,
		imageUrl: "/images/service-blocked-drains.png", // Reuse placeholder
	},
];