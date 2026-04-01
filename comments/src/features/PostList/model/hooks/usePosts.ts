import { useEffect, useState } from "react";
import type { Post } from "../../../../entities/post/model/types";


export const usePosts = (userId?: string) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

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


  return { posts, isLoading, error };
};
