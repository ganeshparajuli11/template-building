import type { Review } from "@/types";

export interface ExtendedReview extends Review {
	date?: string;
	initials?: string;
}

export const reviews: ExtendedReview[] = [
	{
		id: "rev-1",
		author: "Adam Tait",
		initials: "AT",
		rating: 5,
		date: "2 weeks ago",
		text: "Absolutely fantastic service. I called at 10pm with a blocked drain that was backing up into the house. The plumber arrived within 30 minutes, gave a clear quote upfront, and sorted the problem right away. Highly recommend Melbourne PDS!",
	},
	{
		id: "rev-2",
		author: "Wayne Gibson",
		initials: "WG",
		rating: 5,
		date: "1 month ago",
		text: "Very professional team. They replaced our old leaking hot water system with a new one on the same day we called. The guys were polite, cleaned up after themselves, and the pricing was very reasonable. Will use them again.",
	},
	{
		id: "rev-3",
		author: "Sarah Jenkins",
		initials: "SJ",
		rating: 5,
		date: "3 months ago",
		text: "I had a suspected gas leak and was quite stressed. They sent someone over immediately to test and fix the issue. The plumber was incredibly reassuring and knowledgeable. Excellent emergency response time.",
	},
	{
		id: "rev-4",
		author: "Varun Chandra",
		initials: "VC",
		rating: 5,
		date: "3 months ago",
		text: "Drain fix thanks Taylor for coming out on a holiday Australia day and fixing the blocked drain it was an absolute lifesaver.",
	},
	{
		id: "rev-5",
		author: "Gimani Asmitha",
		initials: "GA",
		rating: 5,
		date: "3 months ago",
		text: "Taylor's and this business been a life saver with their efficiency and skills! Had my shower water leak fixed on the spot with a great price.",
	},
	{
		id: "rev-6",
		author: "H F",
		initials: "HF",
		rating: 5,
		date: "3 months ago",
		text: "Very fast response time and very helpful. The team explained everything clearly and got the job done without any fuss.",
	},
];