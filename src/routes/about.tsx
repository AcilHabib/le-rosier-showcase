import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Sparkles, Building2, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import residence from "@/assets/residence-1.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Qui sommes-nous — Hamid Immobilier" },
      {
        name: "description",
        content:
          "EURL Hamid Immo · Promotion immobilière. Qualité, modernité et confiance pour un investissement durable.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useTranslation();

  const pillars = [
    { icon: Sparkles, key: "quality" },
    { icon: Building2, key: "modernity" },
    { icon: ShieldCheck, key: "trust" },
  ] as const;

  return (
    <>
      <section className="relative h-[55vh] min-h-[380px] w-full overflow-hidden">
        <img src={residence} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 gradient-overlay" />
        <div className="container-luxury relative z-10 flex h-full flex-col justify-end pb-16">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-white/80">
              {t("about.eyebrow")}
            </p>
            <h1 className="font-display mt-3 text-5xl text-white md:text-6xl">
              {t("about.title")}
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="container-luxury py-24 md:py-32">
        <Reveal>
          <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-foreground/85 md:text-xl text-balance">
            {t("about.body")}
          </p>
        </Reveal>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {pillars.map(({ icon: Icon, key }, i) => (
            <Reveal key={key} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-border/70 bg-card p-8 transition hover:-translate-y-1 hover:shadow-elegant">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-display mt-5 text-2xl">
                  {t(`about.pillars.${key}.title`)}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {t(`about.pillars.${key}.desc`)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
