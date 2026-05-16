"use client";

import { Star, ChevronLeft, ChevronRight, BadgeCheck } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { reviews, type ExtendedReview } from "@/data/reviews";

const avatarColors = [
	"bg-blue-600",
	"bg-green-600",
	"bg-orange-600",
	"bg-purple-600",
	"bg-rose-600",
	"bg-cyan-600",
];

export default function Reviews() {
	const scrollRef = useRef<HTMLDivElement>(null);
	const [canScrollLeft, setCanScrollLeft] = useState(false);
	const [canScrollRight, setCanScrollRight] = useState(true);

	const checkScroll = () => {
		if (scrollRef.current) {
			const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
			setCanScrollLeft(scrollLeft > 0);
			setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
		}
	};

	useEffect(() => {
		checkScroll();
		window.addEventListener('resize', checkScroll);
		return () => window.removeEventListener('resize', checkScroll);
	}, []);

	const scroll = (direction: 'left' | 'right') => {
		if (scrollRef.current) {
			const { clientWidth } = scrollRef.current;
			// Scroll by almost the full width, minus a little gap
			const scrollAmount = direction === 'left' ? -clientWidth + 40 : clientWidth - 40;
			scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
		}
	};

	// Auto slide
	useEffect(() => {
		const timer = setInterval(() => {
			if (scrollRef.current) {
				const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
				if (scrollLeft >= scrollWidth - clientWidth - 10) {
					// Reset to start if at the end
					scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
				} else {
					scroll('right');
				}
			}
		}, 5000);
		return () => clearInterval(timer);
	}, []);

	return (
		<section className="bg-slate-50 py-20 sm:py-28 overflow-hidden">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				
				<div className="flex flex-col gap-12 lg:flex-row lg:items-center">
					
					{/* Left: Overall Rating Sidebar */}
					<div className="flex flex-col items-center justify-center text-center lg:w-1/4 lg:items-start lg:text-left shrink-0">
						<h2 className="text-2xl font-black tracking-widest text-slate-900 uppercase">Excellent</h2>
						<div className="mt-3 flex gap-1">
							{[1, 2, 3, 4, 5].map((star) => (
								<Star key={star} className="h-8 w-8 fill-amber-400 text-amber-400" />
							))}
						</div>
						<p className="mt-3 text-sm font-semibold text-slate-700">
							Based on <span className="font-black">58 reviews</span>
						</p>
						
						{/* Clean Google Rating Logo */}
						<div className="mt-6 flex items-center gap-3 rounded-full bg-white px-5 py-2.5 shadow-sm ring-1 ring-slate-200">
							<svg viewBox="0 0 24 24" className="h-6 w-6">
								<path fill="#4285F4" d="M23.745 12.27c0-.827-.067-1.626-.202-2.395H12v4.53h6.58c-.286 1.487-1.125 2.748-2.388 3.596v2.968h3.864c2.26-2.08 3.565-5.143 3.565-8.7H23.745z"/>
								<path fill="#34A853" d="M12 24c3.24 0 5.955-1.08 7.942-2.93l-3.864-2.967c-1.077.72-2.454 1.154-4.078 1.154-3.136 0-5.795-2.115-6.745-4.96h-3.996v3.086C3.266 21.282 7.27 24 12 24z"/>
								<path fill="#FBBC05" d="M5.255 15.297c-.244-.72-.382-1.492-.382-2.297s.138-1.577.382-2.297V7.617H1.26C.46 9.205 0 10.552 0 12s.46 2.795 1.26 4.383l3.995-3.086z"/>
								<path fill="#EA4335" d="M12 4.743c1.764 0 3.348.608 4.59 1.796l3.435-3.434C17.95 1.185 15.24 0 12 0 7.27 0 3.266 2.718 1.26 7.617l3.996 3.086c.95-2.845 3.61-4.96 6.744-4.96z"/>
							</svg>
							<span className="font-bold text-slate-800 tracking-tight">Google</span>
						</div>
					</div>

					{/* Right: Scrollable Carousel */}
					<div className="relative lg:w-3/4">
						
						{/* Controls */}
						<button 
							onClick={() => scroll('left')}
							className={`absolute -left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-800 shadow-lg ring-1 ring-slate-200 transition-all hover:scale-110 sm:-left-6 ${!canScrollLeft ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
							aria-label="Previous reviews"
						>
							<ChevronLeft className="h-6 w-6" />
						</button>
						<button 
							onClick={() => scroll('right')}
							className={`absolute -right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-800 shadow-lg ring-1 ring-slate-200 transition-all hover:scale-110 sm:-right-6 ${!canScrollRight ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
							aria-label="Next reviews"
						>
							<ChevronRight className="h-6 w-6" />
						</button>

						{/* Scroll Track */}
						<div className="relative -mx-4 px-4 sm:mx-0 sm:px-0">
							{/* Adding some padding so shadows don't get clipped */}
							<div 
								ref={scrollRef}
								onScroll={checkScroll}
								className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 hide-scrollbar"
								style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
							>
								{/* Hide standard scrollbars via custom inline style above, plus we will add a global class later if needed */}
								<style dangerouslySetInnerHTML={{__html: `
									.hide-scrollbar::-webkit-scrollbar { display: none; }
								`}} />

								{reviews.map((review, index) => {
									const extended = review as ExtendedReview;
									const bgColor = avatarColors[index % avatarColors.length];
									
									return (
										<div
											key={`${review.id}-${index}`}
											className="w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-center rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-200 flex flex-col justify-between"
										>
											<div>
												<div className="mb-5 flex items-center justify-between">
													<div className="flex items-center gap-3">
														<div className={`flex h-11 w-11 items-center justify-center rounded-full text-base font-bold text-white shadow-sm ${bgColor}`}>
															{extended.initials || review.author.charAt(0)}
														</div>
														<div>
															<p className="font-bold text-slate-900">{review.author}</p>
															<p className="text-xs font-medium text-slate-500">{extended.date || "Recently"}</p>
														</div>
													</div>
													{/* Simple G logo */}
													<div className="flex h-6 w-6 items-center justify-center">
														<svg viewBox="0 0 24 24" className="w-full h-full">
															<path fill="#4285F4" d="M23.745 12.27c0-.827-.067-1.626-.202-2.395H12v4.53h6.58c-.286 1.487-1.125 2.748-2.388 3.596v2.968h3.864c2.26-2.08 3.565-5.143 3.565-8.7H23.745z"/>
															<path fill="#34A853" d="M12 24c3.24 0 5.955-1.08 7.942-2.93l-3.864-2.967c-1.077.72-2.454 1.154-4.078 1.154-3.136 0-5.795-2.115-6.745-4.96h-3.996v3.086C3.266 21.282 7.27 24 12 24z"/>
															<path fill="#FBBC05" d="M5.255 15.297c-.244-.72-.382-1.492-.382-2.297s.138-1.577.382-2.297V7.617H1.26C.46 9.205 0 10.552 0 12s.46 2.795 1.26 4.383l3.995-3.086z"/>
															<path fill="#EA4335" d="M12 4.743c1.764 0 3.348.608 4.59 1.796l3.435-3.434C17.95 1.185 15.24 0 12 0 7.27 0 3.266 2.718 1.26 7.617l3.996 3.086c.95-2.845 3.61-4.96 6.744-4.96z"/>
														</svg>
													</div>
												</div>
												<div className="mb-4 flex items-center gap-1">
													{[1, 2, 3, 4, 5].map((star) => (
														<Star key={star} className="h-4 w-4 fill-amber-400 text-amber-400" />
													))}
													<BadgeCheck className="ml-1 h-4 w-4 text-blue-500 fill-white" />
												</div>
												<p className="text-sm leading-relaxed text-slate-700">
													&ldquo;{review.text}&rdquo;
												</p>
											</div>
										</div>
									);
								})}
							</div>
						</div>

					</div>
				</div>

			</div>
		</section>
	);
}