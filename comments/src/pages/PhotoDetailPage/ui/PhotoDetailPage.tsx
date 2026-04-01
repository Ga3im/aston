import { useParams, useNavigate } from "react-router-dom";
import { Button } from "../../../shared/ui/Button/Button";
import { PostListSkeleton } from "../../../widgets/PostListSkeleton/PostListSkeleton";
import styles from "./PhotoDetailPage.module.css";
import { useGetPhotoByIdQuery } from "../../../entities/photos/api/PhotoApi";
import { PhotoCard } from "../../../entities/photos/ui/PhotoCard";

export const PhotoDetailPage = () => {
  const { photoId } = useParams<{ photoId: string }>();
  const navigate = useNavigate();

  const { data: photo, isLoading, error } = useGetPhotoByIdQuery(photoId ?? "");

  if (isLoading)
    return (
      <div className={styles.container}>
        <PostListSkeleton length={1} />
      </div>
    );
  if (error)
    return (
      <div className={styles.container}>Ошибка: {JSON.stringify(error)}</div>
    );

  return (
    <div className={styles.container}>
      <Button onClick={() => navigate(-1)}>← Назад</Button>

      <PhotoCard data={photo!} />
    </div>
  );
};
