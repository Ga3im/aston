import { useGetCommentsQuery } from "../../../entities/comment/api/commentApi";
import { CommentCard } from "../../../entities/comment/ui/CommentCard";
import { useTheme } from "../../../shared/lib/theme/useTheme";
import { ItemList } from "../../../shared/ui/ItemList/ItemList";
import { Skeleton } from "../../../widgets/Skeleton/Skeleton";
import styles from "./CommentListPage.module.css";

export const CommentListPage = () => {
  const { theme } = useTheme();
  const { data: comments = [], isLoading, error } = useGetCommentsQuery();

  if (isLoading)
    return (
      <div className={styles.container}>
        <Skeleton length={10} />
      </div>
    );

  if (error) return <div>Ошибка при получении комментариев</div>;

  const isDark = theme === "dark";

  return (
    <section className={styles.container}>
      <h1 className={isDark ? styles.titleDark : ""}>
        Все комментарии сообщества
      </h1>

      <ItemList
        items={comments}
        keyExtractor={(comment) => comment.id}
        renderItem={(comment) => <CommentCard comment={comment} />}
        className={styles.list}
      />
    </section>
  );
};
