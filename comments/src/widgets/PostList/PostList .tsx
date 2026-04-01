import { PostCard } from "../../entities/post/ui/PostCard";
import styles from "./PostList.module.css";
import { PostListSkeleton } from "../PostListSkeleton/PostListSkeleton";
import { withLoading } from "../../shared/lib/hoc/withLoading";
import { sortByLength, type SortOrder } from "../../shared/lib/sort/sortByLenght";
import { useCallback, useMemo, useState } from "react";
import { usePosts } from "../../features/PostList/model/hooks/usePosts";
import { FilterByLength } from "../../features/FilterByLength/ui/FilterByLength";

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

export const PostList = ({userId}: PostListProps) => {
    const { posts, isLoading, error } = usePosts(userId);
  const [sortOrder, setSortOrder] = useState<SortOrder>("none");

    const sortedPosts = useMemo(() => {
    return sortByLength(posts, sortOrder, "title");
  }, [posts, sortOrder]);

  const handleSortChange = useCallback(
    (order: any) => {
      setSortOrder(order);
    },
    [setSortOrder]
  );
  if (error) return <div>Ошибка: {error}</div>;

export const PostList: React.FC<PostListProps> = ({ posts, isLoading }) => {

  return (
    <>
      <FilterByLength  onChange={handleSortChange} />
      <PostListWithLoading isLoading={isLoading} sortedPosts={sortedPosts} />
    </>
  );
};
