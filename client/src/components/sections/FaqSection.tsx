import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Users, 
  Ticket, 
  CreditCard, 
  Trophy, 
  Heart, 
  Package, 
  Coffee, 
  Stethoscope, 
  FileText 
} from "lucide-react";

const faqs = [
  {
    question: "Qual a idade ideal para participar?",
    answer: "O camp é voltado para crianças e adolescentes de 11 a 17 anos. Dividimos os grupos por faixa etária para garantir que cada atleta tenha uma experiência adequada ao seu nível de desenvolvimento.",
    icon: Users,
  },
  {
    question: "Quantas vagas existem?",
    answer: "São apenas 60 vagas disponíveis para garantir a qualidade da experiência e a atenção individualizada. As vagas são preenchidas por ordem de inscrição e pagamento confirmado.",
    icon: Ticket,
  },
  {
    question: "Como funciona o pagamento?",
    answer: "O pagamento pode ser feito via PIX, cartão de crédito (em até 10x sem juros) ou boleto bancário. Após a confirmação do pagamento, o atleta recebe a confirmação de inscrição e todas as informações necessárias.",
    icon: CreditCard,
  },
  {
    question: "O evento é apenas para atletas profissionais ou iniciantes podem participar?",
    answer: "O Elite Camp é desenhado para atletas que buscam evolução, independentemente do nível atual. No primeiro dia, realizamos uma avaliação técnica individual para nivelar os grupos em ambientes desafiadores e adequados.",
    icon: Trophy,
  },
  {
    question: "Os pais podem acompanhar? Precisam pagar inscrição separada?",
    answer: "Não precisam pagar extra! Os pais são bem-vindos em momentos específicos (palestras de Nutrição, Workshops e Palestra Magna da Paula Pequeno). Durante os treinos técnicos, os atletas ficam sob responsabilidade da nossa equipe.",
    icon: Heart,
  },
  {
    question: "O que exatamente vem no Kit Atleta?",
    answer: "É um dos kits mais completos do mercado: 1 camisa de treino, 1 short de treino, 1 camisa casual, 1 short casual, squeeze, toalha, sacochila e o passaporte do atleta. Entregue no credenciamento.",
    icon: Package,
  },
  {
    question: "Como funciona a alimentação durante os 3 dias?",
    answer: "Para foco total no treino, incluímos almoço e dois coffee breaks diários (sexta, sábado e domingo), além de área de hidratação constante.",
    icon: Coffee,
  },
  {
    question: "Haverá suporte médico no local?",
    answer: "Sim. Teremos profissionais de fisioterapia e primeiros socorros de prontidão durante todas as atividades práticas e o torneio oficial.",
    icon: Stethoscope,
  },
  {
    question: "Quais documentos e materiais o atleta deve levar?",
    answer: "É obrigatório apresentar documento com foto no credenciamento. Recomendamos levar itens de higiene pessoal, joelheiras e tênis de vôlei. O uniforme será fornecido por nós.",
    icon: FileText,
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
                className="border border-white/5 bg-[#0D0D0D] px-4 sm:px-6 hover:border-[#DAA520]/15 transition-colors duration-300 data-[state=open]:border-[#DAA520]/20 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="font-display text-sm sm:text-base uppercase tracking-wider text-white/80 hover:text-[#DAA520] py-5 [&[data-state=open]]:text-[#DAA520] text-left gap-4 hover:no-underline group">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#DAA520]/10 group-hover:bg-[#DAA520]/20 transition-colors shrink-0">
                      <faq.icon size={16} className="text-[#DAA520]" />
                    </div>
                    {faq.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="font-body text-sm sm:text-base text-white/50 leading-relaxed pb-5 pl-12">
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
