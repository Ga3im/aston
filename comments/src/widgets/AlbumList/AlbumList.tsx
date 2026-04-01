import { AlbumCard } from "../../entities/album/ui/AlbumCard";
import styles from "./AlbumList.module.css";
import { PostListSkeleton } from "../PostListSkeleton/PostListSkeleton";
import type { Album } from "../../entities/album/model/types";

type AlbumListProps = {
  albums?: Album[]; 
  isLoading: boolean;
  error?: any;
};

export const AlbumList = ({
  albums = [],
  isLoading,
  error,
}: AlbumListProps) => {
  if (isLoading)
    return (
      <div className={styles.container}>
        <PostListSkeleton length={6} />
      </div>
    );
  if (error)
    return <div className={styles.container}>Ошибка загрузки альбомов</div>;

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {albums.map((album) => (
          <AlbumCard key={album.id} data={album} />
        ))}
      </div>
    </div>
  );
};
