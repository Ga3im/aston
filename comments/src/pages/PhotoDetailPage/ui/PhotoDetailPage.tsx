import { useParams, useNavigate } from "react-router-dom";
import { Button } from "../../../shared/ui/Button/Button";
import { Skeleton } from "../../../widgets/Skeleton/Skeleton";
import styles from "./PhotoDetailPage.module.css";
import { useGetPhotoByIdQuery } from "../../../entities/photos/api/PhotoApi";
import { PhotoCard } from "../../../entities/photos/ui/PhotoCard";

export const PhotoDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data: photo, isLoading, error } = useGetPhotoByIdQuery(id ?? "");

  if (isLoading)
    return (
      <div className={styles.container}>
        <Skeleton length={1} />
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
