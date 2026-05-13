import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Medal, Star, Check } from "lucide-react";

const reasons = [
  {
    title: 'A Voz da Experiência Olímpica',
    text: 'Não é apenas um treinamento, é a chance rara de receber orientações diretas de uma Bicampeã Olímpica. O conhecimento acumulado em décadas de alto rendimento entregue em 3 dias de imersão total.',
    icon: Medal,
  },
  {
    title: 'Formação de Campeões para a Vida',
    text: 'O Elite Camp foca no atleta jovem que absorve disciplina, técnica e espírito de equipe enquanto os pais participam de workshops de vários temas interessantes e interações na prática com os seus filhos. Um investimento que marca a história da família.',
    icon: Star,
  },
  {
    title: 'Oportunidade Única e Limitada',
    text: 'Nosso foco é totalmente em qualidade e não em quantidade e por isso as vagas são limitadas. Assim poderemos dar a atenção que os seus filhos merecem.',
    icon: Check,
  },
];

export default function TestimonialsSection() {
  const [ref, inView] = useInView({ threshold: 0.15 });

  return (
    <section id="motivos" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0D0D0D] to-[#0A0A0A]" />

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
            <span className="font-display text-xs uppercase tracking-[0.3em] text-[#DAA520]">IMPERDÍVEL</span>
            <div className="w-12 h-px bg-[#DAA520]" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase leading-[0.95]">
            <span className="text-white">PORQUE NÃO</span>{" "}
            <span className="text-gold-gradient">FICAR DE FORA</span>
          </h2>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
              className="relative p-8 bg-[#0D0D0D] border border-white/5 hover:border-[#DAA520]/15 transition-all duration-500 group"
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center bg-[#DAA520]/10 mb-6 rounded-lg group-hover:bg-[#DAA520]/20 transition-colors">
                <reason.icon size={24} className="text-[#DAA520]" />
              </div>

              {/* Title */}
              <h3 className="font-display text-xl uppercase tracking-wider text-white mb-4 group-hover:text-gold-gradient transition-colors">
                {reason.title}
              </h3>

              {/* Text */}
              <p className="font-body text-sm sm:text-base text-white/60 leading-relaxed">
                {reason.text}
              </p>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#DAA520]/0 group-hover:border-[#DAA520]/20 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
