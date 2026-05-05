import { useEffect, useState } from "react";
import { Instagram, Youtube, Music2, Menu, X } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? "border-b border-border/40 bg-background/90 backdrop-blur-xl py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="flex items-center gap-2 group">
          <img src="/logo-transparent.png" alt="Beleza Dedicada" className="h-9 w-auto object-contain drop-shadow-md" />
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
            className="hidden sm:inline-flex rounded-full bg-gradient-gold px-4 py-2 text-sm font-semibold text-charcoal shadow-gold hover:scale-105 transition-transform"
          >
            Inscrever-se
          </a>
          
          <button 
            className="md:hidden p-2 -mr-2 text-foreground hover:text-gold transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 border-b border-border/40 bg-background/95 backdrop-blur-xl px-4 py-6 shadow-xl animate-fade-up">
          <nav className="flex flex-col gap-5 text-center font-medium">
            <a href="#ofertas" onClick={() => setMobileMenuOpen(false)} className="text-lg hover:text-gold">Ofertas</a>
            <a href="#galeria" onClick={() => setMobileMenuOpen(false)} className="text-lg hover:text-gold">Galeria</a>
            <a href="#depoimentos" onClick={() => setMobileMenuOpen(false)} className="text-lg hover:text-gold">Depoimentos</a>
            <a href="#garantia" onClick={() => setMobileMenuOpen(false)} className="text-lg hover:text-gold">Garantia</a>
          </nav>
          <div className="mt-8 flex justify-center gap-4 text-muted-foreground">
            <a href="https://instagram.com/belezadedicadaofc" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-gold transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://youtube.com/@belezadedicada" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-gold transition-colors">
              <Youtube className="h-5 w-5" />
            </a>
            <a href="https://tiktok.com/belezadedicadaoficial" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-gold transition-colors">
              <Music2 className="h-5 w-5" />
            </a>
          </div>
          <a
            href="#ofertas"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-6 flex w-full justify-center rounded-full bg-gradient-gold px-4 py-3 text-sm font-bold text-charcoal shadow-gold"
          >
            QUERO ME INSCREVER
          </a>
        </div>
      )}
    </header>
  );
}
