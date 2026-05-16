import AdminPageHeader from "@/components/admin/AdminPageHeader";
import SEOScoreCard from "@/components/dashboard/SEOScoreCard";
import AdminCard from "@/components/admin/AdminCard";

export default function SEOPage() {
	return (
		<section className="space-y-4">
			<AdminPageHeader
				title="SEO"
				subtitle="Track technical SEO health, indexing readiness, and high-impact optimization actions."
			/>
			<div className="grid gap-5 xl:grid-cols-[1.1fr_1.6fr]">
				<div>
					<SEOScoreCard />
				</div>
				<AdminCard>
					<h3 className="text-lg font-bold text-[#111111]">Action checklist</h3>
					<ul className="mt-4 space-y-2 text-sm text-[#525252]">
						<li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#111111]" />Update missing metadata on location pages</li>
						<li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#111111]" />Improve mobile performance on callback section</li>
						<li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#111111]" />Add internal links from service pages to contact page</li>
						<li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#111111]" />Re-run sitemap submission after content updates</li>
					</ul>
				</AdminCard>
			</div>
			<div className="grid gap-5 md:grid-cols-3">
				<AdminCard>
					<p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#737373]">Indexing</p>
					<p className="mt-2 text-3xl font-extrabold text-[#111111]">91%</p>
					<p className="mt-2 text-sm text-[#737373]">Core pages indexed and discoverable.</p>
				</AdminCard>
				<AdminCard>
					<p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#737373]">Structured Data</p>
					<p className="mt-2 text-3xl font-extrabold text-[#111111]">4/6</p>
					<p className="mt-2 text-sm text-[#737373]">Schema coverage still missing on two templates.</p>
				</AdminCard>
				<AdminCard>
					<p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#737373]">Priority Tasks</p>
					<p className="mt-2 text-3xl font-extrabold text-[#111111]">3</p>
					<p className="mt-2 text-sm text-[#737373]">High-impact fixes available this week.</p>
				</AdminCard>
			</div>
		</section>
	);
}
