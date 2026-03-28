import { useAboutModal } from "../../shared/lib/modal/useAboutModal";
import { Portal } from "../../shared/ui/Modal/Modal";
import styles from "./AboutModal.module.css";

export const AboutModal = () => {
  const { isAboutOpen, closeAbout } = useAboutModal();

  if (!isAboutOpen) return null;

  return (
    <Portal>
      <div className={styles.overlay} onClick={closeAbout}>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          <h2 className={styles.title}>О проекте</h2>
          <div className={styles.text}>
            <p>Это приложение для обмена постами и комментариями.</p>
            <p>
              <strong>Стек:</strong> React, CSS Modules, FSD.
            </p>
          </div>
          <button className={styles.closeBtn} onClick={closeAbout}>
            Закрыть
          </button>
        </div>
      </div>
    </Portal>
  );
};
