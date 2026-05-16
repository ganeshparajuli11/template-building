import type { Metadata } from "next";
import CTA from "@/components/sections/CTA";
import CallbackForm from "@/components/sections/CallbackForm";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import LocalSeoContent from "@/components/sections/LocalSeoContent";
import Locations from "@/components/sections/Locations";
import Navbar from "@/components/layout/Navbar";
import QuoteEstimator from "@/components/sections/QuoteEstimator";
import Reviews from "@/components/sections/Reviews";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ScrollReveal from "@/components/sections/ScrollReveal";
import TrustBar from "@/components/sections/TrustBar";
import { siteConfig } from "@/config/site";
import { services } from "@/data/services";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
	title: "Melbourne Plumbing & Drainage Solutions | 24/7 Emergency Plumber Melbourne",
	description:
		"24/7 emergency plumbing in Melbourne. Blocked drains, burst pipes, hot water repairs, same-day response. Licensed & insured. Call 0431 234 185 now.",
	path: "/",
	image: "/images/person-with-van.webp",
	keywords: [
		"emergency plumber Melbourne",
		"24/7 plumber Melbourne",
		"blocked drains Melbourne",
		"burst pipes Melbourne",
		"hot water repair Melbourne",
		"plumber near me Melbourne",
		"same day plumber",
	],
});

const faqSchema = {
	"@context": "https://schema.org",
	"@type": "FAQPage",
	mainEntity: [
		{
			"@type": "Question",
			name: "How quickly can you respond to emergency plumbing calls?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "We offer 24/7 emergency response with typical response times of 20-35 minutes within Melbourne metro areas. Call us immediately at 0431 234 185 for urgent issues.",
			},
		},
		{
			"@type": "Question",
			name: "Do you provide upfront quotes?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "Yes. We provide transparent, upfront quotes after assessing your issue. Emergency callout fee is $89, with no hidden charges.",
			},
		},
		{
			"@type": "Question",
			name: "What areas do you service?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "We cover all of Melbourne and surrounding suburbs including Point Cook, Berwick, Glen Waverley, Sunbury, and more.",
			},
		},
		{
			"@type": "Question",
			name: "Are you licensed and insured?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "All our plumbers are fully licensed, insured, and registered with the Victoria Building Authority (VBA). Your safety and property are protected.",
			},
		},
		{
			"@type": "Question",
			name: "Can you do bathroom renovations?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "Yes. We handle full bathroom plumbing, from fixture installation to relocation and renovation support.",
			},
		},
		{
			"@type": "Question",
			name: "What payment methods do you accept?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "We accept cash, card, and bank transfer. Invoices are issued on the spot after service completion.",
			},
		},
	],
};

const websiteSchema = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	"@id": `${siteConfig.url}/#website`,
	url: siteConfig.url,
	name: siteConfig.name,
	description: siteConfig.description,
	inLanguage: "en-AU",
	publisher: {
		"@id": `${siteConfig.url}/#business`,
	},
};

const webpageSchema = {
	"@context": "https://schema.org",
	"@type": "WebPage",
	"@id": `${siteConfig.url}/#webpage`,
	url: siteConfig.url,
	name: "Emergency Plumber Melbourne | Melbourne Plumbing and Drainage Solutions",
	description: siteConfig.description,
	inLanguage: "en-AU",
	isPartOf: {
		"@id": `${siteConfig.url}/#website`,
	},
	about: {
		"@id": `${siteConfig.url}/#business`,
	},
	primaryImageOfPage: {
		"@type": "ImageObject",
		url: `${siteConfig.url}/images/person-with-van.webp`,
	},
	breadcrumb: {
		"@type": "BreadcrumbList",
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Home",
				item: siteConfig.url,
			},
		],
	},
};

const itemListSchema = {
	"@context": "https://schema.org",
	"@type": "ItemList",
	name: "Top plumbing services in Melbourne",
	itemListElement: services.slice(0, 5).map((service, index) => ({
		"@type": "ListItem",
		position: index + 1,
		name: service.name,
		url: `${siteConfig.url}/services`,
	})),
};

export default function Home() {
	return (
		<>
			<script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
			<script type="application/ld+json">{JSON.stringify(webpageSchema)}</script>
			<script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
			<script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
			<div className="min-h-screen bg-[var(--background)]">
				<Navbar />
				<main>
					<Hero />
					<ScrollReveal delay={0.05}><TrustBar /></ScrollReveal>
					<ScrollReveal delay={0.08}><ServicesGrid /></ScrollReveal>
					<ScrollReveal delay={0.1}><QuoteEstimator /></ScrollReveal>
					<ScrollReveal delay={0.12}><CallbackForm /></ScrollReveal>
					<ScrollReveal delay={0.14}><Reviews /></ScrollReveal>
					<ScrollReveal delay={0.16}><FAQ /></ScrollReveal>
					<ScrollReveal delay={0.18}><Locations /></ScrollReveal>
					<ScrollReveal delay={0.2}><LocalSeoContent /></ScrollReveal>
					<ScrollReveal delay={0.22}><CTA /></ScrollReveal>
				</main>
				<Footer />
			</div>
		</>
	);
}
