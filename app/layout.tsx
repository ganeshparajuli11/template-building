import type { Metadata } from "next";
import "./globals.css";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = createMetadata();

const localBusinessSchema = {
	"@context": "https://schema.org",
	"@type": ["LocalBusiness", "Plumber"],
	"@id": `${siteConfig.url}/#business`,
	name: siteConfig.name,
	description: siteConfig.description,
	url: siteConfig.url,
	logo: `${siteConfig.url}/logo.png`,
	image: `${siteConfig.url}/images/person-with-van.webp`,
	telephone: siteConfig.phoneRaw,
	email: siteConfig.email,
	address: {
		"@type": "PostalAddress",
		addressLocality: siteConfig.address.locality,
		addressRegion: siteConfig.address.region,
		postalCode: siteConfig.address.postalCode,
		addressCountry: siteConfig.address.country,
	},
	geo: {
		"@type": "GeoCoordinates",
		latitude: siteConfig.geo.lat,
		longitude: siteConfig.geo.lng,
	},
	openingHours: siteConfig.openingHours,
	priceRange: siteConfig.priceRange,
	areaServed: {
		"@type": "City",
		name: "Melbourne",
	},
	aggregateRating: {
		"@type": "AggregateRating",
		ratingValue: "5.0",
		reviewCount: "58",
	},
	hasOfferCatalog: {
		"@type": "OfferCatalog",
		name: "Plumbing Services",
		itemListElement: [
			{ "@type": "Offer", itemOffered: { "@type": "Service", name: "Emergency Plumbing" } },
			{ "@type": "Offer", itemOffered: { "@type": "Service", name: "Blocked Drain Clearing" } },
			{ "@type": "Offer", itemOffered: { "@type": "Service", name: "Hot Water System Repair" } },
			{ "@type": "Offer", itemOffered: { "@type": "Service", name: "Burst Pipe Repair" } },
			{ "@type": "Offer", itemOffered: { "@type": "Service", name: "Leak Detection" } },
		],
	},
	sameAs: [siteConfig.socialLinks.facebook],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en-AU" suppressHydrationWarning>
			<head suppressHydrationWarning />
			<body suppressHydrationWarning>
				<script type="application/ld+json" suppressHydrationWarning>
					{JSON.stringify(localBusinessSchema)}
				</script>
				{children}
			</body>
		</html>
	);
}
