import styles from "./UserAlbumsPage.module.css";
import { useGetUserAlbumsQuery } from "../../../entities/album/api/albumApi";
import { useParams } from "react-router-dom";
import { ItemList } from "../../../shared/ui/ItemList/ItemList";
import { AlbumCard } from "../../../entities/album/ui/AlbumCard";
import { Skeleton } from "../../../widgets/Skeleton/Skeleton";

export const UserAlbumsPage = () => {
  const { id } = useParams();
  const { data: albums = [], isLoading } = useGetUserAlbumsQuery(id ?? "");

  if (isLoading)
    return (
      <div className={styles.container}>
        <Skeleton length={6} />
      </div>
    );

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Альбомы пользователя</h2>
      <ItemList
        items={albums}
        keyExtractor={(album) => album.id}
        renderItem={(album) => <AlbumCard album={album} />}
        className={styles.grid}
      />
    </div>
  );
};
