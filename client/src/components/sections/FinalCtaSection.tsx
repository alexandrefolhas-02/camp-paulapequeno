import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { ArrowRight, MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5521968997981?text=Ol%C3%A1!%20Quero%20garantir%20minha%20vaga%20no%20Paula%20Pequeno%20Elite%20Camp";

const CELEBRATION_BG = "/volleyball-celebration-nYDvoaSjtJ6DUZ3DMXuyxH.webp";

export default function FinalCtaSection() {
  const [ref, inView] = useInView({ threshold: 0.15 });

  return (
    <section className="relative py-24 lg:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={CELEBRATION_BG} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0A0A0A]/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/80" />
      </div>

      {/* Spotlight */}
      <div className="absolute inset-0 spotlight" />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Text */}
          <p className="font-body text-lg sm:text-xl text-white/60 mb-4">
            Seu filho pode treinar com qualquer professor.
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl uppercase leading-[0.95] mb-4">
            <span className="text-white">Mas poucas vezes na vida</span>
            <br />
            <span className="text-white">terá a chance de</span>
            <br />
            <span className="text-gold-gradient">aprender com uma lenda.</span>
          </h2>

          <p className="font-accent text-lg sm:text-xl italic text-white/40 mb-12 max-w-2xl mx-auto">
            "A oportunidade rara de viver 3 dias como atleta de alto rendimento ao lado de uma lenda do esporte brasileiro."
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="#precos"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#B8860B] to-[#DAA520] text-[#0A0A0A] font-display text-base sm:text-lg uppercase tracking-wider font-bold rounded-sm pulse-gold hover:from-[#DAA520] hover:to-[#FFD700] transition-all duration-300"
            >
              Garantir Minha Vaga Agora
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-5 border border-white/20 text-white font-display text-sm sm:text-base uppercase tracking-wider rounded-sm hover:border-[#DAA520]/50 hover:text-[#DAA520] transition-all duration-300 bg-white/5"
            >
              <MessageCircle size={18} />
              Falar no WhatsApp
            </a>
          </div>

          <p className="font-body text-sm text-white/30">
            Somente <span className="text-[#DAA520]">60 vagas</span> disponíveis — 24 a 26 de Julho de 2026
          </p>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="relative z-10 mt-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-[#DAA520] to-[#B8860B] flex items-center justify-center">
                <span className="font-display text-[#0A0A0A] text-xs font-bold">PP</span>
              </div>
              <span className="font-display text-xs uppercase tracking-[0.2em] text-white/40">Paula Pequeno Elite Camp</span>
            </div>
            <p className="font-body text-xs text-white/20">
              &copy; {new Date().getFullYear()} Paula Pequeno Elite Camp. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
