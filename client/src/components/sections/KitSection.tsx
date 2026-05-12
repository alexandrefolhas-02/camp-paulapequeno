import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Shirt, Droplets, CircleDot, BookOpen, Award } from "lucide-react";

const KIT_IMG = "/athlete-kit-premium-J5ARdSYvpYdE9RtSoNXxr4.webp";

const kitItems = [
  { icon: Shirt, label: "KIT Oficial", desc: "Uniforme exclusivo do Elite Camp" },
  { icon: Droplets, label: "Garrafa Squeeze", desc: "Squeeze premium personalizada" },
  { icon: CircleDot, label: "Toalha personalizada", desc: "Brindes exclusivos do camp" },
  { icon: BookOpen, label: "Passaporte do Camp", desc: "Registro de toda a jornada" },
  { icon: Award, label: "Certificado Oficial", desc: "Assinado por Paula Pequeno" },
];

export default function KitSection() {
  const [ref, inView] = useInView({ threshold: 0.15 });

  return (
    <section id="kit" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#0A0A0A]" />

      {/* Diagonal gold line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#DAA520]/20 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative gold-border-glow overflow-hidden">
              <img
                src={KIT_IMG}
                alt="Kit do Atleta — Paula Pequeno Elite Camp"
                className="w-full h-auto"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/40 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 bg-[#0D0D0D] border border-[#DAA520]/30 px-4 py-3 lg:px-6 lg:py-4">
              <span className="font-display text-xs uppercase tracking-[0.2em] text-[#DAA520]">Incluso na inscrição</span>
            </div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-[#DAA520]" />
              <span className="font-display text-xs uppercase tracking-[0.3em] text-[#DAA520]">Kit do Atleta</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase leading-[0.95] mb-3">
              <span className="text-white">Seu filho não</span>
              <br />
              <span className="text-white">participa.</span>
            </h2>
            <p className="font-accent text-xl sm:text-2xl italic text-[#DAA520]/80 mb-10">
              Ele vive a experiência completa.
            </p>

            {/* Kit Items */}
            <div className="space-y-4">
              {kitItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="group flex items-center gap-4 p-4 bg-white/[0.02] border border-white/5 hover:border-[#DAA520]/20 hover:bg-[#DAA520]/5 transition-all duration-400"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-[#DAA520]/10 shrink-0">
                    <item.icon size={18} className="text-[#DAA520]" />
                  </div>
                  <div>
                    <h4 className="font-display text-sm uppercase tracking-wider text-white group-hover:text-[#DAA520] transition-colors">
                      {item.label}
                    </h4>
                    <p className="font-body text-xs text-white/40">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
