/**
 * HeroSection — Arena Épica design
 * Layout assimétrico: texto à esquerda, foto real da Paula Pequeno à direita
 * Background: arena gerada por IA + overlays cinematográficos
 * Inclui: data do evento, contagem regressiva, WhatsApp correto
 */
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Calendar } from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";

const WHATSAPP_LINK = "https://wa.me/5521968997981?text=Ol%C3%A1!%20Quero%20garantir%20minha%20vaga%20no%20Paula%20Pequeno%20Elite%20Camp";

const HERO_BG = "/hero-volleyball-arena-7275U4BhfbPjC5fuUSV7UB.webp";

const PAULA_HERO = "/paula-pequeno-hero_d5be2515.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt="Arena de voleibol"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/70 via-[#0A0A0A]/50 to-[#0A0A0A]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/90 via-[#0A0A0A]/60 to-[#0A0A0A]/30" />
      </div>

      {/* Spotlight Effect */}
      <div className="absolute inset-0 spotlight pointer-events-none" />

      {/* Diagonal Gold Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-[20%] w-px h-full bg-gradient-to-b from-transparent via-[#DAA520]/10 to-transparent rotate-12 origin-top" />
        <div className="absolute top-0 right-[30%] w-px h-full bg-gradient-to-b from-transparent via-[#DAA520]/8 to-transparent -rotate-12 origin-top" />
      </div>

      {/* Content — Asymmetric Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-center">
          {/* Left — Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge with Date */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-4 border border-[#DAA520]/30 bg-[#DAA520]/5 rounded-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#DAA520] animate-pulse" />
              <span className="font-display text-xs uppercase tracking-[0.2em] text-[#DAA520]">
                Primeira Edição Oficial — Vagas Limitadas
              </span>
            </motion.div>

            {/* Event Date Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center justify-center lg:justify-start gap-2 mb-8"
            >
              <Calendar size={16} className="text-[#DAA520]" />
              <span className="font-display text-sm sm:text-base uppercase tracking-[0.15em] text-white/90">
                24 a 26 de Julho de 2026
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] uppercase leading-[0.95] tracking-tight mb-6"
            >
              <span className="text-white">3 dias que podem</span>
              <br />
              <span className="text-gold-gradient">transformar</span>
              <br />
              <span className="text-white">a relação do seu filho</span>
              <br />
              <span className="text-white">com o esporte.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="font-body text-base sm:text-lg md:text-xl text-white/70 max-w-2xl lg:max-w-xl mb-10 leading-relaxed mx-auto lg:mx-0"
            >
              Treino técnico, mentalidade campeã, disciplina, diversão e convivência com uma das maiores atletas da história do Brasil.
            </motion.p>

            {/* Authority Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 sm:gap-8 mb-10"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">🏅</span>
                <span className="font-display text-sm uppercase tracking-wider text-white/80">Bicampeã Olímpica</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-[#DAA520]/30" />
              <div className="flex items-center gap-3">
                <span className="text-2xl">🏆</span>
                <span className="font-display text-sm uppercase tracking-wider text-white/80">Única MVP da história do voleibol brasileiro</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#precos"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#B8860B] to-[#DAA520] text-[#0A0A0A] font-display text-sm sm:text-base uppercase tracking-wider font-bold rounded-sm pulse-gold hover:from-[#DAA520] hover:to-[#FFD700] transition-all duration-300"
              >
                Quero Garantir Minha Vaga
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-display text-sm sm:text-base uppercase tracking-wider rounded-sm hover:border-[#DAA520]/50 hover:text-[#DAA520] transition-all duration-300 bg-white/5"
              >
                <MessageCircle size={18} />
                Falar no WhatsApp
              </a>
            </motion.div>

            {/* Urgency */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="mt-8 font-body text-sm text-white/40"
            >
              Somente <span className="text-[#DAA520] font-semibold">60 vagas</span> disponíveis
            </motion.p>
          </div>

          {/* Right — Paula Pequeno Photo */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="hidden lg:block relative"
          >
            {/* Photo Container */}
            <div className="relative w-[380px] xl:w-[440px]">
              {/* Gold corner accents */}
              <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-[#DAA520]/60 z-10" />
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-[#DAA520]/60 z-10" />

              {/* Photo */}
              <div className="relative overflow-hidden">
                <img
                  src={PAULA_HERO}
                  alt="Paula Pequeno — Bicampeã Olímpica de Voleibol"
                  className="w-full h-[520px] xl:h-[580px] object-cover object-top"
                />
                {/* Gradient overlay bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />
                {/* Gold tint overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#DAA520]/5 via-transparent to-[#0A0A0A]/30" />
              </div>

              {/* Name tag */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <div className="bg-[#0A0A0A]/80 backdrop-blur-sm border border-[#DAA520]/20 px-4 py-3">
                  <p className="font-display text-base uppercase tracking-wider text-white">Paula Pequeno</p>
                  <p className="font-body text-xs text-[#DAA520]/80">Bicampeã Olímpica &bull; MVP Beijing 2008</p>
                </div>
              </div>

              {/* Decorative gold line */}
              <div className="absolute -left-6 top-1/4 w-px h-1/2 bg-gradient-to-b from-transparent via-[#DAA520]/30 to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Mobile Paula Photo — shown below text on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="lg:hidden mt-10 flex justify-center"
        >
          <div className="relative w-64 sm:w-72">
            <div className="absolute -top-2 -left-2 w-10 h-10 border-t-2 border-l-2 border-[#DAA520]/50 z-10" />
            <div className="absolute -bottom-2 -right-2 w-10 h-10 border-b-2 border-r-2 border-[#DAA520]/50 z-10" />
            <div className="relative overflow-hidden">
              <img
                src={PAULA_HERO}
                alt="Paula Pequeno — Bicampeã Olímpica de Voleibol"
                className="w-full h-80 sm:h-96 object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-50" />
            </div>
            <div className="absolute bottom-3 left-3 right-3 z-10">
              <div className="bg-[#0A0A0A]/80 backdrop-blur-sm border border-[#DAA520]/20 px-3 py-2">
                <p className="font-display text-sm uppercase tracking-wider text-white">Paula Pequeno</p>
                <p className="font-body text-[10px] text-[#DAA520]/80">Bicampeã Olímpica &bull; MVP Beijing 2008</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Countdown Timer */}
        <div className="mt-12 lg:mt-16">
          <CountdownTimer />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border border-white/20 rounded-full flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2 bg-[#DAA520] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
