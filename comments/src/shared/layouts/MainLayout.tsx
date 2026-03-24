import { Header } from "../../widgets/LayoutHeader/Header";
import { Footer } from "../../widgets/LayoutFooter/Footer";
import { useApp } from "../lib/theme/useApp";
import styles from "./MainLayout.module.css";
import { AboutModal } from "../../widgets/AboutModal/AboutModal";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  const { theme, isAboutOpen, closeAbout } = useApp();
  const mainTheme =
    theme === "dark" ? `${styles.main} ${styles.darkMain}` : styles.main;
  return (
    <main className={mainTheme}>
      <Header />
      <Outlet />
      <Footer />
      {isAboutOpen && <AboutModal onClose={closeAbout} />}
    </main>
  );
};
