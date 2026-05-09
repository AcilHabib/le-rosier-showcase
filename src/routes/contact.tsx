import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Phone, Facebook, Instagram, MapPin, ExternalLink } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { contacts, socials, mapsLink } from "@/lib/data/residence";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Localisation — Hamid Immobilier" },
      {
        name: "description",
        content:
          "Contactez Hamid Immobilier pour la Résidence Le Rosier. Téléphones, réseaux sociaux et localisation à Ait Mendil, Béjaïa.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useTranslation();

  return (
    <>
      <section className="container-luxury pt-24 pb-12">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.32em] text-primary/70">
            Hamid Immobilier
          </p>
          <h1 className="font-display mt-3 text-4xl md:text-6xl text-balance">
            {t("contact.title")}
          </h1>
          <p className="mt-4 max-w-xl text-muted-foreground">{t("contact.subtitle")}</p>
        </Reveal>
      </section>

      {/* Team contacts */}
      <section className="container-luxury pb-20">
        <Reveal>
          <h2 className="font-display text-2xl text-foreground/80">{t("contact.team")}</h2>
        </Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {contacts.map((c, i) => (
            <Reveal key={c.phone} delay={i * 0.05}>
              <a
                href={`tel:${c.phone}`}
                className="group flex h-full flex-col gap-4 rounded-2xl border border-border/70 bg-card p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                    <Phone className="h-5 w-5" />
                  </span>
                  {c.role && (
                    <span className="rounded-full border border-border/70 px-2.5 py-0.5 text-[10px] uppercase tracking-widest text-muted-foreground">
                      {c.role}
                    </span>
                  )}
                </div>
                <div>
                  <p className="font-display text-xl">{c.name}</p>
                  <p className="mt-1 font-mono text-sm text-primary" dir="ltr">
                    {c.display}
                  </p>
                </div>
                <span className="mt-auto text-xs uppercase tracking-widest text-muted-foreground">
                  {t("common.callNow")}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Socials */}
      <section className="container-luxury pb-24">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-border/70 bg-secondary/40 p-8 md:flex-row md:items-center md:p-12">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-primary/70">
                {t("contact.follow")}
              </p>
              <h3 className="font-display mt-2 text-2xl md:text-3xl">@hamid_immobilier</h3>
            </div>
            <div className="flex gap-3">
              <a
                href={socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-card px-5 py-3 text-sm font-medium shadow-soft hover:bg-background"
              >
                <Facebook className="h-4 w-4 text-primary" /> Facebook
              </a>
              <a
                href={socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-card px-5 py-3 text-sm font-medium shadow-soft hover:bg-background"
              >
                <Instagram className="h-4 w-4 text-primary" /> Instagram
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Map */}
      <section className="container-luxury pb-24">
        <Reveal>
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-primary/70">
                {t("contact.location")}
              </p>
              <h2 className="font-display mt-2 text-3xl md:text-4xl">
                {t("contact.locationDesc")}
              </h2>
            </div>
            <a
              href={mapsLink}
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex items-center gap-2 rounded-full border border-border/70 px-4 py-2 text-sm hover:border-primary/40"
            >
              <MapPin className="h-4 w-4 text-primary" />
              {t("common.viewOnMap")}
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="mt-8 overflow-hidden rounded-3xl border border-border/70 shadow-elegant">
            <div className="aspect-[16/9] w-full bg-muted">
              <iframe
                title="Residence Le Rosier — Ait Mendil"
                src="https://www.google.com/maps?q=Ait+Mendil+Beni+Ksila+Bejaia&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full"
              />
            </div>
          </div>

          <a
            href={mapsLink}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex md:hidden items-center gap-2 text-sm text-primary"
          >
            <MapPin className="h-4 w-4" />
            {t("common.viewOnMap")}
          </a>
        </Reveal>
      </section>
    </>
  );
}
