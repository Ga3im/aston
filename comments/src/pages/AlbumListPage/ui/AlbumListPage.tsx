import { PostListSkeleton } from "../../../widgets/PostListSkeleton/PostListSkeleton";
import styles from "./AlbumListPage.module.css";
import { useGetAlbumsQuery } from "../../../entities/album/api/albumApi";
import { AlbumList } from "../../../widgets/AlbumList/AlbumList";

export const AlbumListPage = () => {
  const { data: albums = [], isLoading } = useGetAlbumsQuery();

  if (isLoading)
    return (
      <div className={styles.container}>
        <PostListSkeleton length={6} />
      </div>
    );

  return (
    <>
      <h2 className={styles.title}>Альбомы</h2>
      <AlbumList albums={albums} isLoading={isLoading} />
    </>
  );
};
