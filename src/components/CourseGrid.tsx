import { Check } from "lucide-react";

// Fotos reais do Unsplash/Pexels — cada uma representa o tipo de corte indicado
const courses = [
  { name: "Butterfly", img: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&q=80&auto=format&fit=crop" },
  { name: "Long Bob", img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80&auto=format&fit=crop" },
  { name: "Repicado Moderno", img: "https://images.unsplash.com/photo-1595475884562-073c30d45670?w=600&q=80&auto=format&fit=crop" },
  { name: "Cabelos Loiros", img: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=600&q=80&auto=format&fit=crop" },
  { name: "Pixie com Tesoura", img: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80&auto=format&fit=crop" },
  { name: "Pixie Desfiado", img: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&q=80&auto=format&fit=crop" },
  { name: "Desfiado", img: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=600&q=80&auto=format&fit=crop" },
  { name: "Short Bob", img: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=600&q=80&auto=format&fit=crop" },
  { name: "Cacheadas", img: "https://images.unsplash.com/photo-1521577352947-9bb58764b69a?w=600&q=80&auto=format&fit=crop" },
  { name: "Chanel", img: "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=600&q=80&auto=format&fit=crop" },
  { name: "Degradê", img: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600&q=80&auto=format&fit=crop" },
  { name: "Tendência", img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80&auto=format&fit=crop" },
  { name: "Franja Bardot", img: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80&auto=format&fit=crop" },
  { name: "Franja Butterfly", img: "https://images.unsplash.com/photo-1554519515-242161756769?w=600&q=80&auto=format&fit=crop" },
  { name: "BÔNUS: Colorimetria", img: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80&auto=format&fit=crop" },
  { name: "BÔNUS: Mechas Premium", img: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=600&q=80&auto=format&fit=crop" },
];

export const courseImages = courses.map((c) => c.img);

export function CourseGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
      {courses.map((c, i) => (
        <div
          key={i}
          className="group relative overflow-hidden rounded-xl border border-border bg-card hover-tilt"
        >
          <div className="relative aspect-square overflow-hidden">
            <img
              src={c.img}
              alt={c.name}
              loading="lazy"
              width={600}
              height={600}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent opacity-90 transition-opacity group-hover:from-charcoal/95" />
            <span className="absolute right-2 top-2 inline-flex items-center gap-1 rounded-full bg-gradient-success px-2 py-0.5 text-[10px] font-bold text-success-foreground shadow">
              <Check className="h-3 w-3" /> INCLUSO
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-3">
            <h3 className="font-display text-sm sm:text-base font-semibold text-cream leading-tight">
              {c.name}
            </h3>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="text-xs text-muted-foreground line-through">R$ 97</span>
              <span className="text-xs font-semibold text-gold">Incluso</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
