import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Card from "@/components/ui/Card";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl font-black text-[var(--secondary)]">About OPEDS</h1>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Card>
            <h2 className="text-xl font-bold text-[var(--secondary)]">Mission</h2>
            <p className="mt-2 text-sm text-gray-600">
              Build faster, cleaner plumbing business websites with measurable admin outcomes.
            </p>
          </Card>
          <Card>
            <h2 className="text-xl font-bold text-[var(--secondary)]">Approach</h2>
            <p className="mt-2 text-sm text-gray-600">
              Conversion-focused pages, operational dashboards, and connector-ready architecture.
            </p>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}