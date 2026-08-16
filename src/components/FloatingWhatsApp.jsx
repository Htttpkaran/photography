import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const whatsappUrl = "https://wa.me/9109046412124?text=Hi%20Golden%20Moments,%20I'd%20like%20to%20inquire%20about%20your%20photography%20services";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-8 z-50 flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-3 rounded-full shadow-2xl border border-white/20 transition-all duration-300 hover:scale-105 group focus:outline-none"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-5 w-5 fill-current text-white group-hover:rotate-12 transition-transform duration-300" />
      <span className="text-xs font-semibold uppercase tracking-wider">
        WhatsApp
      </span>
    </a>
  );
}
