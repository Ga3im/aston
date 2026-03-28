import { useNavigate } from "react-router-dom";
import { useGetTodoQuery } from "../../../entities/todo/api/todoApi";
import { PostListSkeleton } from "../../../widgets/PostListSkeleton/PostListSkeleton";
import { useTheme } from "../../../shared/lib/theme/useTheme";
import styles from "./TodoListPage.module.css";

export const TodoListPage = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const { data: todos, isLoading, error } = useGetTodoQuery();

  if (isLoading)
    return (
      <div className={styles.container}>
        <PostListSkeleton length={10} />
      </div>
    );
  if (error)
    return <div className={styles.container}>Ошибка загрузки задач</div>;

  const isDark = theme === "dark";
  const cardTheme = (completed: boolean) =>
    `${styles.card} ${isDark ? styles.cardDark : ""} ${
      completed ? styles.completed : ""
    }`;

  return (
    <div className={styles.container}>
      <h1 className={isDark ? styles.titleDark : ""}>Список задач (100)</h1>
      <div className={styles.list}>
        {todos?.slice(0, 100).map((todo) => (
          <div
            key={todo.id}
            className={cardTheme(todo.completed)}
            onClick={() => navigate(`/todos/${todo.id}`)}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              readOnly
              className={styles.checkbox}
            />
            <span
              className={`${styles.todoTitle} ${
                isDark ? styles.titleDark : ""
              }`}
            >
              {todo.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
