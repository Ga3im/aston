import { useCallback } from "react";
import { PostCard } from "../../entities/post/ui/PostCard";
import styles from "./PostList.module.css";
import { PostListSkeleton } from "../PostListSkeleton/PostListSkeleton";
import { withLoading } from "../../shared/lib/hoc/withLoading";
import { PostLengthFilter } from "../../features/PostLengthFilter/ui/PostLengthFilter";
import { usePosts } from "../../features/PostList/model/hooks/usePosts";

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
type PostListProps = {
  userId?: string;
};
const PostListWithLoading = withLoading(PostListBase, PostListSkeleton);

export const PostList = ({ userId }: PostListProps) => {
  const { sortedPosts, setSortOrder, isLoading, error } = usePosts(userId);

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
