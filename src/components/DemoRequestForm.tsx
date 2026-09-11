import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { CheckCircle2, Loader2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { submitLead } from "@/lib/leads.functions";
import { trackFormSubmit } from "@/lib/analytics";

interface Props {
  source?: string;
  variant?: "light" | "dark";
}

export function DemoRequestForm({ source = "soluciones-demo", variant = "light" }: Props) {
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
      source,
    } as const;
    setSubmitting(true);
    try {
      const res = await submit({ data });
      if (res.ok) {
        setDone(true);
        trackFormSubmit("demo_request", "success", source);
        toast.success(t("ct.form.success.title"));
      } else {
        trackFormSubmit("demo_request", "error", source);
        toast.error(res.error ?? t("ct.form.error"));
      }
    } catch (err) {
      console.error(err);
      trackFormSubmit("demo_request", "error", source);
      toast.error(t("ct.form.error"));
    } finally {
      setSubmitting(false);
    }
  }

  const isDark = variant === "dark";
  const inputCls = isDark
    ? "w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 transition-colors focus:border-white focus:outline-none focus:ring-2 focus:ring-white/30"
    : "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm transition-colors focus:border-google-blue focus:outline-none focus:ring-2 focus:ring-google-blue/20";
  const labelCls = isDark
    ? "mb-2 block text-sm font-semibold text-white"
    : "mb-2 block text-sm font-semibold";
  const requiredMark = isDark ? "text-white" : "text-google-red";

  if (done) {
    return (
      <div className={`flex flex-col items-center justify-center py-10 text-center ${isDark ? "text-white" : ""}`}>
        <CheckCircle2 className={`mb-4 h-12 w-12 ${isDark ? "text-white" : "text-google-green"}`} />
        <h3 className="mb-2 font-display text-2xl font-bold">{t("ct.form.success.title")}</h3>
        <p className={isDark ? "text-white/80" : "text-brand-gray"}>{t("ct.form.success.text")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      {/* Honeypot field — hidden from users, bots fill it */}
      <div aria-hidden="true" className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="demo-website">Website</label>
        <input id="demo-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="demo-name" className={labelCls}>
            {t("ct.form.name")} <span className={requiredMark}>*</span>
          </label>
          <input id="demo-name" name="name" required minLength={2} maxLength={120} className={inputCls} />
        </div>
        <div>
          <label htmlFor="demo-email" className={labelCls}>
            {t("ct.form.email")} <span className={requiredMark}>*</span>
          </label>
          <input id="demo-email" name="email" type="email" required maxLength={255} className={inputCls} />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="demo-org" className={labelCls}>{t("ct.form.organization")}</label>
          <input id="demo-org" name="organization" maxLength={200} className={inputCls} />
        </div>
        <div>
          <label htmlFor="demo-role" className={labelCls}>{t("ct.form.role")}</label>
          <input id="demo-role" name="role" maxLength={120} className={inputCls} />
        </div>
      </div>
      <div>
        <label htmlFor="demo-country" className={labelCls}>{t("ct.form.country")}</label>
        <input id="demo-country" name="country" maxLength={80} className={inputCls} />
      </div>
      <div>
        <label htmlFor="demo-message" className={labelCls}>
          {t("ct.form.message")} <span className={requiredMark}>*</span>
        </label>
        <textarea
          id="demo-message"
          name="message"
          required
          minLength={10}
          maxLength={2000}
          rows={4}
          className={inputCls}
        />
      </div>
      <label className={`flex items-start gap-3 text-sm ${isDark ? "text-white/90" : "text-brand-gray"}`}>
        <input
          type="checkbox"
          name="consent"
          required
          className={`mt-1 h-4 w-4 shrink-0 rounded border ${isDark ? "border-white/40 bg-white/10 accent-white" : "border-border accent-google-blue"}`}
        />
        <span>
          {t("ct.form.consent")} <span className={requiredMark}>*</span>
        </span>
      </label>
      <motion.button
        type="submit"
        disabled={submitting}
        whileHover={submitting ? undefined : { scale: 1.02, y: -1 }}
        whileTap={submitting ? undefined : { scale: 0.98 }}
        transition={{ type: "spring", stiffness: 380, damping: 22 }}
        className={
          isDark
            ? "inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 font-bold text-google-blue disabled:opacity-60"
            : "inline-flex w-full items-center justify-center gap-2 rounded-xl bg-google-blue px-7 py-4 font-semibold text-white shadow-md shadow-google-blue/20 disabled:opacity-60"
        }
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
