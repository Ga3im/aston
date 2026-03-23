import React from "react";
import styles from "./Footer.module.css";
import { useApp } from "../../shared/lib/theme/useApp";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useApp();

  const footerTheme =
    theme === "dark" ? `${styles.footer} ${styles.footerDark}` : styles.footer;
  const linkTheme =
    theme === "dark" ? `${styles.link} ${styles.linkDark}` : styles.link;

  return (
    <footer className={footerTheme}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h3 className={styles.title}>О проекте</h3>
          <p className={linkTheme}>
            Лучшая платформа для общения и обмена мнениями. Присоединяйтесь к
            нашему сообществу.
          </p>
        </div>

        <div className={styles.section}>
          <h3 className={styles.title}>Навигация</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <a href="/" className={linkTheme}>
                Главная
              </a>
            </li>
            <li className={styles.listItem}>
              <a href="/comments" className={linkTheme}>
                Комментарии
              </a>
            </li>
            <li className={styles.listItem}>
              <a href="/rules" className={linkTheme}>
                Правила
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3 className={styles.title}>Поддержка</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <a href="mailto:support@site.com" className={linkTheme}>
                support@site.com
              </a>
            </li>
            <li className={styles.listItem}>
              <a href="/faq" className={linkTheme}>
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        &copy; {currentYear} CommentSite Inc. Все права защищены.
      </div>
    </footer>
  );
};
