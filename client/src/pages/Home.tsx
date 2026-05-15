/**
 * Paula Pequeno Elite Camp — Landing Page
 * Design: Arena Épica (Brutalismo Esportivo Luxuoso)
 * Palette: Black (#0A0A0A), Gold (#C9A84C / #DAA520 / #FFD700), Olympic Blue (#0057B8), White
 * Typography: Oswald (display), Source Sans 3 (body), Playfair Display (accent)
 */

import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import AthletesSection from "@/components/sections/AthletesSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProgramSection from "@/components/sections/ProgramSection";
import StructureSection from "@/components/sections/StructureSection";
import KitSection from "@/components/sections/KitSection";
import ReportSection from "@/components/sections/ReportSection";
import PricingSection from "@/components/sections/PricingSection";
import GiveawaySection from "@/components/sections/GiveawaySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FaqSection from "@/components/sections/FaqSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import StickyHeader from "@/components/StickyHeader";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden">
      <StickyHeader />
      <HeroSection />
      <AboutSection />
      <AthletesSection />
      <ExperienceSection />
      <ProgramSection />
      <StructureSection />
      <KitSection />
      <ReportSection />
      <PricingSection />
      <GiveawaySection />
      <TestimonialsSection />
      <FaqSection />
      <FinalCtaSection />
      <FloatingWhatsApp />
    </div>
  );
}
