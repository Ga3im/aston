import { useTheme } from "../../../shared/lib/theme/useTheme";
import styles from "./ThemeSwitcher.module.css";

export const ThemeSwitcher = () => {
  const { theme, handleTheme } = useTheme();
  return (
    <button onClick={handleTheme}>
      {theme === "light" ? (
        <div className={styles.btnBlock}>
          <p className={styles.darkThemeBtnMobile}>🌙</p>
          <p className={styles.darkThemeBtn}>Тёмная тема</p>
        </div>
      ) : (
        <div className={styles.btnBlock}>
          <p className={styles.lightThemeBtnMobile}>☀️</p>
          <p className={styles.lightThemeBtn}>Светлая тема</p>
        </div>
      )}
    </button>
  );
};
