import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { CheckCircle, ArrowLeft, Loader2 } from "lucide-react";
import { useSearch, useLocation } from "wouter";

export default function PaymentSuccess() {
  const search = useSearch();
  const params = new URLSearchParams(search);
  const sessionId = params.get("session_id");
  const [, navigate] = useLocation();
  const { isAuthenticated } = useAuth();

  const { data: session, isLoading } = trpc.checkout.getSession.useQuery(
    { sessionId: sessionId || "" },
    { enabled: !!sessionId && isAuthenticated }
  );

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        {isLoading ? (
          <div className="flex flex-col items-center gap-4">
            <Loader2 size={48} className="animate-spin text-[#DAA520]" />
            <p className="font-body text-white/60">Confirmando seu pagamento...</p>
          </div>
        ) : (
          <>
            <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-green-500/10 flex items-center justify-center">
              <CheckCircle size={40} className="text-green-500" />
            </div>

            <h1 className="font-display text-3xl sm:text-4xl uppercase mb-4">
              <span className="text-gold-gradient">Pagamento Confirmado!</span>
            </h1>

            <p className="font-body text-lg text-white/70 mb-2">
              Sua inscrição no <strong className="text-white">Paula Pequeno Elite Camp</strong> foi realizada com sucesso.
            </p>

            {session?.customerEmail && (
              <p className="font-body text-sm text-white/50 mb-8">
                Um e-mail de confirmação será enviado para <strong className="text-[#DAA520]">{session.customerEmail}</strong>.
              </p>
            )}

            <div className="p-6 border border-[#DAA520]/20 bg-[#0D0D0D] mb-8">
              <p className="font-display text-sm uppercase tracking-wider text-[#DAA520] mb-2">Próximos Passos</p>
              <ul className="space-y-2 text-left">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DAA520] mt-2 shrink-0" />
                  <span className="font-body text-sm text-white/60">
                    Você receberá um e-mail com todas as informações do evento
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DAA520] mt-2 shrink-0" />
                  <span className="font-body text-sm text-white/60">
                    O kit do atleta será entregue no primeiro dia do camp
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DAA520] mt-2 shrink-0" />
                  <span className="font-body text-sm text-white/60">
                    Prepare-se para 3 dias inesquecíveis!
                  </span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/")}
                className="flex items-center justify-center gap-2 px-6 py-3 border border-[#DAA520]/30 text-[#DAA520] font-display text-sm uppercase tracking-wider hover:bg-[#DAA520]/10 transition-colors cursor-pointer"
              >
                <ArrowLeft size={16} />
                Voltar ao Início
              </button>
              <button
                onClick={() => navigate("/meus-pedidos")}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#B8860B] to-[#DAA520] text-[#0A0A0A] font-display text-sm uppercase tracking-wider font-bold hover:from-[#DAA520] hover:to-[#FFD700] transition-colors cursor-pointer"
              >
                Ver Meus Pedidos
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
