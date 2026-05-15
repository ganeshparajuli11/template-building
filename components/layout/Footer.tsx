export default function Footer() {
	return (
		<footer className="border-t border-[var(--border)] bg-white">
			<div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-gray-600 md:flex-row md:items-center md:justify-between">
				<p>© {new Date().getFullYear()} Melbourne Plumbing & Drainage Solutions. All rights reserved.</p>
				<p>24/7 emergency plumbing across Melbourne with fast response and clear pricing.</p>
			</div>
		</footer>
	);
}
