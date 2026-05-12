import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { FileText, TrendingUp, Heart, Shield, ArrowUpRight } from "lucide-react";

const reportItems = [
  { icon: TrendingUp, label: "Pontos Fortes", desc: "Identificação das habilidades naturais do atleta" },
  { icon: FileText, label: "Evolução Técnica", desc: "Análise detalhada do progresso nos fundamentos" },
  { icon: Heart, label: "Perfil Emocional", desc: "Como o atleta lida com pressão, equipe e desafios" },
  { icon: Shield, label: "Disciplina", desc: "Comprometimento, pontualidade e respeito às regras" },
  { icon: ArrowUpRight, label: "Próximos Passos", desc: "Recomendações personalizadas para evolução contínua" },
];

export default function ReportSection() {
  const [ref, inView] = useInView({ threshold: 0.15 });

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0D0D0D] to-[#0A0A0A]" />
      <div className="absolute inset-0 spotlight opacity-30" />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-[#DAA520]" />
            <span className="font-display text-xs uppercase tracking-[0.3em] text-[#DAA520]">Valor para os Pais</span>
            <div className="w-12 h-px bg-[#DAA520]" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase leading-[0.95] mb-4">
            <span className="text-white">Relatório Individual</span>
            <br />
            <span className="text-gold-gradient">do Atleta</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            Ao final do camp, os pais recebem uma avaliação completa e personalizada, elaborada pela equipe técnica.
          </p>
        </motion.div>

        {/* Report Card Visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative p-8 lg:p-12 bg-[#0D0D0D] gold-border-glow"
        >
          {/* Header */}
          <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/5">
            <div className="w-12 h-12 bg-[#DAA520]/10 flex items-center justify-center">
              <FileText size={24} className="text-[#DAA520]" />
            </div>
            <div>
              <h3 className="font-display text-lg uppercase tracking-wider text-white">Avaliação Individual</h3>
              <p className="font-body text-xs text-white/40">Paula Pequeno Elite Camp — Relatório Técnico</p>
            </div>
          </div>

          {/* Items */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reportItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <item.icon size={16} className="text-[#DAA520]" />
                  <h4 className="font-display text-sm uppercase tracking-wider text-white">{item.label}</h4>
                </div>
                <p className="font-body text-sm text-white/40 leading-relaxed pl-7">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Stamp */}
          <div className="absolute -bottom-3 -right-3 lg:-bottom-4 lg:-right-4 w-16 h-16 lg:w-20 lg:h-20 rounded-full border-2 border-[#DAA520]/30 flex items-center justify-center bg-[#0A0A0A] rotate-12">
            <span className="font-display text-[10px] lg:text-xs uppercase tracking-wider text-[#DAA520] text-center leading-tight">
              Exclusivo<br />Camp
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
