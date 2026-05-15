import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export function createMetadata(): Metadata {
	return {
		title: siteConfig.title,
		description: siteConfig.description,
		keywords: siteConfig.keywords,
		openGraph: {
			title: siteConfig.title,
			description: siteConfig.description,
			url: siteConfig.url,
			siteName: siteConfig.name,
			type: "website",
		},
	};
}
