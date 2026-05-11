import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Fernanda M.",
    role: "Mãe de atleta, 13 anos",
    text: "Minha filha voltou outra pessoa. A confiança, a disciplina, o brilho nos olhos... Foi muito mais do que um camp de vôlei. Foi uma experiência que transformou a forma como ela vê o esporte e a si mesma.",
    initials: "FM",
  },
  {
    name: "Ricardo S.",
    role: "Pai de atleta, 11 anos",
    text: "Ver meu filho treinando ao lado da Paula Pequeno foi emocionante. Ele entendeu o que significa dedicação de verdade. O relatório final nos surpreendeu pela profundidade e cuidado.",
    initials: "RS",
  },
  {
    name: "Juliana C.",
    role: "Mãe de atleta, 15 anos",
    text: "A organização é impecável, o kit é lindo e a equipe técnica é excepcional. Minha filha já perguntou quando será a próxima edição. Investimento que vale cada centavo.",
    initials: "JC",
  },
];

export default function TestimonialsSection() {
  const [ref, inView] = useInView({ threshold: 0.15 });

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
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
            <span className="font-display text-xs uppercase tracking-[0.3em] text-[#DAA520]">Depoimentos</span>
            <div className="w-12 h-px bg-[#DAA520]" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase leading-[0.95]">
            <span className="text-white">O Que Dizem</span>{" "}
            <span className="text-gold-gradient">os Pais</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
              className="relative p-8 bg-[#0D0D0D] border border-white/5 hover:border-[#DAA520]/15 transition-all duration-500 group"
            >
              {/* Quote icon */}
              <Quote size={32} className="text-[#DAA520]/15 mb-4" />

              {/* Text */}
              <p className="font-body text-sm sm:text-base text-white/60 leading-relaxed mb-8 italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#DAA520]/10 flex items-center justify-center">
                  <span className="font-display text-xs text-[#DAA520]">{t.initials}</span>
                </div>
                <div>
                  <p className="font-display text-sm uppercase tracking-wider text-white">{t.name}</p>
                  <p className="font-body text-xs text-white/40">{t.role}</p>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#DAA520]/0 group-hover:border-[#DAA520]/20 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
