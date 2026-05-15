import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Locations from "@/components/sections/Locations";

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 pt-10">
        <h1 className="text-3xl font-black text-[var(--secondary)]">Locations</h1>
        <p className="mt-2 text-gray-600">Area-specific pages to rank and convert locally.</p>
      </main>
      <Locations />
      <Footer />
    </div>
  );
}