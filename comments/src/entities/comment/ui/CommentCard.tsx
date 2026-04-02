import styles from "./CommentCard.module.css";
import { useTheme } from "../../../shared/lib/theme/useTheme";
import { useNavigate } from "react-router-dom";
import type { Comment } from "../model/types";

type CommentCardProp = {
  comment: Comment;
};

export const CommentCard = ({ comment }: CommentCardProp) => {
  const { theme } = useTheme();
  
  const { id, email, name, body } = comment;

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
