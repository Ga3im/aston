import { useGetCommentsQuery } from "../../../entities/comment/api/commentApi";
import { CommentCard } from "../../../entities/comment/ui/CommentCard";
import styles from "./CommentListPage.module.css";

export const CommentListPage = () => {
  const { data: comments, isLoading, error } = useGetCommentsQuery();

  if (isLoading)
    return <div className={styles.loader}>Загрузка обсуждений...</div>;
  if (error) return <div>Ошибка при получении комментариев</div>;

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Все комментарии сообщества</h1>
      <div className={styles.list}>
        {comments?.map((comment) => (
          <CommentCard key={comment.id} data={comment} />
        ))}
      </div>
    </section>
  );
};
