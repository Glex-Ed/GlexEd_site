import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Target, Users, GraduationCap, ShieldCheck, Activity, Cloud } from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { BrandPetal, type PetalColor } from "@/components/BrandPetal";

import { PetalBlob } from "@/components/PetalBlob";
import { PetalDivider } from "@/components/PetalDivider";
import { MotionButton } from "@/components/MotionButton";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motionVariants";
import { trackCtaClick } from "@/lib/analytics";
import heroImg from "@/assets/hero-classroom.jpg?format=webp&w=1200&quality=78";
import { SectionGraphic } from "@/components/SectionGraphic";
import pillarsGraphic from "@/assets/graphics/home-pillars-hand-cube.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Glex Ed | IA y cultura digital para instituciones educativas LATAM" },
      {
        name: "description",
        content:
          "Partner oficial de Google for Education. Acompañamos a escuelas, universidades y gobiernos de América Latina en la integración estratégica de IA y cultura digital.",
      },
      {
        name: "keywords",
        content:
          "IA en educación, Google for Education LATAM, cultura digital escolar, transformación digital educativa, formación docente, ciudadanía digital, EdTech Argentina",
      },
      { name: "robots", content: "index,follow,max-image-preview:large" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Glex Ed — IA en educación con estrategia pedagógica clara" },
      {
        property: "og:description",
        content:
          "Partner oficial de Google for Education. IA, cultura digital y nuevas competencias para instituciones de América Latina.",
      },
      { property: "og:url", content: "https://edtech20.lovable.app/" },
      { property: "og:image", content: heroImg },
      { property: "og:image:alt", content: "Educadores y estudiantes colaborando con tecnología en un aula moderna" },
      { property: "og:locale", content: "es_AR" },
      { property: "og:locale:alternate", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Glex Ed — IA en educación" },
      {
        name: "twitter:description",
        content: "Partner oficial de Google for Education. IA y cultura digital para instituciones de América Latina.",
      },
      { name: "twitter:image", content: heroImg },
    ],
    links: [
      { rel: "canonical", href: "https://edtech20.lovable.app/" },
      { rel: "alternate", hrefLang: "es-419", href: "/" },
      { rel: "alternate", hrefLang: "en", href: "/" },
      { rel: "alternate", hrefLang: "x-default", href: "/" },
      { rel: "preload", as: "image", href: heroImg, fetchPriority: "high" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "Glex Ed",
          alternateName: "GLEX ED",
          url: "/",
          logo: "/favicon.ico",
          description:
            "EdTech argentina, partner oficial de Google for Education, especializada en la integración de IA y cultura digital en instituciones educativas de América Latina.",
          areaServed: ["AR", "CL", "UY", "PE", "MX", "CO"],
          knowsAbout: [
            "Inteligencia artificial en educación",
            "Google Workspace for Education",
            "Cultura digital",
            "Formación docente",
            "Ciudadanía digital",
          ],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Buenos Aires",
            addressCountry: "AR",
          },
          sameAs: [
            "https://www.linkedin.com/company/glex-ed/",
            "https://www.instagram.com/glex.ed/",
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Glex Ed",
          url: "/",
          inLanguage: ["es-419", "en"],
          publisher: { "@type": "Organization", name: "Glex Ed" },
        }),
      },
    ],
  }),
  component: Home,
});

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
};

function Home() {
  const { t } = useI18n();

  const challenges = [
    { icon: Target, key: "item1", color: "magenta" as PetalColor },
    { icon: Sparkles, key: "item2", color: "red" as PetalColor },
    { icon: ShieldCheck, key: "item3", color: "yellow" as PetalColor },
    { icon: Users, key: "item4", color: "green" as PetalColor },
  ];

  const steps = [1, 2, 3, 4, 5, 6];
  const stepColors: PetalColor[] = ["magenta", "red", "orange", "yellow", "green", "navy"];

  const pillars = [
    { tag: "p1", icon: GraduationCap, color: "navy" as PetalColor, dark: true, hash: undefined as string | undefined },
    { tag: "p4", icon: Cloud, color: "green" as PetalColor, dark: false, hash: "workspace" },
    { tag: "p2", icon: Activity, color: "magenta" as PetalColor, dark: true, hash: undefined },
    { tag: "p3", icon: Users, color: "orange" as PetalColor, dark: false, hash: undefined },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-lavender">
        <PetalBlob
          color="brand-magenta"
          size={520}
          opacity={0.22}
          blur={120}
          className="absolute -top-24 -right-32 hidden lg:block"
        />
        <PetalBlob
          color="brand-yellow"
          size={420}
          opacity={0.28}
          blur={120}
          className="absolute top-[40%] -left-40 hidden lg:block"
        />
        <div className="container-page relative grid grid-cols-1 items-center gap-8 pt-10 pb-12 md:pt-14 md:pb-16 lg:grid-cols-12 lg:gap-10 lg:pt-16 lg:pb-20">
          <motion.div {...fadeUp} className="relative lg:col-span-7">
            <div className="mb-5 flex flex-col items-start gap-2 md:inline-flex md:flex-row md:items-center">
              <span className="pill-date whitespace-nowrap">
                <span aria-hidden className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-brand-yellow" />
                {t("home.hero.eyebrow.left")}
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-navy/55">{t("home.hero.eyebrow.right")}</span>
            </div>
            <h1 className="mb-5 font-display text-[2rem] font-black uppercase leading-[0.98] tracking-[-0.02em] text-balance text-brand-navy sm:text-[2.5rem] md:text-5xl md:tracking-[-0.025em] lg:text-[3.5rem] xl:text-[4rem]">
              {t("home.hero.title.line1")}
              <br />
              <span className="font-serif text-[0.8em] font-normal italic normal-case tracking-[-0.01em] text-violet-gradient">
                {t("home.hero.title.line2")}
              </span>
            </h1>
            <p className="mb-6 max-w-xl text-base font-medium leading-relaxed text-brand-navy/70 sm:text-lg md:mb-8 md:text-lg">
              {t("home.hero.subtitle")}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <MotionButton>
                <Link
                  to="/contacto"
                  onClick={() => trackCtaClick("home_hero", "primary", "/contacto")}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-magenta px-6 py-3 text-sm font-extrabold uppercase tracking-[0.08em] text-white shadow-[0_12px_32px_-10px_oklch(0.44_0.18_335/0.6)] transition-all hover:bg-brand-navy hover:shadow-[0_14px_36px_-10px_oklch(0.27_0.13_268/0.6)] sm:w-auto sm:px-7"
                >
                  {t("home.hero.cta.primary")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </MotionButton>
              <MotionButton>
                <Link
                  to="/soluciones"
                  onClick={() => trackCtaClick("home_hero", "secondary", "/soluciones")}
                  className="inline-block w-full rounded-xl border-2 border-brand-navy/15 bg-white px-6 py-3 text-center text-sm font-extrabold uppercase tracking-[0.08em] text-brand-navy transition-colors hover:border-brand-navy hover:bg-brand-navy hover:text-white sm:w-auto sm:px-7"
                >
                  {t("home.hero.cta.secondary")}
                </Link>
              </MotionButton>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
            className="relative lg:col-span-5"
          >
            <PetalBlob
              color="brand-magenta"
              size={320}
              opacity={0.18}
              blur={80}
              className="absolute -bottom-10 -right-8 -z-10 hidden md:block"
            />
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px] shadow-[0_30px_60px_-25px_oklch(0.27_0.13_268/0.45)] ring-1 ring-black/5 sm:aspect-[16/10] lg:aspect-[4/3]">
              <img
                src={heroImg}
                alt="Educadores y estudiantes colaborando con tecnología en una aula moderna"
                width={1200}
                height={1408}
                fetchPriority="high"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: [12, 0, -4, 0] }}
              transition={{ y: { duration: 4, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 0.6 }, opacity: { duration: 0.6, delay: 0.4 } }}
              className="absolute -bottom-5 left-3 flex items-center gap-3 rounded-2xl border border-brand-navy/10 bg-white/95 px-4 py-3 shadow-xl backdrop-blur sm:left-4 md:-left-8"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-magenta/10 text-brand-magenta">
                <Sparkles className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <p className="font-display text-lg font-black tracking-tight text-brand-navy">+2.900</p>
                <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-navy/60">Instituciones LATAM</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CHALLENGE */}
      <section className="bg-surface py-10 md:py-16">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            <motion.div {...fadeUp} className="lg:col-span-4">
              <span className="pill-date mb-3">{t("home.challenge.eyebrow")}</span>
              <h2 className="mb-3 font-display text-2xl font-black uppercase leading-[1.05] tracking-tight text-balance text-brand-navy md:text-3xl">
                {t("home.challenge.title").split(" ").slice(0, -1).join(" ")}{" "}
                <span className="font-serif text-[1.2em] font-normal italic normal-case tracking-tight text-violet-gradient">
                  {t("home.challenge.title").split(" ").slice(-1)[0]}
                </span>
              </h2>
              <p className="max-w-md text-sm leading-relaxed text-brand-navy/65 md:text-base">
                {t("home.challenge.description")}
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer(0.08)}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="grid gap-3 sm:grid-cols-2 lg:col-span-8"
            >
              {challenges.map(({ icon: Icon, key, color }, i) => {
                const tint =
                  color === "magenta" ? { soft: "bg-brand-magenta/10", fg: "text-brand-magenta", bar: "bg-brand-magenta" } :
                  color === "red" ? { soft: "bg-brand-red/10", fg: "text-brand-red", bar: "bg-brand-red" } :
                  color === "yellow" ? { soft: "bg-brand-yellow/15", fg: "text-brand-yellow", bar: "bg-brand-yellow" } :
                  color === "green" ? { soft: "bg-brand-green/10", fg: "text-brand-green", bar: "bg-brand-green" } :
                  { soft: "bg-brand-navy/10", fg: "text-brand-navy", bar: "bg-brand-navy" };
                return (
                  <motion.div
                    key={key}
                    variants={staggerItem}
                    whileHover={{ y: -3 }}
                    transition={{ type: "spring", stiffness: 320, damping: 24 }}
                    className={`group relative overflow-hidden rounded-xl p-4 ring-1 ring-brand-navy/5 transition-shadow hover:shadow-[0_18px_40px_-22px_oklch(0.27_0.13_268/0.35)] md:p-5 ${
                      i % 2 === 0 ? "bg-white" : "bg-brand-navy/[0.03]"
                    }`}
                  >
                    <div className="mb-4 flex items-start justify-between">
                      <span className="font-mono text-[10px] font-semibold tracking-[0.25em] text-brand-navy/40">
                        {String(i + 1).padStart(2, "0")} / 04
                      </span>
                      <span className={`inline-flex h-9 w-9 items-center justify-center rounded-lg ${tint.soft} ${tint.fg}`}>
                        <Icon className="h-4 w-4" strokeWidth={2.4} />
                      </span>
                    </div>
                    <h3 className="mb-1.5 font-display text-[0.95rem] font-black uppercase leading-tight tracking-tight text-brand-navy">
                      {t(`home.challenge.${key}.title`)}
                    </h3>
                    <p className="text-[13px] leading-relaxed text-brand-navy/60">
                      {t(`home.challenge.${key}.text`)}
                    </p>
                    <span
                      aria-hidden
                      className={`absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 ${tint.bar} transition-transform duration-300 group-hover:scale-x-100`}
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          <motion.p
            {...fadeUp}
            className="mt-8 max-w-3xl font-display text-lg font-bold text-balance sm:text-xl md:mt-10 md:text-2xl"
          >
            {t("home.challenge.closing")}
          </motion.p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative overflow-hidden bg-gradient-sky py-10 md:py-20">
        <div className="container-page relative">
          <motion.div {...fadeUp} className="mb-6 max-w-3xl md:mb-10">
            <span className="pill-date mb-4">{t("home.process.eyebrow")}</span>
            <h2 className="mb-3 font-display text-xl font-black uppercase tracking-tight text-balance text-brand-navy sm:text-2xl md:text-3xl">
              {t("home.process.title").split(" ").slice(0, -1).join(" ")}{" "}
              <span className="font-serif text-[1.2em] font-normal italic normal-case tracking-tight text-brand-magenta">
                {t("home.process.title").split(" ").slice(-1)[0]}
              </span>
            </h2>
            <p className="text-base leading-relaxed text-brand-navy/65">
              {t("home.process.subtitle")}
            </p>
          </motion.div>

          <motion.ul
            variants={staggerContainer(0.06)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
          >
            {steps.map((n, i) => {
              const c = stepColors[i];
              const colorClass =
                c === "magenta" ? "text-brand-magenta" :
                c === "red" ? "text-brand-red" :
                c === "orange" ? "text-brand-orange" :
                c === "yellow" ? "text-brand-yellow" :
                c === "green" ? "text-brand-green" :
                "text-brand-navy";
              const dotClass =
                c === "magenta" ? "bg-brand-magenta" :
                c === "red" ? "bg-brand-red" :
                c === "orange" ? "bg-brand-orange" :
                c === "yellow" ? "bg-brand-yellow" :
                c === "green" ? "bg-brand-green" :
                "bg-brand-navy";
              return (
                <motion.li
                  key={n}
                  variants={staggerItem}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 320, damping: 24 }}
                   className="group flex items-center gap-4 rounded-2xl border border-brand-navy/10 bg-white px-4 py-3 hover:border-brand-navy/25 hover:shadow-[0_10px_24px_-18px_oklch(0.27_0.13_268/0.5)] md:py-3.5"
                >
                  <span className={`font-display text-2xl font-black leading-none tracking-tight ${colorClass}`}>
                    0{n}
                  </span>
                  <span aria-hidden className={`h-8 w-px ${dotClass} opacity-30`} />
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-[13px] font-extrabold uppercase tracking-tight text-brand-navy">
                      {t(`home.process.step${n}`)}
                    </h3>
                    <p className="mt-0.5 text-xs leading-snug text-brand-navy/60">
                      {t(`home.process.step${n}.desc`)}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </section>

      {/* METRICS */}
      <section className="relative overflow-hidden bg-gradient-cream py-10 md:py-14">
        <PetalBlob color="brand-magenta" size={380} opacity={0.18} blur={120} className="absolute -top-20 -right-24 hidden lg:block" />
        <PetalBlob color="brand-orange" size={320} opacity={0.16} blur={120} className="absolute -bottom-20 -left-24 hidden lg:block" />
        <div className="container-page relative">
          <motion.h2
            {...fadeUp}
            className="mb-8 max-w-2xl font-display text-[1.65rem] font-black uppercase tracking-tight text-balance text-brand-navy sm:text-3xl md:mb-10 md:text-4xl"
          >
            {t("home.metrics.title").split(" ").slice(0, -1).join(" ")}{" "}
            <span className="font-serif text-[1.15em] font-normal italic normal-case tracking-tight text-violet-gradient">
              {t("home.metrics.title").split(" ").slice(-1)[0]}
            </span>
          </motion.h2>
           <div className="grid gap-6 md:grid-cols-3 md:gap-12">
            {[1, 2, 3].map((i, idx) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                 <div className="mb-3 font-display text-4xl font-black tracking-tighter text-violet-gradient md:text-7xl">
                  <AnimatedCounter value={t(`home.metrics.m${i}.value`)} duration={1.8} />
                </div>
                <div className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-brand-navy/70">
                  {t(`home.metrics.m${i}.label`)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="relative overflow-hidden bg-surface py-10 md:py-16">
        <SectionGraphic
          src={pillarsGraphic}
          alt=""
          position="right"
          size="sm"
          hideOnMobile
          className="pointer-events-none absolute right-4 top-4 opacity-90 md:right-8 md:top-6"
        />
        <div className="container-page relative">
          <motion.div {...fadeUp} className="mb-10 text-center md:mb-12">
            <span className="mb-3 block text-xs font-bold uppercase tracking-widest text-google-green">
              {t("home.pillars.eyebrow")}
            </span>
            <h2 className="mx-auto mb-3 max-w-3xl font-display text-[1.5rem] font-bold text-balance sm:text-2xl md:text-3xl">
              {t("home.pillars.title")}
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-brand-gray md:text-base">{t("home.pillars.subtitle")}</p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-4">

            {pillars.map(({ tag, icon: Icon, color, dark, hash }) => {
              const bgSoft =
                color === "magenta" ? "bg-brand-magenta/10" :
                color === "orange" ? "bg-brand-orange/10" :
                color === "red" ? "bg-brand-red/10" :
                color === "yellow" ? "bg-brand-yellow/10" :
                color === "green" ? "bg-brand-green/10" :
                "bg-brand-navy/10";
              const fg =
                color === "magenta" ? "text-brand-magenta" :
                color === "orange" ? "text-brand-orange" :
                color === "red" ? "text-brand-red" :
                color === "yellow" ? "text-brand-yellow" :
                color === "green" ? "text-brand-green" :
                "text-brand-navy";
              return (
              <motion.div
                key={tag}
                {...fadeUp}
                className={`group flex h-full flex-col rounded-2xl p-4 transition-all md:p-6 ${
                  dark
                    ? "border border-transparent bg-brand-dark text-white shadow-2xl"
                    : "border border-border bg-background hover:border-google-blue/30"
                }`}
              >
                <div
                  className={`mb-4 grid h-11 w-11 place-items-center rounded-xl ${
                    dark ? "bg-white/10" : bgSoft
                  } transition-transform group-hover:scale-110`}
                >
                  <Icon className={`h-5 w-5 ${dark ? "text-white" : fg}`} />
                </div>
                <span
                  className={`mb-2 inline-block text-[11px] font-bold uppercase tracking-widest ${
                    dark ? "text-google-yellow" : fg
                  }`}
                >
                  {t(`home.pillars.${tag}.tag`)}
                </span>
                <h3 className="mb-2 font-display text-xl font-bold">
                  {t(`home.pillars.${tag}.title`)}
                </h3>
                <p
                  className={`mb-5 text-sm leading-relaxed ${dark ? "text-gray-400" : "text-brand-gray"}`}
                >
                  {t(`home.pillars.${tag}.text`)}
                </p>

                <Link
                  to="/soluciones"
                  hash={hash}
                  onClick={() => trackCtaClick("home_pillars", tag, hash ? `/soluciones#${hash}` : "/soluciones")}
                   className={`mt-auto inline-flex min-h-11 items-center gap-2 text-sm font-bold ${
                    dark ? "text-white" : fg
                  }`}
                >
                  {t(`home.pillars.${tag}.cta`)}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="border-t border-border bg-white py-8 md:py-10 overflow-hidden">
        <div className="container-page text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-google-blue">
            {t("home.clients.eyebrow")}
          </p>
          <h2 className="mx-auto mb-6 max-w-2xl font-display text-xl font-bold text-balance sm:text-2xl md:text-3xl">
            {t("home.clients.title")}
          </h2>
        </div>
        <div className="relative">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent"
          />
          {(() => {
            const logos = [
              { src: "cfi.png", alt: "Consejo Federal de Inversiones (CFI)" },
              { src: "eao.png", alt: "Escuela Argentina del Oeste" },
              { src: "escuela-de-la-paz.jpg", alt: "Escuela de la Paz (San Nicolás)" },
              { src: "grilli.jpg", alt: "Colegio Grilli" },
              { src: "inspired.png", alt: "Inspired Education" },
              { src: "lincoln.jpg", alt: "Lincoln" },
              { src: "michael-ham.jpg", alt: "Michael Ham Memorial College" },
              { src: "newman.jpg", alt: "Colegio Newman" },
              { src: "nueva-siembra.png", alt: "Colegio Nueva Siembra (Jujuy)" },
              { src: "san-luis.jpg", alt: "Pringles (San Luis)" },
              { src: "sagrada-familia.jpg", alt: "Sagrada Familia" },
              { src: "saint-catherines.jpg", alt: "Saint Catherine's Moorlands School" },
              { src: "saint-margarets.jpg", alt: "Saint Margaret's School" },
              { src: "san-cayetano.jpg", alt: "San Cayetano" },
              { src: "san-isidro-college.jpg", alt: "San Isidro College (Salta)" },
              { src: "universidad-la-punta.jpg", alt: "Universidad de La Punta" },
              { src: "washington-school.jpg", alt: "Washington School" },
            ];
            return (
              <div className="flex gap-10 animate-marquee whitespace-nowrap will-change-transform">
                {[0, 1].map((dup) => (
                  <div key={dup} className="flex shrink-0 items-center gap-10">
                    {logos.map((logo) => (
                      <div
                        key={`${dup}-${logo.src}`}
                         className="flex h-14 w-28 shrink-0 items-center justify-center md:h-20 md:w-40"
                      >
                        <img
                          src={`/clients/${logo.src}`}
                          alt={logo.alt}
                          loading="lazy"
                          className="h-full w-full object-contain"
                        />
                      </div>
                    ))}

                  </div>
                ))}
              </div>
            );
          })()}


        </div>
      </section>

    </>
  );
}
