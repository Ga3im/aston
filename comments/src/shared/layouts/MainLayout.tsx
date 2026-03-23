import { Header } from "../../widgets/LayoutHeader/Header";
import { Footer } from "../../widgets/LayoutFooter/Footer";
import { type ReactNode } from "react";
import { useApp } from "../lib/theme/useApp";
import styles from "./MainLayout.module.css";
import { AboutModal } from "../../widgets/AboutModal/AboutModal";

type MainLayoutType = {
  children: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutType) => {
  const { theme, isAboutOpen, closeAbout } = useApp();
  const mainTheme =
    theme === "dark" ? `${styles.main} ${styles.darkMain}` : styles.main;
  return (
    <main className={mainTheme}>
      <Header />
      {children}
      <Footer />
      {isAboutOpen && <AboutModal onClose={closeAbout} />}
    </main>
  );
};
