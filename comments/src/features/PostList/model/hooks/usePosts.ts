import { useEffect, useMemo, useState } from "react";
import type { Post } from "../../../../entities/post/model/types";
import {
  sortByTitleLength,
  type SortOrder,
} from "../../../PostLengthFilter/lib/filterByLength";

export const usePosts = (userId?: string) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<SortOrder>("none");

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const url = userId
          ? `https://jsonplaceholder.typicode.com/users/${userId}/posts`
          : "https://jsonplaceholder.typicode.com/posts";

        const response = await fetch(url);
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError("Ошибка");
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, [userId]);

  const sortedPosts = useMemo(() => {
    return sortByTitleLength(posts, sortOrder);
  }, [posts, sortOrder]);

  return { sortedPosts, setSortOrder, isLoading, error };
};
