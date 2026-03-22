import { PostCard } from "../../entities/post/ui/PostCard";
import styles from "./PostList.module.css";
import { usePosts } from "../../entities/post/api/usePosts";

export const PostList = () => {
  const { posts, isLoading, error } = usePosts();

  console.log(error);

  return (
    <section className={styles.list}>
      {isLoading
        ? Array(10)
            .fill(0)
            .map((_, i) => (
              <PostCard
                key={i}
                data={{ userId: 1, id: 1, title: "", completed: false }}
                isLoading={isLoading}
              />
            ))
        : posts.map((post) => (
            <PostCard key={post.id} data={post} isLoading={isLoading} />
          ))}
    </section>
  );
};
