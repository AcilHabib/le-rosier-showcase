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
          "EURL Hamid Immo et Groupe Bouanani · Promotion immobilière, expertise de terrain et investissement en toute confiance.",
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

  const experienceProjects = [
    "ouedGhir125",
    "smina28",
    "ighil198",
    "ighil42",
    "ongoing154",
    "ongoing72",
  ] as const;

  const visionItems = ["comfort", "quality", "location", "investment"] as const;
  const firstProjectItems = ["architecture", "lifestyle", "families", "investment"] as const;
  const reasonItems = ["experience", "mastery", "timing", "guarantee", "support"] as const;

  return (
    <>
      <section className="relative h-[55vh] min-h-[380px] w-full overflow-hidden">
        <img src={residence} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 gradient-overlay" />
        <div className="container-luxury relative z-10 flex h-full flex-col justify-end pb-16">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-white/80">{t("about.eyebrow")}</p>
            <h1 className="font-display mt-3 text-5xl text-white md:text-6xl">
              {t("about.title")}
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="container-luxury py-24 md:py-32">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-lg leading-relaxed text-foreground/85 md:text-xl text-balance">
              {t("about.body")}
            </p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg text-balance">
              {t("about.storyBody")}
            </p>
          </div>
        </Reveal>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {pillars.map(({ icon: Icon, key }, i) => (
            <Reveal key={key} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-border/70 bg-card p-8 transition hover:-translate-y-1 hover:shadow-elegant">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-display mt-5 text-2xl">{t(`about.pillars.${key}.title`)}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {t(`about.pillars.${key}.desc`)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-24 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <div className="rounded-3xl border border-border/70 bg-card p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.32em] text-primary/70">
                {t("about.experience.kicker")}
              </p>
              <h2 className="font-display mt-4 text-3xl md:text-4xl">{t("about.experience.title")}</h2>
              <p className="mt-4 max-w-2xl text-muted-foreground">{t("about.experience.body")}</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {experienceProjects.map((key) => (
                  <div
                    key={key}
                    className="rounded-2xl border border-border/60 bg-background/70 px-5 py-4 text-sm text-foreground/85"
                  >
                    {t(`about.experience.projects.${key}`)}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-3xl bg-secondary/45 p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.32em] text-primary/70">
                {t("about.firstProject.kicker")}
              </p>
              <h2 className="font-display mt-4 text-3xl md:text-4xl">{t("about.firstProject.title")}</h2>
              <p className="mt-4 text-foreground/85">{t("about.firstProject.location")}</p>
              <p className="mt-4 text-muted-foreground">{t("about.firstProject.body")}</p>
              <div className="mt-8 space-y-3">
                {firstProjectItems.map((key) => (
                  <div
                    key={key}
                    className="rounded-2xl border border-border/60 bg-background/80 px-5 py-4 text-sm text-foreground/85"
                  >
                    {t(`about.firstProject.items.${key}`)}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-24 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-3xl border border-border/70 bg-card p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.32em] text-primary/70">
                {t("about.vision.kicker")}
              </p>
              <h2 className="font-display mt-4 text-3xl md:text-4xl">{t("about.vision.title")}</h2>
              <p className="mt-4 text-muted-foreground">{t("about.vision.body")}</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {visionItems.map((key) => (
                  <div
                    key={key}
                    className="rounded-2xl border border-border/60 bg-primary/5 px-5 py-4 text-sm font-medium text-foreground/85"
                  >
                    {t(`about.vision.items.${key}`)}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-3xl border border-border/70 bg-card p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.32em] text-primary/70">
                {t("about.reasons.kicker")}
              </p>
              <h2 className="font-display mt-4 text-3xl md:text-4xl">{t("about.reasons.title")}</h2>
              <div className="mt-8 space-y-3">
                {reasonItems.map((key) => (
                  <div
                    key={key}
                    className="rounded-2xl border border-border/60 bg-background/70 px-5 py-4 text-sm text-foreground/85"
                  >
                    {t(`about.reasons.items.${key}`)}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
