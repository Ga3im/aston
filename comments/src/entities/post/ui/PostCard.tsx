import React from "react";
import styles from "./PostCard.module.css";
import type { Post } from "../model/types";
import { useTheme } from "../../../shared/lib/theme/useTheme";

type PostCardProps = {
  data: Post;
  isLoading: boolean;
};

export const PostCard: React.FC<PostCardProps> = ({ data, isLoading }) => {
  const { title } = data;
  const { theme } = useTheme();
  const cardTheme =
    theme === "dark" ? `${styles.card} ${styles.cardDark}` : styles.card;
  return (
    <article className={cardTheme}>
      <h3 className={isLoading ? styles.titleLoading : styles.title}>
        {title}
      </h3>
    </article>
  );
};
