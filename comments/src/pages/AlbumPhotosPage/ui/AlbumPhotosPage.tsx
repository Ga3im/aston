import { useNavigate, useParams } from "react-router-dom";
import { useGetAlbumPhotosQuery } from "../../../entities/photos/api/PhotoApi";
import { Button } from "../../../shared/ui/Button/Button";
import styles from "./AlbumPhotosPage.module.css";
import { ItemList } from "../../../shared/ui/ItemList/ItemList";
import { Skeleton } from "../../../widgets/Skeleton/Skeleton";
import { PhotoCard } from "../../../entities/photos/ui/PhotoCard";

export const AlbumPhotosPage = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const {
    data: photos = [],
    isLoading,
    error,
  } = useGetAlbumPhotosQuery(id ?? "");

  if (isLoading)
    return (
      <div className={styles.container}>
        <Skeleton column={3} length={6} />
      </div>
    );

  if (error) return <div>Ошибка загрузки фото</div>;

  return (
    <div className={styles.container}>
      <Button onClick={() => navigate(-1)}>← Назад</Button>
      <ItemList
        items={photos}
        keyExtractor={(photo) => photo.id}
        renderItem={(photo) => <PhotoCard photo={photo} />}
        className={styles.grid}
      />
    </div>
  );
};
