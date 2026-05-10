import { useTranslation } from "react-i18next";
import { Play, ExternalLink } from "lucide-react";
import { Reveal } from "./Reveal";
import residence from "@/assets/residence-1.png";

interface Props {
  embedUrl?: string;
  fullUrl?: string;
}

export function KuulaTour({ embedUrl, fullUrl }: Props) {
  const { t } = useTranslation();

  return (
    <section id="tour" className="container-luxury py-24">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.32em] text-primary/70"></p>
        <h2 className="font-display mt-3 text-3xl md:text-5xl text-balance">
          {t("residence.tour.title")}
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">{t("residence.tour.subtitle")}</p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="relative mt-10 overflow-hidden rounded-3xl border border-border/70 bg-card shadow-elegant">
          <div className="aspect-video w-full">
            {embedUrl ? (
              <iframe
                src={embedUrl}
                title="3D Tour"
                allow="fullscreen; vr; xr-spatial-tracking"
                className="h-full w-full"
              />
            ) : (
              <div className="relative h-full w-full">
                <img
                  src={residence}
                  alt="Residence preview"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/30 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center text-white">
                  <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/15 backdrop-blur-md ring-1 ring-white/30">
                    <Play className="h-6 w-6" />
                  </span>
                  <p className="font-display text-2xl md:text-3xl">{t("residence.tour.title")}</p>
                  <p className="max-w-md text-sm text-white/85">{t("residence.tour.soon")}</p>
                </div>
              </div>
            )}
          </div>

          {fullUrl && (
            <a
              href={fullUrl}
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-5 right-5 inline-flex items-center gap-2 rounded-full bg-white/95 px-5 py-2.5 text-sm font-medium text-foreground shadow-elegant transition hover:bg-white"
            >
              {t("residence.tour.cta")}
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </Reveal>
    </section>
  );
}
