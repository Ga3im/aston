import React from "react";
import { useNavigate } from "react-router-dom";
import type { User } from "../model/types";
import styles from "./UserCard.module.css";
import { useTheme } from "../../../shared/lib/theme/useTheme";

interface UserCardProps {
  user: User;
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const { id, name, email, company, website } = user;
  const { theme } = useTheme();
  const navigate = useNavigate();

  const cardTheme =
    theme === "dark" ? `${styles.card} ${styles.cardDark}` : styles.card;

  return (
    <article onClick={() => navigate(`/users/${id}/posts`)} className={cardTheme}>
      <h3 className={styles.title}>{name}</h3>
      <div className={styles.info}>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Company:</strong> {company.name}</p>
      </div>
      <div className={styles.footer}>
        <span className={styles.website}>{website}</span>
      </div>
    </article>
  );
};
