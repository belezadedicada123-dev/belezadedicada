export function StickyMobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur-xl p-3 lg:hidden">
      <div className="flex items-center gap-3">
        <div className="flex-1">
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground">A partir de</p>
          <p className="font-mono-display text-lg font-bold text-gradient-gold">R$ 29,90</p>
        </div>
        <a
          href="#ofertas"
          className="flex-1 inline-flex items-center justify-center rounded-xl bg-gradient-success px-4 py-3 text-sm font-bold text-success-foreground cta-glow"
        >
          🔥 QUERO ME INSCREVER
        </a>
      </div>
    </div>
  );
}
