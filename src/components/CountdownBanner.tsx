import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

export function CountdownBanner() {
  const [time, setTime] = useState({ h: 0, m: 14, s: 59 });

  useEffect(() => {
    const id = setInterval(() => {
      setTime((t) => {
        let { h, m, s } = t;
        s -= 1;
        if (s < 0) { s = 59; m -= 1; }
        if (m < 0) { m = 59; h -= 1; }
        if (h < 0) { h = 0; m = 14; s = 59; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const Box = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-lg bg-background/30 font-mono-display text-2xl sm:text-3xl font-bold text-cream tabular-nums shadow-inner">
        {String(value).padStart(2, "0")}
      </div>
      <span className="mt-1 text-[10px] uppercase tracking-widest text-cream/70">{label}</span>
    </div>
  );

  return (
    <div className="bg-gradient-urgency animate-pulse-urgency rounded-2xl px-5 py-4 sm:py-5 shadow-lg">
      <div className="flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-5">
        <div className="flex items-center gap-2 text-cream">
          <Clock className="h-5 w-5" />
          <span className="font-bold text-sm sm:text-base">⏰ OFERTA POR TEMPO LIMITADO!</span>
        </div>
        <div className="flex items-center gap-2">
          <Box value={time.h} label="H" />
          <span className="text-cream text-xl font-bold">:</span>
          <Box value={time.m} label="MIN" />
          <span className="text-cream text-xl font-bold">:</span>
          <Box value={time.s} label="SEG" />
        </div>
      </div>
      <p className="mt-2 text-center text-xs sm:text-sm text-cream/90">
        Essa oferta expira quando você sair desta página ⏰
      </p>
    </div>
  );
}
