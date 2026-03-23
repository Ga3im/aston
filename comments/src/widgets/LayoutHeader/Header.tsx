import React from "react";
import styles from "./Header.module.css";
import { ThemeSwitcher } from "../../features/ThemeSwitcher/ui/ThemeSwitcher";
import { useApp } from "../../shared/lib/theme/useApp";
import { Button } from "../../shared/ui/Button/Button";

export const Header: React.FC = () => {
  const { theme, openAbout } = useApp();

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
