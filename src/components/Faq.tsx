import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Preciso ter experiência prévia para fazer os cursos?",
    a: "Não. Os cursos foram pensados para todos os níveis — do absoluto iniciante à profissional experiente. Começamos do básico e evoluímos para técnicas avançadas.",
  },

  {
    q: "Por quanto tempo terei acesso aos cursos?",
    a: "Em ambos os planos (Básico e VIP Expert), o acesso é vitalício — você assiste no seu ritmo, quantas vezes quiser.",
  },
  {
    q: "Consigo assistir pelo celular?",
    a: "Sim. A plataforma é 100% responsiva. Você acessa pelo celular, tablet ou computador a qualquer hora.",
  },
  {
    q: "E se eu não gostar?",
    a: "Você tem 7 dias de garantia incondicional. Se não gostar, devolvemos 100% do seu investimento — sem perguntas.",
  },
  {
    q: "Qual plano é o melhor para mim?",
    a: "Se quer começar com o essencial, vá de Básico (R$ 29,90). Se quer comunidade e todos os bônus, o VIP Expert (R$ 59,90) é a escolha de 95% das alunas.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl space-y-4">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className={`rounded-2xl border bg-card transition-all ${
              isOpen ? "border-gold/60 shadow-gold" : "border-border hover:border-gold/30"
            }`}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-display text-base sm:text-lg font-semibold">{f.q}</span>
              <Plus
                className={`h-5 w-5 shrink-0 text-gold transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              />
            </button>
            <div
              className={`grid overflow-hidden px-6 text-sm transition-all duration-300 ${
                isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden leading-relaxed text-foreground/75">{f.a}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
