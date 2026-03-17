import React from "react";
import styles from "./Header.module.css";
import { fetchPosts } from "../../entities/post/api/getPosts";

export const LayoutHeader: React.FC = () => {
  fetchPosts();
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>
        🚀 Posts
      </a>
    </header>
  );
};
