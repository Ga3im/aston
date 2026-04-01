import { useNavigate } from "react-router-dom";
import styles from "./AlbumPhotosPage.module.css";
import { PostListSkeleton } from "../../../widgets/PostListSkeleton/PostListSkeleton";
import { useAlbumPhotos } from "../../../features/AlbumPhotos/model/hooks/useAlbumPhotos";

export const AlbumPhotosPage = () => {
  const navigate = useNavigate();
  const { photos, isLoading } = useAlbumPhotos();

  if (isLoading)
    return (
      <div className={styles.container}>
        <PostListSkeleton length={6} />
      </div>
    );

  return (
    <div className={styles.container}>
      <button className={styles.backBtn} onClick={() => navigate(-1)}>
        ← К альбомам
      </button>
      <div className={styles.grid}>
        {photos.map((photo) => (
          <div key={photo.id} className={styles.photoCard}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <p>{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
