import { useTheme } from "../../../shared/lib/theme/useTheme";
import styles from "./TodoCard.module.css";

type TodoCardProps = {
  data: {
    id: number;
    title: string;
    completed: boolean;
  };
};

export const TodoCard = ({ data }: TodoCardProps) => {
  const { theme } = useTheme();

  const isDark = theme === "dark";
  const cardTheme = isDark ? `${styles.card} ${styles.cardDark}` : styles.card;
  const titleTheme = data.completed ? styles.completedTitle : styles.todoTitle;

  return (
    <div className={cardTheme}>
      <div className={styles.statusWrapper}>
        <input
          type="checkbox"
          checked={data.completed}
          readOnly 
          className={styles.checkbox}
        />
      </div>
      <div className={styles.info}>
        <h3 className={titleTheme}>{data.title}</h3>
      </div>
    </div>
  );
};
