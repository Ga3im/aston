import React from "react";
import styles from "./PostCard.module.css";
import type { Post } from "../model/types";
import { useTheme } from "../../../shared/lib/theme/useTheme";
import { CommentList } from "../../../widgets/CommentList/ui/CommentList";

type PostCardProps = {
  data: Post;
};

export const PostCard: React.FC<PostCardProps> = ({ data }) => {
  const { title, body } = data;
  const { theme } = useTheme();
  const cardTheme =
    theme === "dark" ? `${styles.card} ${styles.cardDark}` : styles.card;
  return (
    <article className={cardTheme}>
      <h3 className={styles.title}>{title}</h3>
      <CommentList>{body}</CommentList>
    </article>
  );
};
