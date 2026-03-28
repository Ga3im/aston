import { Header } from "../../widgets/LayoutHeader/Header";
import { Footer } from "../../widgets/LayoutFooter/Footer";
import styles from "./MainLayout.module.css";
import { Outlet } from "react-router-dom";
import { useTheme } from "../lib/theme/useTheme";
import { MainTabs } from "../../widgets/MainTabs/MainTabs";

export const MainLayout = () => {
  const { theme } = useTheme();
  const mainTheme =
    theme === "dark" ? `${styles.main} ${styles.darkMain}` : styles.main;
  return (
    <main className={mainTheme}>
      <Header />
      <MainTabs />
      <Outlet />
      <Footer />
    </main>
  );
};
