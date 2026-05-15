export default function Footer() {
	return (
		<footer className="border-t border-[var(--border)] bg-white">
			<div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-gray-600 md:flex-row md:items-center md:justify-between">
				<p>© {new Date().getFullYear()} OPEDS. All rights reserved.</p>
				<p>Built for admin-controlled growth: leads, SEO, analytics, and operations.</p>
			</div>
		</footer>
	);
}
