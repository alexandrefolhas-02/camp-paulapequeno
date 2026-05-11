/**
 * Paula Pequeno Elite Camp — Product definitions
 * Centralized product/price configuration used by both frontend and backend.
 */

export interface CampProduct {
  id: string;
  name: string;
  description: string;
  priceInCents: number;
  currency: string;
  features: string[];
  badge?: string;
  highlighted?: boolean;
  /** PagSeguro/PagBank payment link */
  paymentLink: string;
}

export const CAMP_PRODUCTS: CampProduct[] = [
  {
    id: "lote-1",
    name: "Lote 1",
    description: "Primeiro Lote — Acesso completo ao camp",
    priceInCents: 149700,
    currency: "brl",
    features: [
      "Acesso completo aos 3 dias",
      "Kit atleta exclusivo",
      "Relatório individual",
      "Certificado oficial",
      "Fotos do evento",
    ],
    badge: "Primeiro Lote",
    paymentLink: "https://pag.ae/81KDkFP-t",
  },
  {
    id: "lote-2",
    name: "Lote 2",
    description: "Segundo Lote — Acesso completo ao camp",
    priceInCents: 189700,
    currency: "brl",
    features: [
      "Acesso completo aos 3 dias",
      "Kit atleta exclusivo",
      "Relatório individual",
      "Certificado oficial",
      "Fotos do evento",
    ],
    badge: "Segundo Lote",
    paymentLink: "https://pag.ae/81KDmgng8",
  },
  {
    id: "vip-experience",
    name: "VIP Experience",
    description: "Experiência exclusiva com benefícios premium",
    priceInCents: 299700,
    currency: "brl",
    features: [
      "Tudo dos lotes anteriores",
      "Foto profissional com Paula",
      "Camisa assinada por Paula",
      "Meet & greet exclusivo",
      "Certificado especial VIP",
    ],
    badge: "Mais Escolhido",
    highlighted: true,
    paymentLink: "https://pag.ae/81KDmZXg7",
  },
];

export function getProductById(id: string): CampProduct | undefined {
  return CAMP_PRODUCTS.find((p) => p.id === id);
}

export function formatPrice(cents: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(cents / 100);
}
