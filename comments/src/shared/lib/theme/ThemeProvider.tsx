import { createContext, useContext, useState, type ReactNode } from "react";

type ThemeType = {
  theme: "light" | "dark";
  handleTheme: () => void;
};

type ThemeProviderType = {
  children: ReactNode;
};

const ThemeContext = createContext<ThemeType | null>(null);

export const ThemeProvider = ({ children }: ThemeProviderType) => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const handleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const value: ThemeType = {
    theme,
    handleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("Context равен null");
  }
  return context;
};
