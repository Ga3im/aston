import React from "react";
import styles from "./PostCard.module.css";
import type { Post } from "../model/types";
import { ExpandableText } from "../../../shared/ui/ExpandableText/ExpandableText";
import { useTheme } from "../../../shared/lib/theme/useTheme";
import { Link, useNavigate } from "react-router-dom";

type PostCardProps = {
  data: Post;
  isLoading?: boolean;
};

export const PostCard: React.FC<PostCardProps> = ({ data }) => {
  const { title, body, id, userId } = data;
  const { theme } = useTheme();
  const navigate = useNavigate();

  const cardTheme =
    theme === "dark" ? `${styles.card} ${styles.cardDark}` : styles.card;

  return (
    <article onClick={() => navigate(`/posts/${id}`)} className={cardTheme}>
      <h3 className={styles.title}>{title}</h3>
      <ExpandableText>{body}</ExpandableText>
      <div onClick={(e) => e.stopPropagation()} className={styles.authorInfo}>
        <span>Автор: </span>
        <Link to={`/users/${userId}`} className={styles.authorLink}>
          Пользователь {userId}
        </Link>
      </div>
    </article>
  );
};
