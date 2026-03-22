import React from "react";
import styles from "./Footer.module.css";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Секция о нас */}
        <div className={styles.section}>
          <h3 className={styles.title}>О проекте</h3>
          <p className={styles.link}>
            Лучшая платформа для общения и обмена мнениями. Присоединяйтесь к
            нашему сообществу.
          </p>
        </div>

        {/* Навигация */}
        <div className={styles.section}>
          <h3 className={styles.title}>Навигация</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <a href="/" className={styles.link}>
                Главная
              </a>
            </li>
            <li className={styles.listItem}>
              <a href="/comments" className={styles.link}>
                Комментарии
              </a>
            </li>
            <li className={styles.listItem}>
              <a href="/rules" className={styles.link}>
                Правила
              </a>
            </li>
          </ul>
        </div>

        {/* Контакты */}
        <div className={styles.section}>
          <h3 className={styles.title}>Поддержка</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <a href="mailto:support@site.com" className={styles.link}>
                support@site.com
              </a>
            </li>
            <li className={styles.listItem}>
              <a href="/faq" className={styles.link}>
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
