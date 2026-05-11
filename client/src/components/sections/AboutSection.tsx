/**
 * AboutSection — Sobre Paula Pequeno
 * Layout: foto real à esquerda + texto e stats à direita
 * Foto principal: Paula bloqueando nas Olimpíadas (fornecida pelo usuário)
 * Foto secundária: Paula sorrindo em quadra
 */
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import CountUp from "@/components/CountUp";

const PAULA_OLYMPIC = "/paula-olympic-block_93a15f88.webp";
const PAULA_SMILE = "/paula-pequeno-smile_8dc8e181.jpg";

export default function AboutSection() {
  const [ref, inView] = useInView({ threshold: 0.2 });

  const stats = [
    { number: 2, suffix: "x", label: "Campeã Olímpica" },
    { number: 2, suffix: "x", label: "Melhor do Mundo" },
    { number: 1, suffix: "", label: "Única MVP Olímpica do Brasil" },
    { number: 15, suffix: "+", label: "Anos de Carreira" },
  ];

  return (
    <section id="sobre" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0D0D0D] to-[#0A0A0A]" />
      <div className="absolute inset-0 spotlight opacity-50" />

      {/* Large decorative number */}
      <div className="absolute top-10 right-0 font-display text-[20rem] lg:text-[30rem] font-bold text-white/[0.02] leading-none select-none pointer-events-none">
        02
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Photo Composition */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Main photo — Paula blocking at Olympics */}
              <div className="relative">
                {/* Gold corner accents */}
                <div className="absolute -top-3 -left-3 w-14 h-14 border-t-2 border-l-2 border-[#DAA520]/50 z-10" />
                <div className="absolute -bottom-3 -right-3 w-14 h-14 border-b-2 border-r-2 border-[#DAA520]/50 z-10" />

                <div className="relative overflow-hidden">
                  <img
                    src={PAULA_OLYMPIC}
                    alt="Paula Pequeno bloqueando nas Olimpíadas — Seleção Brasileira em ação"
                    className="w-full h-[400px] sm:h-[480px] lg:h-[520px] object-cover object-center"
                  />
                  {/* Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/70 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0A0A0A]/20" />
                </div>
              </div>

              {/* Secondary photo — Paula smiling in action (floating overlay) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-6 -right-4 lg:-right-8 w-36 sm:w-44 lg:w-48 z-20 hidden sm:block"
              >
                <div className="relative border-2 border-[#DAA520]/30 shadow-xl shadow-[#0A0A0A]/50">
                  <img
                    src={PAULA_SMILE}
                    alt="Paula Pequeno comemorando em quadra"
                    className="w-full h-36 sm:h-44 lg:h-48 object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/40 to-transparent" />
                </div>
              </motion.div>

              {/* Caption tag */}
              <div className="absolute bottom-4 left-4 z-10 sm:bottom-8 sm:left-6">
                <div className="bg-[#0A0A0A]/80 backdrop-blur-sm border border-[#DAA520]/20 px-4 py-2.5">
                  <p className="font-display text-xs uppercase tracking-[0.15em] text-[#DAA520]">
                    Bicampeã Olímpica
                  </p>
                  <p className="font-body text-[10px] text-white/50">
                    Beijing 2008 &bull; Londres 2012
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative vertical gold line */}
            <div className="absolute -left-4 top-1/4 w-px h-1/2 bg-gradient-to-b from-transparent via-[#DAA520]/20 to-transparent hidden lg:block" />
          </motion.div>

          {/* Right — Text + Stats */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Section Label */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-[#DAA520]" />
                <span className="font-display text-xs uppercase tracking-[0.3em] text-[#DAA520]">Sobre a Idealizadora</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl uppercase leading-[0.95] mb-8">
                <span className="text-white">Paula Pequeno</span>
                <br />
                <span className="text-gold-gradient">não é apenas</span>
                <br />
                <span className="text-white">uma campeã olímpica.</span>
              </h2>

              <div className="space-y-5 font-body text-base sm:text-lg text-white/60 leading-relaxed">
                <p>
                  Ela é <strong className="text-white">Bicampeã Olímpica</strong>, referência do voleibol brasileiro e a{" "}
                  <strong className="text-[#DAA520]">única MVP da história do voleibol nacional</strong>.
                </p>
                <p>
                  Agora, ela decidiu transformar toda sua experiência em{" "}
                  <em className="font-accent text-white/80 not-italic">legado</em>, criando uma experiência única para a nova geração de atletas.
                </p>
                <p className="text-white/40 text-sm border-l-2 border-[#DAA520]/30 pl-4">
                  "A oportunidade rara de viver 3 dias como atleta de alto rendimento ao lado de uma lenda do esporte brasileiro."
                </p>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10"
            >
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + i * 0.12 }}
                    className="relative p-5 lg:p-6 gold-border-glow bg-[#0D0D0D]/80 group hover:bg-[#DAA520]/5 transition-colors duration-500"
                  >
                    <div className="number-display text-3xl lg:text-4xl text-gold-gradient mb-1.5">
                      {inView ? <CountUp end={stat.number} duration={2} /> : "0"}
                      <span className="text-[#DAA520]">{stat.suffix}</span>
                    </div>
                    <p className="font-display text-[10px] lg:text-xs uppercase tracking-[0.15em] text-white/50 group-hover:text-white/70 transition-colors">
                      {stat.label}
                    </p>
                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-[#DAA520]/20 group-hover:border-[#DAA520]/40 transition-colors" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
