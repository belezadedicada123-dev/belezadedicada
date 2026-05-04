import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Beleza Dedicada" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Beleza Dedicada" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Beleza Dedicada | Cursos de Cortes Profissionais" },
      { property: "og:title", content: "Beleza Dedicada | Cursos de Cortes Profissionais" },
      { name: "twitter:title", content: "Beleza Dedicada | Cursos de Cortes Profissionais" },
      { name: "description", content: "16 cursos de corte feminino + certificado + acesso vitalício. 2 planos a partir de R$ 29,90. Garantia de 7 dias." },
      { property: "og:description", content: "16 cursos de corte feminino + certificado + acesso vitalício. 2 planos a partir de R$ 29,90. Garantia de 7 dias." },
      { name: "twitter:description", content: "16 cursos de corte feminino + certificado + acesso vitalício. 2 planos a partir de R$ 29,90. Garantia de 7 dias." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80&auto=format&fit=crop" },
      { name: "twitter:image", content: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80&auto=format&fit=crop" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700;800;900&family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Beleza Dedicada",
          url: "https://belezadedicada.com",
          sameAs: [
            "https://instagram.com/belezadedicadaofc",
            "https://youtube.com/@belezadedicada",
            "https://facebook.com/belezadedicada",
            "https://tiktok.com/belezadedicadaoficial",
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
