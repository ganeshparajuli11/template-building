import AdminPageHeader from "@/components/admin/AdminPageHeader";
import LeadsTable from "@/components/dashboard/LeadsTable";

export default function LeadsPage() {
	return (
		<section className="space-y-4">
			<AdminPageHeader title="Leads" subtitle="Track recent enquiry volume, source channels, and lead status flow." />
			<LeadsTable />
		</section>
	);
}
