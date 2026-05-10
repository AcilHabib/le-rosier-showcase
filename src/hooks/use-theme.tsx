import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";

export type Theme = "light" | "dark" | "system";

interface ThemeContextValue {
  theme: Theme;
  resolvedTheme: "light" | "dark";
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "system",
  resolvedTheme: "light",
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === "undefined") return "system";
    const stored = localStorage.getItem("theme") as Theme | null;
    return stored === "light" || stored === "dark" || stored === "system" ? stored : "system";
  });

  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light";
    // The inline FOUC script already set the correct class — read it
    return document.documentElement.classList.contains("dark") ? "dark" : "light";
  });

  // Track first mount to skip transition on hydration
  const hydrated = useRef(false);

  useEffect(() => {
    const root = document.documentElement;
    const isFirstMount = !hydrated.current;
    hydrated.current = true;

    function applyDark(isDark: boolean, animate: boolean) {
      if (animate) {
        root.classList.add("theme-transitioning");
        setTimeout(() => root.classList.remove("theme-transitioning"), 500);
      }
      root.classList.toggle("dark", isDark);
      setResolvedTheme(isDark ? "dark" : "light");
    }

    const isDark =
      theme === "dark" ||
      (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

    applyDark(isDark, !isFirstMount);

    if (theme === "system") {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      const handler = (e: MediaQueryListEvent) => applyDark(e.matches, true);
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
    }
  }, [theme]);

  function setTheme(next: Theme) {
    localStorage.setItem("theme", next);
    setThemeState(next);
  }

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
