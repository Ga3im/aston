import React from "react";
import styles from "./PostCard.module.css";
import type { Post } from "../model/types";
import { CommentList } from "../../../widgets/CommentList/ui/CommentList";
import { useTheme } from "../../../shared/lib/theme/useTheme";
import { Link, useNavigate } from "react-router-dom";

type PostCardProps = {
  data: Post;
};

export const PostCard: React.FC<PostCardProps> = ({ data }) => {
  const { title, body, id } = data;
  const { theme } = useTheme();
   const navigate = useNavigate();
  const cardTheme =
    theme === "dark" ? `${styles.card} ${styles.cardDark}` : styles.card;
  return (
    <article onClick={() => navigate(`/posts/${id}`)} className={cardTheme}>
      <h3 className={styles.title}>
        {title}
      </h3>
      <CommentList>{body}</CommentList>
      <div onClick={(e) => e.stopPropagation()} className={styles.authorInfo}>
        <span>Автор: </span>
        <Link to={`/users/${data.userId}/posts`} className={styles.authorLink}>
          Пользователь {data.userId}
        </Link>
      </div>
    </article>
  );
};
