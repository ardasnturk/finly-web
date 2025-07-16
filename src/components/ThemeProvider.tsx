import { createContext, useContext, useEffect, useState } from "react";
import { lightTheme, darkTheme, type Theme } from "../themes";

type ThemeContextType = {
  theme: "light" | "dark";
  toggleTheme: () => void;
  currentTheme: Theme;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Check localStorage first
    const savedTheme = localStorage.getItem("finly-theme") as
      | "light"
      | "dark"
      | null;

    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Check system preference
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      setTheme(mediaQuery.matches ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      // Update document class for Tailwind
      document.documentElement.classList.toggle("dark", theme === "dark");
      // Save to localStorage
      localStorage.setItem("finly-theme", theme);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const currentTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, currentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
