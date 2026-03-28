import { useMemo, useState } from "react";
import {
  sortByTitleLength,
  type SortOrder,
} from "../../../PostLengthFilter/lib/filterByLength";
import type { Post } from "../../../../entities/post/model/types";

export const usePosts = (posts: Post[]) => {
  const [sortOrder, setSortOrder] = useState<SortOrder>("none");

  const sortedPosts = useMemo(() => {
    return sortByTitleLength(posts, sortOrder);
  }, [posts, sortOrder]);

  return { sortedPosts, setSortOrder };
};
