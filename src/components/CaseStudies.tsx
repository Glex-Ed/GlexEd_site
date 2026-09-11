import { TrendingUp, Users, Sparkles } from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { trackCtaClick } from "@/lib/analytics";

type Metric = { value: string; label: string };
type Case = {
  id: string;
  institution: string;
  context: string;
  problem: string;
  approach: string;
  results: string;
  metrics: Metric[];
  accent: "blue" | "green" | "orange" | "purple";
};

const ACCENT: Record<Case["accent"], string> = {
  blue: "text-google-blue bg-google-blue/10",
  green: "text-google-green bg-google-green/10",
  orange: "text-google-yellow bg-google-yellow/10",
  purple: "text-brand-purple bg-brand-purple/10",
};

const CASES_ES: Case[] = [
  {
    id: "c1",
    institution: "Red de colegios bilingües",
    context: "12 sedes · Nivel Inicial a Secundaria · LATAM",
    problem:
      "Equipos docentes con poca apropiación de IA y disparidad entre sedes en el uso de Google Workspace for Education.",
    approach:
      "Diagnóstico por sede + ruta MaestrIA para 380 docentes, integración con PAIDEIA y acompañamiento de líderes pedagógicos durante un ciclo lectivo completo.",
    results:
      "Estandarización de prácticas con IA, planificaciones colaborativas y reducción del tiempo administrativo docente.",
    metrics: [
      { value: "+92%", label: "docentes activos en MaestrIA" },
      { value: "−40%", label: "tiempo en tareas administrativas" },
      { value: "12/12", label: "sedes con prácticas alineadas" },
    ],
    accent: "blue",
  },
  {
    id: "c2",
    institution: "Colegio secundario orientado",
    context: "1.400 estudiantes · Modalidad Economía y Comunicación",
    problem:
      "Necesidad de actualizar la propuesta de últimos años con competencias digitales y proyectos auténticos vinculados al mundo real.",
    approach:
      "Implementación de la colección PAIDEIA Secundaria Orientada, talleres con docentes y rediseño de 6 espacios curriculares con uso responsable de IA.",
    results:
      "Estudiantes produciendo proyectos integradores con IA, mayor engagement y mejora en indicadores de continuidad.",
    metrics: [
      { value: "+35%", label: "participación en clase" },
      { value: "6", label: "materias rediseñadas" },
      { value: "9.2/10", label: "satisfacción docente" },
    ],
    accent: "green",
  },
  {
    id: "c3",
    institution: "Institución de gestión pública",
    context: "Nivel Primario · Programa de transformación digital",
    problem:
      "Brecha entre la infraestructura disponible y el uso pedagógico real; capacitaciones previas sin continuidad.",
    approach:
      "Diagnóstico, despliegue de Google Workspace for Education, ruta MaestrIA para 120 docentes y comunidad de práctica mensual.",
    results:
      "Cultura digital sostenida, planificaciones compartidas y nuevos roles de referentes IA por ciclo.",
    metrics: [
      { value: "120", label: "docentes formados" },
      { value: "+80%", label: "uso semanal de Workspace" },
      { value: "8", label: "referentes IA internos" },
    ],
    accent: "orange",
  },
];

const CASES_EN: Case[] = [
  {
    id: "c1",
    institution: "Bilingual school network",
    context: "12 campuses · Pre-K to High School · LATAM",
    problem:
      "Low AI adoption among teachers and inconsistent use of Google Workspace for Education across campuses.",
    approach:
      "Per-campus diagnosis + MaestrIA learning path for 380 teachers, PAIDEIA integration, and a full school-year coaching for pedagogical leaders.",
    results:
      "Standardized AI practices, collaborative planning, and lower administrative workload for teachers.",
    metrics: [
      { value: "+92%", label: "active teachers in MaestrIA" },
      { value: "−40%", label: "admin time saved" },
      { value: "12/12", label: "aligned campuses" },
    ],
    accent: "blue",
  },
  {
    id: "c2",
    institution: "Specialized high school",
    context: "1,400 students · Economics & Communication tracks",
    problem:
      "Need to update upper-grade curriculum with digital competencies and real-world authentic projects.",
    approach:
      "PAIDEIA Upper Secondary collection rolled out, teacher workshops, and redesign of 6 subjects around responsible AI use.",
    results:
      "Students producing integrative AI-powered projects, higher engagement and improved retention indicators.",
    metrics: [
      { value: "+35%", label: "class participation" },
      { value: "6", label: "subjects redesigned" },
      { value: "9.2/10", label: "teacher satisfaction" },
    ],
    accent: "green",
  },
  {
    id: "c3",
    institution: "Public-sector institution",
    context: "Elementary level · Digital transformation program",
    problem:
      "Gap between available infrastructure and actual classroom usage; previous training lacked continuity.",
    approach:
      "Diagnosis, Google Workspace for Education rollout, MaestrIA path for 120 teachers, and a monthly community of practice.",
    results:
      "Sustained digital culture, shared planning, and new internal AI champions per grade band.",
    metrics: [
      { value: "120", label: "teachers trained" },
      { value: "+80%", label: "weekly Workspace use" },
      { value: "8", label: "internal AI champions" },
    ],
    accent: "orange",
  },
];

interface Props {
  variant?: "full" | "summary";
}

export function CaseStudies({ variant = "full" }: Props) {
  const { locale } = useI18n();
  const cases = locale === "en" ? CASES_EN : CASES_ES;
  const isFull = variant === "full";

  const labels =
    locale === "en"
      ? {
          eyebrow: "Success stories",
          title: isFull ? "Real impact across institutions" : "What change looks like",
          subtitle: isFull
            ? "Selected examples of how schools and networks transform with MaestrIA and PAIDEIA. Figures are representative of typical outcomes."
            : "A glimpse of how institutions evolve with our approach.",
          problem: "Challenge",
          approach: "Approach",
          results: "Results",
          disclaimer: "Representative examples · Specific figures vary by institution.",
          seeAll: "See full case studies",
        }
      : {
          eyebrow: "Casos de éxito",
          title: isFull ? "Impacto real en instituciones" : "Así se ve el cambio",
          subtitle: isFull
            ? "Ejemplos seleccionados de cómo escuelas y redes se transforman con MaestrIA y PAIDEIA. Las cifras son representativas de los resultados típicos."
            : "Un vistazo de cómo evolucionan las instituciones con nuestro enfoque.",
          problem: "Problema",
          approach: "Enfoque",
          results: "Resultados",
          disclaimer:
            "Ejemplos representativos · Las cifras específicas varían según la institución.",
          seeAll: "Ver casos completos",
        };

  return (
    <section id="casos" className="bg-gradient-cream py-24 scroll-mt-24">
      <div className="container-page">
        <span className="pill-date mb-5">{labels.eyebrow}</span>
        <h2 className="mb-4 max-w-2xl font-display text-3xl font-black uppercase leading-[1.05] tracking-tight text-brand-navy md:text-4xl">
          {labels.title.split(" ").slice(0, -1).join(" ")}{" "}
          <span className="font-serif text-[1.2em] font-normal italic normal-case tracking-tight text-violet-gradient">
            {labels.title.split(" ").slice(-1)[0]}
          </span>
        </h2>
        <p className="mb-12 max-w-2xl text-lg text-brand-navy/65">{labels.subtitle}</p>

        {isFull ? (
          <div className="space-y-8">
            {cases.map((c) => (
              <article
                key={c.id}
                className="overflow-hidden rounded-3xl border border-border bg-surface transition-shadow hover:shadow-md"
              >
                <div className="grid gap-0 lg:grid-cols-5">
                  <div className="border-b border-border p-7 lg:col-span-2 lg:border-b-0 lg:border-r">
                    <span
                      className={`mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold ${ACCENT[c.accent]}`}
                    >
                      <Sparkles className="h-3 w-3" />
                      {c.context}
                    </span>
                    <h3 className="mb-2 font-display text-2xl font-bold text-balance">
                      {c.institution}
                    </h3>
                    <div className="mt-6 grid grid-cols-3 gap-3">
                      {c.metrics.map((m) => (
                        <div key={m.label} className="rounded-2xl bg-background p-3 text-center">
                          <div className="font-display text-xl font-bold text-google-blue md:text-2xl">
                            {m.value}
                          </div>
                          <div className="mt-1 text-[10px] uppercase tracking-wide text-brand-gray">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-6 p-7 lg:col-span-3 lg:grid-cols-3">
                    <CaseBlock title={labels.problem} text={c.problem} />
                    <CaseBlock title={labels.approach} text={c.approach} />
                    <CaseBlock title={labels.results} text={c.results} />
                  </div>
                </div>
              </article>
            ))}
            <p className="pt-2 text-xs text-brand-gray">{labels.disclaimer}</p>
          </div>
        ) : (
          <>
            <div className="grid gap-6 md:grid-cols-3">
              {cases.map((c) => (
                <article
                  key={c.id}
                  className="rounded-3xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <span
                    className={`mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-bold ${ACCENT[c.accent]}`}
                  >
                    <Users className="h-3 w-3" />
                    {c.context}
                  </span>
                  <h3 className="mb-3 font-display text-lg font-bold">{c.institution}</h3>
                  <p className="mb-5 text-sm leading-relaxed text-brand-gray line-clamp-3">
                    {c.results}
                  </p>
                  <div className="grid grid-cols-3 gap-2 border-t border-border pt-4">
                    {c.metrics.map((m) => (
                      <div key={m.label} className="text-center">
                        <div className="font-display text-base font-bold text-google-blue">
                          {m.value}
                        </div>
                        <div className="mt-0.5 text-[9px] uppercase tracking-wide text-brand-gray">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-10">
              <a
                href="/soluciones#casos"
                onClick={() => trackCtaClick("home_cases", "see_all", "/soluciones#casos")}
                className="inline-flex items-center gap-2 font-semibold text-google-blue hover:underline"
              >
                {labels.seeAll}
                <TrendingUp className="h-4 w-4" />
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

function CaseBlock({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-brand-gray">{title}</h4>
      <p className="text-sm leading-relaxed text-foreground">{text}</p>
    </div>
  );
}
