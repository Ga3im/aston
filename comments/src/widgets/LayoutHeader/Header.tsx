import React from "react";
import styles from "./Header.module.css";
import { ThemeSwitcher } from "../../features/ThemeSwitcher/ui/ThemeSwitcher";
import { useTheme } from "../../shared/lib/theme/useTheme";
import { Button } from "../../shared/ui/Button/Button";
import { useAboutModal } from "../../entities/about/model/useAboutModal";

export const Header: React.FC = () => {
  const { theme } = useTheme();
  const { openAbout } = useAboutModal();

  const hedaerTheme =
    theme === "dark" ? `${styles.header} ${styles.darkHeader}` : styles.header;

  return (
    <header className={hedaerTheme}>
      <a href="/" className={styles.logo}>
        🚀 Posts
      </a>
      <div className={styles.btnsBlock}>
        <Button onClick={openAbout} children={"О проекте"} />
        <ThemeSwitcher />
      </div>
    </header>
  );
};
