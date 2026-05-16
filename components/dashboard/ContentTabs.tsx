"use client";

import { useMemo, useState } from "react";

import AdminCard from "@/components/admin/AdminCard";

const tabs = [
  "Hero Section",
  "Navigation",
  "Trust Bar",
  "Services",
  "About Section",
  "Reviews",
  "Locations",
  "FAQ",
  "CTA Sections",
  "Footer",
  "Contact Details",
] as const;

type TabName = (typeof tabs)[number];

const defaultContent: Record<TabName, { summary: string; fields: string[] }> = {
  "Hero Section": {
    summary: "Manage headline, subheading, hero image, and primary call-to-action.",
    fields: ["Headline", "Subheadline", "Primary CTA Label", "Secondary CTA Label"],
  },
  Navigation: {
    summary: "Control top navigation labels, order, and quick actions.",
    fields: ["Menu Item Labels", "Order", "Phone CTA", "WhatsApp CTA"],
  },
  "Trust Bar": {
    summary: "Update trust badges and credibility highlights.",
    fields: ["Badge 1", "Badge 2", "Badge 3", "Badge 4"],
  },
  Services: {
    summary: "Edit service cards, descriptions, and linked pages.",
    fields: ["Service Title", "Service Description", "Service Link", "Image URL"],
  },
  "About Section": {
    summary: "Maintain business story, highlights, and team messaging.",
    fields: ["About Heading", "About Copy", "Feature 1", "Feature 2"],
  },
  Reviews: {
    summary: "Manage testimonial content and overall review positioning.",
    fields: ["Reviewer Name", "Review Text", "Rating", "Source"],
  },
  Locations: {
    summary: "Manage service area content and suburb/location descriptions.",
    fields: ["Location Name", "Coverage Description", "Nearby Areas", "URL Slug"],
  },
  FAQ: {
    summary: "Edit frequently asked questions and answers.",
    fields: ["Question", "Answer", "Category", "Order"],
  },
  "CTA Sections": {
    summary: "Configure conversion-focused call-to-action blocks.",
    fields: ["CTA Heading", "CTA Body", "Button Label", "Button Link"],
  },
  Footer: {
    summary: "Manage footer links, legal text, and support details.",
    fields: ["Footer Heading", "Quick Link Labels", "Copyright", "Legal Link"],
  },
  "Contact Details": {
    summary: "Update business phone, email, address, and operating hours.",
    fields: ["Phone", "Email", "Address", "Business Hours"],
  },
};

export default function ContentTabs() {
  const [activeTab, setActiveTab] = useState<TabName>("Hero Section");

  const content = useMemo(() => defaultContent[activeTab], [activeTab]);

  return (
    <section className="space-y-5">
      <AdminCard className="p-3 sm:p-4">
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => {
            const isActive = tab === activeTab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`rounded-xl border px-3 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "border-[#c9d6ff] bg-[#eef4ff] text-[#335cff]"
                    : "border-[#e5e7eb] bg-white text-[#6b7280] hover:bg-[#f8fafc] hover:text-[#111827]"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </AdminCard>

      <AdminCard>
        <div className="space-y-2">
          <h3 className="text-2xl font-extrabold tracking-tight text-[#111827]">{activeTab}</h3>
          <p className="text-sm text-[#6b7280]">{content.summary}</p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {content.fields.map((field) => (
            <label key={field} className="block">
              <span className="mb-2 block text-sm font-semibold text-[#4b5563]">{field}</span>
              <input
                type="text"
                placeholder={`Enter ${field.toLowerCase()}`}
                className="min-h-11 w-full rounded-xl border border-[#d8dee8] bg-white px-3 text-sm text-[#111827] outline-none transition focus:border-[#9bb2ff] focus:ring-2 focus:ring-[#edf2ff]"
              />
            </label>
          ))}
        </div>

        <label className="mt-4 block">
          <span className="mb-2 block text-sm font-semibold text-[#4b5563]">Notes</span>
          <textarea
            rows={4}
            placeholder={`Write notes or long-form content for ${activeTab.toLowerCase()}...`}
            className="w-full rounded-xl border border-[#d8dee8] bg-white px-3 py-2 text-sm text-[#111827] outline-none transition focus:border-[#9bb2ff] focus:ring-2 focus:ring-[#edf2ff]"
          />
        </label>

        <div className="mt-5 flex justify-end">
          <button
            type="button"
            className="rounded-xl border border-[#335cff] bg-[#335cff] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#2b4cf1]"
          >
            Save {activeTab}
          </button>
        </div>
      </AdminCard>
    </section>
  );
}
