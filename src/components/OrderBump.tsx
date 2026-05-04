import { useState } from "react";
import { Gift, ChevronDown } from "lucide-react";

export function OrderBump() {
  const [checked, setChecked] = useState(true);
  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
        <span className="inline-flex animate-pulse-gold items-center gap-2 rounded-full bg-gradient-urgency px-4 py-1.5 text-xs font-bold text-cream shadow-lg">
          ⚡ ADICIONAR À MINHA COMPRA (RECOMENDADO)
        </span>
      </div>
      <div className="rounded-3xl border-2 border-gold animate-border-glow bg-[oklch(0.96_0.05_85_/_0.97)] p-6 sm:p-8 shadow-gold-lg">
        <label className="flex cursor-pointer items-start gap-4">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            className="mt-1 h-7 w-7 shrink-0 cursor-pointer accent-[oklch(0.65_0.18_145)]"
          />
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <Gift className="h-5 w-5 text-charcoal" />
              <span className="font-display text-lg sm:text-xl font-bold text-charcoal">
                SIM! Quero o Kit Profissional Completo por +R$ 27,00
              </span>
            </div>
            <p className="mt-1 text-sm text-charcoal/80">
              <span className="line-through">de R$ 297</span> por{" "}
              <strong>R$ 27</strong> — <span className="font-bold text-[oklch(0.5_0.2_25)]">90% OFF só nesta tela</span>
            </p>

            <div className="mt-4 grid gap-2.5 text-sm text-charcoal">
              <div className="flex items-center gap-2 rounded-lg bg-white/60 px-3 py-2">
                <span>📘</span> E-book "Precificação Inteligente para Cabeleireiras" <span className="ml-auto text-charcoal/60 line-through text-xs">R$ 97</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-white/60 px-3 py-2">
                <span>🎥</span> Mini-curso "Atendimento de Alto Padrão" <span className="ml-auto text-charcoal/60 line-through text-xs">R$ 127</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-white/60 px-3 py-2">
                <span>📋</span> Planner Digital da Cabeleireira de Sucesso <span className="ml-auto text-charcoal/60 line-through text-xs">R$ 73</span>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-charcoal px-3 py-1.5 text-xs font-bold text-gold">
                🏆 95% das alunas adicionam este kit
              </span>
              <span className="text-xs font-semibold text-[oklch(0.5_0.2_25)]">
                ⚠️ Esta oferta NÃO estará disponível depois
              </span>
            </div>
          </div>
          <ChevronDown className="mt-1 h-6 w-6 shrink-0 animate-bounce text-charcoal" />
        </label>
      </div>
    </div>
  );
}
