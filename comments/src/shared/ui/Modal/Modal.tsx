import type { ReactNode } from "react";
import { Portal } from "./Portal";
import styles from "./Modal.module.css";

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
};

export const Modal = ({ children, onClose }: ModalProps) => {
  return (
    <Portal>
      <div className={styles.overlay} onClick={onClose}>
        <div className={styles.content} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </Portal>
  );
};

Modal.Header = ({ children }: { children: ReactNode }) => (
  <div className={styles.header}>{children}</div>
);

Modal.Body = ({ children }: { children: ReactNode }) => (
  <div className={styles.body}>{children}</div>
);

Modal.Footer = ({ children }: { children: ReactNode }) => (
  <div className={styles.footer}>{children}</div>
);
