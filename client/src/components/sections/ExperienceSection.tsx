import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Target, Brain, Trophy, Users, Camera, Flame, Medal, Swords, Heart } from "lucide-react";

const TRAINING_BG = "/volleyball-training-kids-3ubxxUcYUALsehZCtDMVg9.webp";

const experiences = [
  { icon: Target, title: "Treinos Técnicos Reais", desc: "Fundamentos do voleibol com metodologia de alto rendimento" },
  { icon: Brain, title: "Mentalidade Vencedora", desc: "Desenvolvimento mental e emocional para a vida e o esporte" },
  { icon: Flame, title: "Disciplina e Liderança", desc: "Valores que transcendem a quadra e formam campeões" },
  { icon: Swords, title: "Jogos e Desafios", desc: "Competições que testam habilidade, estratégia e espírito de equipe" },
  { icon: Users, title: "Times e Competição", desc: "Formação de equipes e torneios internos com arbitragem oficial" },
  { icon: Trophy, title: "Premiação Final", desc: "Cerimônia de encerramento com medalhas e reconhecimento" },
  { icon: Medal, title: "Convivência com Campeã", desc: "Interação direta com Paula Pequeno durante todo o camp" },
  { icon: Heart, title: "Fundamentos do Voleibol", desc: "Saque, recepção, levantamento, ataque e bloqueio" },
  { icon: Camera, title: "Momentos Inesquecíveis", desc: "Registro fotográfico profissional de toda a experiência" },
];

export default function ExperienceSection() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="experiencia" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={TRAINING_BG} alt="" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-[#0A0A0A]/90" />
      </div>

      {/* Decorative */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#DAA520]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#DAA520]/20 to-transparent" />

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
            <span className="font-display text-xs uppercase tracking-[0.3em] text-[#DAA520]">A Experiência</span>
            <div className="w-12 h-px bg-[#DAA520]" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase leading-[0.95] mb-4">
            <span className="text-white">Muito mais que um camp.</span>
          </h2>
          <p className="font-accent text-xl sm:text-2xl lg:text-3xl italic text-[#DAA520]/80">
            Uma experiência de transformação.
          </p>
        </motion.div>

        {/* Experience Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
              className="group relative p-6 lg:p-8 bg-[#0D0D0D]/80 border border-white/5 hover:border-[#DAA520]/20 transition-all duration-500 hover:bg-[#DAA520]/5"
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center mb-4 bg-[#DAA520]/10 group-hover:bg-[#DAA520]/20 transition-colors duration-500">
                <exp.icon size={24} className="text-[#DAA520]" />
              </div>

              <h3 className="font-display text-base uppercase tracking-wider text-white mb-2 group-hover:text-[#DAA520] transition-colors duration-300">
                {exp.title}
              </h3>
              <p className="font-body text-sm text-white/50 leading-relaxed">
                {exp.desc}
              </p>

              {/* Corner decoration */}
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-[#DAA520]/0 group-hover:border-[#DAA520]/30 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
