import { useEffect, useState } from "react";
import { fetchPosts } from "../../entities/post/api/getPosts";
import type { Post } from "../../entities/post/model/types";
import { LayoutHeader } from "../../widgets/LayoutHeader/Header";
import { PostList } from "../../widgets/PostList/PostList ";

export const MainLayout = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);

    const loadData = async () => {
      try {
        const data = await fetchPosts();
        setIsLoading(false);
        setPosts(data);
      } catch (error) {
        console.error("Ошибка:", error);
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  return (
    <>
      <LayoutHeader />
      <PostList posts={posts} isLoading={isLoading} />
    </>
  );
};
