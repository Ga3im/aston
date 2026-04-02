import { Link } from "react-router-dom";
import styles from "./AlbumCard.module.css";
import { useTheme } from "../../../shared/lib/theme/useTheme";
import type { Album } from "../model/types";

export const AlbumCard = ({ album }: { album: Album }) => {
  const { theme } = useTheme();

  const cardTheme =
    theme === "dark" ? `${styles.card} ${styles.cardDark}` : styles.card;

  return (
      <Link to={`/albums/${album.id}`} className={cardTheme}>
        <div className={styles.icon}>📁</div>
        <div className={styles.info}>
          <h3 className={styles.albumTitle}>{album.title}</h3>
          <span className={styles.linkText}>Открыть альбом →</span>
        </div>
      </Link>
  );
};
