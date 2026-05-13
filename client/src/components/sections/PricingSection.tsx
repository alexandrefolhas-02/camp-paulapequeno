import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Sparkles, Check, ArrowRight, ShieldCheck, CreditCard, Wallet } from "lucide-react";

export default function PricingSection() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  const benefits = [
    {
      title: "Acesso completo aos 3 dias de evento",
      description: ""
    },
    {
      title: "Kit Atleta Exclusivo",
      description: "2 Camisas de treino, 2 Shorts de treino, 1 Squeeze, 1 Toalha, 1 Sacochila e 1 Passaporte do atleta"
    },
    {
      title: "Refeições",
      description: "Almoço e Coffee break inclusos nos 3 dias"
    },
    {
      title: "Experiência Oficial",
      description: "Certificado, Área de Hidratação e Participação no Torneio Elite Camp"
    },
    {
      title: "Conteúdo para Pais",
      description: "Acesso à Palestra da Paula Pequeno, Palestra de Nutrição e Workshop de Fisioterapia/Prep. Física e participação em atividades específicas da programação"
    },
    {
      title: "Memórias e Prêmios",
      description: "Sorteios de brindes exclusivos e acesso a todas as fotos e vídeos do Camp"
    }
  ];

  return (
    <section id="precos" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#0A0A0A]" />
      <div className="absolute inset-0 spotlight opacity-40" />

      {/* Top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#DAA520]/20 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-[#DAA520]" />
            <span className="font-display text-xs uppercase tracking-[0.3em] text-[#DAA520]">Investimento</span>
            <div className="w-12 h-px bg-[#DAA520]" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase leading-[0.95] mb-4">
            <span className="text-white">Lote Único:</span>{" "}
            <span className="text-gold-gradient">Vagas Limitadas</span>
          </h2>
          <p className="font-body text-base text-white/50 max-w-xl mx-auto">
            Garanta agora o lugar do seu atleta na imersão mais exclusiva do voleibol brasileiro.
          </p>
        </motion.div>

        {/* Pricing Card */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            {/* Urgent Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
              <motion.div
                animate={{ scale: [1, 1.05, 1], opacity: [0.9, 1, 0.9] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="flex items-center gap-2 px-6 py-2 bg-red-600 text-white rounded-full shadow-lg shadow-red-600/20"
              >
                <span className="font-display text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold whitespace-nowrap">
                  ⚠️ VAGAS LIMITADAS
                </span>
              </motion.div>
            </div>

            {/* Card Content */}
            <div className="relative bg-[#0D0D0D] border border-white/5 overflow-hidden">
              <div className="grid lg:grid-cols-2">

                {/* Left Column: Benefits */}
                <div className="p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/5 bg-white/[0.01]">
                  <h3 className="font-display text-xl uppercase tracking-wider text-white mb-8 flex items-center gap-3">
                    <Sparkles className="text-[#DAA520]" size={20} />
                    O que está incluso
                  </h3>

                  <ul className="space-y-6">
                    {benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <div className="mt-1 w-5 h-5 rounded-full bg-[#DAA520]/10 flex items-center justify-center shrink-0 border border-[#DAA520]/20">
                          <Check className="text-[#DAA520]" size={12} />
                        </div>
                        <div>
                          <p className="font-display text-sm uppercase tracking-wide text-white/90">
                            {benefit.title}
                          </p>
                          {benefit.description && (
                            <p className="mt-1 font-body text-xs text-white/50 leading-relaxed">
                              {benefit.description}
                            </p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Column: Checkout */}
                <div className="p-8 lg:p-12 flex flex-col justify-center items-center text-center bg-gradient-to-br from-[#0D0D0D] to-[#121212]">
                  <p className="font-body text-sm text-[#DAA520] mb-2 uppercase tracking-widest font-semibold">
                    Investimento
                  </p>
                  <p className="font-body text-white/60 mb-8 max-w-[280px]">
                    Invista na sua evolução com a bicampeã olímpica
                  </p>

                  <div className="mb-8">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="font-body text-xl text-white/40">R$</span>
                      <span className="font-display text-6xl sm:text-7xl font-bold text-gold-gradient">
                        2.434
                      </span>
                      <span className="font-body text-xl text-white/40">,00</span>
                    </div>
                    <div className="mt-4 px-4 py-2 bg-[#DAA520]/10 border border-[#DAA520]/20 rounded-full">
                      <span className="font-display text-xs sm:text-sm text-[#DAA520] uppercase tracking-wider font-bold">
                        Em até 10x SEM JUROS
                      </span>
                    </div>
                    <p className="mt-4 font-display text-2xl sm:text-3xl text-white font-bold tracking-tight">
                      10 vezes de <span className="text-gold-gradient">R$ 243,40</span>
                    </p>
                  </div>

                  <div className="w-full space-y-4 mb-8">
                    <a
                      href="https://pag.ae/81MHb3z-p"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex items-center justify-center gap-3 w-full py-5 font-display text-sm uppercase tracking-[0.2em] font-bold text-[#0A0A0A] bg-gradient-to-r from-[#B8860B] via-[#DAA520] to-[#FFD700] hover:brightness-110 transition-all duration-300 shadow-xl shadow-[#DAA520]/10 overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                      GARANTIR MINHA VAGA AGORA
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>

                  {/* Payment Methods */}
                  <div className="flex flex-col items-center gap-4 w-full pt-6 border-t border-white/5">
                    <p className="font-body text-[10px] uppercase tracking-widest text-white/30">
                      Métodos de Pagamento
                    </p>
                    <div className="flex items-center gap-4 text-white/40">
                      <div className="flex flex-col items-center gap-1">
                        <CreditCard size={16} />
                        <span className="text-[8px] uppercase tracking-tighter">Cartão</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <Wallet size={16} />
                        <span className="text-[8px] uppercase tracking-tighter">PIX</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <ShieldCheck size={16} />
                        <span className="text-[8px] uppercase tracking-tighter">Boleto</span>
                      </div>
                    </div>
                    <p className="font-body text-[9px] text-white/20">
                      Pagamento 100% Seguro via PagBank
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer Support */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-12"
        >
          <p className="font-body text-sm text-white/30">
            Dúvidas sobre o pagamento? <a href="https://wa.me/5521968997981?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20o%20Paula%20Pequeno%20Elite%20Camp" target="_blank" rel="noopener noreferrer" className="text-[#DAA520] hover:underline">Fale com nossa equipe</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
