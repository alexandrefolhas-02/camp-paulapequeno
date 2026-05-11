import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Qual a idade ideal para participar?",
    answer:
      "O camp é voltado para crianças e adolescentes de 8 a 17 anos. Dividimos os grupos por faixa etária para garantir que cada atleta tenha uma experiência adequada ao seu nível de desenvolvimento.",
  },
  {
    question: "Precisa já jogar vôlei?",
    answer:
      "Não é necessário ter experiência prévia. O camp é projetado para atender desde iniciantes até atletas mais experientes. A equipe técnica adapta os treinos para cada nível, garantindo evolução para todos.",
  },
  {
    question: "O almoço está incluso?",
    answer:
      "Sim, todas as refeições durante o período do camp estão inclusas: lanche da manhã, almoço e lanche da tarde. Trabalhamos com alimentação balanceada e adequada para atletas em atividade.",
  },
  {
    question: "Os pais podem acompanhar?",
    answer:
      "Os pais são bem-vindos para acompanhar em momentos específicos, como a abertura, o desafio Pais x Filhos no Dia 2 e a cerimônia de premiação no Dia 3. Durante os treinos, os atletas ficam sob responsabilidade da equipe técnica.",
  },
  {
    question: "Como funciona o pagamento?",
    answer:
      "O pagamento pode ser feito via PIX, cartão de crédito (em até 12x) ou boleto bancário. Após a confirmação do pagamento, o atleta recebe a confirmação de inscrição e todas as informações necessárias para o camp.",
  },
  {
    question: "Quantas vagas existem?",
    answer:
      "São apenas 60 vagas disponíveis para garantir a qualidade da experiência e a atenção individualizada. As vagas são preenchidas por ordem de inscrição e pagamento confirmado.",
  },
];

export default function FaqSection() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="faq" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#0A0A0A]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#DAA520]/20 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-[#DAA520]" />
            <span className="font-display text-xs uppercase tracking-[0.3em] text-[#DAA520]">Dúvidas</span>
            <div className="w-12 h-px bg-[#DAA520]" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase leading-[0.95]">
            <span className="text-white">Perguntas</span>{" "}
            <span className="text-gold-gradient">Frequentes</span>
          </h2>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={`faq-${i}`}
                value={`faq-${i}`}
                className="border border-white/5 bg-[#0D0D0D] px-6 hover:border-[#DAA520]/15 transition-colors duration-300 data-[state=open]:border-[#DAA520]/20"
              >
                <AccordionTrigger className="font-display text-sm sm:text-base uppercase tracking-wider text-white/80 hover:text-[#DAA520] py-5 [&[data-state=open]]:text-[#DAA520]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-body text-sm sm:text-base text-white/50 leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
