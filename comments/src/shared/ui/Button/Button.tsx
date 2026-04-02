import type { MouseEventHandler, ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonType = {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const Button = ({ children, onClick }: ButtonType) => {
  return (
      <button className={styles.button} onClick={onClick}>
        {children}
      </button>
  );
};
