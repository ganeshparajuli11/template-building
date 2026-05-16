import AdminPageHeader from "@/components/admin/AdminPageHeader";
import ConnectorStatus from "@/components/dashboard/ConnectorStatus";
import AdminCard from "@/components/admin/AdminCard";

export default function ConnectorsPage() {
	return (
		<section className="space-y-4">
			<AdminPageHeader title="Connectors" subtitle="Review integration readiness and connectivity status across channels." />
			<ConnectorStatus />
			<AdminCard>
				<h3 className="text-lg font-bold text-[#111111]">Connector notes</h3>
				<p className="mt-2 text-sm text-[#737373]">
					Google Business Profile and Search Console connectors are currently configured as prototype states.
				</p>
			</AdminCard>
		</section>
	);
}
