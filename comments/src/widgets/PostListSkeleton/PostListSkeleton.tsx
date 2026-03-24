import { useApp } from "../../shared/lib/theme/useApp";
import styles from "./PostListSleketon.module.css";

export const PostListSkeleton = ({ length }: { length?: number }) => {
  const arrLength = length !== undefined ? length : 10;
  const { theme } = useApp();
  const cardTheme =
    theme === "dark" ? `${styles.card} ${styles.cardDark}` : styles.card;

  return (
    <div className={length === 1 ? styles.oneList : styles.list}>
      {Array(arrLength)
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
