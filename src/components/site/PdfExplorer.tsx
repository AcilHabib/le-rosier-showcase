import { useTranslation } from "react-i18next";
import { useState } from "react";
import { FileText, ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { pdfDocuments, type PdfDocument } from "@/lib/data/residence";
import { Reveal } from "./Reveal";

export function PdfExplorer() {
  const { t } = useTranslation();
  const [active, setActive] = useState<PdfDocument | null>(null);

  return (
    <section className="container-luxury py-24">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.32em] text-primary/70">
          {t("residence.docs.title")}
        </p>
        <h2 className="font-display mt-3 text-3xl md:text-5xl text-balance">
          {t("residence.docs.title")}
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">{t("residence.docs.subtitle")}</p>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {pdfDocuments.map((doc, i) => (
          <Reveal key={doc.id} delay={i * 0.05}>
            <button
              onClick={() => setActive(doc)}
              className="group relative flex h-full w-full flex-col items-start gap-4 overflow-hidden rounded-2xl border border-border/70 bg-card p-6 text-start transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                <FileText className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-xl text-foreground">
                  {t(`residence.docs.items.${doc.i18nKey}`)}
                </p>
                <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  PDF · {t("residence.docs.open")}
                </p>
              </div>
              <span className="mt-auto inline-flex items-center gap-1.5 text-sm text-primary">
                {t("residence.docs.open")}
                <ExternalLink className="h-3.5 w-3.5" />
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-5xl">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">
              {active && t(`residence.docs.items.${active.i18nKey}`)}
            </DialogTitle>
          </DialogHeader>
          <div className="aspect-[4/3] w-full overflow-hidden rounded-lg border border-border bg-muted">
            {active?.url ? (
              <iframe src={active.url} title={active.id} className="h-full w-full" />
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center">
                <FileText className="h-10 w-10 text-muted-foreground" />
                <p className="font-display text-xl">{t("residence.docs.soon")}</p>
                <p className="max-w-md text-sm text-muted-foreground">
                  {t("residence.docs.subtitle")}
                </p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
