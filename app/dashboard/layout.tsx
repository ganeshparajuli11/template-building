import AdminLayoutShell from "@/components/admin/AdminLayoutShell";
import { Manrope } from "next/font/google";

const adminFont = Manrope({ subsets: ["latin"], weight: ["500", "600", "700", "800"] });

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className={adminFont.className}>
			<AdminLayoutShell>{children}</AdminLayoutShell>
		</div>
	);
}
