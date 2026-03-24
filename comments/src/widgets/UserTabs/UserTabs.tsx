import { NavLink, useParams } from "react-router-dom";
import styles from "./UserTabs.module.css";

export const UserTabs = () => {
  const { id } = useParams(); 

  return (
    <nav className={styles.tabs}>
      <NavLink 
        to={`/users/${id}/posts`} 
        className={({ isActive }) => isActive ? styles.active : styles.link}
      >
        Посты
      </NavLink>
      
      <NavLink 
        to={`/users/${id}/albums`} 
        className={({ isActive }) => isActive ? styles.active : styles.link}
      >
        Альбомы
      </NavLink>
      
      <NavLink 
        to={`/users/${id}/todos`} 
        className={({ isActive }) => isActive ? styles.active : styles.link}
      >
        Задачи
      </NavLink>
    </nav>
  );
};
