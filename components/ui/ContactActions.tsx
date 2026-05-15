"use client";

import { MessageCircle, Phone } from "lucide-react";

const PHONE_NUMBER = "0431234185";
const WHATSAPP_NUMBER = "61431234185"; // International format without +

export function ContactActions() {
  const handleCall = () => {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi! I need plumbing help. Can you provide a quote?"
    );
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
      "_blank"
    );
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={handleCall}
        className="flex items-center gap-2 rounded-lg bg-[var(--accent-warm)] px-3 py-2 text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-95"
        aria-label="Call for emergency plumbing"
      >
        <Phone className="h-4 w-4" />
        <span className="hidden sm:inline">Call</span>
      </button>
      <button
        onClick={handleWhatsApp}
        className="flex items-center gap-2 rounded-lg bg-green-500 px-3 py-2 text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-95"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="h-4 w-4" />
        <span className="hidden sm:inline">WhatsApp</span>
      </button>
    </div>
  );
}
