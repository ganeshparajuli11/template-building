import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import CTA from "@/components/sections/CTA";
import CallbackForm from "@/components/sections/CallbackForm";
import FAQ from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";
import Locations from "@/components/sections/Locations";
import QuoteEstimator from "@/components/sections/QuoteEstimator";
import Reviews from "@/components/sections/Reviews";
import ServicesGrid from "@/components/sections/ServicesGrid";
import TrustBar from "@/components/sections/TrustBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Navbar />
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <QuoteEstimator />
      <CallbackForm />
      <Reviews />
      <FAQ />
      <Locations />
      <CTA />
      <Footer />
    </div>
  );
}
