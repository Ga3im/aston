import { useState, type ReactNode } from "react";
import styles from "./ExpandableText.module.css";

type CommentListType = {
  children: ReactNode;
};

export const ExpandableText = ({ children }: CommentListType) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenCommetBody = () => {
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
