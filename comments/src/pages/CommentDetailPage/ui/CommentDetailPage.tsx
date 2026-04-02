import { useParams, useNavigate } from "react-router-dom";

import styles from "./CommentDetailPage.module.css";
import { Skeleton } from "../../../widgets/Skeleton/Skeleton";
import { useTheme } from "../../../shared/lib/theme/useTheme";
import { Button } from "../../../shared/ui/Button/Button";
import { useGetCommentByIdQuery } from "../../../entities/comment/api/commentApi";

export const CommentDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { theme } = useTheme();

  const { data: comment, isLoading, error } = useGetCommentByIdQuery(id ?? "");

  if (isLoading) return <Skeleton length={1} />;

  if (error) {
    const errorMessage =
      "status" in error ? JSON.stringify(error.data) : "Ошибка";
    return <div className={styles.container}>Ошибка: {errorMessage}</div>;
  }

  const isDark = theme === "dark";
  const cardTheme = `${styles.card} ${isDark ? styles.cardDark : ""}`;
  const nameTheme = `${styles.name} ${isDark ? styles.titleDark : ""}`;
  const bodyTheme = `${styles.body} ${isDark ? styles.bodyDark : ""}`;

  return (
    <div className={styles.container}>
      <Button onClick={() => navigate(-1)}>← Назад к списку</Button>

      <article className={cardTheme}>
        <h1 className={nameTheme}>{comment?.name}</h1>
        <p className={styles.email}>Отправитель: {comment?.email}</p>
        <p className={bodyTheme}>{comment?.body}</p>
      </article>
    </div>
  );
};
