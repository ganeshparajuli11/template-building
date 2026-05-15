import AnalyticsCards from "@/components/dashboard/AnalyticsCards";
import ConnectorStatus from "@/components/dashboard/ConnectorStatus";
import LeadsTable from "@/components/dashboard/LeadsTable";
import SEOScoreCard from "@/components/dashboard/SEOScoreCard";

export default function DashboardOverview() {
  return (
    <main className="mx-auto max-w-6xl space-y-6 px-4 py-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-[var(--primary)]">Admin Dashboard</p>
        <h1 className="text-3xl font-black tracking-tight text-[var(--secondary)]">Overview</h1>
      </div>
      <AnalyticsCards />
      <section className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <LeadsTable />
        </div>
        <SEOScoreCard />
      </section>
      <ConnectorStatus />
    </main>
  );
}