import { useState, type MouseEvent, type ReactNode } from "react";
import styles from "./ExpandableText.module.css";

type ExpandableTextType = {
  children: ReactNode;
};

export const ExpandableText = ({ children }: ExpandableTextType) => {
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
