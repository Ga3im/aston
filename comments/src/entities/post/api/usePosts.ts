import { useEffect, useMemo, useState } from "react";
import type { Post } from "../model/types";
import {
  sortByTitleLength,
  type SortOrder,
} from "../../../features/ThemeSwitcher/ui/PostLengthFilter/lib/filterByLength";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) throw new Error("Ошибка загрузки");
  const data = await response.json();
  return data;
};

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<SortOrder>("none");

  const sortedPosts = useMemo(() => {
    return sortByTitleLength(posts, sortOrder);
  }, [posts, sortOrder]);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (err) {
        setError("Не удалось загрузить посты");
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  return { sortedPosts, setSortOrder, isLoading, error };
};
