import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Logo } from "./Logo";
import { MotionButton } from "./MotionButton";
import { trackCtaClick } from "@/lib/analytics";
import googlePartnerLogo from "@/assets/google-for-education-partner.png";

const NAV_ITEMS = [
  { to: "/", key: "nav.home" },
  { to: "/soluciones", key: "nav.solutions" },
  { to: "/audiencias", key: "nav.audiences" },
  { to: "/campus", key: "nav.campus" },
] as const;

export function Header() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="container-page flex h-20 items-center justify-between gap-4">
        <div className="flex items-center gap-10">
          <Link
            to="/"
            aria-label="Glex Ed — Inicio"
            className="inline-flex min-h-11 items-center text-brand-navy md:min-h-0"
          >
            <Logo size={27} />
          </Link>
          <nav
            aria-label="Principal"
            className="hidden gap-8 text-[12px] font-bold uppercase tracking-[0.14em] text-brand-navy/70 md:flex"
          >
            {NAV_ITEMS.slice(1).map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="relative pb-1 transition-colors hover:text-brand-magenta"
                activeProps={{ className: "text-brand-magenta font-extrabold underline decoration-brand-magenta decoration-2 underline-offset-8" }}
                activeOptions={{ exact: false }}
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <img
            src={googlePartnerLogo}
            alt={t("nav.partner")}
            className="hidden h-12 w-auto lg:block"
            loading="lazy"
          />
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>
          <MotionButton className="hidden md:inline-block">
            <Link
              to="/contacto"
              onClick={() => trackCtaClick("header", "contact", "/contacto")}
              className="inline-flex rounded-full bg-brand-magenta px-5 py-2.5 text-[13px] font-extrabold uppercase tracking-[0.08em] text-white shadow-[0_8px_24px_-8px_oklch(0.44_0.18_335/0.6)] transition-colors hover:bg-brand-navy"
            >
              {t("nav.cta")}
            </Link>
          </MotionButton>
          <button
            type="button"
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-lg border border-border bg-surface md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav aria-label="Móvil" className="container-page flex flex-col gap-1 py-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-bold uppercase tracking-wider text-brand-navy/75 hover:bg-secondary hover:text-brand-magenta"
                activeProps={{ className: "text-brand-magenta font-extrabold bg-secondary underline decoration-brand-magenta decoration-2 underline-offset-4" }}
              >
                {t(item.key)}
              </Link>
            ))}
            <Link
              to="/contacto"
              onClick={() => {
                trackCtaClick("header_mobile", "contact", "/contacto");
                setOpen(false);
              }}
              className="mt-2 rounded-lg bg-brand-magenta px-3 py-3 text-center text-base font-extrabold uppercase tracking-wider text-white"
            >
              {t("nav.cta")}
            </Link>
            <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
              <img
                src={googlePartnerLogo}
                alt={t("nav.partner")}
                className="h-10 w-auto"
                loading="lazy"
              />
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
