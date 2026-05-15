import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const images = [
  { src: "/structure-aerial.jpg", alt: "Vista Aérea do Clube" },
  { src: "/structure-gym.jpg", alt: "Ginásio de Voleibol" },
  { src: "/structure-academy.jpg", alt: "Academia de Alto Rendimento" },
  { src: "/structure-pool.jpg", alt: "Piscina do Clube" },
  { src: "/structure-restaurant.jpg", alt: "Restaurante Barra Deck" },
];

export default function StructureSection() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="estrutura" className="relative py-24 lg:py-32 bg-[#0D0D0D] overflow-hidden border-t border-white/5">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column - Gallery Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4 h-full"
          >
            <div className="space-y-4">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative group overflow-hidden rounded-2xl border border-[#DAA520]/20 shadow-2xl"
              >
                <img 
                  src={images[0].src} 
                  alt={images[0].alt}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-xs uppercase tracking-widest">{images[0].alt}</span>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative group overflow-hidden rounded-2xl border border-[#DAA520]/20 shadow-2xl"
              >
                <img 
                  src={images[1].src} 
                  alt={images[1].alt}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-xs uppercase tracking-widest">{images[1].alt}</span>
                </div>
              </motion.div>
            </div>
            
            <div className="space-y-4 pt-8">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative group overflow-hidden rounded-2xl border border-[#DAA520]/20 shadow-2xl"
              >
                <img 
                  src={images[2].src} 
                  alt={images[2].alt}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-xs uppercase tracking-widest">{images[2].alt}</span>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative group overflow-hidden rounded-2xl border border-[#DAA520]/20 shadow-2xl"
              >
                <img 
                  src={images[3].src} 
                  alt={images[3].alt}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-xs uppercase tracking-widest">{images[3].alt}</span>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="col-span-2 relative group overflow-hidden rounded-2xl border border-[#DAA520]/20 shadow-2xl"
            >
              <img 
                src={images[4].src} 
                alt={images[4].alt}
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white text-sm uppercase tracking-widest">{images[4].alt}</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-[#DAA520]" />
              <span className="font-display text-xs uppercase tracking-[0.3em] text-[#DAA520]">Infraestrutura</span>
            </div>

            <h2 className="font-display text-4xl lg:text-5xl uppercase leading-tight mb-2">
              ESTRUTURA <span className="text-gold-gradient">COMPLETA</span>
            </h2>
            <p className="font-display text-xl text-[#DAA520] mb-8 tracking-[0.2em] uppercase font-light">
              CLUBE DE AERONÁUTICA
            </p>

            <div className="space-y-6 mb-10">
              <p className="font-body text-lg text-white/80 leading-relaxed">
                O Paula Pequeno Elite Camp acontece no Clube de Aeronáutica, um dos espaços mais nobres e seguros da Barra da Tijuca.
              </p>
              <p className="font-body text-base text-white/60 leading-relaxed">
                Oferecemos uma infraestrutura de excelência com ginásio de alto rendimento, academia moderna, piscinas e restaurante, garantindo o máximo conforto e desempenho para os nossos atletas, além de uma área de convivência premium para os familiares.
              </p>
            </div>

            <div className="mt-auto space-y-8">
              <div className="flex items-start gap-5 p-6 bg-white/[0.03] border border-white/10 rounded-sm hover:border-[#DAA520]/30 transition-colors duration-300">
                <div className="w-10 h-10 rounded-full bg-[#DAA520]/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-[#DAA520]" size={20} />
                </div>
                <div className="space-y-1">
                  <p className="font-display text-xs uppercase tracking-widest text-[#DAA520]">Localização Privilegiada</p>
                  <p className="font-body text-sm sm:text-base text-white/70 leading-snug">
                    Avenida Rachel de Queiroz, s/nº - Barra da Tijuca, Rio de Janeiro - RJ
                  </p>
                </div>
              </div>
              
              <div className="flex items-center justify-between gap-6 pt-4 border-t border-white/5">
                <div className="flex flex-col gap-1">
                  <span className="font-display text-[10px] uppercase tracking-[0.3em] text-white/30">Sede Oficial</span>
                  <p className="font-display text-sm uppercase tracking-wider text-white/90">Clube de Aeronáutica</p>
                </div>
                <motion.img 
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 1, delay: 0.5 }}
                  src="/logo-caer.png" 
                  alt="Logo Clube de Aeronáutica" 
                  className="h-16 lg:h-20 object-contain brightness-125 contrast-110 drop-shadow-[0_0_15px_rgba(218,165,32,0.1)]"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
