import { useNavigate } from "react-router-dom";
import { useTheme } from "../../../shared/lib/theme/useTheme";
import styles from "./PhotoCard.module.css";
import type { Photo } from "../model/types";

type PhotoCardProps = {
  data: Photo;
};

export const PhotoCard: React.FC<PhotoCardProps> = ({ data }) => {
  const { title, thumbnailUrl, id, albumId } = data;
  const navigate = useNavigate();
  const { theme } = useTheme();

  const isDark = theme === "dark";
  const cardTheme = `${styles.card} ${isDark ? styles.cardDark : ""}`;
  const titleTheme = `${styles.photoTitle} ${isDark ? styles.titleDark : ""}`;

  return (
    <article className={cardTheme} onClick={() => navigate(`/photos/${id}`)}>
      <div className={styles.imageWrapper}>
        <img src={thumbnailUrl} alt={title} className={styles.thumb} />
      </div>
      <div className={styles.content}>
        <p className={styles.albumInfo}>Альбом №{albumId}</p>
        <h3 className={titleTheme}>{title}</h3>
      </div>
    </article>
  );
};
