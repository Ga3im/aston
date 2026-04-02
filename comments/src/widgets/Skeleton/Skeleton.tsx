import { useTheme } from "../../shared/lib/theme/useTheme";
import styles from "./Sleketon.module.css";

export const Skeleton = ({
  length,
  column,
}: {
  length?: number;
  column?: number;
}) => {
  const { theme } = useTheme();

  const cardTheme =
    theme === "dark" ? `${styles.card} ${styles.cardDark}` : styles.card;

  const arrLength = length !== undefined ? length : 10;
  const col = column !== undefined ? column : 1;

  return (
    <div
      className={length === 1 ? styles.oneList : styles.list}
      style={{
        gridTemplateColumns: `repeat(${col}, 2fr)`,
      }}
    >
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
