import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Users, VenusMars } from "lucide-react";

export default function AthletesSection() {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <section id="atletas" className="relative py-24 lg:py-32 bg-[#0D0D0D] overflow-hidden font-urbanist">
      {/* Decorative Gradient Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#DAA520]/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#DAA520]/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            ref={ref}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border border-[#DAA520]/30 shadow-2xl shadow-black/50">
              <img 
                src="/athletes-group.png" 
                alt="Nossos Atletas" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Image Glow/Accent */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-[#DAA520]/20 to-transparent blur-lg -z-10 opacity-50 rounded-3xl" />
          </motion.div>

          {/* Right Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col space-y-8"
          >
            <div>
              <span className="text-[#DAA520] text-xs font-semibold tracking-[0.4em] uppercase">
                PÚBLICO-ALVO
              </span>
              <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Nossos <span className="text-gold-gradient">Atletas</span>
              </h2>
            </div>

            <div className="space-y-6">
              {/* Info Card 1 */}
              <div className="flex items-center gap-6 p-6 rounded-xl bg-[#1A1A1A] border border-white/5 hover:border-[#DAA520]/30 transition-colors duration-300 group">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-[#DAA520]/10 text-[#DAA520] group-hover:bg-[#DAA520] group-hover:text-black transition-colors duration-300">
                  <Users size={28} />
                </div>
                <div>
                  <h3 className="text-white/60 text-sm font-medium tracking-wider uppercase">FAIXA ETÁRIA</h3>
                  <p className="text-xl font-bold text-white font-urbanist">11 A 17 ANOS</p>
                </div>
              </div>

              {/* Info Card 2 */}
              <div className="flex items-center gap-6 p-6 rounded-xl bg-[#1A1A1A] border border-white/5 hover:border-[#DAA520]/30 transition-colors duration-300 group">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-[#DAA520]/10 text-[#DAA520] group-hover:bg-[#DAA520] group-hover:text-black transition-colors duration-300">
                  <VenusMars size={28} />
                </div>
                <div>
                  <h3 className="text-white/60 text-sm font-medium tracking-wider uppercase">CATEGORIAS</h3>
                  <p className="text-xl font-bold text-white font-urbanist">MASCULINO E FEMININO</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
