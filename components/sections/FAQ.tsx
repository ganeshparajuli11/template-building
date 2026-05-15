"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import Card from "@/components/ui/Card";

const faqs = [
  {
    id: "faq-1",
    question: "How quickly can you respond to emergency plumbing calls?",
    answer:
      "We offer 24/7 emergency response with typical response times of 20-35 minutes within Melbourne metro areas. Call us immediately at 0431 234 185 for urgent issues.",
  },
  {
    id: "faq-2",
    question: "Do you provide upfront quotes?",
    answer:
      "Yes. We provide transparent, upfront quotes after assessing your issue. Emergency callout fee is $89, with no hidden charges. Use our instant quote estimator on this site.",
  },
  {
    id: "faq-3",
    question: "What areas do you service?",
    answer:
      "We cover all of Melbourne and surrounding suburbs including Point Cook, Berwick, Glen Waverley, Sunbury, and more. Check our Locations page for your area.",
  },
  {
    id: "faq-4",
    question: "Are you licensed and insured?",
    answer:
      "Absolutely. All our plumbers are fully licensed, insured, and registered with the Victoria Building Authority (VBA). Your safety and property are protected.",
  },
  {
    id: "faq-5",
    question: "Can you do bathroom renovations?",
    answer:
      "Yes. We handle full bathroom plumbing, from fixture installation to relocation and renovation support. Get a quote through our Contact page.",
  },
  {
    id: "faq-6",
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, card, and bank transfer. Invoices are issued on the spot after service completion.",
  },
];

export default function FAQ() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-[var(--secondary)]">
          Frequently asked questions
        </h2>
        <p className="mt-2 text-sm text-[var(--text-light)]">
          Everything you need to know about our plumbing services.
        </p>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {faqs.map((faq) => (
          <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = React.useState(false);

  return (
    <Card
      className="cursor-pointer transition-all hover:shadow-md"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="flex-1 text-sm font-semibold text-[var(--secondary)]">
          {question}
        </h3>
        <ChevronDown
          className={`h-4 w-4 flex-shrink-0 text-[var(--primary)] transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>
      {open && (
        <p className="mt-3 text-sm text-[var(--text-light)] leading-relaxed">
          {answer}
        </p>
      )}
    </Card>
  );
}
