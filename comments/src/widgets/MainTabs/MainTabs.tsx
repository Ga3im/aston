import { NavLink } from "react-router-dom";
import styles from "./MainTabs.module.css";

export const MainTabs = () => {

  return (
    <nav className={styles.tabs}>
      <NavLink
        to={`/posts`}
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
      >
        Посты
      </NavLink>
      <NavLink
        to={`/comments`}
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
      >
        Комментарии
      </NavLink>
      <NavLink
        to={`/albums`}
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
      >
        Альбомы
      </NavLink>
      <NavLink
        to={`/photos`}
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
      >
        Фотографии
      </NavLink>
      <NavLink
        to={`/todos`}
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
      >
        Задачи
      </NavLink>
      <NavLink
        to={`/users`}
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
      >
        Пользователи
      </NavLink>
    </nav>
  );
};
