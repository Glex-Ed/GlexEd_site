import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Linkedin, Instagram, Youtube, Loader2, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { Logo } from "./Logo";
import { submitLead } from "@/lib/leads.functions";
import { trackFormSubmit } from "@/lib/analytics";

function CompactContactForm() {
  const { t } = useI18n();
  const submit = useServerFn(submitLead);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [renderedAt] = useState(() => Date.now());

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      organization: String(fd.get("organization") || ""),
      role: String(fd.get("role") || ""),
      country: "",
      message: String(fd.get("message") || ""),
      website: String(fd.get("website") || ""),
      consent: true,
      elapsedMs: Date.now() - renderedAt,
      source: "footer-compact",
    } as const;
    setSubmitting(true);
    try {
      const res = await submit({ data });
      if (res.ok) {
        setDone(true);
        trackFormSubmit("demo_request", "success", "footer-compact");
        toast.success(t("ct.form.success.title"));
      } else {
        trackFormSubmit("demo_request", "error", "footer-compact");
        toast.error(res.error ?? t("ct.form.error"));
      }
    } catch (err) {
      console.error(err);
      trackFormSubmit("demo_request", "error", "footer-compact");
      toast.error(t("ct.form.error"));
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <div className="flex items-center gap-3 rounded-2xl bg-white/70 px-5 py-4 text-brand-navy backdrop-blur">
        <CheckCircle2 className="h-5 w-5 text-brand-purple" />
        <span className="text-sm font-semibold">{t("ct.form.success.title")}</span>
      </div>
    );
  }

  const inputCls =
    "w-full rounded-xl border border-brand-navy/10 bg-white/80 px-4 py-3 text-base text-brand-navy placeholder:text-brand-navy/40 backdrop-blur transition-colors focus:border-brand-purple focus:outline-none focus:ring-2 focus:ring-brand-purple/20 md:text-sm";

  return (
    <form onSubmit={handleSubmit} className="space-y-3 text-left">
      <div aria-hidden="true" className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="footer-website">Website</label>
        <input id="footer-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <input
          name="name"
          required
          minLength={2}
          maxLength={120}
          placeholder={t("ct.form.name")}
          className={inputCls}
          aria-label={t("ct.form.name")}
        />
        <input
          name="email"
          type="email"
          required
          maxLength={255}
          placeholder={t("ct.form.email")}
          className={inputCls}
          aria-label={t("ct.form.email")}
        />
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <input
          name="role"
          maxLength={120}
          placeholder={t("ct.form.role")}
          className={inputCls}
          aria-label={t("ct.form.role")}
        />
        <input
          name="organization"
          maxLength={200}
          placeholder={t("ct.form.organization")}
          className={inputCls}
          aria-label={t("ct.form.organization")}
        />
      </div>
      <textarea
        name="message"
        required
        minLength={10}
        maxLength={2000}
        rows={3}
        placeholder={t("ct.form.message")}
        className={inputCls}
        aria-label={t("ct.form.message")}
      />
      <motion.button
        type="submit"
        disabled={submitting}
        whileHover={submitting ? undefined : { scale: 1.02, y: -1 }}
        whileTap={submitting ? undefined : { scale: 0.98 }}
        transition={{ type: "spring", stiffness: 380, damping: 22 }}
        className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-brand-navy px-6 py-3 text-sm font-extrabold uppercase tracking-[0.08em] text-white shadow-[0_14px_30px_-12px_oklch(0.27_0.13_268/0.45)] disabled:opacity-60 md:w-auto"
      >
        {submitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            {t("ct.form.sending")}
          </>
        ) : (
          <>
            {t("ct.form.submit")} <ArrowRight className="h-4 w-4" />
          </>
        )}
      </motion.button>
    </form>
  );
}

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();
  const { pathname } = useLocation();
  const showCompactContact = pathname !== "/contacto" && pathname !== "/campus";

  return (
    <footer className="relative overflow-hidden bg-gradient-lavender pt-16 pb-18 text-brand-navy md:pt-20 md:pb-10">
      <div aria-hidden className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-brand-magenta/15 blur-[120px]" />
      <div aria-hidden className="absolute -bottom-32 right-[10%] h-[360px] w-[360px] rounded-full bg-brand-yellow/20 blur-[120px]" />

      <div className="container-page relative">
        {/* Compact contact block */}
        {showCompactContact && (
        <div className="mb-12 grid gap-8 rounded-3xl border border-brand-navy/10 bg-white/40 p-6 backdrop-blur md:mb-16 md:grid-cols-2 md:gap-10 md:p-10">
          <div>
            <span className="pill-date mb-4">{t("nav.contact")}</span>
            <h2 className="font-display text-3xl font-black uppercase leading-[1.05] tracking-tight md:text-4xl">
              {t("footer.contact.title").split(" ").slice(0, -1).join(" ")}{" "}
              <span className="font-serif text-[1.15em] font-normal italic normal-case tracking-tight text-violet-gradient">
                {t("footer.contact.title").split(" ").slice(-1)[0]}
              </span>
            </h2>
            <p className="mt-3 max-w-md text-base text-brand-navy/70">
              {t("footer.contact.text")}
            </p>
          </div>
          <CompactContactForm />
        </div>
        )}

        <div className="mb-12 grid gap-10 grid-cols-2 md:grid-cols-4">
          <div>
            <Link to="/" aria-label="Glex Ed — Inicio" className="mb-5 inline-flex min-h-11 items-center md:min-h-0">
              <Logo size={32} />
            </Link>
            <p className="mb-5 text-sm leading-relaxed text-brand-navy/65">{t("footer.tagline")}</p>
            <div className="flex gap-2.5">
              <a
                href="https://www.linkedin.com/company/glex-ed/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                 className="grid h-11 w-11 place-items-center rounded-full border border-brand-navy/15 bg-white/60 text-brand-navy transition-colors hover:bg-brand-magenta hover:border-brand-magenta hover:text-white md:h-9 md:w-9"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/glex_ed/?hl=es-la"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                 className="grid h-11 w-11 place-items-center rounded-full border border-brand-navy/15 bg-white/60 text-brand-navy transition-colors hover:bg-brand-magenta hover:border-brand-magenta hover:text-white md:h-9 md:w-9"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.youtube.com/@Glex_Ed"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                 className="grid h-11 w-11 place-items-center rounded-full border border-brand-navy/15 bg-white/60 text-brand-navy transition-colors hover:bg-brand-magenta hover:border-brand-magenta hover:text-white md:h-9 md:w-9"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-[10px] font-extrabold uppercase tracking-[0.2em] text-brand-purple">
              {t("footer.col.solutions")}
            </h3>
            <ul className="space-y-2.5 text-sm text-brand-navy/70">
              <li><Link to="/soluciones" className="inline-flex min-h-11 items-center hover:text-brand-navy md:min-h-0">PAIDEIA</Link></li>
              <li><Link to="/soluciones" className="inline-flex min-h-11 items-center hover:text-brand-navy md:min-h-0">Agenda 2026</Link></li>
              <li><Link to="/soluciones" className="inline-flex min-h-11 items-center hover:text-brand-navy md:min-h-0">HumanIA</Link></li>
              <li><Link to="/soluciones" className="inline-flex min-h-11 items-center hover:text-brand-navy md:min-h-0">OctoClass</Link></li>
              <li><Link to="/soluciones" className="inline-flex min-h-11 items-center hover:text-brand-navy md:min-h-0">OctoLearn</Link></li>
              <li><Link to="/soluciones" hash="workspace" className="inline-flex min-h-11 items-center hover:text-brand-navy md:min-h-0">Google Workspace</Link></li>
              <li><Link to="/soluciones" hash="programas" className="inline-flex min-h-11 items-center hover:text-brand-navy md:min-h-0">Startup at School</Link></li>
              <li><Link to="/soluciones" hash="programas" className="inline-flex min-h-11 items-center hover:text-brand-navy md:min-h-0">Alumno Tutor</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[10px] font-extrabold uppercase tracking-[0.2em] text-brand-purple">
              {t("footer.col.resources")}
            </h3>
            <ul className="space-y-2.5 text-sm text-brand-navy/70">
              <li><Link to="/audiencias" className="inline-flex min-h-11 items-center hover:text-brand-navy md:min-h-0">{t("nav.audiences")}</Link></li>
              <li><Link to="/contacto" className="inline-flex min-h-11 items-center hover:text-brand-navy md:min-h-0">{t("nav.contact")}</Link></li>
              <li><Link to="/campus" className="inline-flex min-h-11 items-center hover:text-brand-navy md:min-h-0">{t("nav.campus")}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[10px] font-extrabold uppercase tracking-[0.2em] text-brand-purple">
              {t("footer.col.contact")}
            </h3>
            <p className="text-sm leading-relaxed text-brand-navy/70">
              {t("footer.address")}
              <br />
              <span className="text-brand-navy/50">{t("footer.partner")}</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-brand-navy/10 pt-6 text-[11px] uppercase tracking-[0.18em] text-brand-navy/55 md:flex-row">
          <span>© {year} Glex Ed. {t("footer.rights")}</span>
          <div className="flex gap-8">
            <a href="#" className="inline-flex min-h-11 items-center hover:text-brand-navy md:min-h-0">{t("footer.privacy")}</a>
            <a href="#" className="inline-flex min-h-11 items-center hover:text-brand-navy md:min-h-0">{t("footer.terms")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
