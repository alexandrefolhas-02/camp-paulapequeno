import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Shirt, Award, CircleDot, ArrowRight } from "lucide-react";

export default function GiveawaySection() {
  const [ref, inView] = useInView({ threshold: 0.15 });

  const kitItems = [
    { icon: Shirt, text: "1 Uniforme completo autografado" },
    { icon: Award, text: "1 Faixinha (testeira) emblemática" },
    { icon: CircleDot, text: "1 Bola Mikasa V200 autografada" },
  ];

  return (
    <section 
      ref={ref} 
      className="relative py-24 lg:py-32 overflow-hidden bg-[#0A0A0A]"
      id="sorteio"
    >
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-12"
        >
          {/* Decorative gold line */}
          <div className="w-12 h-1 bg-[#DAA520] mb-8" />
          
          <span className="font-display text-xs sm:text-sm uppercase tracking-[0.4em] text-[#DAA520] mb-4">
            SORTEIOS EXCLUSIVOS
          </span>
          
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl uppercase leading-[1.1] mb-8 text-gold-gradient">
            KIT PERSONALIZADO PAULA PEQUENO
          </h2>
          
          <p className="font-body text-base sm:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Todos os atletas inscritos participarão do sorteio de 4 Kits oficiais autografados pela bicampeã olímpica.
          </p>
        </motion.div>

        {/* Central Content: Image with Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-[600px] mx-auto mb-16"
        >
          {/* Subtle Golden Glow */}
          <div className="absolute inset-0 bg-[#DAA520]/15 blur-[100px] rounded-full -z-10" />
          
          <div className="relative gold-border-glow rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/kit-sorteio-paula-pequeno.jpg"
              alt="Kit Personalizado Paula Pequeno"
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
            />
            {/* Soft overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/40 to-transparent pointer-events-none" />
          </div>
        </motion.div>

        {/* Kit Items List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center gap-6 mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full max-w-4xl">
            {kitItems.map((item, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-center gap-4 group"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-[#DAA520]/10 border border-[#DAA520]/20 rounded-full group-hover:bg-[#DAA520]/20 transition-colors duration-300">
                  <item.icon className="text-[#DAA520]" size={22} />
                </div>
                <span className="font-display text-sm sm:text-base uppercase tracking-wider text-white/90 group-hover:text-white transition-colors">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center"
        >
          <a
            href="https://pag.ae/81MHb3z-p"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center gap-3 w-full sm:w-auto px-12 py-5 font-display text-sm uppercase tracking-[0.2em] font-bold text-[#0A0A0A] bg-gradient-to-r from-[#B8860B] via-[#DAA520] to-[#FFD700] hover:brightness-110 transition-all duration-300 shadow-2xl shadow-[#DAA520]/20 overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
            GARANTIR MINHA VAGA E PARTICIPAR
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#DAA520]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#DAA520]/20 to-transparent" />
    </section>
  );
}
