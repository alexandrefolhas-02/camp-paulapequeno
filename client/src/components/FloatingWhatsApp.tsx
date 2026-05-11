import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5521968997981?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20o%20Paula%20Pequeno%20Elite%20Camp";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5, type: "spring" }}
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Falar no WhatsApp"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />

      {/* Button */}
      <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/30 group-hover:scale-110 transition-transform duration-300">
        <MessageCircle size={28} className="text-white" fill="white" />
      </div>

      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-[#0D0D0D] border border-white/10 px-4 py-2 whitespace-nowrap">
          <span className="font-display text-xs uppercase tracking-wider text-white">Fale Conosco</span>
        </div>
      </div>
    </motion.a>
  );
}
