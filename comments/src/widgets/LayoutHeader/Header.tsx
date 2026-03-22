import React from "react";
import styles from "./Header.module.css";
import { ThemeSwitcher } from "../../features/ThemeSwitcher/ui/ThemeSwitcher";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>
        🚀 Posts
      </a>
      <ThemeSwitcher />
    </header>
  );
};
