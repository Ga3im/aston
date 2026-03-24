import { useState, type MouseEvent, type ReactNode } from "react";
import styles from "./CommentList.module.css";

type CommentListType = {
  children: ReactNode;
};

export const CommentList = ({ children }: CommentListType) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenCommetBody = (e: MouseEvent<HTMLParagraphElement>) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };
  return (
    <p
      onClick={handleOpenCommetBody}
      className={isOpen ? styles.fullText : styles.text}
    >
      {children}
    </p>
  );
};
