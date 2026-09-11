import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { SectionGraphic } from "@/components/SectionGraphic";
import robotGraphic from "@/assets/graphics/campus-graduate-robot.png";

export const Route = createFileRoute("/campus")({
  head: () => ({
    meta: [
      { title: "Campus — Glex Ed" },
      {
        name: "description",
        content:
          "Plataforma de formación continua de Glex Ed para docentes y directivos certificados.",
      },
      { property: "og:title", content: "Campus — Glex Ed" },
      { property: "og:description", content: "Acceso al campus de formación continua de Glex Ed." },
      { property: "og:url", content: "/campus" },
    ],
    links: [{ rel: "canonical", href: "/campus" }],
  }),
  component: Campus,
});

function Campus() {
  const { t } = useI18n();
  const src = "https://cursos.glex-ed.com/";
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-mint">
        <div className="container-page relative pt-14 pb-8 md:pt-20 md:pb-10">
          <span className="pill-date mb-5">Campus</span>
          <h1 className="mb-3 max-w-3xl font-display text-3xl font-black uppercase leading-[1.05] tracking-tight text-brand-navy md:text-4xl">
            {t("campus.subtitle")}
          </h1>
        </div>
      </section>

      <section className="container-page pb-16 pt-4 md:pt-8">
        <div
          className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/10 p-6 text-white shadow-[0_30px_100px_-40px_oklch(0.7_0.18_220/0.45)] animate-fade-in sm:p-8 md:p-12"
          style={{ backgroundColor: "oklch(0.18 0.05 268)" }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.32 0.16 295 / 0.55) 0%, oklch(0.22 0.08 268 / 0.2) 45%, oklch(0.55 0.16 220 / 0.45) 100%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 animate-grid-drift opacity-[0.18] mix-blend-screen"
            style={{
              backgroundImage:
                "linear-gradient(to right, oklch(0.85 0.15 220 / 0.35) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.85 0.15 220 / 0.35) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
              maskImage: "radial-gradient(ellipse at center, black 35%, transparent 80%)",
              WebkitMaskImage: "radial-gradient(ellipse at center, black 35%, transparent 80%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-[100px] animate-glow-pulse"
            style={{ backgroundColor: "oklch(0.75 0.18 220 / 0.55)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-28 -left-24 h-72 w-72 rounded-full blur-[110px] animate-glow-pulse"
            style={{ backgroundColor: "oklch(0.65 0.25 295 / 0.5)", animationDelay: "2s" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-4 z-0 hidden items-center md:right-8 md:flex"
          >
            <div className="relative">
              <div
                className="absolute inset-0 m-auto h-56 w-56 rounded-full blur-[60px] animate-glow-pulse"
                style={{ backgroundColor: "oklch(0.75 0.18 220 / 0.55)", animationDelay: "1s" }}
              />
              <div
                className="relative animate-float-y"
                style={{ filter: "drop-shadow(0 0 24px oklch(0.7 0.18 220 / 0.55))" }}
              >
                <SectionGraphic src={robotGraphic} alt="" position="right" size="sm" />
              </div>
            </div>
          </div>


          <div className="relative z-10 max-w-2xl md:max-w-[60%]">
            <span
              className="mb-5 inline-block font-mono text-[11px] font-semibold uppercase tracking-[0.25em]"
              style={{ color: "oklch(0.85 0.15 220)" }}
            >
              [ {t("campus.card.eyebrow")} ]
            </span>
            <h2 className="mb-4 font-display text-2xl font-black uppercase leading-tight tracking-tight md:text-3xl">
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, oklch(0.9 0.12 220) 0%, oklch(1 0 0) 50%, oklch(0.78 0.18 295) 100%)",
                }}
              >
                {t("campus.card.title")}
              </span>
            </h2>
            <p className="mb-8 text-base leading-relaxed text-white/80 md:text-lg">
              {t("campus.card.subtitle")}
            </p>
            <a
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-2xl border border-white/40 bg-white px-6 py-4 text-sm font-extrabold uppercase tracking-[0.08em] text-brand-navy shadow-[0_18px_40px_-15px_oklch(0.7_0.18_220/0.5)] transition-all hover:-translate-y-0.5 hover:border-[oklch(0.75_0.18_220)] hover:shadow-[0_22px_50px_-12px_oklch(0.7_0.18_220/0.7)]"
            >
              {t("campus.open")}
              <ExternalLink
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                style={{ filter: "drop-shadow(0 0 6px oklch(0.7 0.18 220 / 0.6))" }}
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
