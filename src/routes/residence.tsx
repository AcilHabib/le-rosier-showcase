import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import {
  MapPin, Home, Building2, Route as RouteIcon, Waves, ArrowUpDown, Car, Sun,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { PdfExplorer } from "@/components/site/PdfExplorer";
import { KuulaTour } from "@/components/site/KuulaTour";
import residence1 from "@/assets/residence-1.png";
import residence2 from "@/assets/residence-2.png";
import residence5 from "@/assets/residence-5.png";

export const Route = createFileRoute("/residence")({
  head: () => ({
    meta: [
      { title: "Résidence Le Rosier — Hamid Immobilier" },
      {
        name: "description",
        content:
          "Résidence Le Rosier : 135 logements, 5 blocs, piscine, parking sous-sol, ascenseur panoramique. Ait Mendil, Beni Ksila, Béjaïa.",
      },
    ],
  }),
  component: ResidencePage,
});

function ResidencePage() {
  const { t } = useTranslation();

  const facts = [
    { icon: MapPin, key: "address" },
    { icon: Home, key: "units" },
    { icon: Building2, key: "blocks" },
    { icon: RouteIcon, key: "road" },
    { icon: Sun, key: "beach" },
    { icon: ArrowUpDown, key: "elevator" },
    { icon: Car, key: "parking" },
    { icon: Waves, key: "pool" },
  ] as const;

  return (
    <>
      <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
        <img src={residence1} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 gradient-overlay" />
        <div className="container-luxury relative z-10 flex h-full flex-col justify-end pb-16">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-white/80">
              Hamid Immobilier
            </p>
            <h1 className="font-display mt-3 text-5xl text-white md:text-7xl text-balance">
              {t("residence.title")}
            </h1>
            <p className="mt-3 max-w-2xl text-white/85">{t("residence.subtitle")}</p>
          </Reveal>
        </div>
      </section>

      {/* Facts */}
      <section className="container-luxury py-24">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map(({ icon: Icon, key }, i) => (
            <Reveal key={key} delay={i * 0.04}>
              <div className="h-full rounded-2xl border border-border/70 bg-card p-6 transition hover:-translate-y-1 hover:shadow-elegant">
                <Icon className="h-6 w-6 text-primary" />
                <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">
                  {t(`residence.facts.${key}.label`)}
                </p>
                <p className="mt-1 font-display text-lg leading-snug">
                  {t(`residence.facts.${key}.value`)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Architecture */}
      <section className="bg-secondary/40 py-24">
        <div className="container-luxury">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.32em] text-primary/70">
              {t("residence.architecture.title")}
            </p>
            <h2 className="font-display mt-3 text-3xl md:text-5xl text-balance">
              {t("residence.architecture.title")}
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {(["ab", "cde"] as const).map((k, i) => (
              <Reveal key={k} delay={i * 0.1}>
                <article className="group relative overflow-hidden rounded-3xl border border-border/70 bg-card shadow-soft">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={k === "ab" ? residence5 : residence1}
                      alt=""
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="font-display text-2xl">
                      {t(`residence.architecture.${k}.title`)}
                    </h3>
                    <ul className="mt-5 space-y-2.5">
                      {(t(`residence.architecture.${k}.items`, { returnObjects: true }) as string[]).map(
                        (it) => (
                          <li key={it} className="flex items-start gap-3 text-sm text-foreground/85">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            {it}
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PdfExplorer />
      <KuulaTour
        embedUrl="https://kuula.co/share/collection/71kyb?logo=1&info=1&fs=1&vr=0&zoom=1&autorotate=-0.08&autop=15&thumbs=1&alpha=0.60&inst=fr"
        fullUrl="https://kuula.co/share/collection/71kyb?logo=1&info=1&fs=1&vr=0&zoom=1&autorotate=-0.08&autop=15&thumbs=1&alpha=0.60&inst=fr"
      />
    </>
  );
}
