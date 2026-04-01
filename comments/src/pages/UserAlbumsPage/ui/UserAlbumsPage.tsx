import { PostListSkeleton } from "../../../widgets/PostListSkeleton/PostListSkeleton";
import styles from "./UserAlbumsPage.module.css";
import { useGetUserAlbumsQuery } from "../../../entities/album/api/albumApi";
import { AlbumList } from "../../../widgets/AlbumList/AlbumList";
import { useParams } from "react-router-dom";

export const UserAlbumsPage = () => {
  const { userId } = useParams();
  const { data: albums = [], isLoading } = useGetUserAlbumsQuery(userId ?? "");

  if (isLoading)
    return (
      <div className={styles.container}>
        <PostListSkeleton length={6} />
      </div>
    );

  return (
    <>
      <h2 className={styles.title}>Альбомы пользователя</h2>
      <AlbumList albums={albums} isLoading={isLoading} />
    </>
  );
};
