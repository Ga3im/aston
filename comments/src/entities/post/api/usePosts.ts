import { useEffect, useState } from "react";
import type { Post } from "../model/types";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) throw new Error("Ошибка загрузки");
  const data = await response.json();
  console.log(data)
  return data;
};

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (err) {
        setError("Не удалось загрузить посты");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  return { posts, isLoading, error };
};
