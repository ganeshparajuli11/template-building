import DashboardOverview from "@/components/dashboard/DashboardOverview";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function DashboardPage() {
	return (
		<div className="min-h-screen bg-[var(--background)]">
			<Navbar />
			<DashboardOverview />
			<Footer />
		</div>
	);
}
