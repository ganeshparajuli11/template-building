import AnalyticsCards from "@/components/dashboard/AnalyticsCards";
import ConnectorStatus from "@/components/dashboard/ConnectorStatus";
import LeadsTable from "@/components/dashboard/LeadsTable";
import DashboardReveal from "@/components/dashboard/DashboardReveal";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import MonthlySalesCard from "@/components/dashboard/MonthlySalesCard";
import MonthlyTargetCard from "@/components/dashboard/MonthlyTargetCard";
import StatisticsCard from "@/components/dashboard/StatisticsCard";
import AdminCard from "@/components/admin/AdminCard";

export default function DashboardOverview() {
  return (
    <section className="space-y-5">
      <DashboardReveal>
        <AdminPageHeader
          title="Dashboard"
          subtitle="Track performance, monitor key metrics, and keep your operations in one place."
        />
      </DashboardReveal>
      <DashboardReveal delay={0.05}>
        <AnalyticsCards />
      </DashboardReveal>
      <DashboardReveal delay={0.1}>
        <section className="grid gap-5 xl:grid-cols-[1.7fr_1.2fr]">
          <MonthlySalesCard />
          <MonthlyTargetCard />
        </section>
      </DashboardReveal>
      <DashboardReveal delay={0.15}>
        <StatisticsCard />
      </DashboardReveal>
      <DashboardReveal delay={0.2}>
        <section className="grid gap-5 xl:grid-cols-[1.7fr_1fr]">
          <AdminCard>
            <h3 className="text-2xl font-extrabold tracking-tight text-[#111827]">Recent Leads</h3>
            <p className="mt-1 text-sm text-[#8a94a6]">Latest inbound prospects and their current pipeline status.</p>
            <div className="mt-5">
              <LeadsTable />
            </div>
          </AdminCard>
          <div className="space-y-5">
            <ConnectorStatus />
          </div>
        </section>
      </DashboardReveal>
      <DashboardReveal delay={0.25}>
        <section className="grid gap-5 md:grid-cols-3">
          <AdminCard>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8a94a6]">Conversion</p>
            <p className="mt-2 text-3xl font-extrabold text-[#111827]">23.8%</p>
            <p className="mt-2 text-sm text-[#6b7280]">Visitor to lead conversion in the current period.</p>
          </AdminCard>
          <AdminCard>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8a94a6]">Response Time</p>
            <p className="mt-2 text-3xl font-extrabold text-[#111827]">14 min</p>
            <p className="mt-2 text-sm text-[#6b7280]">Average first response time to new requests.</p>
          </AdminCard>
          <AdminCard>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8a94a6]">Pipeline Value</p>
            <p className="mt-2 text-3xl font-extrabold text-[#111827]">$128K</p>
            <p className="mt-2 text-sm text-[#6b7280]">Estimated value from currently open opportunities.</p>
          </AdminCard>
        </section>
      </DashboardReveal>
      <DashboardReveal delay={0.3}>
        <section>
          <AdminCard>
            <h3 className="text-xl font-extrabold tracking-tight text-[#111827]">Weekly Focus</h3>
            <p className="mt-2 text-sm text-[#6b7280]">Follow up overdue leads, optimize top landing pages, and verify all connector sync health by Friday.</p>
          </AdminCard>
        </section>
      </DashboardReveal>
    </section>
  );
}