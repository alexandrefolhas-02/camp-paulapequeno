import { XCircle, ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

export default function PaymentCancelled() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-red-500/10 flex items-center justify-center">
          <XCircle size={40} className="text-red-400" />
        </div>

        <h1 className="font-display text-3xl sm:text-4xl uppercase mb-4">
          <span className="text-white">Pagamento</span>{" "}
          <span className="text-red-400">Cancelado</span>
        </h1>

        <p className="font-body text-lg text-white/70 mb-8">
          O pagamento não foi concluído. Nenhuma cobrança foi realizada. Você pode tentar novamente quando quiser.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate("/")}
            className="flex items-center justify-center gap-2 px-6 py-3 border border-[#DAA520]/30 text-[#DAA520] font-display text-sm uppercase tracking-wider hover:bg-[#DAA520]/10 transition-colors cursor-pointer"
          >
            <ArrowLeft size={16} />
            Voltar ao Início
          </button>
          <button
            onClick={() => {
              navigate("/");
              setTimeout(() => {
                document.getElementById("precos")?.scrollIntoView({ behavior: "smooth" });
              }, 100);
            }}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#B8860B] to-[#DAA520] text-[#0A0A0A] font-display text-sm uppercase tracking-wider font-bold hover:from-[#DAA520] hover:to-[#FFD700] transition-colors cursor-pointer"
          >
            Tentar Novamente
          </button>
        </div>
      </div>
    </div>
  );
}
