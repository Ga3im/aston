import { useNavigate } from "react-router-dom";
import { useTheme } from "../../../shared/lib/theme/useTheme";
import styles from "./TodoCard.module.css";

type TodoCardProps = {
  todo: {
    id: number;
    title: string;
    completed: boolean;
  };
};

export const TodoCard = ({ todo }: TodoCardProps) => {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const isDark = theme === "dark";
  const cardTheme = isDark ? `${styles.card} ${styles.cardDark}` : styles.card;
  const titleTheme = todo.completed ? styles.completedTitle : styles.todoTitle;

  return (
    <div className={cardTheme} onClick={() => navigate(`/todos/${todo.id}`)}>
      <div className={styles.statusWrapper}>
        <input
          type="checkbox"
          checked={todo.completed}
          readOnly
          className={styles.checkbox}
        />
      </div>
      <div className={styles.info}>
        <h3 className={titleTheme}>{todo.title}</h3>
      </div>
    </div>
  );
};
