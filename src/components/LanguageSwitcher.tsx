import { useI18n } from "@/lib/i18n/I18nProvider";
import type { Locale } from "@/lib/i18n/types";

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();

  return (
    <div
      role="group"
      aria-label="Idioma"
      className="flex items-center gap-1 rounded-full border border-border bg-secondary p-0.5"
    >
      {(["es", "en"] as Locale[]).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLocale(l)}
          aria-pressed={locale === l}
          className={`min-h-11 rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider transition-colors md:min-h-0 ${
            locale === l
              ? "bg-surface text-brand-dark shadow-sm"
              : "text-muted-foreground hover:text-brand-dark"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
