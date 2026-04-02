import { useTheme } from "../../../shared/lib/theme/useTheme";
import styles from "./PhotoListPage.module.css";
import { useGetPhotosQuery } from "../../../entities/photos/api/PhotoApi";
import { ItemList } from "../../../shared/ui/ItemList/ItemList";
import { PhotoCard } from "../../../entities/photos/ui/PhotoCard";
import { Skeleton } from "../../../widgets/Skeleton/Skeleton";

export const PhotoListPage = () => {
  const { theme } = useTheme();
  const { data: photos = [], isLoading, error } = useGetPhotosQuery();

  if (isLoading)
    return (
      <div className={styles.container}>
        <Skeleton column={4} length={10} />
      </div>
    );
    
  if (error) return <div className={styles.container}>Ошибка загрузки</div>;

  const isDark = theme === "dark";

  return (
    <div className={styles.container}>
      <h1 className={isDark ? styles.titleDark : ""}>Галерея (100 фото)</h1>
      <ItemList
        items={photos}
        keyExtractor={(photo) => photo.id}
        renderItem={(photo) => <PhotoCard photo={photo} />}
        className={styles.grid}
      />
    </div>
  );
};
