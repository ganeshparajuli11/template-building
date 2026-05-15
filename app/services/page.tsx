import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ServicesGrid from "@/components/sections/ServicesGrid";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 pt-10">
        <h1 className="text-3xl font-black text-[var(--secondary)]">Services</h1>
        <p className="mt-2 text-gray-600">SEO-friendly service pages for every high-intent plumbing need.</p>
      </main>
      <ServicesGrid />
      <Footer />
    </div>
  );
}