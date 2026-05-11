import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { getLoginUrl } from "@/const";
import { formatPrice } from "@shared/products";
import {
  DollarSign,
  Users,
  ShoppingCart,
  Clock,
  ArrowLeft,
  Shield,
  Ticket,
  Loader2,
  Minus,
  Plus,
  Save,
  AlertTriangle,
} from "lucide-react";
import { useState, useMemo } from "react";
import { useLocation } from "wouter";
import { toast } from "sonner";

/** Badge component */
function Badge({ children, variant = "default" }: { children: React.ReactNode; variant?: "default" | "success" | "warning" | "danger" }) {
  const colors = {
    default: "bg-zinc-700 text-zinc-200",
    success: "bg-emerald-900/60 text-emerald-300 border border-emerald-700/40",
    warning: "bg-amber-900/60 text-amber-300 border border-amber-700/40",
    danger: "bg-red-900/60 text-red-300 border border-red-700/40",
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colors[variant]}`}>
      {children}
    </span>
  );
}

/** Stat Card */
function StatCard({ icon: Icon, label, value, subtext, color }: {
  icon: React.ElementType;
  label: string;
  value: string;
  subtext?: string;
  color: string;
}) {
  return (
    <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-5 hover:border-zinc-700 transition-colors">
      <div className="flex items-center gap-3 mb-3">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${color}`}>
          <Icon className="w-5 h-5" />
        </div>
        <span className="text-sm text-zinc-400 font-medium">{label}</span>
      </div>
      <p className="text-2xl font-bold text-white">{value}</p>
      {subtext && <p className="text-xs text-zinc-500 mt-1">{subtext}</p>}
    </div>
  );
}

/** Slot Control Card */
function SlotCard({ productName, productId, maxSlots, soldSlots, remaining, onSave }: {
  productName: string;
  productId: string;
  maxSlots: number;
  soldSlots: number;
  remaining: number;
  onSave: (productId: string, newMax: number) => void;
}) {
  const [editMax, setEditMax] = useState(maxSlots);
  const [editing, setEditing] = useState(false);
  const pct = maxSlots > 0 ? Math.round((soldSlots / maxSlots) * 100) : 0;
  const barColor = pct >= 90 ? "bg-red-500" : pct >= 70 ? "bg-amber-500" : "bg-emerald-500";

  return (
    <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-5 hover:border-zinc-700 transition-colors">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-white text-lg">{productName}</h3>
        {remaining <= 3 && remaining > 0 && (
          <Badge variant="warning">Quase esgotado</Badge>
        )}
        {remaining <= 0 && (
          <Badge variant="danger">Esgotado</Badge>
        )}
        {remaining > 3 && (
          <Badge variant="success">Disponível</Badge>
        )}
      </div>

      {/* Progress bar */}
      <div className="w-full bg-zinc-800 rounded-full h-3 mb-3">
        <div
          className={`h-3 rounded-full transition-all duration-500 ${barColor}`}
          style={{ width: `${Math.min(pct, 100)}%` }}
        />
      </div>

      <div className="flex justify-between text-sm mb-4">
        <span className="text-zinc-400">{soldSlots} vendidas</span>
        <span className="text-zinc-400">{remaining} restantes</span>
      </div>

      {/* Edit max slots */}
      <div className="flex items-center gap-2 mt-2">
        <span className="text-xs text-zinc-500">Máx. vagas:</span>
        {editing ? (
          <div className="flex items-center gap-1">
            <button
              onClick={() => setEditMax(Math.max(soldSlots, editMax - 1))}
              className="w-7 h-7 rounded bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center text-zinc-300 transition-colors"
            >
              <Minus className="w-3 h-3" />
            </button>
            <input
              type="number"
              value={editMax}
              onChange={(e) => setEditMax(Math.max(soldSlots, parseInt(e.target.value) || 0))}
              className="w-16 h-7 text-center bg-zinc-800 border border-zinc-700 rounded text-white text-sm focus:outline-none focus:border-[#C9A84C]"
            />
            <button
              onClick={() => setEditMax(editMax + 1)}
              className="w-7 h-7 rounded bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center text-zinc-300 transition-colors"
            >
              <Plus className="w-3 h-3" />
            </button>
            <button
              onClick={() => {
                onSave(productId, editMax);
                setEditing(false);
              }}
              className="ml-1 px-3 h-7 rounded bg-[#C9A84C] hover:bg-[#DAA520] text-black text-xs font-semibold flex items-center gap-1 transition-colors"
            >
              <Save className="w-3 h-3" />
              Salvar
            </button>
            <button
              onClick={() => { setEditMax(maxSlots); setEditing(false); }}
              className="px-2 h-7 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-400 text-xs transition-colors"
            >
              Cancelar
            </button>
          </div>
        ) : (
          <button
            onClick={() => setEditing(true)}
            className="text-sm text-[#C9A84C] hover:text-[#DAA520] font-medium transition-colors"
          >
            {maxSlots} vagas (editar)
          </button>
        )}
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  const { user, loading: authLoading } = useAuth();
  const [, setLocation] = useLocation();
  const [statusFilter, setStatusFilter] = useState<"all" | "paid" | "pending" | "failed">("all");

  const statsQuery = trpc.admin.stats.useQuery(undefined, { enabled: !!user && user.role === "admin" });
  const ordersQuery = trpc.admin.allOrders.useQuery(undefined, { enabled: !!user && user.role === "admin" });
  const slotsQuery = trpc.admin.slotLimits.useQuery(undefined, { enabled: !!user && user.role === "admin" });
  const updateSlotMutation = trpc.admin.updateSlotLimit.useMutation({
    onSuccess: () => {
      toast.success("Limite de vagas atualizado com sucesso!");
      slotsQuery.refetch();
    },
    onError: (err) => {
      toast.error(`Erro ao atualizar: ${err.message}`);
    },
  });

  const filteredOrders = useMemo(() => {
    if (!ordersQuery.data) return [];
    if (statusFilter === "all") return ordersQuery.data;
    return ordersQuery.data.filter((o) => o.status === statusFilter);
  }, [ordersQuery.data, statusFilter]);

  // Loading state
  if (authLoading) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-[#C9A84C]" />
      </div>
    );
  }

  // Not logged in
  if (!user) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
        <div className="text-center max-w-md px-6">
          <Shield className="w-16 h-16 text-[#C9A84C] mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-2">Acesso Restrito</h1>
          <p className="text-zinc-400 mb-6">Faça login para acessar o painel administrativo.</p>
          <a
            href={getLoginUrl()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#C9A84C] hover:bg-[#DAA520] text-black font-semibold rounded-lg transition-colors"
          >
            Fazer Login
          </a>
        </div>
      </div>
    );
  }

  // Not admin
  if (user.role !== "admin") {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
        <div className="text-center max-w-md px-6">
          <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-2">Acesso Negado</h1>
          <p className="text-zinc-400 mb-6">Você não tem permissão para acessar esta página. Apenas administradores podem visualizar o painel.</p>
          <button
            onClick={() => setLocation("/")}
            className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold rounded-lg transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao Início
          </button>
        </div>
      </div>
    );
  }

  const stats = statsQuery.data;

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0A0A0A]/95 backdrop-blur border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLocation("/")}
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#C9A84C] flex items-center justify-center">
                <Shield className="w-4 h-4 text-black" />
              </div>
              <div>
                <h1 className="font-display text-sm font-bold uppercase tracking-wider">Painel Admin</h1>
                <p className="text-xs text-zinc-500">Paula Pequeno Elite Camp</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-zinc-500 hidden sm:block">{user.name || user.email}</span>
            <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold text-[#C9A84C]">
              {user.name?.charAt(0).toUpperCase() || "A"}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Stats Cards */}
        <section>
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-[#C9A84C]" />
            Visão Geral
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
              icon={DollarSign}
              label="Receita Total"
              value={stats ? formatPrice(stats.totalRevenue) : "..."}
              subtext="Pagamentos confirmados"
              color="bg-emerald-900/60 text-emerald-400"
            />
            <StatCard
              icon={ShoppingCart}
              label="Inscrições Pagas"
              value={stats?.totalPaid?.toString() ?? "..."}
              subtext="Pagamentos confirmados"
              color="bg-blue-900/60 text-blue-400"
            />
            <StatCard
              icon={Clock}
              label="Pendentes"
              value={stats?.totalPending?.toString() ?? "..."}
              subtext="Aguardando pagamento"
              color="bg-amber-900/60 text-amber-400"
            />
            <StatCard
              icon={Users}
              label="Usuários"
              value={stats?.totalUsers?.toString() ?? "..."}
              subtext="Total cadastrados"
              color="bg-purple-900/60 text-purple-400"
            />
          </div>
        </section>

        {/* Slot Control */}
        <section>
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Ticket className="w-5 h-5 text-[#C9A84C]" />
            Controle de Vagas
          </h2>
          {slotsQuery.isLoading ? (
            <div className="flex justify-center py-8">
              <Loader2 className="w-6 h-6 animate-spin text-zinc-500" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {slotsQuery.data?.map((slot) => (
                <SlotCard
                  key={slot.productId}
                  productName={slot.productName}
                  productId={slot.productId}
                  maxSlots={slot.maxSlots}
                  soldSlots={slot.soldSlots}
                  remaining={slot.remaining}
                  onSave={(productId, newMax) => {
                    updateSlotMutation.mutate({ productId, maxSlots: newMax });
                  }}
                />
              ))}
            </div>
          )}
        </section>

        {/* Orders Table */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <h2 className="text-lg font-semibold text-white flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-[#C9A84C]" />
              Inscrições ({filteredOrders.length})
            </h2>
            <div className="flex gap-2">
              {(["all", "paid", "pending", "failed"] as const).map((status) => (
                <button
                  key={status}
                  onClick={() => setStatusFilter(status)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    statusFilter === status
                      ? "bg-[#C9A84C] text-black"
                      : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
                  }`}
                >
                  {status === "all" ? "Todas" : status === "paid" ? "Pagas" : status === "pending" ? "Pendentes" : "Falhas"}
                </button>
              ))}
            </div>
          </div>

          {ordersQuery.isLoading ? (
            <div className="flex justify-center py-12">
              <Loader2 className="w-6 h-6 animate-spin text-zinc-500" />
            </div>
          ) : filteredOrders.length === 0 ? (
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-12 text-center">
              <ShoppingCart className="w-12 h-12 text-zinc-700 mx-auto mb-3" />
              <p className="text-zinc-500">Nenhuma inscrição encontrada.</p>
            </div>
          ) : (
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-zinc-800">
                      <th className="text-left px-4 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">#</th>
                      <th className="text-left px-4 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Comprador</th>
                      <th className="text-left px-4 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">E-mail</th>
                      <th className="text-left px-4 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Plano</th>
                      <th className="text-left px-4 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Valor</th>
                      <th className="text-left px-4 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Status</th>
                      <th className="text-left px-4 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Data</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800/60">
                    {filteredOrders.map((order) => (
                      <tr key={order.orderId} className="hover:bg-zinc-800/40 transition-colors">
                        <td className="px-4 py-3 text-sm text-zinc-400">#{order.orderId}</td>
                        <td className="px-4 py-3 text-sm text-white font-medium">{order.userName || "—"}</td>
                        <td className="px-4 py-3 text-sm text-zinc-400">{order.userEmail || "—"}</td>
                        <td className="px-4 py-3 text-sm">
                          <span className="text-[#C9A84C] font-medium">{order.productName}</span>
                        </td>
                        <td className="px-4 py-3 text-sm text-white">{formatPrice(order.amountCents)}</td>
                        <td className="px-4 py-3 text-sm">
                          {order.status === "paid" && <Badge variant="success">Pago</Badge>}
                          {order.status === "pending" && <Badge variant="warning">Pendente</Badge>}
                          {order.status === "failed" && <Badge variant="danger">Falha</Badge>}
                          {order.status === "refunded" && <Badge variant="default">Reembolsado</Badge>}
                        </td>
                        <td className="px-4 py-3 text-sm text-zinc-400">
                          {new Date(order.createdAt).toLocaleDateString("pt-BR", {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
