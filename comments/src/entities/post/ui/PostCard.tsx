import React from "react";
import styles from "./PostCard.module.css";
import type { Post } from "../model/types";
import { useTheme } from "../../../shared/lib/theme/useTheme";
import { ExpandableText } from "../../../shared/ui/ExpandableText/ExpandableText";

type PostCardProps = {
  data: Post;
  isLoading?: boolean;
};

export const PostCard: React.FC<PostCardProps> = ({ data }) => {
  const { title, body } = data;
  const { theme } = useTheme();
  const cardTheme =
    theme === "dark" ? `${styles.card} ${styles.cardDark}` : styles.card;
  return (
    <article className={cardTheme}>
      <h3 className={styles.title}>{title}</h3>
      <ExpandableText>{body}</ExpandableText>
    </article>
  );
};
