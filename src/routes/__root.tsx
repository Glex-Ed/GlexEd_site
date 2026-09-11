import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { I18nProvider } from "@/lib/i18n/I18nProvider";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-foreground">404</h1>
        <p className="mt-4 text-xl font-semibold">Página no encontrada</p>
        <p className="mt-2 text-sm text-muted-foreground">
          La página que buscás no existe o fue movida.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-full bg-google-blue px-5 py-2.5 text-sm font-semibold text-white"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-xl font-semibold">Algo no cargó bien</h1>
        <p className="mt-2 text-sm text-muted-foreground">Probá refrescar o volver al inicio.</p>
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-google-blue px-5 py-2.5 text-sm font-semibold text-white"
          >
            Reintentar
          </button>
          <a href="/" className="rounded-full border border-input bg-background px-5 py-2.5 text-sm font-semibold">
            Inicio
          </a>
        </div>
      </div>
    </div>
  );
}

const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Glex Ed",
  description:
    "EdTech argentina, partner oficial de Google for Education, que acompaña instituciones de América Latina en la integración de IA y cultura digital.",
  url: "/",
  sameAs: [
    "https://www.linkedin.com/company/glex-ed/",
    "https://www.instagram.com/glex.ed/",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Buenos Aires",
    addressCountry: "AR",
  },
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Glex Ed — IA y cultura digital en educación" },
      {
        name: "description",
        content:
          "Partner oficial de Google for Education. Integramos IA y cultura digital en instituciones educativas de América Latina.",
      },
      { name: "author", content: "Glex Ed" },
      { property: "og:site_name", content: "Glex Ed" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Glex Ed — IA y cultura digital en educación" },
      {
        property: "og:description",
        content:
          "Partner oficial de Google for Education. IA y cultura digital para instituciones de América Latina.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#1b2d6a" },
      { name: "twitter:title", content: "Glex Ed — IA y cultura digital en educación" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Instrument+Serif:ital@0;1&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(ORG_JSONLD),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
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
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
        </div>
        <ScrollToTop />
        <Toaster richColors position="top-right" />
      </I18nProvider>
    </QueryClientProvider>
  );
}
