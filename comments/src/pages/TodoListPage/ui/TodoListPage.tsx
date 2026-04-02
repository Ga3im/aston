import { useGetTodoQuery } from "../../../entities/todo/api/todoApi";
import { useTheme } from "../../../shared/lib/theme/useTheme";
import styles from "./TodoListPage.module.css";
import { ItemList } from "../../../shared/ui/ItemList/ItemList";
import { TodoCard } from "../../../entities/todo/ui/TodoCard";
import { Skeleton } from "../../../widgets/Skeleton/Skeleton";

export const TodoListPage = () => {
  const { theme } = useTheme();
  const { data: todos = [], isLoading, error } = useGetTodoQuery();

  if (isLoading)
    return (
      <div className={styles.container}>
        <Skeleton length={10} />
      </div>
    );

  if (error)
    return <div className={styles.container}>Ошибка загрузки задач</div>;

  const isDark = theme === "dark";

  return (
    <div className={styles.container}>
      <h1 className={isDark ? styles.titleDark : ""}>Список задач (100)</h1>
      <ItemList
        items={todos}
        keyExtractor={(todo) => todo.id}
        renderItem={(todo) => <TodoCard todo={todo} />}
        className={styles.list}
      />
    </div>
  );
};
