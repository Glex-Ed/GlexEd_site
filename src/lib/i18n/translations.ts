import type { Locale } from "./types";

type Dict = Record<string, string>;

export const translations: Record<Locale, Dict> = {
  es: {
    // Nav
    "nav.home": "Inicio",
    "nav.solutions": "Soluciones",
    "nav.audiences": "Audiencias",
    "nav.contact": "Contacto",
    "nav.campus": "Campus",
    "nav.cta": "Contactar",
    "nav.partner": "Google for Education Partner",

    // Home — Hero
    "home.hero.eyebrow.left": "Agenda 2026",
    "home.hero.eyebrow.right": "Transformación digital LATAM",
    "home.hero.title.line1": "INTELIGENCIA ARTIFICIAL",
    "home.hero.title.line2": "con estrategia pedagógica",
    "home.hero.subtitle":
      "Acompañamos a instituciones educativas en la gestión de Google Workspace, la integración de IA y el desarrollo de nuevas competencias, con un enfoque institucional, progresivo y medible.",
    "home.hero.cta.primary": "Solicitar demo",
    "home.hero.cta.secondary": "Ver cómo trabajamos",
    "home.hero.badge.title": "Ecosistema Google",
    "home.hero.badge.subtitle": "Integración nativa certificada",

    // Home — Challenge
    "home.challenge.eyebrow": "El desafío",
    "home.challenge.title": "La IA ya está en las aulas. El desafío es cómo integrarla.",
    "home.challenge.description":
      "Hoy, docentes y estudiantes ya utilizan herramientas de inteligencia artificial. Sin embargo, muchas instituciones aún no cuentan con un marco claro para su implementación. Esto genera:",
    "home.challenge.item1.title": "Uso aislado",
    "home.challenge.item1.text": "Herramientas adoptadas sin una estrategia común.",
    "home.challenge.item2.title": "Falta de criterios",
    "home.challenge.item2.text": "Sin marcos pedagógicos claros para guiar el uso.",
    "home.challenge.item3.title": "Riesgos digitales",
    "home.challenge.item3.text": "Vacíos en ciudadanía digital y privacidad.",
    "home.challenge.item4.title": "Plataforma desordenada",
    "home.challenge.item4.text": "Workspace y Classroom están, pero cuesta ordenarlos y sacarles provecho.",
    "home.challenge.closing": "La transformación no es tecnológica. Es institucional.",

    // Home — Process
    "home.process.eyebrow": "Cómo trabajamos",
    "home.process.title": "Un enfoque institucional para la transformación educativa",
    "home.process.subtitle":
      "No se trata de sumar herramientas, sino de construir una estrategia. Acompañamos a cada institución en un proceso estructurado.",
    "home.process.step1": "Diagnóstico institucional",
    "home.process.step1.desc": "Mapeamos cultura digital, infraestructura y necesidades reales del equipo.",
    "home.process.step2": "Plan estratégico",
    "home.process.step2.desc": "Definimos objetivos, hitos y métricas alineadas al proyecto educativo.",
    "home.process.step3": "Formación por roles",
    "home.process.step3.desc": "Rutas a medida para directivos, docentes y referentes IA.",
    "home.process.step4": "Integración en aula",
    "home.process.step4.desc": "Llevamos IA y Workspace a las prácticas concretas de enseñanza.",
    "home.process.step5": "Políticas digitales",
    "home.process.step5.desc": "Protocolos claros de uso responsable, ciudadanía y datos.",
    "home.process.step6": "Seguimiento e impacto",
    "home.process.step6.desc": "Medimos resultados y ajustamos la estrategia ciclo a ciclo.",

    // Home — Metrics
    "home.metrics.title": "Experiencia y escala en América Latina",
    "home.metrics.m1.value": "+2.900",
    "home.metrics.m1.label": "Instituciones en 5 países",
    "home.metrics.m2.value": "+10M",
    "home.metrics.m2.label": "Usuarios beneficiados",
    "home.metrics.m3.value": ">80%",
    "home.metrics.m3.label": "Satisfacción con nuestras soluciones",

    // Home — Pillars
    "home.pillars.eyebrow": "Programas y plataformas",
    "home.pillars.title": "Cuatro pilares que hacen real la transformación",
    "home.pillars.subtitle":
      "Soluciones modulares diseñadas para cada etapa de la madurez digital institucional.",
    "home.pillars.p1.tag": "PAIDEIA",
    "home.pillars.p1.title": "Capacitación continua",
    "home.pillars.p1.text":
      "Rutas de aprendizaje para repensar la enseñanza y acelerar la innovación en directivos, IT, docentes, familias y estudiantes.",
    "home.pillars.p1.cta": "Conocer programas",
    "home.pillars.p2.tag": "OctoLearn",
    "home.pillars.p2.title": "Tecnología educativa",
    "home.pillars.p2.text":
      "Ecosistema integrado: LMS, CMS, gestión de datos y módulos especializados con integración nativa a Google Workspace.",
    "home.pillars.p2.cta": "Explorar plataforma",
    "home.pillars.p3.tag": "HumanIA",
    "home.pillars.p3.title": "Entornos colaborativos",
    "home.pillars.p3.text":
      "Capacitación corporativa para empresas, municipios y organizaciones que necesitan competencias digitales aplicadas.",
    "home.pillars.p3.cta": "Ver propuesta",
    "home.pillars.p4.tag": "Google Workspace",
    "home.pillars.p4.title": "Gestión de plataforma",
    "home.pillars.p4.text":
      "Ordenamos, configuramos y administramos Google Workspace y Classroom, con soporte técnico continuo para el colegio.",
    "home.pillars.p4.cta": "Ver servicios",
    "home.pillars.p4.detail.title": "Tu Workspace, ordenado y en uso",
    "home.pillars.p4.detail.intro":
      "Muchas instituciones ya tienen Google Workspace for Education, pero les cuesta administrarlo y estandarizar su uso. Nos hacemos cargo de la gestión para que el equipo se concentre en enseñar.",
    "home.pillars.p4.detail.lead": "Qué resolvemos:",
    "home.pillars.p4.detail.r1": "Paneles y unidades organizativas ordenados.",
    "home.pillars.p4.detail.r2": "Correo institucional para alumnos y personal.",
    "home.pillars.p4.detail.r3": "Almacenamiento y cuotas bajo control.",
    "home.pillars.p4.detail.r4": "Altas, bajas y licencias sin fricción.",
    "home.pillars.p4.detail.r5": "Classroom estandarizado para todo el colegio.",
    "home.pillars.p4.detail.r6": "Seguridad, auditoría y formación del equipo de IT.",
    "home.pillars.more": "Ver más",
    "home.pillars.less": "Ver menos",

    // Pillar 1 — Capacitación continua (detalle)
    "home.pillars.p1.detail.title": "Rutas formativas para transformar la educación",
    "home.pillars.p1.detail.intro":
      "En Glex Ed creemos que las experiencias educativas tienen el poder de transformar el aprendizaje y preparar a las instituciones para los desafíos del futuro. Ofrecemos contenidos, talleres y programas para integrar competencias digitales, nuevas herramientas tecnológicas y estrategias pedagógicas, adaptadas a diversos contextos.",
    "home.pillars.p1.detail.lead": "Nuestras rutas formativas están pensadas para:",
    "home.pillars.p1.detail.r1": "Directivos: líderes que impulsan la innovación y garantizan una educación alineada con las demandas actuales.",
    "home.pillars.p1.detail.r2": "Administrativos: equipos que optimizan la gestión educativa con herramientas tecnológicas.",
    "home.pillars.p1.detail.r3": "Personal de IT: profesionales que aseguran la integración y funcionamiento de plataformas digitales.",
    "home.pillars.p1.detail.r4": "Educadores: docentes que perfeccionan sus habilidades y aplican metodologías dinámicas con tecnología.",
    "home.pillars.p1.detail.r5": "Familias: actores clave en el desarrollo de hábitos digitales responsables.",
    "home.pillars.p1.detail.r6": "Estudiantes: programas como Startup at School y Alumno Tutor, donde desarrollan competencias digitales críticas, creatividad y liderazgo entre pares.",

    // Pillar 2 — Tecnología educativa (detalle)
    "home.pillars.p2.detail.title": "Transformamos la educación con tecnología innovadora",
    "home.pillars.p2.detail.intro":
      "Más que una plataforma, ofrecemos un ecosistema educativo integral que conecta gestión, comunicación y aprendizaje en un único lugar, combinando tecnología avanzada, flexibilidad y personalización.",
    "home.pillars.p2.detail.lead": "Nuestra propuesta tecnológica:",
    "home.pillars.p2.detail.r1": "Plataforma LMS: gestión intuitiva para entornos híbridos, online y presenciales.",
    "home.pillars.p2.detail.r2": "CMS: organización eficiente y accesible de contenido educativo.",
    "home.pillars.p2.detail.r3": "Gestión de datos: centralización y análisis inteligente para decisiones fundamentadas.",
    "home.pillars.p2.detail.r4": "Integración con Google Workspace: comunicación en tiempo real, evaluaciones automatizadas y seguridad en la nube.",
    "home.pillars.p2.detail.r5": "Módulos especializados (ESP, EMS, gestión y certificación, comunicación) para optimizar procesos educativos.",
    "home.pillars.p2.detail.r6": "Interfaz amigable, informes automatizados y accesibilidad móvil total.",

    // Pillar 3 — Entornos colaborativos (detalle)
    "home.pillars.p3.detail.title": "Capacitación para empresas y organizaciones",
    "home.pillars.p3.detail.intro":
      "El aprendizaje no se limita a las aulas. Diseñamos programas de capacitación corporativa para acompañar a empresas, municipios y organizaciones en la mejora continua de sus equipos, optimizando habilidades esenciales para entornos laborales dinámicos.",
    "home.pillars.p3.detail.lead": "Nuestras soluciones están diseñadas para:",
    "home.pillars.p3.detail.r1": "Directivos y líderes empresariales: liderazgo, decisiones estratégicas y adopción de tecnología.",
    "home.pillars.p3.detail.r2": "Administrativos: herramientas digitales para optimizar procesos e información.",
    "home.pillars.p3.detail.r3": "Personal de empresas y gubernamental: competencias digitales, comunicación y trabajo en equipo.",
    "home.pillars.p3.detail.r4": "Colaboradores en distintas áreas: rutas formativas a medida según necesidades.",
    "home.pillars.p3.detail.r5": "Alfabetización digital y habilidades prácticas con foco en productividad e innovación.",
    "home.pillars.p3.detail.r6": "Programas personalizables, formación continua y asesoramiento experto.",

    // Soluciones — intro experiencia/escala
    "sol.intro.text":
      "Glex Ed es una EdTech líder en América Latina que ya acompaña a +2.900 instituciones y más de 10 millones de usuarios en 5 países. Trabajamos junto a Google for Education como partner oficial.",

    // Soluciones — Cómo trabajamos
    "sol.howwework.eyebrow": "Cómo trabajamos",
    "sol.howwework.title": "De la estrategia a la implementación real",
    "sol.howwework.text":
      "Desde el aula hasta la nube, ofrecemos una infraestructura diseñada para conectar, aprender y liderar. Nuestro formato híbrido facilita la gestión del aprendizaje y acompaña a las instituciones en su transformación digital, con formación continua y soporte pedagógico y técnico que aseguran impacto positivo.",
    "sol.howwework.s1": "Diagnóstico institucional",
    "sol.howwework.s2": "Diseño del plan",
    "sol.howwework.s3": "Formación diferenciada por roles",
    "sol.howwework.s4": "Aplicación en contexto real",
    "sol.howwework.s5": "Evaluación de impacto",

    // Home — Clients
    "home.clients.eyebrow": "Confían en nosotros",
    "home.clients.title": "Trabajamos junto a líderes del ecosistema educativo",

    // Home — Closing CTA
    "home.closing.title": "Cada institución tiene su propio punto de partida",
    "home.closing.text":
      "Podemos ayudarte a definir el camino más adecuado para tu contexto. Acompañamos a instituciones en la implementación de IA y cultura digital con programas adaptados a cada realidad.",
    "home.closing.cta": "Solicitar demo gratuita",

    // Footer Campus banner
    "footer.campus.title": "¿Listo para el Campus Glex?",
    "footer.campus.text":
      "Plataforma de formación continua para directivos, docentes y alumnos.",
    "footer.campus.cta": "Entrar al Campus",
    "footer.contact.title": "Hablemos de tu institución",
    "footer.contact.text":
      "Contanos qué necesitás y te respondemos en menos de 24 horas hábiles.",

    // Footer
    "footer.tagline":
      "Transformación educativa real para las instituciones de América Latina.",
    "footer.col.solutions": "Soluciones",
    "footer.col.resources": "Compañía",
    "footer.col.contact": "Sede central",
    "footer.address": "Buenos Aires, Argentina",
    "footer.partner": "Partner oficial Google for Education",
    "footer.rights": "Todos los derechos reservados.",
    "footer.privacy": "Privacidad",
    "footer.terms": "Términos",

    // Soluciones page
    "sol.eyebrow": "Soluciones integrales",
    "sol.title": "De la estrategia a la implementación real",
    "sol.subtitle":
      "Programas diseñados para implementar, no solo capacitar. Desde el diagnóstico hasta el impacto medible.",
    "sol.programs.title": "Programas pedagógicos",
    "sol.programs.paideia.title": "PAIDEIA",
    "sol.programs.paideia.text":
      "Programa integral para la incorporación de inteligencia artificial en educación, alineado a marcos pedagógicos y normativos.",
    "sol.programs.agenda.title": "Agenda 2026",
    "sol.programs.agenda.text":
      "Acompañamiento institucional anual para la transformación educativa con foco en IA, cultura digital y gestión del cambio.",
    "sol.programs.humania.title": "HumanIA",
    "sol.programs.humania.text":
      "Desarrollo de cultura digital, ciudadanía y pensamiento crítico en el uso de tecnologías.",
    "sol.programs.students.title": "Programas para estudiantes",
    "sol.programs.sas.title": "Startup at School",
    "sol.programs.sas.text":
      "Los estudiantes crean una startup desde la idea hasta el pitch final ante un jurado de referentes. Para secundaria, de marzo a septiembre, con evento de cierre presencial.",
    "sol.programs.sas.result":
      "Edición 2026: más de 80 estudiantes, cierre en la Universidad Torcuato Di Tella. Edición 2025: casi 100 estudiantes, cierre en el Parque de Innovación de Buenos Aires.",
    "sol.programs.tutor.title": "Alumno Tutor",
    "sol.programs.tutor.text":
      "Estudiantes que se forman como tutores digitales y acompañan a compañeros, docentes y familias en el uso responsable de la tecnología. Versiones Junior (desde 10 años) y Teens (desde 13), con certificado emitido por Google.",
    "sol.programs.gallery.caption": "Startup at School, ediciones 2025 y 2026",

    // Soluciones — Google Workspace
    "sol.workspace.eyebrow": "Google Workspace for Education",
    "sol.workspace.title": "Ya tenés las herramientas. Te ayudamos a gestionarlas.",
    "sol.workspace.subtitle":
      "Como partner oficial de Google for Education, ordenamos, configuramos y administramos Google Workspace y Classroom para que el colegio les saque provecho de verdad, con soporte técnico continuo.",
    "sol.workspace.i1": "Ordenamiento de paneles y unidades organizativas",
    "sol.workspace.i2": "Correo institucional para alumnos y personal",
    "sol.workspace.i3": "Gestión de almacenamiento y cuotas",
    "sol.workspace.i4": "Altas, bajas y licencias administradas sin fricción",
    "sol.workspace.i5": "Google Classroom estandarizado para todo el colegio",
    "sol.workspace.i6": "Seguridad, privacidad y auditoría de la consola, con capacitación del equipo de IT",
    "sol.workspace.note":
      "También gestionamos las licencias que la institución necesite (Workspace for Education Plus, Gemini, entre otras) y acompañamos a los colegios que quieran certificarse como Google Reference School.",
    "sol.workspace.cta": "Hablemos de tu Workspace",
    "sol.tech.title": "Tecnología educativa",
    "sol.tech.octoclass.title": "OctoClass",
    "sol.tech.octoclass.text":
      "Plataforma de gestión y acompañamiento en aula que permite a docentes supervisar, guiar y potenciar el uso de dispositivos y contenidos digitales en tiempo real.",
    "sol.tech.octoclass.v1": "Control y visibilidad del aula digital",
    "sol.tech.octoclass.v2": "Acompañamiento pedagógico en vivo",
    "sol.tech.octoclass.v3": "Mejora del enfoque y la dinámica de clase",
    "sol.tech.octolearn.title": "OctoLearn",
    "sol.tech.octolearn.text":
      "Ecosistema de aprendizaje y gestión educativa que integra contenidos, datos y comunicación en una única plataforma.",
    "sol.tech.octolearn.v1": "Centralización de información",
    "sol.tech.octolearn.v2": "Seguimiento del aprendizaje",
    "sol.tech.octolearn.v3": "Integración con Google Workspace",
    "sol.cta.title": "¿Querés transformar tu institución?",
    "sol.cta.text":
      "Dejanos tus datos y te ayudamos a diseñar un plan educativo digital a medida.",

    // MaestrIA × PAIDEIA collections
    "sol.maestria.eyebrow": "MaestrIA × PAIDEIA",
    "sol.maestria.title": "Colecciones por nivel educativo",
    "sol.maestria.subtitle":
      "Trayectos curados de MaestrIA dentro del programa PAIDEIA, diseñados para acompañar a docentes en cada etapa del sistema educativo.",
    "sol.maestria.c1.title": "Nivel Inicial",
    "sol.maestria.c1.text":
      "IA aplicada a la primera infancia: alfabetización temprana, juego, narrativas y planificación didáctica.",
    "sol.maestria.c2.title": "Nivel Primario",
    "sol.maestria.c2.text":
      "Integración de IA en lengua, matemática, ciencias y proyectos interdisciplinarios.",
    "sol.maestria.c3.title": "Secundaria Básica",
    "sol.maestria.c3.text":
      "Pensamiento crítico y ciudadanía digital con IA, evaluación auténtica y diseño de actividades.",
    "sol.maestria.c4.title": "Secundaria Orientada",
    "sol.maestria.c4.text":
      "IA aplicada a orientaciones y mundos del trabajo: prompting avanzado, ética y proyectos productivos.",

    // Audiencias page
    "aud.eyebrow": "Audiencias",
    "aud.title": "Cada institución y cada rol enfrenta desafíos diferentes",
    "aud.subtitle":
      "Trabajamos con el sector público y privado, adaptando nuestras herramientas y estrategias para cada organización.",
    "aud.a1.title": "Instituciones educativas",
    "aud.a1.text":
      "Escuelas de nivel inicial, primario y secundario que buscan integrar tecnología en sus procesos de aprendizaje.",
    "aud.a2.title": "Docentes",
    "aud.a2.text":
      "Profesionales comprometidos con la mejora de sus prácticas pedagógicas y el desarrollo de competencias digitales.",
    "aud.a3.title": "Equipos de TI",
    "aud.a3.text":
      "Líderes tecnológicos que implementan y mantienen las plataformas educativas. Los acompañamos en la gestión de Google Workspace y Classroom, con soporte técnico continuo.",
    "aud.a4.title": "Estudiantes",
    "aud.a4.text":
      "Jóvenes que desarrollan competencias digitales críticas, creatividad y colaboración, con programas propios como Startup at School y Alumno Tutor.",
    "aud.a5.title": "Familias",
    "aud.a5.text":
      "Protagonistas en la formación de hábitos digitales responsables y éticos.",
    "aud.a6.title": "Universidades",
    "aud.a6.text":
      "Instituciones de educación superior que innovan en sus modelos académicos e integran IA en sus propuestas formativas.",
    "aud.a7.title": "Empresas",
    "aud.a7.text":
      "Programas de capacitación corporativa para mejorar habilidades en entornos laborales dinámicos.",
    "aud.a8.title": "Gobiernos y municipios",
    "aud.a8.text":
      "Soluciones para fortalecer competencias digitales en equipos del sector público.",

    // Contacto page
    "ct.eyebrow": "Contacto",
    "ct.title": "Hablemos del próximo paso de tu institución",
    "ct.subtitle":
      "Contanos sobre tu contexto y un especialista te contactará en menos de 48 horas.",
    "ct.form.name": "Nombre y apellido",
    "ct.form.email": "Email",
    "ct.form.organization": "Institución",
    "ct.form.role": "Rol",
    "ct.form.country": "País",
    "ct.form.message": "¿Qué necesitás resolver?",
    "ct.form.submit": "Enviar consulta",
    "ct.form.sending": "Enviando…",
    "ct.form.success.title": "¡Recibimos tu consulta!",
    "ct.form.success.text": "Te vamos a contactar muy pronto.",
    "ct.form.error": "No pudimos enviar tu consulta. Probá de nuevo.",
    "ct.form.consent": "Acepto la política de privacidad y el tratamiento de mis datos personales para que Glex Ed me contacte.",
    "ct.info.email": "Email",
    "ct.info.location": "Ubicación",

    // Campus page
    "campus.title": "Campus Glex Ed",
    "campus.subtitle":
      "Plataforma de formación continua para directivos, docentes y alumnos.",
    "campus.open": "Abrir en pestaña nueva",
    "campus.card.eyebrow": "Acceso a la plataforma",
    "campus.card.title": "Tu espacio de aprendizaje continuo",
    "campus.card.subtitle":
      "Cursá, descargá materiales y obtené tu certificación desde un solo lugar, a tu ritmo.",
  },
  en: {
    "nav.home": "Home",
    "nav.solutions": "Solutions",
    "nav.audiences": "Audiences",
    "nav.contact": "Contact",
    "nav.campus": "Campus",
    "nav.cta": "Contact us",
    "nav.partner": "Google for Education Partner",

    "home.hero.eyebrow.left": "Agenda 2026",
    "home.hero.eyebrow.right": "LATAM Digital Transformation",
    "home.hero.title.line1": "Bring AI into your institution",
    "home.hero.title.line2": "with a clear pedagogical strategy",
    "home.hero.subtitle":
      "We help educational institutions manage Google Workspace, integrate AI and build new competencies, through an institutional, progressive and measurable approach.",
    "home.hero.cta.primary": "Request a demo",
    "home.hero.cta.secondary": "See how we work",
    "home.hero.badge.title": "Google ecosystem",
    "home.hero.badge.subtitle": "Certified native integration",

    "home.challenge.eyebrow": "The challenge",
    "home.challenge.title": "AI is already in the classroom. The challenge is how to integrate it.",
    "home.challenge.description":
      "Teachers and students are already using AI tools. Yet many institutions still lack a clear framework for adoption. This results in:",
    "home.challenge.item1.title": "Isolated use",
    "home.challenge.item1.text": "Tools adopted without a shared strategy.",
    "home.challenge.item2.title": "Lack of criteria",
    "home.challenge.item2.text": "No pedagogical frameworks guiding usage.",
    "home.challenge.item3.title": "Digital risks",
    "home.challenge.item3.text": "Gaps in digital citizenship and privacy.",
    "home.challenge.item4.title": "Messy platform",
    "home.challenge.item4.text": "Workspace and Classroom are there, but they are hard to organize and get value from.",
    "home.challenge.closing": "Transformation is not technological. It is institutional.",

    "home.process.eyebrow": "How we work",
    "home.process.title": "An institutional approach to educational transformation",
    "home.process.subtitle":
      "It's not about adding tools — it's about building a strategy. We accompany every institution through a structured process.",
    "home.process.step1": "Institutional diagnosis",
    "home.process.step1.desc": "We map digital culture, infrastructure, and real team needs.",
    "home.process.step2": "Strategic plan",
    "home.process.step2.desc": "We set goals, milestones, and metrics aligned to your educational project.",
    "home.process.step3": "Role-based training",
    "home.process.step3.desc": "Tailored paths for leadership, teachers, and AI champions.",
    "home.process.step4": "Classroom integration",
    "home.process.step4.desc": "AI and Workspace embedded into concrete teaching practices.",
    "home.process.step5": "Digital policies",
    "home.process.step5.desc": "Clear protocols for responsible use, citizenship, and data.",
    "home.process.step6": "Tracking & impact",
    "home.process.step6.desc": "We measure outcomes and refine the strategy cycle by cycle.",

    "home.metrics.title": "Experience and scale across Latin America",
    "home.metrics.m1.value": "+2,900",
    "home.metrics.m1.label": "Institutions in 5 countries",
    "home.metrics.m2.value": "+10M",
    "home.metrics.m2.label": "Users reached",
    "home.metrics.m3.value": ">80%",
    "home.metrics.m3.label": "Satisfaction with our solutions",

    "home.pillars.eyebrow": "Programs and platforms",
    "home.pillars.title": "Four pillars that make transformation real",
    "home.pillars.subtitle":
      "Modular solutions designed for every stage of institutional digital maturity.",
    "home.pillars.p1.tag": "PAIDEIA",
    "home.pillars.p1.title": "Continuous training",
    "home.pillars.p1.text":
      "Learning paths to rethink teaching and accelerate innovation across leaders, IT, teachers, families, and students.",
    "home.pillars.p1.cta": "View programs",
    "home.pillars.p2.tag": "OctoLearn",
    "home.pillars.p2.title": "Educational technology",
    "home.pillars.p2.text":
      "Integrated ecosystem: LMS, CMS, data management, and specialized modules with native Google Workspace integration.",
    "home.pillars.p2.cta": "Explore platform",
    "home.pillars.p3.tag": "HumanIA",
    "home.pillars.p3.title": "Collaborative environments",
    "home.pillars.p3.text":
      "Corporate training for companies, municipalities, and organizations that need applied digital competencies.",
    "home.pillars.p3.cta": "See proposal",
    "home.pillars.p4.tag": "Google Workspace",
    "home.pillars.p4.title": "Platform management",
    "home.pillars.p4.text":
      "We organize, configure and administer Google Workspace and Classroom, with ongoing technical support for the school.",
    "home.pillars.p4.cta": "See services",
    "home.pillars.p4.detail.title": "Your Workspace, organized and in use",
    "home.pillars.p4.detail.intro":
      "Many institutions already have Google Workspace for Education but struggle to administer it and standardize its use. We take over the management so the team can focus on teaching.",
    "home.pillars.p4.detail.lead": "What we solve:",
    "home.pillars.p4.detail.r1": "Organized console and organizational units.",
    "home.pillars.p4.detail.r2": "Institutional email for students and staff.",
    "home.pillars.p4.detail.r3": "Storage and quotas under control.",
    "home.pillars.p4.detail.r4": "Onboarding, offboarding and licenses without friction.",
    "home.pillars.p4.detail.r5": "Classroom standardized across the school.",
    "home.pillars.p4.detail.r6": "Security, audits and IT team training.",
    "home.pillars.more": "Read more",
    "home.pillars.less": "Show less",

    "home.pillars.p1.detail.title": "Learning paths to transform education",
    "home.pillars.p1.detail.intro":
      "We believe educational experiences can transform learning and prepare institutions for what's next. We offer content, workshops and programs to integrate digital competencies, new technologies and pedagogical strategies, adapted to every context.",
    "home.pillars.p1.detail.lead": "Our learning paths are designed for:",
    "home.pillars.p1.detail.r1": "Leaders: champions of innovation aligned with today's demands.",
    "home.pillars.p1.detail.r2": "Administrators: teams that optimize school management with digital tools.",
    "home.pillars.p1.detail.r3": "IT staff: professionals who keep digital platforms integrated and running.",
    "home.pillars.p1.detail.r4": "Educators: teachers who refine their craft with dynamic, tech-enabled methodologies.",
    "home.pillars.p1.detail.r5": "Families: key actors in shaping responsible digital habits.",
    "home.pillars.p1.detail.r6": "Students: programs like Startup at School and Alumno Tutor, where they develop critical digital skills, creativity and peer leadership.",

    "home.pillars.p2.detail.title": "Educational technology that transforms",
    "home.pillars.p2.detail.intro":
      "More than a platform — an integrated educational ecosystem that connects management, communication and learning in one place, combining advanced technology, flexibility and personalization.",
    "home.pillars.p2.detail.lead": "Our technology stack:",
    "home.pillars.p2.detail.r1": "LMS: intuitive management for hybrid, online and in-person environments.",
    "home.pillars.p2.detail.r2": "CMS: efficient and accessible organization of educational content.",
    "home.pillars.p2.detail.r3": "Data management: centralization and intelligent analysis for sound decisions.",
    "home.pillars.p2.detail.r4": "Google Workspace integration: real-time communication, automated assessments and cloud security.",
    "home.pillars.p2.detail.r5": "Specialized modules (ESP, EMS, learning & certification, communication) to optimize processes.",
    "home.pillars.p2.detail.r6": "Friendly interface, automated reports and full mobile accessibility.",

    "home.pillars.p3.detail.title": "Training for companies and organizations",
    "home.pillars.p3.detail.intro":
      "Learning is not limited to the classroom. We design corporate training programs for companies, municipalities and organizations seeking continuous improvement of their teams in dynamic work environments.",
    "home.pillars.p3.detail.lead": "Our solutions are designed for:",
    "home.pillars.p3.detail.r1": "Executives & business leaders: leadership, strategic decisions and tech adoption.",
    "home.pillars.p3.detail.r2": "Administrators: digital tools to optimize processes and information.",
    "home.pillars.p3.detail.r3": "Corporate and government staff: digital competencies, communication and teamwork.",
    "home.pillars.p3.detail.r4": "Cross-functional contributors: tailored learning paths by need.",
    "home.pillars.p3.detail.r5": "Digital literacy and applied skills focused on productivity and innovation.",
    "home.pillars.p3.detail.r6": "Customizable programs, continuous learning and expert guidance.",

    "sol.intro.text":
      "Glex Ed is a leading EdTech in Latin America, already serving +2,900 institutions and over 10 million users across 5 countries. We work as an official Google for Education partner.",

    "sol.howwework.eyebrow": "How we work",
    "sol.howwework.title": "From strategy to real implementation",
    "sol.howwework.text":
      "From the classroom to the cloud, we provide an infrastructure designed to connect, learn and lead. Our hybrid format eases learning management and supports institutions through digital transformation, with ongoing training and pedagogical & technical support that ensure positive impact.",
    "sol.howwework.s1": "Institutional diagnosis",
    "sol.howwework.s2": "Plan design",
    "sol.howwework.s3": "Role-based training",
    "sol.howwework.s4": "Real-context application",
    "sol.howwework.s5": "Impact evaluation",

    "home.clients.eyebrow": "Trusted by",
    "home.clients.title": "We work alongside the leaders of the educational ecosystem",

    "home.closing.title": "Every institution has its own starting point",
    "home.closing.text":
      "We help you define the right path for your context. We accompany institutions implementing AI and digital culture with programs tailored to each reality.",
    "home.closing.cta": "Request a free demo",

    "footer.campus.title": "Ready for Glex Campus?",
    "footer.campus.text":
      "Continuous training platform for school leaders, teachers, and students.",
    "footer.campus.cta": "Enter Campus",
    "footer.contact.title": "Let's talk about your institution",
    "footer.contact.text":
      "Tell us what you need and we'll get back to you within 24 business hours.",

    "footer.tagline":
      "Real educational transformation for the institutions of Latin America.",
    "footer.col.solutions": "Solutions",
    "footer.col.resources": "Company",
    "footer.col.contact": "Headquarters",
    "footer.address": "Buenos Aires, Argentina",
    "footer.partner": "Official Google for Education Partner",
    "footer.rights": "All rights reserved.",
    "footer.privacy": "Privacy",
    "footer.terms": "Terms",

    "sol.eyebrow": "Integrated solutions",
    "sol.title": "From strategy to real implementation",
    "sol.subtitle":
      "Programs designed to implement — not just to train. From diagnosis to measurable impact.",
    "sol.programs.title": "Pedagogical programs",
    "sol.programs.paideia.title": "PAIDEIA",
    "sol.programs.paideia.text":
      "Integrated program to incorporate AI in education, aligned with pedagogical and regulatory frameworks.",
    "sol.programs.agenda.title": "Agenda 2026",
    "sol.programs.agenda.text":
      "Annual institutional accompaniment for educational transformation focused on AI, digital culture, and change management.",
    "sol.programs.humania.title": "HumanIA",
    "sol.programs.humania.text":
      "Development of digital culture, citizenship, and critical thinking in the use of technologies.",
    "sol.programs.students.title": "Programs for students",
    "sol.programs.sas.title": "Startup at School",
    "sol.programs.sas.text":
      "Students build a startup from the idea to the final pitch in front of a jury of industry leaders. For secondary school, March to September, with an in person closing event.",
    "sol.programs.sas.result":
      "2026 edition: more than 80 students, closing event at Universidad Torcuato Di Tella. 2025 edition: nearly 100 students, closing event at the Buenos Aires Innovation Park.",
    "sol.programs.tutor.title": "Alumno Tutor",
    "sol.programs.tutor.text":
      "Students trained as digital tutors who support classmates, teachers and families in the responsible use of technology. Junior (ages 10+) and Teens (ages 13+) versions, with a certificate issued by Google.",
    "sol.programs.gallery.caption": "Startup at School, 2025 and 2026 editions",

    "sol.workspace.eyebrow": "Google Workspace for Education",
    "sol.workspace.title": "You already have the tools. We help you manage them.",
    "sol.workspace.subtitle":
      "As an official Google for Education partner, we organize, configure and administer Google Workspace and Classroom so your school gets real value from them, with ongoing technical support.",
    "sol.workspace.i1": "Organized admin console and organizational units",
    "sol.workspace.i2": "Institutional email for students and staff",
    "sol.workspace.i3": "Storage and quota management",
    "sol.workspace.i4": "Onboarding, offboarding and licenses handled without friction",
    "sol.workspace.i5": "Google Classroom standardized across the whole school",
    "sol.workspace.i6": "Security, privacy and console audits, with training for the IT team",
    "sol.workspace.note":
      "We also manage the licenses your institution needs (Workspace for Education Plus, Gemini and others) and support schools that want to become a Google Reference School.",
    "sol.workspace.cta": "Let's talk about your Workspace",
    "sol.tech.title": "Educational technology",
    "sol.tech.octoclass.title": "OctoClass",
    "sol.tech.octoclass.text":
      "Classroom management platform that lets teachers supervise, guide, and amplify the use of devices and digital content in real time.",
    "sol.tech.octoclass.v1": "Control and visibility of the digital classroom",
    "sol.tech.octoclass.v2": "Live pedagogical accompaniment",
    "sol.tech.octoclass.v3": "Better focus and class dynamics",
    "sol.tech.octolearn.title": "OctoLearn",
    "sol.tech.octolearn.text":
      "Learning and management ecosystem integrating content, data, and communication in a single platform.",
    "sol.tech.octolearn.v1": "Information centralization",
    "sol.tech.octolearn.v2": "Learning tracking",
    "sol.tech.octolearn.v3": "Google Workspace integration",
    "sol.cta.title": "Ready to transform your institution?",
    "sol.cta.text":
      "Send us your details and we'll help you design a tailored digital education plan.",

    "sol.maestria.eyebrow": "MaestrIA × PAIDEIA",
    "sol.maestria.title": "Collections by educational level",
    "sol.maestria.subtitle":
      "Curated MaestrIA learning paths inside the PAIDEIA program, designed to accompany teachers at every stage of the school system.",
    "sol.maestria.c1.title": "Early Childhood",
    "sol.maestria.c1.text":
      "AI applied to early childhood: early literacy, play, storytelling, and lesson planning.",
    "sol.maestria.c2.title": "Primary School",
    "sol.maestria.c2.text":
      "Integrating AI into language, math, science, and interdisciplinary projects.",
    "sol.maestria.c3.title": "Lower Secondary",
    "sol.maestria.c3.text":
      "Critical thinking and digital citizenship with AI, authentic assessment, and activity design.",
    "sol.maestria.c4.title": "Upper Secondary",
    "sol.maestria.c4.text":
      "AI applied to specializations and the world of work: advanced prompting, ethics, and applied projects.",

    "aud.eyebrow": "Audiences",
    "aud.title": "Every institution and role faces different challenges",
    "aud.subtitle":
      "We work with the public and private sectors, adapting our tools and strategies to each organization.",
    "aud.a1.title": "Educational institutions",
    "aud.a1.text":
      "Pre-schools, primary, and secondary schools that want to integrate technology into learning.",
    "aud.a2.title": "Teachers",
    "aud.a2.text":
      "Professionals committed to improving their pedagogical practice and developing digital competencies.",
    "aud.a3.title": "IT teams",
    "aud.a3.text":
      "Technology leaders who deploy and maintain educational platforms. We support them in managing Google Workspace and Classroom, with ongoing technical support.",
    "aud.a4.title": "Students",
    "aud.a4.text":
      "Young people developing critical digital competencies, creativity and collaboration, through programs like Startup at School and Alumno Tutor.",
    "aud.a5.title": "Families",
    "aud.a5.text":
      "Protagonists in shaping responsible and ethical digital habits.",
    "aud.a6.title": "Universities",
    "aud.a6.text":
      "Higher education institutions innovating their academic models and integrating AI into their formative offer.",
    "aud.a7.title": "Companies",
    "aud.a7.text":
      "Corporate training programs to upskill teams in dynamic work environments.",
    "aud.a8.title": "Governments & cities",
    "aud.a8.text":
      "Solutions to strengthen digital competencies in public sector teams.",

    "ct.eyebrow": "Contact",
    "ct.title": "Let's talk about your institution's next step",
    "ct.subtitle":
      "Tell us about your context and a specialist will get in touch within 48 hours.",
    "ct.form.name": "Full name",
    "ct.form.email": "Email",
    "ct.form.organization": "Institution",
    "ct.form.role": "Role",
    "ct.form.country": "Country",
    "ct.form.message": "What do you need to solve?",
    "ct.form.submit": "Send inquiry",
    "ct.form.sending": "Sending…",
    "ct.form.success.title": "We received your inquiry!",
    "ct.form.success.text": "We'll get back to you very soon.",
    "ct.form.error": "We couldn't send your inquiry. Please try again.",
    "ct.form.consent": "I accept the privacy policy and consent to the processing of my personal data so Glex Ed can contact me.",
    "ct.info.email": "Email",
    "ct.info.location": "Location",

    "campus.title": "Glex Ed Campus",
    "campus.subtitle":
      "Continuous training platform for school leaders, teachers, and students.",
    "campus.open": "Open in new tab",
    "campus.card.eyebrow": "Platform access",
    "campus.card.title": "Your continuous learning space",
    "campus.card.subtitle":
      "Take courses, download materials and earn your certification in one place, at your own pace.",
  },
};
