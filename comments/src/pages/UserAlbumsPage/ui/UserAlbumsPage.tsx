import { PostListSkeleton } from "../../../widgets/PostListSkeleton/PostListSkeleton";
import styles from "./UserAlbumsPage.module.css";
import { AlbumCard } from "../../../entities/album/ui/AlbumCard";
import { useUserAlbums } from "../../../features/UserAlbums/model/hooks/useUserAlbums";

export const UserAlbumsPage = () => {
  const { albums, isLoading } = useUserAlbums();

  if (isLoading)
    return (
      <div className={styles.container}>
        <PostListSkeleton length={6} />
      </div>
    );

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Альбомы пользователя</h2>
      <div className={styles.grid}>
        {albums.map((album) => (
          <AlbumCard key={album.id} data={album} />
        ))}
      </div>
    </div>
  );
};
