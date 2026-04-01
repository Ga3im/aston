import { useMemo, useState } from "react";
import { PostCard } from "../../entities/post/ui/PostCard";
import { usePosts } from "../../entities/post/api/usePosts";
import styles from "./PostList.module.css";
import { PostListSkeleton } from "../PostListSkeleton/PostListSkeleton";
import { withLoading } from "../../shared/lib/hoc/withLoading";
import {
  sortByLength,
  type SortOrder,
} from "../../shared/lib/sort/sortByLenght";
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

const PostListWithLoading = withLoading(PostListBase, PostListSkeleton);

export const PostList = () => {
  const { posts, isLoading, error } = usePosts();
  const [sortOrder, setSortOrder] = useState<SortOrder>("none");

  const sortedPosts = useMemo(() => {
    return sortByLength(posts, sortOrder, "title");
  }, [posts, sortOrder]);

  const handleSortChange = (order: SortOrder) => {
    setSortOrder(order);
  };

  if (error) return <div>Ошибка: {error}</div>;

export const PostList: React.FC<PostListProps> = ({ posts, isLoading }) => {

  return (
    <>
      <FilterByLength onChange={handleSortChange} />
      <PostListWithLoading isLoading={isLoading} sortedPosts={sortedPosts} />
    </>
  );
};
