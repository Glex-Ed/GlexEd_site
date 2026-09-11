import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { Mail, MapPin, CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { submitLead } from "@/lib/leads.functions";
import { trackFormSubmit } from "@/lib/analytics";
import { SectionGraphic } from "@/components/SectionGraphic";
import paperPlaneGraphic from "@/assets/graphics/contacto-paperplane.png";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Glex Ed" },
      {
        name: "description",
        content:
          "Contactá a Glex Ed para implementar IA y transformación digital en tu institución educativa. Respondemos en menos de 48 horas.",
      },
      { property: "og:title", content: "Contacto — Glex Ed" },
      { property: "og:description", content: "Hablemos del próximo paso de tu institución." },
      { property: "og:url", content: "/contacto" },
    ],
    links: [{ rel: "canonical", href: "/contacto" }],
  }),
  component: Contacto,
});

function Contacto() {
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
      country: String(fd.get("country") || ""),
      message: String(fd.get("message") || ""),
      website: String(fd.get("website") || ""),
      consent: fd.get("consent") === "on",
      elapsedMs: Date.now() - renderedAt,
      source: "website-contact",
    } as const;
    setSubmitting(true);
    try {
      const res = await submit({ data });
      if (res.ok) {
        setDone(true);
        trackFormSubmit("contact", "success", "website-contact");
        toast.success(t("ct.form.success.title"));
      } else {
        trackFormSubmit("contact", "error", "website-contact");
        toast.error(res.error ?? t("ct.form.error"));
      }
    } catch (err) {
      console.error(err);
      trackFormSubmit("contact", "error", "website-contact");
      toast.error(t("ct.form.error"));
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-lavender">
      <SectionGraphic
        src={paperPlaneGraphic}
        alt=""
        position="right"
        size="sm"
        hideOnMobile
        className="pointer-events-none absolute -top-2 right-2 z-30 opacity-90 md:right-8 md:top-4"
      />
      <div className="container-page relative z-10 pt-6 pb-8 md:pt-8 md:pb-10">
      <div className="mx-auto grid max-w-5xl gap-4 lg:grid-cols-2 lg:gap-8">
        <div>
          <span className="pill-date mb-2">{t("ct.eyebrow")}</span>
          <h1 className="mb-2 font-display text-2xl font-black uppercase leading-[1.05] tracking-tight text-balance text-brand-navy md:text-3xl">
            {t("ct.title").split(" ").slice(0, -1).join(" ")}{" "}
            <span className="font-serif text-[1.2em] font-normal italic normal-case tracking-tight text-violet-gradient">
              {t("ct.title").split(" ").slice(-1)[0]}
            </span>
          </h1>
          <p className="mb-4 max-w-md text-sm text-brand-navy/65">{t("ct.subtitle")}</p>

          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-google-blue/10">
                <Mail className="h-4 w-4 text-google-blue" />
              </span>
              <div>
                <p className="text-[0.65rem] font-bold uppercase tracking-wider text-brand-gray">
                  {t("ct.info.email")}
                </p>
                <a href="mailto:contacto@glex-ed.com" className="inline-flex min-h-11 items-center text-sm font-medium hover:text-google-blue md:min-h-0">
                  contacto@glex-ed.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-google-green/10">
                <MapPin className="h-4 w-4 text-google-green" />
              </span>
              <div>
                <p className="text-[0.65rem] font-bold uppercase tracking-wider text-brand-gray">
                  {t("ct.info.location")}
                </p>
                <p className="text-sm font-medium">{t("footer.address")}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-brand-navy/10 bg-white p-4 shadow-[0_30px_80px_-50px_oklch(0.45_0.2_295/0.4)] md:p-5">
          {done ? (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <CheckCircle2 className="mb-3 h-12 w-12 text-google-green" />
              <h2 className="mb-2 font-display text-xl font-bold">{t("ct.form.success.title")}</h2>
              <p className="text-sm text-brand-gray">{t("ct.form.success.text")}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-2.5">
              {/* Honeypot */}
              <div aria-hidden="true" className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden">
                <label htmlFor="contact-website">Website</label>
                <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
              </div>
              <Field name="name" label={t("ct.form.name")} required minLength={2} maxLength={120} />
              <Field name="email" label={t("ct.form.email")} type="email" required maxLength={255} />
              <div className="grid gap-2.5 md:grid-cols-2">
                <Field name="organization" label={t("ct.form.organization")} maxLength={200} />
                <Field name="role" label={t("ct.form.role")} maxLength={120} />
              </div>
              <Field name="country" label={t("ct.form.country")} maxLength={80} />
              <div>
                <label htmlFor="message" className="mb-1 block text-sm font-semibold">
                  {t("ct.form.message")} <span className="text-google-red">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  minLength={10}
                  maxLength={2000}
                  rows={2}
                   className="w-full rounded-lg border border-border bg-background px-3 py-2 text-base transition-colors focus:border-google-blue focus:outline-none focus:ring-2 focus:ring-google-blue/20 md:text-sm"
                />
              </div>
              <label className="flex items-start gap-3 text-sm text-brand-gray">
                <input
                  type="checkbox"
                  name="consent"
                  required
                  className="mt-1 h-4 w-4 shrink-0 rounded border border-border accent-google-blue"
                />
                <span>
                  {t("ct.form.consent")} <span className="text-google-red">*</span>
                </span>
              </label>
              <button
                type="submit"
                disabled={submitting}
                 className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-google-blue px-5 py-2.5 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-google-blue/25 disabled:opacity-60"
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    {t("ct.form.sending")}
                  </>
                ) : (
                  t("ct.form.submit")
                )}
              </button>
            </form>
          )}
        </div>
      </div>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
  minLength,
  maxLength,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1 block text-sm font-semibold">
        {label} {required && <span className="text-google-red">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
         className="w-full rounded-lg border border-border bg-background px-3 py-2 text-base transition-colors focus:border-google-blue focus:outline-none focus:ring-2 focus:ring-google-blue/20 md:text-sm"
      />
    </div>
  );
}
