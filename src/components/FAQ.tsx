import { ChevronDown } from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";

type QA = { q: string; a: string };

const FAQ_ES: QA[] = [
  {
    q: "¿Qué es MaestrIA y en qué se diferencia de un curso de IA tradicional?",
    a: "MaestrIA es la ruta de formación docente de Glex Ed enfocada en uso pedagógico, ético y responsable de la inteligencia artificial. A diferencia de un curso genérico, está organizada por nivel educativo (Inicial, Primaria, Secundaria Básica y Orientada) y se integra con la planificación real del aula dentro del programa PAIDEIA.",
  },
  {
    q: "¿Qué incluye el programa PAIDEIA?",
    a: "PAIDEIA combina diagnóstico institucional, formación docente con MaestrIA, integración de Google Workspace for Education e IA, acompañamiento pedagógico y métricas de impacto. Es modular y se adapta al punto de partida de cada institución.",
  },
  {
    q: "¿Cómo se implementa la IA en una institución educativa?",
    a: "Trabajamos en cinco etapas: diagnóstico, diseño, formación, aplicación en aula y evaluación. Esto garantiza que la IA no se quede en talleres aislados, sino que transforme prácticas concretas en lengua, matemática, ciencias y proyectos.",
  },
  {
    q: "¿Es necesario tener Google Workspace for Education para trabajar con Glex Ed?",
    a: "No es obligatorio, pero somos partner oficial de Google for Education y la mayoría de nuestras implementaciones lo aprovechan. Si tu institución usa otra plataforma, adaptamos la propuesta sin perder profundidad pedagógica.",
  },
  {
    q: "¿Para qué niveles educativos está pensada la propuesta?",
    a: "Desde Nivel Inicial hasta Secundaria Orientada, con colecciones específicas por etapa. También trabajamos con educación superior y programas de formación profesional dentro del enfoque HumanIA y Agenda 2026.",
  },
  {
    q: "¿Cuánto tiempo lleva ver resultados?",
    a: "Las primeras mejoras en apropiación docente y uso de herramientas suelen verse en 6 a 8 semanas. Los indicadores pedagógicos sostenidos (participación, calidad de proyectos, prácticas con IA) consolidan en un ciclo lectivo.",
  },
  {
    q: "¿Cómo se cuida la privacidad de estudiantes y docentes?",
    a: "Trabajamos sobre infraestructura segura (Google Workspace for Education y plataformas educativas certificadas), con políticas claras de uso responsable de IA y guías de protección de datos para directivos, docentes y familias.",
  },
  {
    q: "¿Pueden gestionar nuestro Google Workspace y Classroom?",
    a: "Sí. Es nuestro punto de entrada más común en colegios. Ordenamos la consola, el correo institucional, el almacenamiento y las licencias, estandarizamos Classroom y damos soporte técnico continuo al equipo de IT.",
  },
  {
    q: "¿Qué programas tienen para estudiantes?",
    a: "Startup at School, donde equipos de secundaria crean una startup y la presentan ante un jurado, y Alumno Tutor, donde los estudiantes se forman como tutores digitales de su comunidad escolar, en versiones Junior y Teens.",
  },
];

const FAQ_EN: QA[] = [
  {
    q: "What is MaestrIA and how is it different from a regular AI course?",
    a: "MaestrIA is Glex Ed's teacher learning path focused on pedagogical, ethical and responsible AI use. Unlike a generic course, it is organized by educational level (Pre-K, Primary, Lower and Upper Secondary) and integrates into real classroom planning inside the PAIDEIA program.",
  },
  {
    q: "What does the PAIDEIA program include?",
    a: "PAIDEIA combines institutional diagnosis, MaestrIA teacher training, Google Workspace for Education + AI integration, pedagogical coaching, and impact metrics. It is modular and adapts to each institution's starting point.",
  },
  {
    q: "How do you implement AI in a school?",
    a: "We work in five stages: diagnosis, design, training, classroom application, and evaluation. This ensures AI doesn't stay in isolated workshops, but transforms real practice across language, math, science, and projects.",
  },
  {
    q: "Do we need Google Workspace for Education to work with Glex Ed?",
    a: "It's not mandatory, but we are an official Google for Education partner and most of our rollouts leverage it. If your institution uses a different platform we adapt the program without losing pedagogical depth.",
  },
  {
    q: "Which education levels does the offer cover?",
    a: "From Pre-K through Upper Secondary, with dedicated collections per stage. We also work with higher education and professional training inside the HumanIA and Agenda 2026 framework.",
  },
  {
    q: "How long until we see results?",
    a: "Early improvements in teacher adoption and tool usage typically appear in 6 to 8 weeks. Sustained pedagogical indicators (participation, project quality, AI-enabled practices) consolidate within one school year.",
  },
  {
    q: "How do you protect student and teacher privacy?",
    a: "We build on secure infrastructure (Google Workspace for Education and certified ed-tech platforms), with clear responsible-AI policies and data-protection guides for leaders, teachers, and families.",
  },
  {
    q: "Can you manage our Google Workspace and Classroom?",
    a: "Yes. It is our most common starting point with schools. We organize the console, institutional email, storage and licenses, standardize Classroom and provide ongoing technical support to the IT team.",
  },
  {
    q: "What programs do you offer for students?",
    a: "Startup at School, where secondary school teams build a startup and pitch it to a jury, and Alumno Tutor, where students train as digital tutors for their school community, in Junior and Teens versions.",
  },
];

export function FAQ() {
  const { locale } = useI18n();
  const items = locale === "en" ? FAQ_EN : FAQ_ES;
  const labels =
    locale === "en"
      ? {
          eyebrow: "FAQ",
          title: "Frequently asked questions",
          subtitle:
            "Quick answers about MaestrIA, PAIDEIA, and how we deploy AI in real institutions.",
        }
      : {
          eyebrow: "Preguntas frecuentes",
          title: "Resolvemos tus dudas",
          subtitle:
            "Respuestas cortas sobre MaestrIA, PAIDEIA y cómo implementamos IA en instituciones reales.",
        };

  const ldJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };

  return (
    <section id="faq" className="overflow-hidden bg-gradient-sky py-14 md:py-24 scroll-mt-24">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-5">
          <header className="lg:col-span-2">
            <span className="pill-date mb-5">{labels.eyebrow}</span>
            <h2 className="mb-4 font-display text-2xl font-black uppercase leading-[1.05] tracking-tight text-brand-navy md:text-4xl">
              {labels.title.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="font-serif text-[1.2em] font-normal italic normal-case tracking-tight text-violet-gradient">
                {labels.title.split(" ").slice(-1)[0]}
              </span>
            </h2>
            <p className="text-lg text-brand-navy/65">{labels.subtitle}</p>
          </header>

          <div className="space-y-3 lg:col-span-3">
            {items.map((it, i) => (
              <details
                key={i}
                className="group rounded-2xl border border-brand-navy/10 bg-white/80 p-5 backdrop-blur transition-colors open:border-brand-magenta/40 open:shadow-sm"
              >
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-semibold leading-snug text-brand-navy">
                  <span>{it.q}</span>
                  <ChevronDown className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-magenta transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-brand-navy/70">{it.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
      />
    </section>
  );
}
