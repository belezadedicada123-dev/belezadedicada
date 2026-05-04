import { Instagram, Youtube, Facebook, Music2 } from "lucide-react";

const socials = [
  {
    name: "Instagram",
    href: "https://instagram.com/belezadedicadaofc",
    Icon: Instagram,
    color: "hover:bg-[oklch(0.6_0.2_15)]",
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@belezadedicada",
    Icon: Youtube,
    color: "hover:bg-[oklch(0.6_0.25_25)]",
  },
  {
    name: "Facebook",
    href: "https://facebook.com/belezadedicada",
    Icon: Facebook,
    color: "hover:bg-[oklch(0.5_0.2_260)]",
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/belezadedicadaoficial",
    Icon: Music2,
    color: "hover:bg-foreground hover:text-background",
  },
];

export function SocialSidebar() {
  return (
    <div className="fixed right-3 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 lg:flex">
      {socials.map(({ name, href, Icon, color }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className={`group relative flex h-11 w-11 items-center justify-center rounded-full glass-gold text-gold transition-all duration-300 hover:scale-110 hover:rotate-6 ${color} hover:text-background`}
        >
          <Icon className="h-5 w-5" />
          <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-md bg-card px-2.5 py-1 text-xs font-medium text-foreground opacity-0 shadow-elegant transition-opacity group-hover:opacity-100">
            {name}
          </span>
        </a>
      ))}
    </div>
  );
}
