import { useCallback } from "react";
import { PostCard } from "../../entities/post/ui/PostCard";
import { usePosts } from "../../entities/post/api/usePosts";
import { PostLengthFilter } from "../../features/ThemeSwitcher/ui/PostLengthFilter/ui/PostLengthFilter";
import styles from "./PostList.module.css";
import { PostListSkeleton } from "../PostListSkeleton/PostListSkeleton";
import { withLoading } from "../../shared/lib/hoc/withLoading";

const PostListBase = ({
  sortedPosts,
  isLoading,
}: {
  sortedPosts: any[];
  isLoading: boolean;
}) => {
  return (
    <section className={styles.list}>
      {sortedPosts.map((post) => (
        <PostCard key={post.id} data={post} isLoading={isLoading} />
      ))}
    </section>
  );
};

const PostListWithLoading = withLoading(PostListBase, PostListSkeleton);

export const PostList = () => {
  const { sortedPosts, setSortOrder, isLoading, error } = usePosts();

  const handleSortChange = useCallback(
    (order: any) => {
      setSortOrder(order);
    },
    [setSortOrder]
  );

  if (error) return <div>Ошибка: {error}</div>;

  return (
    <>
      <PostLengthFilter onChange={handleSortChange} />

      <PostListWithLoading isLoading={isLoading} sortedPosts={sortedPosts} />
    </>
  );
};
