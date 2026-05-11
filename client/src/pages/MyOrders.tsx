import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { ArrowLeft, Package, Loader2, ShoppingBag } from "lucide-react";
import { useLocation } from "wouter";
import { getLoginUrl } from "@/const";
import { formatPrice } from "@shared/products";

const statusLabels: Record<string, { label: string; color: string }> = {
  pending: { label: "Pendente", color: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20" },
  paid: { label: "Pago", color: "text-green-400 bg-green-400/10 border-green-400/20" },
  failed: { label: "Falhou", color: "text-red-400 bg-red-400/10 border-red-400/20" },
  refunded: { label: "Reembolsado", color: "text-blue-400 bg-blue-400/10 border-blue-400/20" },
};

export default function MyOrders() {
  const [, navigate] = useLocation();
  const { isAuthenticated, loading: authLoading } = useAuth();
  const { data: orders, isLoading } = trpc.orders.list.useQuery(undefined, {
    enabled: isAuthenticated,
  });

  if (authLoading) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center">
        <Loader2 size={32} className="animate-spin text-[#DAA520]" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <ShoppingBag size={48} className="mx-auto mb-6 text-[#DAA520]/50" />
          <h1 className="font-display text-2xl uppercase mb-4 text-white">Faça Login</h1>
          <p className="font-body text-white/60 mb-8">
            Para ver seus pedidos, faça login na sua conta.
          </p>
          <a
            href={getLoginUrl()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#B8860B] to-[#DAA520] text-[#0A0A0A] font-display text-sm uppercase tracking-wider font-bold hover:from-[#DAA520] hover:to-[#FFD700] transition-colors"
          >
            Fazer Login
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Header */}
        <div className="flex items-center gap-4 mb-10">
          <button
            onClick={() => navigate("/")}
            className="flex items-center justify-center w-10 h-10 border border-white/10 hover:border-[#DAA520]/30 transition-colors cursor-pointer"
          >
            <ArrowLeft size={18} className="text-white/60" />
          </button>
          <div>
            <h1 className="font-display text-2xl sm:text-3xl uppercase text-white">Meus Pedidos</h1>
            <p className="font-body text-sm text-white/40">Histórico de compras no Elite Camp</p>
          </div>
        </div>

        {/* Orders List */}
        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 size={32} className="animate-spin text-[#DAA520]" />
          </div>
        ) : !orders || orders.length === 0 ? (
          <div className="text-center py-20 border border-white/5 bg-[#0D0D0D]">
            <Package size={48} className="mx-auto mb-4 text-white/20" />
            <p className="font-display text-lg uppercase text-white/40 mb-2">Nenhum pedido encontrado</p>
            <p className="font-body text-sm text-white/30 mb-6">
              Você ainda não fez nenhuma compra.
            </p>
            <button
              onClick={() => {
                navigate("/");
                setTimeout(() => {
                  document.getElementById("precos")?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#B8860B] to-[#DAA520] text-[#0A0A0A] font-display text-sm uppercase tracking-wider font-bold hover:from-[#DAA520] hover:to-[#FFD700] transition-colors cursor-pointer"
            >
              Ver Planos
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => {
              const statusInfo = statusLabels[order.status] || statusLabels.pending;
              return (
                <div
                  key={order.id}
                  className="p-6 border border-white/5 bg-[#0D0D0D] hover:border-[#DAA520]/10 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="font-display text-lg uppercase text-white mb-1">
                        {order.productName}
                      </h3>
                      <p className="font-body text-xs text-white/30">
                        Pedido #{order.id} — {new Date(order.createdAt).toLocaleDateString("pt-BR", {
                          day: "2-digit",
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={`px-3 py-1 text-xs font-display uppercase tracking-wider border ${statusInfo.color}`}>
                        {statusInfo.label}
                      </span>
                      <span className="font-display text-xl text-[#DAA520]">
                        {formatPrice(order.amountCents)}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
