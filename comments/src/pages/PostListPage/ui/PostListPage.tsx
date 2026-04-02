import { useGetPostsQuery } from "../../../entities/post/api/postApi";
import { FilterByLength } from "../../../features/PostLengthFilter/ui/FilterByLength";
import { usePosts } from "../../../features/PostList/model/hooks/usePosts";
import { useTheme } from "../../../shared/lib/theme/useTheme";
import { Skeleton } from "../../../widgets/Skeleton/Skeleton";
import { ItemList } from "../../../shared/ui/ItemList/ItemList";
import { PostCard } from "../../../entities/post/ui/PostCard";
import styles from "./PostListPage.module.css";

export const PostListPage = () => {
  const { data: posts = [], isLoading, error } = useGetPostsQuery();
  const { theme } = useTheme();
  const { sortedPosts,  handleSortChange } = usePosts(posts);

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
      <h1 className={isDark ? styles.titleDark : ""}>Все посты</h1>
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
