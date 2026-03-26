import { useState, useEffect } from "react";
import type { Post } from "../model/types";

export const usePostById = (id: string | undefined) => {
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    const loadPost = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        if (!response.ok) throw new Error("Пост не найден");
        const data = await response.json();
        setPost(data);
      } catch (err) {
        setError("Ошибка при загрузке поста");
      } finally {
        setIsLoading(false);
      }
    };
    loadPost();
  }, [id]);

  return { post, isLoading, error };
};
