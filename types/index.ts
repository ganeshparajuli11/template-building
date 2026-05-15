export interface Service {
	id: string;
	name: string;
	slug: string;
	summary: string;
	priceFrom: number;
}

export interface Location {
	id: string;
	city: string;
	area: string;
	responseTime: string;
}

export interface Review {
	id: string;
	author: string;
	rating: number;
	text: string;
}

export interface Lead {
	id: string;
	name: string;
	service: string;
	source: "call" | "whatsapp" | "form";
	status: "new" | "contacted" | "quoted";
}

export interface DashboardMetric {
	label: string;
	value: string;
	trend: string;
}
