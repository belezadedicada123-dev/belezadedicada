import { Check, X, Star } from "lucide-react";

const features = [
  { label: "Acesso aos 16 cursos", basic: true, vip: true },
  { label: "Acesso vitalício", basic: false, vip: true },
  { label: "Certificado de conclusão", basic: "básico", vip: true },
  { label: "Comunidade Beleza Dedicada", basic: false, vip: true },
  { label: "Suporte prioritário", basic: false, vip: true },
  { label: "Atualizações e novos cursos", basic: false, vip: true },
  { label: "Bônus: Precificação + Atendimento + Planner", basic: false, vip: true },
];

function Cell({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="mx-auto h-5 w-5 text-success" />;
  if (value === false) return <X className="mx-auto h-5 w-5 text-muted-foreground/50" />;
  return <span className="text-xs font-semibold text-gold">{value}</span>;
}

export function PricingPlans() {
  return (
    <div className="space-y-12">
      {/* Cards */}
      <div className="mx-auto grid max-w-4xl items-stretch gap-6 md:grid-cols-2">
        {/* BÁSICO */}
        <div className="relative flex flex-col rounded-2xl border border-border bg-card p-7 hover-lift">
          <div className="mb-4 flex items-center gap-2">
            <span className="text-2xl">🥉</span>
            <h3 className="font-display text-2xl font-bold">Aluna Expert</h3>
          </div>
          <p className="text-sm text-muted-foreground">Plano Básico</p>
          <div className="my-5">
            <div className="flex items-baseline gap-1">
              <span className="text-sm text-muted-foreground">R$</span>
              <span className="font-mono-display text-5xl font-bold">29,90</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Pagamento único</p>
          </div>
          <ul className="mb-6 space-y-2.5 text-sm">
            <Item>Acesso aos 16 cursos de corte</Item>
            <Item>Acesso por 30 dias</Item>
            <Item>Certificado de conclusão digital</Item>
            <Item>Suporte por e-mail</Item>
            <Item negative>Sem comunidade exclusiva</Item>
            <Item negative>Sem bônus extras</Item>
          </ul>
          <a
            href="#"
            className="mt-auto inline-flex items-center justify-center rounded-xl border border-gold/40 px-5 py-3 text-sm font-semibold text-gold hover:bg-gold/10 transition"
          >
            Começar por R$ 29,90
          </a>
        </div>

        {/* VIP EXPERT */}
        <div className="relative flex flex-col rounded-3xl border-2 border-gold bg-gradient-card-premium p-7 md:scale-[1.03] shadow-gold-lg animate-border-glow shimmer-overlay">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-gold px-4 py-1 text-xs font-bold text-charcoal shadow-gold">
            ⭐ MAIS POPULAR
          </span>
          <div className="mb-4 flex items-center gap-2">
            <Star className="h-6 w-6 text-gold" fill="currentColor" />
            <h3 className="font-display text-2xl font-bold">VIP Expert</h3>
          </div>
          <p className="text-sm text-gold">Escolhido por 95% das alunas</p>
          <div className="my-5">
            <div className="text-xs text-muted-foreground line-through">De R$ 1.358,00 por</div>
            <div className="flex items-baseline gap-1">
              <span className="text-sm text-gold">R$</span>
              <span className="text-gradient-gold font-mono-display text-5xl font-bold">147,90</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Pagamento único • Acesso vitalício</p>
          </div>
          <ul className="mb-6 space-y-2.5 text-sm">
            <Item>Tudo do Básico incluso</Item>
            <Item>Acesso vitalício</Item>
            <Item>Certificado de conclusão</Item>
            <Item>Comunidade exclusiva (+2.000)</Item>
            <Item>Suporte prioritário</Item>
            <Item>Atualizações e novos cursos</Item>
            <Item>BÔNUS: Precificação Inteligente</Item>
            <Item>BÔNUS: Atendimento Alto Padrão</Item>
            <Item>BÔNUS: Planner Digital</Item>
          </ul>
          <a
            href="#"
            className="mt-auto inline-flex items-center justify-center rounded-xl bg-gradient-success px-5 py-4 text-sm font-bold text-success-foreground cta-glow"
          >
            🔥 QUERO SER VIP EXPERT 🔥
          </a>
        </div>
      </div>

      {/* Comparativo — desktop tabela */}
      <div className="hidden md:block overflow-hidden rounded-2xl border border-border bg-card/50">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="px-4 py-4 text-left font-display text-base font-semibold">Comparativo</th>
              <th className="px-4 py-4 text-center font-semibold">Básico</th>
              <th className="px-4 py-4 text-center font-semibold text-gold">VIP Expert ⭐</th>
            </tr>
          </thead>
          <tbody>
            {features.map((f, i) => (
              <tr key={i} className="border-b border-border/50 last:border-0">
                <td className="px-4 py-3 text-foreground/90">{f.label}</td>
                <td className="px-4 py-3 text-center"><Cell value={f.basic} /></td>
                <td className="px-4 py-3 text-center bg-gold/5"><Cell value={f.vip} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Comparativo — mobile cards empilhados */}
      <div className="md:hidden grid gap-4">
        {[
          { name: "Aluna Expert (Básico)", key: "basic" as const, accent: "border-border" },
          { name: "VIP Expert ⭐", key: "vip" as const, accent: "border-gold/60 bg-gold/5" },
        ].map((plan) => (
          <div key={plan.key} className={`rounded-2xl border ${plan.accent} bg-card p-5`}>
            <h4 className="font-display text-lg font-bold mb-3">{plan.name}</h4>
            <ul className="space-y-2.5 text-sm">
              {features.map((f, i) => {
                const v = f[plan.key];
                return (
                  <li key={i} className="flex items-start gap-2.5">
                    {v === true ? (
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    ) : v === false ? (
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/50" />
                    ) : (
                      <span className="mt-0.5 inline-flex h-4 items-center text-[10px] font-bold text-gold">{v}</span>
                    )}
                    <span className={v === false ? "text-muted-foreground/70" : "text-foreground/90"}>
                      {f.label}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-muted-foreground">
        <span>🔒 Pagamento 100% seguro</span>
        <span className="hidden sm:inline">•</span>
        <span>💳 Parcelamento em até 12x</span>
        <span className="hidden sm:inline">•</span>
        <span>♻️ 7 dias de garantia</span>
      </div>
    </div>
  );
}

function Item({ children, negative }: { children: React.ReactNode; negative?: boolean }) {
  return (
    <li className="flex items-start gap-2">
      {negative ? (
        <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/60" />
      ) : (
        <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
      )}
      <span className={negative ? "text-muted-foreground/70 line-through" : ""}>{children}</span>
    </li>
  );
}
