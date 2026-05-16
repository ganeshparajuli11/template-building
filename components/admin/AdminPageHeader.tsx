type AdminPageHeaderProps = {
	title: string;
	subtitle: string;
	label?: string;
};

export default function AdminPageHeader({ title, subtitle, label = "Melbourne PDS" }: AdminPageHeaderProps) {
	return (
		<div className="space-y-2">
			<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a94a6]">{label}</p>
			<h2 className="text-[34px] font-extrabold leading-tight tracking-tight text-[#111827]">{title}</h2>
			<p className="max-w-3xl text-sm text-[#6b7280] sm:text-base">{subtitle}</p>
		</div>
	);
}
