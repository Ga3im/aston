import React from "react";
import styles from "./PostCard.module.css";
import type { Post } from "../model/types";
import { useApp } from "../../../shared/lib/theme/useApp";
import { CommentList } from "../../../widgets/CommentList/ui/CommentList";

type PostCardProps = {
  data: Post;
  isLoading: boolean;
};

export const PostCard: React.FC<PostCardProps> = ({ data }) => {
  const { title, body } = data;
  const { theme } = useApp();
  const cardTheme =
    theme === "dark" ? `${styles.card} ${styles.cardDark}` : styles.card;
  return (
    <article className={cardTheme}>
      <h3 className={styles.title}>
        {title}
      </h3>
      <CommentList>{body}</CommentList>
    </article>
  );
};
