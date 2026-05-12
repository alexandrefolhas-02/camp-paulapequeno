import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Sparkles, TrendingUp, Crown } from "lucide-react";

const days = [
  {
    day: "01",
    date: "Sexta - 24/07",
    title: "Sonho & Pertencimento",
    icon: Sparkles,
    color: "#DAA520",
    items: [
      "07:30 - Credenciamento/Retirada do Kit",
      "08:00 - Abertura com Paula Pequeno",
      "08:15 - Avaliação Técnica e Testes",
      "09:45 - Treino Técnico: Toque e Manchete",
      "11:15 - Atividade de Descontração",
      "13:30 - Palestra sobre Nutrição",
      "14:15 - Treino Técnico: Saque e Passe",
      "15:45 - Jogos e Desafios",
      "16:45 - Jogos Pais e Filhos",
      "18:00 - Encerramento / Melhores do Dia",
    ],
  },
  {
    day: "02",
    date: "Sábado - 25/07",
    title: "Evolução & Mentalidade",
    icon: TrendingUp,
    color: "#0057B8",
    items: [
      "08:00 - Treino Técnico/Tático: Levantamento e Ataque",
      "09:30 - Treino Técnico: Bloqueio e Defesa",
      "11:00 - Atividade Surpresa",
      "13:15 - Workshop: Prep. Física e Fisioterapia",
      "14:00 - Treino Técnico/Tático: Ataque",
      "15:30 - Jogos e Desafios",
      "17:00 - Jogos Pais e Filhos",
      "18:00 - Encerramento / Melhores do Dia",
    ],
  },
  {
    day: "03",
    date: "Domingo - 26/07",
    title: "Glória & Memória",
    icon: Crown,
    color: "#FFD700",
    items: [
      "08:00 - Início do Torneio Elite Camp",
      "11:00 - Mesa Redonda com Paula Pequeno",
      "13:30 - Finais do Torneio",
      "15:30 - Palestra: Sonhe, Lute e Realize",
      "16:30 - Entrega de Certificados e Premiações",
      "17:00 - Encerramento, Fotos e Sorteios",
    ],
  },
];

export default function ProgramSection() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="programacao" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0D0D0D] to-[#0A0A0A]" />

      {/* Large decorative text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[15rem] lg:text-[25rem] font-bold text-white/[0.015] leading-none select-none pointer-events-none whitespace-nowrap">
        3 DIAS
      </div>

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
            <span className="font-display text-xs uppercase tracking-[0.3em] text-[#DAA520]">Programação</span>
            <div className="w-12 h-px bg-[#DAA520]" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase leading-[0.95]">
            <span className="text-white">3 Dias de</span>{" "}
            <span className="text-gold-gradient">Imersão Total</span>
          </h2>
        </motion.div>

        {/* Days Grid */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {days.map((day, i) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.2 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative p-8 lg:p-10 bg-[#0D0D0D] border border-white/5 hover:border-[#DAA520]/20 transition-all duration-500 h-full">
                {/* Day Number */}
                <div className="absolute -top-4 -left-2 lg:-left-4">
                  <span
                    className="font-display text-7xl lg:text-8xl font-bold leading-none"
                    style={{ color: day.color, opacity: 0.15 }}
                  >
                    {day.day}
                  </span>
                </div>

                {/* Icon + Title */}
                <div className="relative z-10 mb-8">
                  <div
                    className="w-10 h-10 flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${day.color}15` }}
                  >
                    <day.icon size={20} style={{ color: day.color }} />
                  </div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-display text-xs uppercase tracking-[0.2em] text-white/40">
                      Dia {day.day} • {day.date}
                    </span>
                    <div className="flex-1 h-px bg-white/10" />
                  </div>
                  <h3 className="font-display text-xl lg:text-2xl uppercase tracking-wide text-white">
                    {day.title}
                  </h3>
                </div>

                {/* Items */}
                <ul className="space-y-3">
                  {day.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div
                        className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                        style={{ backgroundColor: day.color }}
                      />
                      <span className="font-body text-sm text-white/60">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(to right, transparent, ${day.color}, transparent)` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
