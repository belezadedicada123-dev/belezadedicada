import { useEffect, useState } from "react";
import { Instagram, Youtube, Music2, Sparkles } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/40 bg-background/80 backdrop-blur-xl py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="flex items-center gap-2 group">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-gold text-charcoal shadow-gold">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="font-display text-xl sm:text-2xl font-bold tracking-tight">
            Beleza <span className="text-gradient-gold">Dedicada</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          <a href="#ofertas" className="hover:text-gold transition-colors">Ofertas</a>
          <a href="#galeria" className="hover:text-gold transition-colors">Galeria</a>
          <a href="#depoimentos" className="hover:text-gold transition-colors">Depoimentos</a>
          <a href="#garantia" className="hover:text-gold transition-colors">Garantia</a>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-1 text-muted-foreground sm:flex">
            <a href="https://instagram.com/belezadedicadaofc" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 hover:text-gold transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://youtube.com/@belezadedicada" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="p-2 hover:text-gold transition-colors">
              <Youtube className="h-4 w-4" />
            </a>
            <a href="https://tiktok.com/belezadedicadaoficial" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="p-2 hover:text-gold transition-colors">
              <Music2 className="h-4 w-4" />
            </a>
          </div>
          <a
            href="#ofertas"
            className="rounded-full bg-gradient-gold px-4 py-2 text-xs sm:text-sm font-semibold text-charcoal shadow-gold hover:scale-105 transition-transform"
          >
            Inscrever-se
          </a>
        </div>
      </div>
    </header>
  );
}
