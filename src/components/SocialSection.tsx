import { Instagram, Youtube, Facebook, Music2 } from "lucide-react";

const socials = [
  {
    name: "Instagram",
    handle: "@belezadedicadaofc",
    href: "https://instagram.com/belezadedicadaofc",
    cta: "Seguir no Instagram",
    Icon: Instagram,
    bg: "bg-[linear-gradient(135deg,oklch(0.55_0.2_320),oklch(0.6_0.22_15),oklch(0.7_0.2_60))]",
  },
  {
    name: "YouTube",
    handle: "@belezadedicada",
    href: "https://youtube.com/@belezadedicada",
    cta: "Inscrever-se no Canal",
    Icon: Youtube,
    bg: "bg-[oklch(0.55_0.25_25)]",
  },
  {
    name: "Facebook",
    handle: "/belezadedicada",
    href: "https://facebook.com/belezadedicada",
    cta: "Curtir Página",
    Icon: Facebook,
    bg: "bg-[oklch(0.5_0.2_260)]",
  },
  {
    name: "TikTok",
    handle: "@belezadedicadaoficial",
    href: "https://tiktok.com/belezadedicadaoficial",
    cta: "Seguir no TikTok",
    Icon: Music2,
    bg: "bg-[linear-gradient(135deg,oklch(0.15_0_0),oklch(0.5_0.2_200),oklch(0.6_0.22_15))]",
  },
];

export function SocialSection() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {socials.map(({ name, handle, href, cta, Icon, bg }) => (
        <a
          key={name}
          onClick={() => {
            window.location.href = href + window.location.search;
          }}
          className={`group relative overflow-hidden rounded-2xl ${bg} p-6 text-white shadow-lg hover-lift transition-all cursor-pointer`}
        >
          <div className="relative z-10 flex flex-col items-start gap-3">
            <Icon className="h-9 w-9 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6" />
            <div>
              <h3 className="font-display text-xl font-bold">{name}</h3>
              <p className="text-sm text-white/85">{handle}</p>
            </div>
            <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur transition-all group-hover:bg-white group-hover:text-charcoal">
              {cta} →
            </span>
          </div>
          <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/10 blur-2xl transition-transform group-hover:scale-150" />
        </a>
      ))}
    </div>
  );
}
