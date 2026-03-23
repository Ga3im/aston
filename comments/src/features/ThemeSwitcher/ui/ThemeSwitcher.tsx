import { useApp } from "../../../shared/lib/theme/useApp";
import styles from "./ThemeSwitcher.module.css";

export const ThemeSwitcher = () => {
  const { theme, handleTheme } = useApp();
  return (
    <button onClick={handleTheme}>
      {theme === "light" ? (
        <p className={styles.darkThemeBtn}></p>
      ) : (
        <p className={styles.lightThemeBtn}></p>
      )}
    </button>
  );
};
