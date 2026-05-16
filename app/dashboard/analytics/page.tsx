import AdminPageHeader from "@/components/admin/AdminPageHeader";
import AnalyticsCards from "@/components/dashboard/AnalyticsCards";
import AdminCard from "@/components/admin/AdminCard";

const weeklyTraffic = [42, 56, 48, 70, 64, 82, 76];

export default function AnalyticsPage() {
	return (
		<section className="space-y-4">
			<AdminPageHeader title="Analytics" subtitle="Monitor traffic, conversion actions, and engagement trends over time." />
			<AnalyticsCards />
			<AdminCard>
				<h3 className="text-lg font-bold text-[#111111]">Weekly traffic trend</h3>
				<div className="mt-5 grid h-52 grid-cols-7 items-end gap-2">
					{weeklyTraffic.map((value, index) => (
						<div key={`${value}-${index}`} className="rounded-t-lg bg-[#1f1f1f]" style={{ height: `${value}%` }} />
					))}
				</div>
			</AdminCard>
		</section>
	);
}
