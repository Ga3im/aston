import { createContext, useState, type ReactNode } from "react";

type ThemeType = {
  theme: "light" | "dark";
  handleTheme: () => void;
  isAboutOpen: boolean;
  openAbout: () => void;
  closeAbout: () => void;
};

type ThemeProviderType = {
  children: ReactNode;
};

export const AppContext = createContext<ThemeType | null>(null);

export const ThemeProvider = ({ children }: ThemeProviderType) => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") {
      return saved;
    }
    return "dark";
  });
  const [isAboutOpen, setIsAboutOpen] = useState<boolean>(false);

  const handleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  const openAbout = () => setIsAboutOpen(true);
  const closeAbout = () => setIsAboutOpen(false);

  const value: ThemeType = {
    theme,
    handleTheme,
    isAboutOpen,
    openAbout,
    closeAbout,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
