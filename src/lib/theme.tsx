import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * Reads the initial theme from localStorage (or falls back to "light").
 * The blocking <script> in __root.tsx already sets the correct class on <html>
 * before React mounts, so we just need to keep state in sync here.
 */
function getInitialTheme(): Theme {
  if (typeof window !== "undefined") {
    // Trust whatever the blocking script already applied
    const docClass = document.documentElement.classList;
    if (docClass.contains("dark")) return "dark";
    if (docClass.contains("light")) return "light";

    // Fallback: check localStorage directly
    const saved = localStorage.getItem("tf-theme") as Theme;
    if (saved === "light" || saved === "dark") return saved;
  }
  return "light";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(theme);
    localStorage.setItem("tf-theme", theme);
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const toggleTheme = () => {
    setThemeState((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
