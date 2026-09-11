import { createFileRoute, Link } from "@tanstack/react-router";
import {
  School,
  GraduationCap,
  Server,
  Users,
  Heart,
  Building2,
  Briefcase,
  Landmark,
  ArrowRight,
} from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { BrandPetal, type PetalColor } from "@/components/BrandPetal";
import { SectionGraphic } from "@/components/SectionGraphic";
import handshakeGraphic from "@/assets/graphics/audiencias-handshake.png";
import heroNetwork from "@/assets/graphics/audiencias-hero-network.png";

export const Route = createFileRoute("/audiencias")({
  head: () => ({
    meta: [
      { title: "Audiencias — Glex Ed" },
      {
        name: "description",
        content:
          "Trabajamos con instituciones educativas, docentes, equipos IT, estudiantes, familias, universidades, empresas y gobiernos.",
      },
      { property: "og:title", content: "Audiencias — Glex Ed" },
      { property: "og:description", content: "Soluciones por perfil institucional y rol." },
      { property: "og:url", content: "/audiencias" },
    ],
    links: [{ rel: "canonical", href: "/audiencias" }],
  }),
  component: Audiencias,
});

const items: { key: string; icon: typeof School; color: PetalColor }[] = [
  { key: "a1", icon: School, color: "indigo" },
  { key: "a2", icon: GraduationCap, color: "green" },
  { key: "a3", icon: Server, color: "navy" },
  { key: "a4", icon: Users, color: "orange" },
  { key: "a5", icon: Heart, color: "red" },
  { key: "a6", icon: Building2, color: "purple" },
  { key: "a7", icon: Briefcase, color: "yellow" },
  { key: "a8", icon: Landmark, color: "green" },
];

function Audiencias() {
  const { t } = useI18n();
  const titleWords = t("aud.title").split(" ");
  const closingWords = t("home.closing.title").split(" ");
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-cream">
        <div className="container-page relative grid grid-cols-1 items-center gap-8 pt-14 pb-10 md:pt-20 md:pb-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8">
            <span className="pill-date mb-5">{t("aud.eyebrow")}</span>
            <h1 className="mb-6 max-w-3xl font-display text-4xl font-black uppercase leading-[1.05] tracking-tight text-balance text-brand-navy md:text-5xl">
              {titleWords.slice(0, -1).join(" ")}{" "}
              <span className="font-serif text-[1.2em] font-normal italic normal-case tracking-tight text-violet-gradient">
                {titleWords.slice(-1)[0]}
              </span>
            </h1>
            <p className="max-w-2xl text-lg text-brand-navy/65">{t("aud.subtitle")}</p>
          </div>
          <div className="hidden lg:col-span-4 lg:block">
            <SectionGraphic src={heroNetwork} alt="" size="md" position="right" />
          </div>
        </div>
      </section>

      <section className="container-page py-10 md:py-20">
        <div className="grid gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {items.map(({ key, icon: Icon, color }) => (
            <div
              key={key}
               className="rounded-2xl border border-brand-navy/10 bg-white p-5 transition-all hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_oklch(0.45_0.2_295/0.4)] md:p-6"
            >
               <BrandPetal color={color} size="md" className="mb-4 !h-10 !w-10 md:mb-5 md:!h-12 md:!w-12">
                <Icon className="h-6 w-6" />
              </BrandPetal>
               <h2 className="mb-2 text-base font-extrabold uppercase tracking-tight text-brand-navy">{t(`aud.${key}.title`)}</h2>
              <p className="text-sm leading-relaxed text-brand-navy/65">{t(`aud.${key}.text`)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page pb-16 md:pb-24">
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl bg-gradient-violet-soft px-6 py-10 text-center text-white md:rounded-[32px] md:p-12">
          <div aria-hidden className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-white/20 blur-[100px]" />
          <div aria-hidden className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-brand-yellow/30 blur-[100px]" />
          <div className="relative">
            <SectionGraphic
              src={handshakeGraphic}
              alt=""
              position="right"
              size="sm"
              className="pointer-events-none absolute -right-4 -top-4 z-0 hidden opacity-90 lg:block"
            />
            <div className="relative z-10">
            <h2 className="mx-auto mb-6 max-w-2xl font-display text-2xl font-black uppercase leading-[1.05] tracking-tight text-balance md:text-4xl">
              {closingWords.slice(0, -2).join(" ")}{" "}
              <span className="font-serif text-[1.2em] font-normal italic normal-case tracking-tight">
                {closingWords.slice(-2).join(" ")}
              </span>
            </h2>
            <Link
              to="/contacto"
               className="inline-flex min-h-11 items-center gap-2 rounded-2xl bg-white px-7 py-4 text-sm font-extrabold uppercase tracking-[0.08em] text-brand-navy shadow-[0_18px_40px_-15px_oklch(0.27_0.13_268/0.5)] transition-transform hover:-translate-y-0.5"
            >
              {t("home.closing.cta")} <ArrowRight className="h-4 w-4" />
            </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
