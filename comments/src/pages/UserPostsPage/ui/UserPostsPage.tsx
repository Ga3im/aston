import { useParams } from "react-router-dom";
import { useGetUserPostsQuery } from "../../../entities/post/api/postApi";
import { useTheme } from "../../../shared/lib/theme/useTheme";
import { usePosts } from "../../../features/PostList/model/hooks/usePosts";
import { Skeleton } from "../../../widgets/Skeleton/Skeleton";
import styles from "./UserPostsPage.module.css";
import { FilterByLength } from "../../../features/PostLengthFilter/ui/FilterByLength";
import { ItemList } from "../../../shared/ui/ItemList/ItemList";
import { PostCard } from "../../../entities/post/ui/PostCard";

export const UserPostsPage = () => {
  const { id } = useParams();
  const { data: posts = [], isLoading, error } = useGetUserPostsQuery(id ?? "");

  const { theme } = useTheme();
  const { sortedPosts, handleSortChange } = usePosts(posts);

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
      <h1 className={isDark ? styles.titleDark : ""}>Посты пользователя</h1>
      <FilterByLength onChange={handleSortChange} />
      <ItemList
        items={sortedPosts}
        keyExtractor={(post) => post.id}
        renderItem={(post) => <PostCard post={post} />}
        className={styles.list}
      />
    </div>
  );
};
