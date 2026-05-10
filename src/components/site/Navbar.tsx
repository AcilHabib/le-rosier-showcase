import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const links = [
    { to: "/", label: t("nav.home") },
    { to: "/about", label: t("nav.about") },
    { to: "/residence", label: t("nav.residence") },
    { to: "/contact", label: t("nav.contact") },
  ] as const;

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-background/85 backdrop-blur-md shadow-soft"
          : "bg-background/40 backdrop-blur-sm"
      }`}
    >
      <div className="container-luxury flex h-20 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Hamid Immobilier" className="h-11 w-11 object-contain" />
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-display text-lg text-foreground">Hamid Immobilier</span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Promotion Immobilière
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="text-sm tracking-wide text-foreground/75 transition-colors hover:text-foreground data-[status=active]:text-foreground data-[status=active]:font-semibold"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <LanguageSwitcher />
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 text-foreground"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur">
          <nav className="container-luxury flex flex-col py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="py-3 text-base text-foreground/80 hover:text-foreground data-[status=active]:font-semibold"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
