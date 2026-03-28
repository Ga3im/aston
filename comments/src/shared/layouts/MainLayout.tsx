import { Header } from "../../widgets/LayoutHeader/Header";
import { Footer } from "../../widgets/LayoutFooter/Footer";
import { type ReactNode } from "react";
import { useTheme } from "../lib/theme/useTheme";
import styles from "./MainLayout.module.css";

type MainLayoutType = {
  children: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutType) => {
  const { theme } = useTheme();
  const mainTheme =
    theme === "dark" ? `${styles.main} ${styles.darkMain}` : styles.main;
  return (
    <main className={mainTheme}>
      <Header />
      {children}
      <Footer />
    </main>
  );
};
