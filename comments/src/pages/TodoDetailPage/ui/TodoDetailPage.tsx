import { useParams, useNavigate } from "react-router-dom";
import { useGetTodoByIdQuery } from "../../../entities/todo/api/todoApi";
import { useTheme } from "../../../shared/lib/theme/useTheme";
import { Button } from "../../../shared/ui/Button/Button";
import { PostListSkeleton } from "../../../widgets/PostListSkeleton/PostListSkeleton";
import styles from "./TodoDetailPage.module.css";

export const TodoDetailPage = () => {
  const { todoId } = useParams<{ todoId: string }>();
  const navigate = useNavigate();
  const { theme } = useTheme();

  const { data: todo, isLoading, error } = useGetTodoByIdQuery(todoId ?? "");

  if (isLoading) return <div className={styles.container}><PostListSkeleton length={1} /></div>;
  if (error) return <div className={styles.container}>Ошибка: {JSON.stringify(error)}</div>;

  const isDark = theme === "dark";
  const cardTheme = `${styles.card} ${isDark ? styles.cardDark : ""}`;
  const statusTheme = todo?.completed ? styles.statusDone : styles.statusPending;

  return (
    <div className={styles.container}>
      <Button onClick={() => navigate(-1)}>← Назад к списку</Button>

      <article className={cardTheme}>
        <div className={styles.header}>
          <span className={statusTheme}>
            {todo?.completed ? "Выполнено" : "В работе"}
          </span>
          <span className={styles.todoId}>Задача №{todo?.id}</span>
        </div>
        
        <h1 className={`${styles.name} ${isDark ? styles.titleDark : ""}`}>
          {todo?.title}
        </h1>
        
        <p className={styles.info}>todoId пользователя: {todo?.userId}</p>
      </article>
    </div>
  );
};
