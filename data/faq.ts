export interface FAQItem {
	id: string;
	question: string;
	answer: string;
}

export const faqs: FAQItem[] = [
	{
		id: "faq-1",
		question: "Do you offer 24/7 emergency plumbing services?",
		answer: "Yes! Plumbing emergencies don't wait for business hours, and neither do we. Our licensed plumbers are available 24 hours a day, 7 days a week across all Melbourne suburbs. We aim to be at your door within 30-60 minutes for critical emergencies like burst pipes or severe gas leaks.",
	},
	{
		id: "faq-2",
		question: "How much does a call-out cost?",
		answer: "We believe in transparent, upfront pricing. Our standard call-out fees are highly competitive, and we always provide a fixed-price quote on-site before any work begins. This means no hidden fees and no surprises when you receive the final bill.",
	},
	{
		id: "faq-3",
		question: "Are your plumbers fully licensed and insured?",
		answer: "Absolutely. Every plumber at Melbourne PDS is fully qualified, VBA registered, and comprehensively insured. We guarantee all our workmanship, so you can have complete peace of mind knowing your property is in safe, professional hands.",
	},
	{
		id: "faq-4",
		question: "What areas of Melbourne do you service?",
		answer: "We service the entire Melbourne metropolitan area. From the CBD out to the eastern, western, northern, and southern suburbs, our fleet of fully-stocked vans is always nearby and ready to respond to your plumbing needs.",
	},
	{
		id: "faq-5",
		question: "Do you clear blocked drains?",
		answer: "Yes, clearing blocked drains is one of our specialties. We use advanced equipment, including CCTV drain cameras and high-pressure water jetters, to locate the exact cause of the blockage and clear it quickly and efficiently, preventing future issues.",
	},
	{
		id: "faq-6",
		question: "Can you help with gas leaks?",
		answer: "Yes. Gas leaks are incredibly dangerous and should be addressed immediately. Our team includes certified gas fitters who are equipped to detect, repair, and certify gas leaks safely and in full compliance with Victorian safety standards.",
	},
];
