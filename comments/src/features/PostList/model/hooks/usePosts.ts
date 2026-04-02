import { useCallback, useMemo, useState } from "react";
import {
  sortByTitleLength,
  type SortOrder,
} from "../../../PostLengthFilter/lib/filterByLength";
import type { Post } from "../../../../entities/post/model/types";

export const usePosts = (posts: Post[]) => {
  const [sortOrder, setSortOrder] = useState<SortOrder>("none");

  const handleSortChange = useCallback(
    (order: SortOrder) => {
      setSortOrder(order);
    },
    [setSortOrder]
  );

  const sortedPosts = useMemo(() => {
    return sortByTitleLength(posts, sortOrder);
  }, [posts, sortOrder]);

  return { sortedPosts, setSortOrder, handleSortChange };
};
