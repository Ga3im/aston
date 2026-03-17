import { PostCard } from "../../entities/post/ui/PostCard";
import styles from "./PostList.module.css";
import type { Post } from "../../entities/post/model/types";

type PostListProps = {
  posts: Post[];
  isLoading: boolean;
};

export const PostList: React.FC<PostListProps> = ({ posts, isLoading }) => {
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
