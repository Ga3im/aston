import { useParams, useNavigate } from "react-router-dom";
import styles from "./PostDetailPage.module.css";
import { useTheme } from "../../../shared/lib/theme/useTheme";
import { Skeleton } from "../../../widgets/Skeleton/Skeleton";
import { Button } from "../../../shared/ui/Button/Button";
import { useGetPostByIdQuery } from "../../../entities/post/api/postApi";

export const PostDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data: post, isLoading, error } = useGetPostByIdQuery(id ?? "");
  const { theme } = useTheme();

  if (isLoading) return <Skeleton length={1} />;
  if (error) {
    const errorMessage =
      "status" in error ? JSON.stringify(error.data) : "Ошибка";
    return <div className={styles.container}>Ошибка: {errorMessage}</div>;
  }

  const cardTheme =
    theme === "dark" ? `${styles.card} ${styles.cardDark}` : styles.card;
  const titleTheme =
    theme === "dark" ? `${styles.title} ${styles.titleDark}` : styles.title;
  const bodyTheme =
    theme === "dark" ? `${styles.body} ${styles.bodyDark}` : styles.body;

  return (
    <div className={styles.container}>
      <Button onClick={() => navigate(-1)}>← Назад</Button>

      <article className={cardTheme}>
        <h1 className={titleTheme}>{post?.title}</h1>
        <p className={bodyTheme}>{post?.body}</p>
      </article>
    </div>
  );
};
