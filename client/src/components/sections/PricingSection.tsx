import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { ArrowRight, Star, Camera, Shirt, Users, Award } from "lucide-react";
import { toast } from "sonner";

const vipIcons = [Camera, Shirt, Users, Award];

export default function PricingSection() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  // Array estático de produtos para o front-end
  const products = [
    {
      id: "lote-1",
      name: "LOTE 1",
      badge: "PRIMEIRO LOTE",
      maxSlots: 20,
      soldSlots: 0,
      available: true,
      highlighted: false,
      priceInCents: 149700,
      features: [
        "Acesso completo aos 3 dias",
        "Kit atleta exclusivo",
        "Relatório individual",
        "Certificado oficial",
        "Fotos do evento"
      ],
      paymentLink: "https://sacola.pagbank.com.br/4e321316-d83f-42e1-9492-39a431583656"
    },
    {
      id: "lote-2",
      name: "LOTE 2",
      badge: "SEGUNDO LOTE",
      maxSlots: 20,
      soldSlots: 0,
      available: true,
      highlighted: false,
      priceInCents: 189700,
      features: [
        "Acesso completo aos 3 dias",
        "Kit atleta exclusivo",
        "Relatório individual",
        "Certificado oficial",
        "Fotos do evento"
      ],
      paymentLink: "https://sacola.pagbank.com.br/72350f48-9853-4ec9-8d36-8731acad8cf6"
    },
    {
      id: "vip",
      name: "VIP EXPERIENCE",
      badge: "MAIS ESCOLHIDO",
      maxSlots: 20,
      soldSlots: 0,
      available: true,
      highlighted: true,
      priceInCents: 299700,
      features: [
        "Tudo dos lotes anteriores",
        "Foto profissional com Paula",
        "Camisa assinada por Paula",
        "Meet & greet exclusivo",
        "Certificado especial VIP"
      ],
      paymentLink: "https://sacola.pagbank.com.br/ab882922-b93f-42c0-bb14-a6c51ac27987"
    }
  ];

  const handlePayment = (paymentLink: string, productName: string, isSoldOut: boolean) => {
    if (isSoldOut) return;
    toast.success(`Redirecionando para o pagamento — ${productName}`);
    window.open(paymentLink, "_blank");
  };

  return (
    <section id="precos" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#0A0A0A]" />
      <div className="absolute inset-0 spotlight opacity-40" />

      {/* Top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#DAA520]/20 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-[#DAA520]" />
            <span className="font-display text-xs uppercase tracking-[0.3em] text-[#DAA520]">Investimento</span>
            <div className="w-12 h-px bg-[#DAA520]" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase leading-[0.95] mb-4">
            <span className="text-white">Garanta a Vaga</span>{" "}
            <span className="text-gold-gradient">do Seu Atleta</span>
          </h2>
          <p className="font-body text-base text-white/50 max-w-xl mx-auto">
            Escolha o plano ideal e proporcione uma experiência que seu filho vai lembrar para sempre.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {products.map((product, i) => {
            const remaining = product.maxSlots - product.soldSlots;
            const isSoldOut = !product.available;
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
                className={`relative group ${product.highlighted ? "lg:-mt-4 lg:mb-[-16px]" : ""}`}
              >
                {/* VIP Badge */}
                {product.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className="flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-[#B8860B] to-[#FFD700] text-[#0A0A0A]">
                      <Star size={12} fill="currentColor" />
                      <span className="font-display text-[10px] uppercase tracking-[0.2em] font-bold">
                        {product.badge}
                      </span>
                    </div>
                  </div>
                )}

                <div
                  className={`relative h-full p-8 lg:p-10 flex flex-col transition-all duration-500 ${
                    product.highlighted
                      ? "bg-[#0D0D0D] border-2 border-[#DAA520]/40 shadow-lg shadow-[#DAA520]/5"
                      : "bg-[#0D0D0D] border border-white/5 hover:border-[#DAA520]/20"
                  } ${isSoldOut ? "opacity-70" : ""}`}
                >
                  {/* Plan Label */}
                  <span className="font-display text-xs uppercase tracking-[0.2em] text-[#DAA520] mb-2">
                    {product.badge || product.name}
                  </span>
                  <h3 className="font-display text-2xl uppercase tracking-wider text-white mb-6">{product.name}</h3>

                  {/* Price */}
                  <div className="mb-4">
                    <div className="flex items-baseline gap-1">
                      <span className="font-body text-sm text-white/40">R$</span>
                      <span
                        className={`font-display text-5xl lg:text-6xl font-bold ${
                          product.highlighted ? "text-gold-gradient" : "text-white"
                        }`}
                      >
                        {(product.priceInCents / 100).toLocaleString("pt-BR", { minimumFractionDigits: 0 })}
                      </span>
                    </div>
                    <span className="font-body text-xs text-white/30">por atleta</span>
                    <div className="mt-2 flex items-center gap-1.5">
                      <span className="font-display text-sm text-[#DAA520]">
                        ou 6x de R$ {(product.priceInCents / 6 / 100).toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} sem juros
                      </span>
                    </div>
                  </div>

                  {/* Slot availability indicator */}
                  <div className="mb-6">
                    {isSoldOut ? (
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-red-500/10 border border-red-500/20 rounded">
                        <span className="w-2 h-2 rounded-full bg-red-500" />
                        <span className="font-display text-[10px] uppercase tracking-[0.15em] text-red-400 font-bold">
                          Esgotado
                        </span>
                      </div>
                    ) : remaining <= 5 ? (
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded">
                        <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                        <span className="font-display text-[10px] uppercase tracking-[0.15em] text-amber-400 font-bold">
                          Apenas {remaining} {remaining === 1 ? "vaga" : "vagas"}
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span className="font-display text-[10px] uppercase tracking-[0.15em] text-emerald-400 font-bold">
                          {remaining} vagas disponíveis
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div
                          className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${
                            product.highlighted ? "bg-[#FFD700]" : "bg-[#DAA520]/50"
                          }`}
                        />
                        <span className="font-body text-sm text-white/60">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button — PagSeguro link */}
                  <button
                    onClick={() => handlePayment(product.paymentLink, product.name, isSoldOut)}
                    disabled={isSoldOut}
                    className={`flex items-center justify-center gap-2 w-full py-4 font-display text-sm uppercase tracking-wider font-bold transition-all duration-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed ${
                      isSoldOut
                        ? "border border-zinc-700 text-zinc-500 bg-zinc-900"
                        : product.highlighted
                        ? "bg-gradient-to-r from-[#B8860B] to-[#DAA520] text-[#0A0A0A] hover:from-[#DAA520] hover:to-[#FFD700] pulse-gold"
                        : "border border-[#DAA520]/30 text-[#DAA520] hover:bg-[#DAA520]/10"
                    }`}
                  >
                    {isSoldOut ? (
                      "Esgotado"
                    ) : (
                      <>
                        Garantir Vaga
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>

                  {/* PagSeguro badge */}
                  {!isSoldOut && (
                    <p className="font-body text-[10px] text-white/25 text-center mt-3">
                      Pagamento seguro via PagSeguro/PagBank
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Urgency */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-10"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 border border-red-500/20 bg-red-500/5">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="font-display text-xs uppercase tracking-[0.15em] text-red-400">
              Poucas vagas restantes — Garanta antes que esgote
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
