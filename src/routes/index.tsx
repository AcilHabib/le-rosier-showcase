import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { ArrowRight, Building2, Waves, Car, Trees, ShieldCheck } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { Reveal } from "@/components/site/Reveal";
import residence1 from "@/assets/residence-1.png";
import residence2 from "@/assets/residence-2.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hamid Immobilier — Résidence Le Rosier" },
      {
        name: "description",
        content:
          "Résidence Le Rosier à Ait Mendil, Beni Ksila, Béjaïa. 135 logements, piscine, parking sous-sol, ascenseur panoramique.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const { t } = useTranslation();

  const features = [
    { icon: Building2, key: "units" },
    { icon: Waves, key: "pool" },
    { icon: Car, key: "parking" },
    { icon: Trees, key: "beach" },
    { icon: ShieldCheck, key: "elevator" },
  ] as const;

  return (
    <>
      <Hero />

      {/* Intro */}
      <section className="container-luxury py-24 md:py-32">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.32em] text-primary/70">
              {t("residence.title")}
            </p>
            <h2 className="font-display mt-3 text-4xl md:text-5xl text-balance">
              {t("residence.subtitle")}
            </h2>
            <p className="mt-6 text-muted-foreground text-balance">
              {t("about.body")}
            </p>
            <Link
              to="/residence"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary"
            >
              {t("common.discover")}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative">
              <img
                src={residence1}
                alt="Residence Le Rosier exterior"
                className="rounded-2xl shadow-elegant"
              />
              <img
                src={residence2}
                alt="Residence Le Rosier interior"
                className="absolute -bottom-10 -left-10 hidden w-1/2 rounded-2xl border-4 border-background shadow-elegant md:block rtl:left-auto rtl:-right-10"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Features */}
      <section className="bg-secondary/40 py-24">
        <div className="container-luxury">
          <Reveal>
            <h3 className="font-display text-3xl md:text-4xl text-balance">
              {t("residence.architecture.title")}
            </h3>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {features.map(({ icon: Icon, key }, i) => (
              <Reveal key={key} delay={i * 0.05}>
                <div className="group h-full rounded-2xl border border-border/70 bg-card p-6 transition hover:-translate-y-1 hover:shadow-elegant">
                  <Icon className="h-7 w-7 text-primary" />
                  <p className="mt-4 font-display text-lg">
                    {t(`residence.facts.${key}.label`)}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {t(`residence.facts.${key}.value`)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-luxury py-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-primary px-10 py-16 text-primary-foreground md:px-16 md:py-20">
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
            <div className="relative">
              <h3 className="font-display text-3xl md:text-5xl text-balance">
                {t("hero.title")}
              </h3>
              <p className="mt-4 max-w-xl text-primary-foreground/85">
                {t("hero.slogan")}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/residence"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-foreground transition hover:bg-white/95"
                >
                  {t("common.discover")}
                  <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white hover:bg-white/10"
                >
                  {t("common.contactUs")}
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
