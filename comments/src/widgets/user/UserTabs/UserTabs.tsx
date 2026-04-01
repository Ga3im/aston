import { NavLink, useParams } from "react-router-dom";
import styles from "./UserTabs.module.css";

export const UserTabs = () => {
  const { userId } = useParams();

  return (
    <nav className={styles.tabs}>
      <NavLink
        to={`/users/${userId}/posts`}
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
      >
        Посты
      </NavLink>

      <NavLink
        to={`/users/${userId}/albums`}
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
      >
        Альбомы
      </NavLink>

      <NavLink
        to={`/users/${userId}/todos`}
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
      >
        Задачи
      </NavLink>
    </nav>
  );
};
