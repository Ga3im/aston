import { useNavigate } from "react-router-dom";
import { PostListSkeleton } from "../../../widgets/PostListSkeleton/PostListSkeleton";
import { useTheme } from "../../../shared/lib/theme/useTheme";
import styles from "./PhotoListPage.module.css";
import { useGetPhotosQuery } from "../../../entities/photos/api/PhotoApi";

export const PhotoListPage = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const { data: photos, isLoading, error } = useGetPhotosQuery();

  if (isLoading)
    return (
      <div className={styles.container}>
        <PostListSkeleton length={6} />
      </div>
    );
  if (error) return <div className={styles.container}>Ошибка загрузки</div>;

  const isDark = theme === "dark";
  const cardTheme = `${styles.card} ${isDark ? styles.cardDark : ""}`;
  const titleTheme = `${styles.photoTitle} ${isDark ? styles.titleDark : ""}`;

  return (
    <div className={styles.container}>
      <h1 className={isDark ? styles.titleDark : ""}>Галерея (100 фото)</h1>
      <div className={styles.grid}>
        {photos?.slice(0, 100).map((photo) => (
          <div
            key={photo.id}
            className={cardTheme}
            onClick={() => navigate(`/photos/${photo.id}`)}
          >
            <img
              src={photo.thumbnailUrl}
              alt={photo.title}
              className={styles.thumb}
            />
            <p className={titleTheme}>{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
