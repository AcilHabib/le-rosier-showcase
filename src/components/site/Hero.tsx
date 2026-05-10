import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, Phone } from "lucide-react";
import img1 from "@/assets/residence-1.png";
import img2 from "@/assets/residence-2.png";
import img3 from "@/assets/residence-3.png";
import img4 from "@/assets/residence-4.png";
import img5 from "@/assets/residence-5.png";
import img6 from "@/assets/residence-6.png";
import img7 from "@/assets/residence-7.png";
import img8 from "@/assets/residence-8.png";
import img9 from "@/assets/residence-9.png";
import img10 from "@/assets/residence-10.png";
import img11 from "@/assets/residence-11.png";
import img12 from "@/assets/residence-12.png";
import img13 from "@/assets/residence-13.png";
import img14 from "@/assets/residence-14.png";
import img15 from "@/assets/residence-15.png";
import img16 from "@/assets/residence-16.png";
import img17 from "@/assets/residence-17.png";
import img18 from "@/assets/residence-18.png";

const SLIDES = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9,
  img10, img11, img12, img13, img14, img15, img16, img17, img18,
];

export function Hero() {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <img
            src={SLIDES[index]}
            alt="Residence Le Rosier"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 gradient-overlay" />

      <div className="container-luxury relative z-10 flex h-full flex-col justify-end pb-20 md:justify-center md:pb-0">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-xs uppercase tracking-[0.4em] text-white/80"
        >
          {t("hero.brand")}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-display mt-4 text-5xl leading-[1.05] text-white md:text-7xl text-balance"
        >
          {t("hero.title")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="mt-6 max-w-2xl text-base text-white/85 md:text-lg text-balance"
        >
          {t("hero.slogan")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <Link
            to="/residence"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-foreground shadow-elegant transition hover:bg-white/95"
          >
            {t("common.discover")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
          </Link>
          <Link
            to="/residence"
            hash="tour"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/20"
          >
            <Play className="h-4 w-4" />
            {t("common.viewTour")}
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            <Phone className="h-4 w-4" />
            {t("common.contactUs")}
          </Link>
        </motion.div>

        <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              aria-label={`Slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-10 bg-white" : "w-4 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
