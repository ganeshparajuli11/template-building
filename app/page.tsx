import type { Metadata } from "next";
import CTA from "@/components/sections/CTA";
import CallbackForm from "@/components/sections/CallbackForm";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Locations from "@/components/sections/Locations";
import Navbar from "@/components/layout/Navbar";
import QuoteEstimator from "@/components/sections/QuoteEstimator";
import Reviews from "@/components/sections/Reviews";
import ServicesGrid from "@/components/sections/ServicesGrid";
import TrustBar from "@/components/sections/TrustBar";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
	title: "Melbourne Plumbing & Drainage Solutions | 24/7 Emergency Plumber Melbourne",
	description:
		"24/7 emergency plumbing in Melbourne. Blocked drains, burst pipes, hot water repairs, same-day response. Licensed & insured. Call 0431 234 185 now.",
	path: "/",
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

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="min-h-screen bg-[var(--background)]">
        <Navbar />
        <Hero />
        <TrustBar />
        <ServicesGrid />
        <QuoteEstimator />
        <CallbackForm />
        <Reviews />
        <FAQ />
        <Locations />
        <CTA />
        <Footer />
      </div>
    </>
  );
}
