import { PostListSkeleton } from "../../../widgets/PostListSkeleton/PostListSkeleton";
import styles from "./UserAlbumsPage.module.css";
import { useGetUserAlbumsQuery } from "../../../entities/album/api/albumApi";
import { useParams } from "react-router-dom";
import { ItemList } from "../../../shared/ui/ItemList/ItemList";
import { AlbumCard } from "../../../entities/album/ui/AlbumCard";

export const UserAlbumsPage = () => {
  const { id } = useParams();
  const { data: albums = [], isLoading } = useGetUserAlbumsQuery(id ?? "");

  if (isLoading)
    return (
      <div className={styles.container}>
        <PostListSkeleton length={6} />
      </div>
    );

  return (
    <>
      <h2 className={styles.title}>Альбомы пользователя</h2>
      <ItemList
        items={albums}
        keyExtractor={(album) => album.id}
        renderItem={(album) => <AlbumCard data={album} />}
        className={styles.grid}
      />
    </>
  );
};
