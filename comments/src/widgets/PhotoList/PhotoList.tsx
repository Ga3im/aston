import type { Photo } from "../../entities/photos/model/types";
import { PhotoCard } from "../../entities/photos/ui/PhotoCard"; 
import { PostListSkeleton } from "../PostListSkeleton/PostListSkeleton";
import styles from "./PhotoList.module.css";

interface PhotoListProps {
  photos?: Photo[];
  isLoading: boolean;
  error?: any;
}

export const PhotoList = ({ photos = [], isLoading, error }: PhotoListProps) => {
  if (isLoading) return <div className={styles.container}><PostListSkeleton length={8} /></div>;
  if (error) return <div className={styles.container}>Ошибка при загрузке фотографий</div>;

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {photos.map((photo) => (
          <PhotoCard key={photo.id} data={photo} />
        ))}
      </div>
    </div>
  );
};
