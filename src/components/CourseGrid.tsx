import { Check } from "lucide-react";

// Fotos reais do Unsplash/Pexels — cada uma representa o tipo de corte indicado
const courses = [
  { name: "Butterfly", img: "/images/courses/01-butterfly.jpg" },
  { name: "Long Bob", img: "/images/courses/02-long-bob.png" },
  { name: "Repicado Moderno", img: "/images/courses/03-repicado-moderno.jpg" },
  { name: "Cabelos Loiros", img: "/images/courses/04-cabelos-loiros.jpg" },
  { name: "Pixie com Tesoura", img: "/images/courses/05-pixie-com-tesoura.png" },
  { name: "Pixie Desfiado", img: "/images/courses/06-pixie-desfiado.png" },
  { name: "Desfiado", img: "/images/courses/07-desfiado.jpg" },
  { name: "Short Bob", img: "/images/courses/08-short-bob.jpg" },
  { name: "Cacheadas", img: "/images/courses/09-cacheadas.jpg" },
  { name: "Chanel", img: "/images/courses/10-chanel.png" },
  { name: "Degradê", img: "/images/courses/11-degrade.jpg" },
  { name: "Tendência", img: "/images/courses/12-tendencia.png" },
  { name: "Franja Bardot", img: "/images/courses/13-franja-bardot.png" },
  { name: "Franja Butterfly", img: "/images/courses/14-franja-butterfly.png" },
  { name: "BÔNUS: Colorimetria", img: "/images/courses/15-colorimetria.png" },
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
