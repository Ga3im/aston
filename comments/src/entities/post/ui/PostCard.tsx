import React from "react";
import styles from "./PostCard.module.css";
import type { Post } from "../model/types";

type PostCardProps = {
  data: Post;
  isLoading: boolean;
};

export const PostCard: React.FC<PostCardProps> = ({ data, isLoading }) => {
  const { title, completed } = data;
  return (
    <article className={styles.card}>
      <span
        className={
          isLoading
            ? styles.statusLoading
            : `${styles.status} ${
                completed ? styles.completed : styles.pending
              }`
        }
      >
        {!isLoading && (completed ? "✓ Выполнено" : "○ В процессе")}
      </span>

      <h3 className={isLoading ? styles.titleLoading : styles.title}>
        {title}
      </h3>
    </article>
  );
};
