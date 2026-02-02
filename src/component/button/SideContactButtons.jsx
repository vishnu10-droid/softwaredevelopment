import { Phone, Mail, MessageCircle } from "lucide-react";

export default function SideContactButtons() {
    
  return (
    <div className="fixed bottom-24 right-0 z-[999] flex flex-col gap-4">

      {/* WhatsApp */}
      <a
        href="https://wa.me/919999999999?text=Hello%20I%20need%20support"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-14 h-14 flex items-center justify-center rounded-full
        bg-gradient-to-br from-green-400 to-green-600
        shadow-[0_20px_40px_rgba(34,197,94,0.45)]
        hover:scale-110 transition-all duration-300"
      >
        <MessageCircle className="w-7 h-7 text-white" />

        {/* Glow */}
        <span className="absolute inset-0 rounded-full blur-xl bg-green-500 opacity-0 group-hover:opacity-50 transition" />

        {/* Tooltip */}
        <span className="absolute right-16 text-sm px-4 py-2 rounded-md bg-black text-white
        opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition">
          WhatsApp Chat
        </span>
      </a>

      {/* Call */}
      <a
        href="tel:+919999999999"
        className="group relative w-14 h-14 flex items-center justify-center rounded-full
        bg-gradient-to-br from-blue-500 to-indigo-600
        shadow-[0_20px_40px_rgba(79,70,229,0.45)]
        hover:scale-110 transition-all duration-300"
      >
        <Phone className="w-7 h-7 text-white" />

        <span className="absolute inset-0 rounded-full blur-xl bg-blue-600 opacity-0 group-hover:opacity-50 transition" />

        <span className="absolute right-16 text-sm px-4 py-2 rounded-md bg-black text-white
        opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition">
          Call Now
        </span>
      </a>

      {/* Email */}
      <a
        href="mailto:info@example.com"
        className="group relative w-14 h-14 flex items-center justify-center rounded-full
        bg-gradient-to-br from-rose-500 to-red-600
        shadow-[0_20px_40px_rgba(239,68,68,0.45)]
        hover:scale-110 transition-all duration-300"
      >
        <Mail className="w-7 h-7 text-white" />

        <span className="absolute inset-0 rounded-full blur-xl bg-red-600 opacity-0 group-hover:opacity-50 transition" />

        <span className="absolute right-16 text-sm px-4 py-2 rounded-md bg-black text-white
        opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition">
          Email Us
        </span>
      </a>

    </div>
  );
}
