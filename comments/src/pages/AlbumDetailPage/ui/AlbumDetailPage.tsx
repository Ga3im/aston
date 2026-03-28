import { useParams, useNavigate } from "react-router-dom";
import styles from "./AlbumDetailPage.module.css";
import { useGetAlbumByIdQuery } from "../../../entities/album/api/albumApi";
import { PostListSkeleton } from "../../../widgets/PostListSkeleton/PostListSkeleton";
import { Button } from "../../../shared/ui/Button/Button";

export const AlbumDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data: album, isLoading, error } = useGetAlbumByIdQuery(id ?? "");

  if (isLoading) return <PostListSkeleton length={9} />;
  if (error) return <div className={styles.error}>Ошибка загрузки фотографий</div>;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Button onClick={() => navigate(-1)}>← К альбомам</Button>
        <h1 className={styles.title}>{album?.title}</h1>
        {/* <p className={styles.count}>Всего фото: {photos?.length || 0}</p> */}
      </header>

      <div className={styles.photoGrid}>
        {/* {photos?.map((photo) => (
          <div key={photo.id} className={styles.photoCard}>
            <img 
              src={photo.thumbnailUrl} 
              alt={photo.title} 
              className={styles.image}
              loading="lazy" 
            />
            <div className={styles.photoOverlay}>
              <p className={styles.photoTitle}>{photo.title}</p>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
};
