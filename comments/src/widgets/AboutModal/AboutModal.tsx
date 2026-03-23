import { Portal } from "../../shared/ui/Modal/Modal";
import styles from "./AboutModal.module.css";

interface AboutModalProps {
  onClose: () => void;
}

export const AboutModal = ({ onClose }: AboutModalProps) => {
  return (
    <Portal>
      <div className={styles.overlay} onClick={onClose}>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          <h2 className={styles.title}>О проекте</h2>
          <div className={styles.text}>
            <p>Это приложение для обмена постами и комментариями.</p>
            <p>
              <strong>Стек:</strong> React, CSS Modules, FSD.
            </p>
          </div>
          <button className={styles.closeBtn} onClick={onClose}>
            Закрыть
          </button>
        </div>
      </div>
    </Portal>
  );
};
