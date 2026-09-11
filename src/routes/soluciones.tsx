import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Calendar, Brain, Monitor, LayoutGrid, Check, Baby, GraduationCap, Compass, Briefcase, Rocket, UsersRound, ArrowRight } from "lucide-react";
import { BrandPetal, type PetalColor } from "@/components/BrandPetal";


import { FAQ } from "@/components/FAQ";
import { SasGallery } from "@/components/SasGallery";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { SectionGraphic } from "@/components/SectionGraphic";
import techGraphic from "@/assets/graphics/soluciones-tech-laptop.png";
import heroStack from "@/assets/graphics/soluciones-hero-stack.png";

export const Route = createFileRoute("/soluciones")({
  head: () => ({
    meta: [
      { title: "Soluciones: Google Workspace, IA y programas para estudiantes | Glex Ed" },
      {
        name: "description",
        content:
          "Gestión de Google Workspace y Classroom, programas PAIDEIA, MaestrIA, Agenda 2026 y HumanIA, plataformas OctoClass y OctoLearn, y programas para estudiantes como Startup at School y Alumno Tutor.",
      },
      {
        name: "keywords",
        content:
          "MaestrIA, PAIDEIA, Agenda 2026, HumanIA, OctoClass, OctoLearn, formación docente IA, currícula con IA, educación inicial primaria secundaria, Google Workspace for Education, gestión de Google Classroom, Startup at School, Alumno Tutor",
      },
      { name: "robots", content: "index,follow,max-image-preview:large" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "MaestrIA × PAIDEIA — IA en educación por nivel" },
      {
        property: "og:description",
        content:
          "Trayectos curados de MaestrIA dentro del programa PAIDEIA, diseñados para Nivel Inicial, Primaria y Secundaria. Partner oficial de Google for Education.",
      },
      { property: "og:url", content: "/soluciones" },
      { property: "og:locale", content: "es_AR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "MaestrIA × PAIDEIA — Glex Ed" },
      {
        name: "twitter:description",
        content: "Programas y plataformas para implementar IA en educación, por nivel y por rol.",
      },
    ],
    links: [{ rel: "canonical", href: "/soluciones" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "MaestrIA × PAIDEIA — Colecciones por nivel educativo",
          description:
            "Trayectos curados de MaestrIA dentro del programa PAIDEIA de Glex Ed para integrar inteligencia artificial en cada etapa del sistema educativo.",
          itemListElement: [
            {
              "@type": "Course",
              position: 1,
              name: "MaestrIA — Nivel Inicial",
              description:
                "IA aplicada a la primera infancia: alfabetización temprana, juego, narrativas y planificación didáctica.",
              provider: { "@type": "Organization", name: "Glex Ed" },
              educationalLevel: "Early childhood",
              inLanguage: "es",
            },
            {
              "@type": "Course",
              position: 2,
              name: "MaestrIA — Nivel Primario",
              description:
                "Integración de IA en lengua, matemática, ciencias y proyectos interdisciplinarios.",
              provider: { "@type": "Organization", name: "Glex Ed" },
              educationalLevel: "Primary education",
              inLanguage: "es",
            },
            {
              "@type": "Course",
              position: 3,
              name: "MaestrIA — Secundaria Básica",
              description:
                "Pensamiento crítico y ciudadanía digital con IA, evaluación auténtica y diseño de actividades.",
              provider: { "@type": "Organization", name: "Glex Ed" },
              educationalLevel: "Lower secondary education",
              inLanguage: "es",
            },
            {
              "@type": "Course",
              position: 4,
              name: "MaestrIA — Secundaria Orientada",
              description:
                "IA aplicada a orientaciones y mundos del trabajo: prompting avanzado, ética y proyectos productivos.",
              provider: { "@type": "Organization", name: "Glex Ed" },
              educationalLevel: "Upper secondary education",
              inLanguage: "es",
            },
            {
              "@type": "Course",
              position: 5,
              name: "Startup at School",
              description:
                "Los estudiantes crean una startup desde la idea hasta el pitch final ante un jurado de referentes. Para secundaria, de marzo a septiembre, con evento de cierre presencial.",
              provider: { "@type": "Organization", name: "Glex Ed" },
              educationalLevel: "Secondary education",
              inLanguage: "es",
            },
            {
              "@type": "Course",
              position: 6,
              name: "Alumno Tutor",
              description:
                "Estudiantes que se forman como tutores digitales y acompañan a compañeros, docentes y familias en el uso responsable de la tecnología. Versiones Junior y Teens.",
              provider: { "@type": "Organization", name: "Glex Ed" },
              inLanguage: "es",
            },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: "/" },
            { "@type": "ListItem", position: 2, name: "Soluciones", item: "/soluciones" },
          ],
        }),
      },
    ],
  }),
  component: Soluciones,
});

function Soluciones() {
  const { t } = useI18n();

  const programs = [
    { key: "paideia", icon: BookOpen, color: "indigo" as PetalColor },
    { key: "agenda", icon: Calendar, color: "green" as PetalColor },
    { key: "humania", icon: Brain, color: "red" as PetalColor },
  ];

  const studentPrograms = [
    { key: "sas", icon: Rocket, color: "orange" as PetalColor, hasResult: true },
    { key: "tutor", icon: UsersRound, color: "indigo" as PetalColor, hasResult: false },
  ];

  const solTitleWords = t("sol.title").split(" ");
  const howTitleWords = t("sol.howwework.title").split(" ");
  const programsTitleWords = t("sol.programs.title").split(" ");
  const studentsTitleWords = t("sol.programs.students.title").split(" ");
  const wsTitleWords = t("sol.workspace.title").split(" ");
  const techTitleWords = t("sol.tech.title").split(" ");

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-sky">
        <div className="container-page relative grid grid-cols-1 items-center gap-8 pt-14 pb-10 md:pt-20 md:pb-12 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8">
            <span className="pill-date mb-5 whitespace-nowrap">{t("sol.eyebrow")}</span>
            <h1 className="mb-6 max-w-3xl font-display text-4xl font-black uppercase leading-[1.05] tracking-tight text-balance text-brand-navy md:text-5xl">
              {solTitleWords.slice(0, -1).join(" ")}{" "}
              <span className="font-serif text-[1.2em] font-normal italic normal-case tracking-tight text-violet-gradient">
                {solTitleWords.slice(-1)[0]}
              </span>
            </h1>
            <p className="mb-6 max-w-2xl text-lg text-brand-navy/65">{t("sol.subtitle")}</p>
            <p className="max-w-2xl text-base text-brand-navy/60">{t("sol.intro.text")}</p>
          </div>
          <div className="hidden lg:col-span-4 lg:block">
            <SectionGraphic src={heroStack} alt="" size="md" position="right" />
          </div>
        </div>
      </section>

      {/* HOW WE WORK — 5 pasos */}
      <section className="container-page py-10 md:py-20">
        <div className="rounded-3xl border border-brand-navy/10 bg-white p-5 shadow-[0_30px_80px_-50px_oklch(0.45_0.2_295/0.35)] md:p-12">
          <span className="pill-date mb-4">{t("sol.howwework.eyebrow")}</span>
          <h2 className="mb-4 max-w-2xl font-display text-3xl font-black uppercase leading-[1.05] tracking-tight text-brand-navy md:text-4xl">
            {howTitleWords.slice(0, -1).join(" ")}{" "}
            <span className="font-serif text-[1.2em] font-normal italic normal-case tracking-tight text-brand-magenta">
              {howTitleWords.slice(-1)[0]}
            </span>
          </h2>
          <p className="mb-6 max-w-3xl text-base leading-relaxed text-brand-navy/65 md:mb-10">
            {t("sol.howwework.text")}
          </p>
          <ol className="grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-4">
            {[1, 2, 3, 4, 5].map((n) => (
              <li
                key={n}
                className="rounded-2xl border border-brand-navy/10 bg-gradient-cream p-4 md:p-5"
              >
                <span className="font-display text-2xl font-black text-brand-magenta md:text-3xl">0{n}</span>
                <p className="mt-2 text-xs font-semibold leading-snug text-brand-navy md:text-sm">
                  {t(`sol.howwework.s${n}`)}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* GOOGLE WORKSPACE */}
      <section id="workspace" className="overflow-hidden bg-gradient-cream py-10 md:py-20 scroll-mt-24">
        <div className="container-page">
          <span className="pill-date mb-4">{t("sol.workspace.eyebrow")}</span>
          <h2 className="mb-4 max-w-3xl font-display text-2xl font-black uppercase leading-[1.05] tracking-tight text-brand-navy md:text-3xl">
            {wsTitleWords.slice(0, -1).join(" ")}{" "}
            <span className="font-serif text-[1.2em] font-normal italic normal-case tracking-tight text-violet-gradient">
              {wsTitleWords.slice(-1)[0]}
            </span>
          </h2>
          <p className="mb-6 max-w-3xl text-base leading-relaxed text-brand-navy/65 md:mb-10">
            {t("sol.workspace.subtitle")}
          </p>

          <ul className="grid gap-2 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <li
                key={n}
                className="flex items-start gap-2 rounded-2xl border border-brand-navy/10 bg-white/80 p-3 backdrop-blur md:gap-3 md:p-5"
              >
                <span className="mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-google-green/10 text-google-green">
                  <Check className="h-3 w-3" />
                </span>
                <span className="text-sm leading-relaxed text-brand-navy/70">
                  {t(`sol.workspace.i${n}`)}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-6 max-w-3xl text-xs leading-relaxed text-brand-navy/50">
            {t("sol.workspace.note")}
          </p>

          <Link
            to="/contacto"
            className="mt-8 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-brand-magenta px-6 py-3 text-sm font-extrabold uppercase tracking-[0.08em] text-white transition-colors hover:bg-brand-navy md:w-auto"
          >
            {t("sol.workspace.cta")} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Programs */}
      <section id="programas" className="overflow-hidden bg-gradient-sky py-10 md:py-20 scroll-mt-24">
        <div className="container-page">
          <h2 className="mb-8 font-display text-2xl font-black uppercase tracking-tight text-brand-navy md:mb-12 md:text-3xl">
            {programsTitleWords.slice(0, -1).join(" ")}{" "}
            <span className="font-serif text-[1.2em] font-normal italic normal-case tracking-tight text-violet-gradient">
              {programsTitleWords.slice(-1)[0]}
            </span>
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {programs.map(({ key, icon: Icon, color }) => (
              <div
                key={key}
                className="rounded-3xl border border-brand-navy/10 bg-white/80 p-5 backdrop-blur transition-all hover:-translate-y-1 hover:shadow-[0_24px_50px_-25px_oklch(0.45_0.2_295/0.4)] md:p-8"
              >
                <BrandPetal color={color} size="md" className="mb-4 !h-10 !w-10 md:mb-6 md:!h-12 md:!w-12">
                  <Icon className="h-6 w-6" />
                </BrandPetal>
                <h3 className="mb-3 font-display text-xl font-black uppercase tracking-tight text-brand-navy md:text-2xl">{t(`sol.programs.${key}.title`)}</h3>
                <p className="text-sm leading-relaxed text-brand-navy/65">{t(`sol.programs.${key}.text`)}</p>
              </div>
            ))}
          </div>

          <h3 className="mb-6 mt-10 font-display text-xl font-black uppercase tracking-tight text-brand-navy md:mt-14 md:text-2xl">
            {studentsTitleWords.slice(0, -1).join(" ")}{" "}
            <span className="font-serif text-[1.2em] font-normal italic normal-case tracking-tight text-violet-gradient">
              {studentsTitleWords.slice(-1)[0]}
            </span>
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {studentPrograms.map(({ key, icon: Icon, color, hasResult }) => (
              <div
                key={key}
                className="rounded-3xl border border-brand-navy/10 bg-white/80 p-5 backdrop-blur transition-all hover:-translate-y-1 hover:shadow-[0_24px_50px_-25px_oklch(0.45_0.2_295/0.4)] md:p-8"
              >
                <BrandPetal color={color} size="md" className="mb-4 !h-10 !w-10 md:mb-6 md:!h-12 md:!w-12">
                  <Icon className="h-6 w-6" />
                </BrandPetal>
                <h4 className="mb-3 font-display text-xl font-black uppercase tracking-tight text-brand-navy md:text-2xl">
                  {t(`sol.programs.${key}.title`)}
                </h4>
                <p className="text-sm leading-relaxed text-brand-navy/65">{t(`sol.programs.${key}.text`)}</p>
                {hasResult && (
                  <p className="mt-4 text-xs leading-relaxed text-brand-navy/50">
                    {t(`sol.programs.${key}.result`)}
                  </p>
                )}
              </div>
            ))}
          </div>

          <SasGallery />
        </div>
      </section>

      {/* Tech */}
      <section className="relative overflow-hidden py-10 md:py-16">
        <div className="container-page relative z-10">
          <div className="mb-8 flex items-start justify-between gap-6">
            <h2 className="max-w-2xl font-display text-2xl font-black uppercase tracking-tight text-brand-navy md:text-3xl">
              {techTitleWords.slice(0, -1).join(" ")}{" "}
              <span className="font-serif text-[1.2em] font-normal italic normal-case tracking-tight text-brand-magenta">
                {techTitleWords.slice(-1)[0]}
              </span>
            </h2>
            <SectionGraphic
              src={techGraphic}
              alt=""
              position="right"
              size="sm"
              hideOnMobile
              className="relative mt-1 mr-2 h-16 w-auto md:mr-6 md:h-24"
            />
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {(["octoclass", "octolearn"] as const).map((p, idx) => {
              const Icon = idx === 0 ? Monitor : LayoutGrid;
              const colorBg = idx === 0 ? "bg-google-blue/10" : "bg-google-green/10";
              const colorText = idx === 0 ? "text-google-blue" : "text-google-green";
              const colorCheckBg = idx === 0 ? "bg-google-blue/10 text-google-blue" : "bg-google-green/10 text-google-green";
              const featured = idx === 0;
              return (
                <div
                  key={p}
                   className={`rounded-3xl p-5 md:p-8 ${featured ? "bg-gradient-violet-soft text-white shadow-[0_30px_80px_-40px_oklch(0.45_0.2_295/0.6)]" : "border border-brand-navy/10 bg-white"}`}
                >
                  <div
                    className={`mb-5 grid h-12 w-12 place-items-center rounded-xl ${
                      featured ? "bg-white/20" : colorBg
                    }`}
                  >
                    <Icon className={`h-6 w-6 ${featured ? "text-white" : colorText}`} />
                  </div>
                  <h3 className={`mb-3 font-display text-2xl font-black uppercase tracking-tight ${featured ? "text-white" : "text-brand-navy"}`}>{t(`sol.tech.${p}.title`)}</h3>
                  <p className={`mb-5 text-sm leading-relaxed md:text-base ${featured ? "text-white/85" : "text-brand-navy/65"}`}>
                    {t(`sol.tech.${p}.text`)}
                  </p>
                   <ul className="space-y-2 md:space-y-3">
                    {[1, 2, 3].map((v) => (
                      <li key={v} className="flex items-start gap-3">
                        <span
                          className={`mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full ${
                            featured ? "bg-white/20 text-white" : colorCheckBg
                          }`}
                        >
                          <Check className="h-3 w-3" />
                        </span>
                        <span className={`text-sm ${featured ? "text-white/90" : "text-brand-navy/70"}`}>
                          {t(`sol.tech.${p}.v${v}`)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MAESTRIA × PAIDEIA — collections by level */}
      <section id="maestria" className="overflow-hidden bg-gradient-cream py-10 md:py-20 scroll-mt-24">
        <div className="container-page">
          <span className="pill-date mb-4">{t("sol.maestria.eyebrow")}</span>
          <h2 className="mb-4 max-w-2xl font-display text-3xl font-black uppercase leading-[1.05] tracking-tight text-brand-navy md:text-4xl">
            {t("sol.maestria.title").split(" ").slice(0, -1).join(" ")}{" "}
            <span className="font-serif text-[1.2em] font-normal italic normal-case tracking-tight text-violet-gradient">
              {t("sol.maestria.title").split(" ").slice(-1)[0]}
            </span>
          </h2>
          <p className="mb-8 max-w-2xl text-lg text-brand-navy/65 md:mb-12">{t("sol.maestria.subtitle")}</p>

          <div className="grid grid-cols-2 gap-3 md:gap-6 lg:grid-cols-4">
            {([
              { key: "c1", icon: Baby, color: "indigo" },
              { key: "c2", icon: GraduationCap, color: "green" },
              { key: "c3", icon: Compass, color: "orange" },
              { key: "c4", icon: Briefcase, color: "red" },
            ] as { key: string; icon: typeof Baby; color: PetalColor }[]).map(
              ({ key, icon: Icon, color }) => (
                <div
                  key={key}
                  className="rounded-2xl border border-brand-navy/10 bg-white/80 p-4 backdrop-blur transition-all hover:-translate-y-1 hover:shadow-[0_24px_50px_-25px_oklch(0.45_0.2_295/0.4)] md:rounded-3xl md:p-7"
                >
                  <BrandPetal color={color} size="md" className="mb-4 !h-10 !w-10 md:mb-5 md:!h-12 md:!w-12">
                    <Icon className="h-6 w-6" />
                  </BrandPetal>
                  <h3 className="mb-2 font-display text-base font-black uppercase tracking-tight text-brand-navy md:text-xl">
                    {t(`sol.maestria.${key}.title`)}
                  </h3>
                  <p className="text-xs leading-relaxed text-brand-navy/65 md:text-sm">
                    {t(`sol.maestria.${key}.text`)}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

    </>
  );
}
