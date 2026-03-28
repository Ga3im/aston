import { useGetUsersQuery } from "../../../entities/user/api/usersApi";
import { UserCard } from "../../../entities/user/ui/UserCard";
import styles from "./UserListPage.module.css";

export const UserListPage = () => {
  const { data: users, isLoading, error } = useGetUsersQuery();

  if (isLoading) return <div>Загрузка пользователей...</div>;
  if (error) return <div>Ошибка загрузки</div>;

  return (
    <section className={styles.container}>
      <h1>Пользователи</h1>
      <div className={styles.grid}>
        {users?.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </section>
  );
};
