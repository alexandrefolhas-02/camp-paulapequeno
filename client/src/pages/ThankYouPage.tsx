import { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Trophy, Home as HomeIcon } from "lucide-react";
import { Link } from "wouter";
import StickyHeader from "@/components/StickyHeader";

declare global {
  interface Window {
    fbq: any;
    gtag: any;
  }
}

export default function ThankYouPage() {
  useEffect(() => {
    // Tracking Purchase Event
    if (typeof window.fbq === "function") {
      window.fbq('track', 'Purchase', { value: 2434.00, currency: 'BRL' });
    }
    if (typeof window.gtag === "function") {
      window.gtag('event', 'conversion', { 'send_to': 'G-X6DDKP8E9W/COMPRA' });
    }
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden flex flex-col">
      <StickyHeader />
      
      <main className="flex-grow flex items-center justify-center pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Success Icon Visualization */}
            <div className="flex justify-center mb-10">
              <div className="relative">
                <motion.div
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    delay: 0.2, 
                    type: "spring", 
                    stiffness: 260, 
                    damping: 20 
                  }}
                  className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-[#DAA520] via-[#B8860B] to-[#DAA520] flex items-center justify-center shadow-[0_0_60px_rgba(218,165,32,0.25)] border border-white/10"
                >
                  <Trophy className="text-[#0A0A0A] w-14 h-14 sm:w-20 sm:h-20" strokeWidth={1.2} />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20, scale: 0 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ delay: 1, duration: 0.5, type: "spring" }}
                  className="absolute -bottom-2 -right-2 w-12 h-12 sm:w-14 sm:h-14 bg-[#0057B8] rounded-full border-4 border-[#0A0A0A] flex items-center justify-center shadow-lg"
                >
                  <CheckCircle className="text-white w-7 h-7 sm:w-9 sm:h-9" strokeWidth={2.5} />
                </motion.div>
              </div>
            </div>

            {/* Heading */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl uppercase tracking-tighter leading-[0.9] mb-8">
              <span className="text-gold-gradient block">SUA VAGA ESTÁ</span>
              <span className="text-white block">GARANTIDA!</span>
            </h1>

            {/* Main Message */}
            <p className="font-body text-lg sm:text-xl lg:text-2xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Parabéns! Você acaba de dar um passo decisivo na sua evolução no voleibol. 
              Em breve, você receberá um e-mail com todos os detalhes e o guia do atleta para o nosso Elite Camp.
            </p>

            {/* Callout Info */}
            <div className="max-w-lg mx-auto bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-sm p-8 mb-14 backdrop-blur-md">
              <p className="font-display text-xs uppercase tracking-[0.3em] text-[#DAA520] mb-3">Próximos Passos</p>
              <p className="font-body text-base sm:text-lg text-white/70">
                Fique atento ao seu e-mail e ao nosso <span className="text-white font-semibold">grupo exclusivo</span> de atletas.
              </p>
            </div>

            {/* Back Button */}
            <Link href="/">
              <button className="group relative inline-flex items-center gap-3 px-12 py-6 overflow-hidden">
                <div className="absolute inset-0 bg-white/5 border border-white/20 transition-all duration-300 group-hover:bg-white/10 group-hover:border-[#DAA520]/40"></div>
                <span className="relative z-10 font-display text-base uppercase tracking-widest text-white group-hover:text-[#DAA520] transition-colors flex items-center gap-3">
                  <HomeIcon size={18} className="transition-transform group-hover:-translate-y-0.5" />
                  VOLTAR PARA O SITE
                </span>
              </button>
            </Link>
          </motion.div>
        </div>
      </main>

      {/* Footer Consistency */}
      <footer className="relative z-10 py-12 border-t border-white/5 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#DAA520] to-[#B8860B] flex items-center justify-center rounded-sm">
                <span className="font-display text-[#0A0A0A] text-sm font-bold">PP</span>
              </div>
              <div className="text-left">
                <p className="font-display text-xs uppercase tracking-[0.25em] text-white/90 leading-none mb-1">Elite Camp</p>
                <p className="font-body text-[10px] uppercase tracking-widest text-white/30">By Paula Pequeno</p>
              </div>
            </div>
            
            <div className="flex flex-col md:items-end gap-2">
              <p className="font-body text-xs text-white/30">
                &copy; {new Date().getFullYear()} Paula Pequeno Elite Camp. Todos os direitos reservados.
              </p>
              <p className="font-body text-[10px] text-white/10 uppercase tracking-[0.1em]">
                Brutalismo Esportivo Luxuoso &bull; Arena Épica
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
