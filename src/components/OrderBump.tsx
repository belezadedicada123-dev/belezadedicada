import { useState } from "react";
import { Gift, ChevronDown, CheckSquare, Square } from "lucide-react";

export function OrderBump() {
  const [checked, setChecked] = useState(true);
  
  return (
    <div className="relative mx-auto max-w-3xl mt-8">
      {/* Badge overlapping top - Fix overflow issue on mobile */}
      <div className="absolute -top-4 left-0 right-0 flex justify-center z-20 px-4">
        <span className="animate-pulse-urgency inline-flex items-center gap-2 rounded-full bg-gradient-urgency px-4 py-2 text-[10px] sm:text-xs font-bold text-white shadow-lg text-center leading-tight uppercase tracking-wide">
          ⚡ Adicionar à minha compra (Recomendado)
        </span>
      </div>

      <div 
        className={`relative cursor-pointer overflow-hidden rounded-3xl border-2 transition-all duration-300 ${
          checked ? "border-gold bg-gradient-card-premium shadow-gold-lg" : "border-border/50 bg-card/50 hover:border-gold/50"
        } p-5 sm:p-8 pt-10 sm:pt-10`}
        onClick={() => setChecked(!checked)}
      >
        {checked && <div className="absolute inset-0 bg-gold/5 pointer-events-none" />}
        
        <div className="flex items-start gap-4 sm:gap-6 relative z-10">
          <div className="mt-1 shrink-0">
            {checked ? (
              <CheckSquare className="h-8 w-8 sm:h-10 sm:w-10 text-gold animate-scale-in drop-shadow-md" fill="currentColor" stroke="black" strokeWidth={1} />
            ) : (
              <Square className="h-8 w-8 sm:h-10 sm:w-10 text-muted-foreground/40 transition-colors" />
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <Gift className={`h-5 w-5 sm:h-6 sm:w-6 ${checked ? "text-gold" : "text-muted-foreground"}`} />
              <h4 className={`font-display text-lg sm:text-2xl font-bold leading-tight ${checked ? "text-foreground" : "text-muted-foreground"}`}>
                SIM! Quero o Kit Profissional Completo por <span className={checked ? "text-gradient-gold" : ""}>+R$ 27,00</span>
              </h4>
            </div>
            
            <p className="text-sm sm:text-base text-muted-foreground mb-6">
              <span className="line-through opacity-70">de R$ 297,00</span> por{" "}
              <strong className="text-foreground">R$ 27,00</strong> — <span className="font-bold text-success">90% OFF só nesta tela</span>
            </p>

            <div className={`grid gap-3 transition-opacity duration-300 ${checked ? "opacity-100" : "opacity-50"}`}>
              <div className="flex items-center gap-3 rounded-xl border border-border/40 bg-background/50 px-4 py-3 text-sm">
                <span className="text-xl">📘</span> 
                <span className="font-medium text-foreground/90 leading-tight">E-book "Precificação Inteligente para Cabeleireiras"</span>
                <span className="ml-auto text-muted-foreground line-through text-xs whitespace-nowrap pl-2">R$ 97</span>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-border/40 bg-background/50 px-4 py-3 text-sm">
                <span className="text-xl">🎥</span> 
                <span className="font-medium text-foreground/90 leading-tight">Mini-curso "Atendimento de Alto Padrão"</span>
                <span className="ml-auto text-muted-foreground line-through text-xs whitespace-nowrap pl-2">R$ 127</span>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-border/40 bg-background/50 px-4 py-3 text-sm">
                <span className="text-xl">📋</span> 
                <span className="font-medium text-foreground/90 leading-tight">Planner Digital da Cabeleireira de Sucesso</span>
                <span className="ml-auto text-muted-foreground line-through text-xs whitespace-nowrap pl-2">R$ 73</span>
              </div>
            </div>

            {checked && (
              <div className="mt-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fade-up">
                <span className="inline-flex items-center justify-center gap-2 rounded-full bg-gold/10 border border-gold/20 px-4 py-2 text-xs font-bold text-gold">
                  🏆 95% das alunas adicionam este kit
                </span>
                <span className="text-xs font-semibold text-urgency sm:text-right">
                  ⚠️ Esta oferta NÃO estará disponível depois
                </span>
              </div>
            )}
          </div>
          
          <ChevronDown className={`hidden md:block mt-2 h-7 w-7 shrink-0 transition-transform duration-300 text-gold opacity-50 ${checked ? "rotate-180" : "opacity-20"}`} />
        </div>
      </div>
      
      <div className="mt-10 text-center animate-fade-up">
        <a
          href={
            (checked
              ? "https://lastlink.com/p/C2F096D6F/checkout-payment/"
              : "https://lastlink.com/p/C493D23B0/checkout-payment/") + window.location.search
          }
          className="inline-flex items-center justify-center w-full sm:w-auto rounded-2xl bg-gradient-success px-8 py-5 text-base sm:text-lg font-bold text-success-foreground cta-glow animate-pulse-gold hover:scale-105 transition-transform"
        >
          🔥 {checked ? "QUERO O PACOTE COMPLETO VIP" : "QUERO APENAS O BÁSICO"} 🔥
        </a>
        <p className="mt-3 text-xs sm:text-sm text-muted-foreground">
          Você será redirecionada para a página de pagamento 100% segura.
        </p>
      </div>
    </div>
  );
}
