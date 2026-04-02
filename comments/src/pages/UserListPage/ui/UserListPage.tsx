import { useGetUsersQuery } from "../../../entities/user/api/usersApi";
import { UserCard } from "../../../entities/user/ui/UserCard";
import { useTheme } from "../../../shared/lib/theme/useTheme";
import { ItemList } from "../../../shared/ui/ItemList/ItemList";
import { Skeleton } from "../../../widgets/Skeleton/Skeleton";
import styles from "./UserListPage.module.css";

export const UserListPage = () => {
  const { theme } = useTheme();

  const { data: users = [], isLoading, error } = useGetUsersQuery();

  if (isLoading)
    return (
      <div className={styles.container}>
        <Skeleton column={3} length={6} />
      </div>
    );

  if (error) return <div>Ошибка загрузки</div>;

  const isDark = theme === "dark";

  return (
    <section className={styles.container}>
      <h1 className={isDark ? styles.titleDark : ""}>Пользователи</h1>
      <ItemList
        items={users}
        renderItem={(user) => <UserCard user={user} />}
        keyExtractor={(user) => user.id}
        className={styles.grid}
      />
    </section>
  );
};
