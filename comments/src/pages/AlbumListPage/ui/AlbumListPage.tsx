import styles from "./AlbumListPage.module.css";
import { useGetAlbumsQuery } from "../../../entities/album/api/albumApi";
import { AlbumCard } from "../../../entities/album/ui/AlbumCard";
import { ItemList } from "../../../shared/ui/ItemList/ItemList";
import { Skeleton } from "../../../widgets/Skeleton/Skeleton";
import { useTheme } from "../../../shared/lib/theme/useTheme";

export const AlbumListPage = () => {
  const { theme } = useTheme();

  const { data: albums = [], isLoading } = useGetAlbumsQuery();

  if (isLoading)
    return (
      <div className={styles.container}>
        <Skeleton column={3} length={6} />
      </div>
    );
  const isDark = theme === "dark";

  return (
    <div className={styles.container}>
      <h1 className={isDark ? styles.titleDark : ""}>Альбомы</h1>
      <ItemList
        items={albums}
        keyExtractor={(album) => album.id}
        renderItem={(album) => <AlbumCard album={album} />}
        className={styles.grid}
      />
    </div>
  );
};
