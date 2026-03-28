import { createContext, useState, type ReactNode } from "react";

type ThemeType = {
  theme: "light" | "dark";
  handleTheme: () => void;
};

type ThemeProviderType = {
  children: ReactNode;
};

export const ThemeContext = createContext<ThemeType | null>(null);

export const ThemeProvider = ({ children }: ThemeProviderType) => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") {
      return saved;
    }
    return "dark";
  });

  const handleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const value: ThemeType = {
    theme,
    handleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
