import React from "react";
import styles from "./CommentCard.module.css";
import { useTheme } from "../../../shared/lib/theme/useTheme";
import type { Comments } from "../model/types";
import { useNavigate } from "react-router-dom";

export const CommentCard: React.FC<{ data: Comments }> = ({ data }) => {
  const { theme } = useTheme();
  const { id, email, name, body } = data;
  const navigate = useNavigate();
  const themeClass = theme === "dark" ? styles.dark : "";

  return (
    <div
      onClick={() => navigate(`/comments/${id}`)}
      className={`${styles.comment} ${themeClass}`}
    >
      <p className={styles.author}>{email} пишет:</p>
      <h4 className={styles.name}>{name}</h4>
      <p className={styles.body}>{body}</p>
    </div>
  );
};
