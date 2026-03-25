import { useTheme } from "../../shared/lib/theme/useTheme";
import styles from "./PostListSleketon.module.css";

export const PostListSkeleton = () => {
  const { theme } = useTheme();
  const cardTheme =
    theme === "dark" ? `${styles.card} ${styles.cardDark}` : styles.card;

  return (
    <div className={styles.list}>
      {Array(10)
        .fill(0)
        .map((_, i) => (
          <article key={i} className={cardTheme}>
            <h3 className={styles.titleLoading}></h3>
            <p className={styles.bodyLoading}></p>
          </article>
        ))}
    </div>
  );
};
