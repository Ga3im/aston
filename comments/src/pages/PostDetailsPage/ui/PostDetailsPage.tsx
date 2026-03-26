import { useParams, useNavigate } from "react-router-dom";
import { usePostById } from "../../../entities/post/api/postApiById";
import styles from "./PostDetailPage.module.css";
import { useTheme } from "../../../shared/lib/theme/useTheme";
import { PostListSkeleton } from "../../../widgets/PostListSkeleton/PostListSkeleton";

export const PostDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { post, isLoading, error } = usePostById(id);
  const { theme } = useTheme();

  if (isLoading) return <PostListSkeleton length={1} />;
  if (error) return <div className={styles.container}>{error}</div>;

  const cardTheme =
    theme === "dark" ? `${styles.card} ${styles.cardDark}` : styles.card;
  const titleTheme =
    theme === "dark" ? `${styles.title} ${styles.titleDark}` : styles.title;
  const bodyTheme =
    theme === "dark" ? `${styles.body} ${styles.bodyDark}` : styles.body;

  return (
    <div className={styles.container}>
      <button className={styles.backBtn} onClick={() => navigate(-1)}>
        ← Назад
      </button>

      <article className={cardTheme}>
        <h1 className={titleTheme}>{post?.title}</h1>
        <p className={bodyTheme}>{post?.body}</p>
      </article>
    </div>
  );
};
