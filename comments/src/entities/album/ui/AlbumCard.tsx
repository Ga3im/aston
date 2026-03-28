import { Link } from "react-router-dom";
import styles from "./AlbumCard.module.css";
import { useTheme } from "../../../shared/lib/theme/useTheme";

export const AlbumCard = ({ data }: { data: any }) => {
  const { theme } = useTheme();
  const cardTheme =
    theme === "dark" ? `${styles.card} ${styles.cardDark}` : styles.card;
  return (
    <Link to={`/albums/${data.id}`} className={cardTheme}>
      <div className={styles.icon}>📁</div>
      <div className={styles.info}>
        <h3 className={styles.albumTitle}>{data.title}</h3>
        <span className={styles.linkText}>Открыть альбом →</span>
      </div>
    </Link>
  );
};
