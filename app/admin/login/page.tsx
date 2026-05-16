import type { Metadata } from "next";
import LoginForm from "@/components/auth/LoginForm";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
	title: "Admin Login | Melbourne PDS",
	description:
		"Sign in to the Melbourne PDS admin dashboard to view leads, SEO health, analytics, and connector status.",
	path: "/admin/login",
	noIndex: true,
});

export default function LoginPage() {
	return (
		<main className="min-h-screen bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_100%)] px-4 py-8 sm:px-6 lg:px-8">
			<div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-md items-center">
				<div className="w-full">
					<LoginForm />
				</div>
			</div>
		</main>
	);
}