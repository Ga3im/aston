import { useTheme } from "../../../shared/lib/theme/ThemeProvider";
import styles from "./ThemeSwitcher.module.css";

export const ThemeSwitcher = () => {
  const { theme, handleTheme } = useTheme();
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
