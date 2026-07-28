import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Facebook, Instagram, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
import { contacts, socials } from "@/lib/data/residence";

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-secondary/40">
      <div className="container-luxury grid gap-10 py-16 md:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Hamid Immobilier" className="h-10 w-10 object-contain" />
            <span className="font-display text-lg">Hamid Immobilier</span>
          </div>
          <p className="text-sm text-muted-foreground">{t("footer.tagline")}</p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            {t("footer.nav")}
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-primary">
                {t("nav.home")}
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-primary">
                {t("nav.about")}
              </Link>
            </li>
            <li>
              <Link to="/residence" className="hover:text-primary">
                {t("nav.residence")}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-primary">
                {t("nav.contact")}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            {t("footer.contact")}
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {contacts.slice(0, 3).map((c) => (
              <li key={c.phone} className="flex items-center gap-2 text-foreground/80">
                <Phone className="h-3.5 w-3.5 text-primary" />
                <a href={`tel:${c.phone}`} className="hover:text-primary">
                  {c.display}
                </a>
              </li>
            ))}
            <li className="flex items-start gap-2 text-foreground/80">
              <MapPin className="mt-0.5 h-3.5 w-3.5 text-primary" />
              <span>Ait Mendil — Beni Ksila, Béjaïa</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            {t("footer.follow")}
          </h4>
          <div className="mt-4 flex gap-3">
            <a
              href={socials.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 text-foreground/80 transition hover:border-primary hover:text-primary"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href={socials.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 text-foreground/80 transition hover:border-primary hover:text-primary"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="container-luxury flex flex-col items-center justify-between gap-2 py-6 text-xs text-muted-foreground md:flex-row">
          <p>
            © {year} Hamid Immobilier. {t("footer.rights")}
          </p>
          <div className="flex flex-col items-center gap-1 md:items-end">
            <p>
              {t("footer.realisedBy")}{" "}
              <a
                href="https://algeriamarketiva.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                Algeria Marketiva
              </a>
            </p>
            <p className="font-display tracking-wide">Résidence Le Rosier</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
