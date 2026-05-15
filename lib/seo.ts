import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

type PageSEO = {
	title: string;
	description: string;
	path?: string;
	image?: string;
	noIndex?: boolean;
	keywords?: string[];
};

export function createMetadata({
	title = siteConfig.title,
	description = siteConfig.description,
	path = "",
	image = "/og-image.jpg",
	noIndex = false,
	keywords,
}: Partial<PageSEO> = {}): Metadata {
	const pageUrl = `${siteConfig.url}${path}`;

	return {
		title,
		description,
		keywords: keywords ?? siteConfig.keywords,
		metadataBase: new URL(siteConfig.url),
		alternates: {
			canonical: pageUrl,
		},
		openGraph: {
			title,
			description,
			url: pageUrl,
			siteName: siteConfig.name,
			images: [
				{
					url: image,
					width: 1200,
					height: 630,
					alt: `${title} — ${siteConfig.name}`,
				},
			],
			type: "website",
			locale: "en_AU",
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [image],
		},
		robots: noIndex
			? { index: false, follow: false }
			: {
					index: true,
					follow: true,
					googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
				},
	};
}
