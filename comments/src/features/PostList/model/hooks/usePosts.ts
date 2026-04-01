import { useMemo, useState } from "react";

import type { Post } from "../../../../entities/post/model/types";
import { sortByLength, type SortOrder } from "../../../../shared/lib/sort/sortByLenght";

export const usePosts = (posts: Post[]) => {
  const [sortOrder, setSortOrder] = useState<SortOrder>("none");

  const sortedPosts = useMemo(() => {
    return sortByLength(posts, sortOrder, 'title');
  }, [posts, sortOrder]);

  return { sortedPosts, setSortOrder };
};
