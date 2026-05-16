"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { faqs } from "@/data/faq";

export default function FAQ() {
	const [openId, setOpenId] = useState<string | null>(faqs[0].id);

	const toggle = (id: string) => {
		setOpenId(openId === id ? null : id);
	};

	return (
		<section className="bg-white py-20 sm:py-28" id="faq">
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				
				<div className="text-center mb-14">
					<div className="inline-flex items-center justify-center rounded-full bg-cyan-100 p-3 mb-4">
						<HelpCircle className="h-8 w-8 text-[var(--primary)]" />
					</div>
					<h2 className="text-3xl font-black tracking-tight text-[var(--secondary)] sm:text-4xl md:text-5xl">
						Frequently Asked Questions
					</h2>
					<p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
						Got a question? We've got answers. If you can't find what you're looking for, feel free to give us a call.
					</p>
				</div>

				<div className="grid gap-4 md:grid-cols-2 items-start">
					{faqs.map((faq) => {
						const isOpen = openId === faq.id;
						
						return (
							<div 
								key={faq.id}
								className={`rounded-2xl border-2 transition-colors duration-300 ${isOpen ? 'border-[var(--primary)] bg-slate-50' : 'border-slate-200 bg-white hover:border-slate-300'}`}
							>
								<button
									onClick={() => toggle(faq.id)}
									className="flex w-full items-center justify-between gap-4 p-6 text-left"
									aria-expanded={isOpen}
								>
									<span className="text-lg font-bold text-[var(--secondary)]">
										{faq.question}
									</span>
									<div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${isOpen ? 'bg-[var(--primary)] text-white' : 'bg-slate-100 text-slate-500'}`}>
										{isOpen ? (
											<Minus className="h-5 w-5" />
										) : (
											<Plus className="h-5 w-5" />
										)}
									</div>
								</button>
								
								<div 
									className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
								>
									<div className="overflow-hidden">
										<div className="pb-6 px-6 pt-0 text-slate-600 leading-relaxed">
											{faq.answer}
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>

			</div>
		</section>
	);
}
