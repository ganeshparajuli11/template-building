import AdminPageHeader from "@/components/admin/AdminPageHeader";
import AdminCard from "@/components/admin/AdminCard";

export default function SettingsPage() {
	return (
		<section className="space-y-4">
			<AdminPageHeader title="Settings" subtitle="Manage admin profile, account details, and dashboard preferences." />
			<AdminCard>
				<form className="space-y-4">
					<div className="grid gap-4 md:grid-cols-2">
						<label className="block">
							<span className="mb-2 block text-sm font-semibold text-[#525252]">Display name</span>
							<input
								type="text"
								defaultValue="Melbourne PDS Admin"
								className="min-h-11 w-full rounded-xl border border-[#d4d4d8] px-3 text-sm text-[#111111] outline-none transition focus:border-[#111111] focus:ring-2 focus:ring-[#e5e5e5]"
							/>
						</label>
						<label className="block">
							<span className="mb-2 block text-sm font-semibold text-[#525252]">Email</span>
							<input
								type="email"
								defaultValue="admin@melbournepds.com.au"
								className="min-h-11 w-full rounded-xl border border-[#d4d4d8] px-3 text-sm text-[#111111] outline-none transition focus:border-[#111111] focus:ring-2 focus:ring-[#e5e5e5]"
							/>
						</label>
					</div>
					<div className="flex justify-end">
						<button
							type="button"
							className="rounded-xl border border-[#111111] bg-[#111111] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#1f1f1f]"
						>
							Save changes
						</button>
					</div>
				</form>
			</AdminCard>
		</section>
	);
}
