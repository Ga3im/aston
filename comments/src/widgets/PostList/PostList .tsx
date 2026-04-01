import { PostCard } from "../../entities/post/ui/PostCard";
import styles from "./PostList.module.css";
import { PostListSkeleton } from "../PostListSkeleton/PostListSkeleton";
import { withLoading } from "../../shared/lib/hoc/withLoading";
import { usePosts } from "../../features/PostList/model/hooks/usePosts";
import type { Post } from "../../entities/post/model/types";
import { useCallback } from "react";
import type { SortOrder } from "../../shared/lib/sort/sortByLenght";
import { FilterByLength } from "../../features/FilterByLength/ui/FilterByLength";

type PostListProp = {
  posts?: Post[];
  isLoading: boolean;
  error: any;
};

const PostListBase = ({
  sortedPosts,
}: {
  sortedPosts: any[];
  isLoading: boolean;
}) => {
  return (
    <section className={styles.list}>
      {sortedPosts.map((post) => (
        <PostCard key={post.id} data={post} />
      ))}
    </section>
  );
};

const PostListWithLoading = withLoading(PostListBase, PostListSkeleton);

export const PostList = ({ posts = [], isLoading, error }: PostListProp) => {
  const { sortedPosts, setSortOrder } = usePosts(posts);

  const handleSortChange = useCallback(
    (order: SortOrder) => {
      setSortOrder(order);
    },
    [setSortOrder]
  );

  if (error) {
    const errorMessage =
      "status" in error ? JSON.stringify(error.data) : "Ошибка";
    return <div>Ошибка: {errorMessage}</div>;
  }

  return (
    <>
      <FilterByLength onChange={handleSortChange} />
      <PostListWithLoading isLoading={isLoading} sortedPosts={sortedPosts} />
    </>
  );
};
