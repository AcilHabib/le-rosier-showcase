import { useEffect, useRef, useState } from "react";
import { Sun, Moon, Monitor, Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useTheme, type Theme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";

const OPTIONS: { value: Theme; Icon: typeof Sun; labelKey: string }[] = [
  { value: "light", Icon: Sun, labelKey: "theme.light" },
  { value: "dark", Icon: Moon, labelKey: "theme.dark" },
  { value: "system", Icon: Monitor, labelKey: "theme.system" },
];

export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on outside click or Escape
  useEffect(() => {
    if (!open) return;
    function onPointer(e: PointerEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative">
      {/* Trigger button */}
      <button
        aria-label={t("theme.toggle")}
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "relative inline-flex h-9 w-9 items-center justify-center rounded-full",
          "border border-border/70 bg-background/80 backdrop-blur-sm",
          "text-muted-foreground shadow-sm",
          "transition-all duration-200",
          "hover:border-primary/50 hover:bg-accent hover:text-foreground hover:shadow-elegant",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          open && "border-primary/50 bg-accent text-foreground",
        )}
      >
        {/* Sun icon — visible in light mode */}
        <Sun
          className={cn(
            "absolute h-[1.05rem] w-[1.05rem] transition-all duration-300",
            resolvedTheme === "dark"
              ? "scale-50 rotate-90 opacity-0"
              : "scale-100 rotate-0 opacity-100",
          )}
        />
        {/* Moon icon — visible in dark mode */}
        <Moon
          className={cn(
            "absolute h-[1.05rem] w-[1.05rem] transition-all duration-300",
            resolvedTheme === "dark"
              ? "scale-100 rotate-0 opacity-100"
              : "scale-50 -rotate-90 opacity-0",
          )}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          role="menu"
          aria-label={t("theme.toggle")}
          className={cn(
            "absolute top-full mt-2 end-0 z-50 min-w-[11rem]",
            "rounded-2xl border border-border/60",
            "bg-background/95 backdrop-blur-md",
            "shadow-elegant ring-1 ring-border/20",
            "overflow-hidden",
            "animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-150",
          )}
        >
          <div className="p-1.5">
            {OPTIONS.map(({ value, Icon, labelKey }) => {
              const isActive = theme === value;
              return (
                <button
                  key={value}
                  role="menuitem"
                  onClick={() => {
                    setTheme(value);
                    setOpen(false);
                  }}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm",
                    "transition-colors duration-150",
                    isActive
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground",
                  )}
                >
                  <Icon className="h-[1rem] w-[1rem] shrink-0" />
                  <span className="flex-1 text-start">{t(labelKey)}</span>
                  {isActive && (
                    <Check className="ms-auto h-3.5 w-3.5 text-primary shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
