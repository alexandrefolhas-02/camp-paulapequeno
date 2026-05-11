import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5521968997981?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20o%20Paula%20Pequeno%20Elite%20Camp";

const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Programação", href: "#programacao" },
  { label: "Kit Atleta", href: "#kit" },
  { label: "Investimento", href: "#precos" },
  { label: "FAQ", href: "#faq" },
];

export default function StickyHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#DAA520]/10 shadow-lg shadow-black/30"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-sm bg-gradient-to-br from-[#DAA520] to-[#B8860B] flex items-center justify-center">
                <span className="font-display text-[#0A0A0A] text-sm lg:text-base font-bold">PP</span>
              </div>
              <div className="hidden sm:block">
                <span className="font-display text-sm lg:text-base uppercase tracking-[0.2em] text-white/90">ELITE Camp</span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-display text-xs uppercase tracking-[0.15em] text-white/60 hover:text-[#DAA520] transition-colors duration-300"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#B8860B] to-[#DAA520] text-[#0A0A0A] font-display text-xs uppercase tracking-wider font-bold rounded-sm hover:from-[#DAA520] hover:to-[#FFD700] transition-all duration-300"
              >
                Garantir Vaga
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-white/70 hover:text-[#DAA520] transition-colors"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0A0A0A]/98 backdrop-blur-lg pt-20"
          >
            <nav className="flex flex-col items-center gap-6 py-12">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="font-display text-2xl uppercase tracking-[0.2em] text-white/80 hover:text-[#DAA520] transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.08 }}
                className="mt-4 px-8 py-4 bg-gradient-to-r from-[#B8860B] to-[#DAA520] text-[#0A0A0A] font-display text-lg uppercase tracking-wider font-bold rounded-sm"
              >
                Garantir Minha Vaga
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
