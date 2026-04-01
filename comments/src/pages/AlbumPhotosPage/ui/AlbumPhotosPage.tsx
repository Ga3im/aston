import { useNavigate, useParams } from "react-router-dom";
import { useGetAlbumPhotosQuery } from "../../../entities/photos/api/PhotoApi";
import { Button } from "../../../shared/ui/Button/Button";
import { PhotoList } from "../../../widgets/PhotoList/PhotoList";
import styles from "./AlbumPhotosPage.module.css";

export const AlbumPhotosPage = () => {
  const navigate = useNavigate();
  const { albumPhotoId } = useParams<{ albumPhotoId: string }>();

  const { data: photos, isLoading, error } = useGetAlbumPhotosQuery(albumPhotoId ?? "");

  return (
    <div className={styles.container}>
      <Button onClick={() => navigate(-1)}>← Назад</Button>
      <PhotoList photos={photos} isLoading={isLoading} error={error} />
    </div>
  );
};
