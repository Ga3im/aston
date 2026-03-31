import { useContext } from "react";
import { ModalContext } from "./ModalContext";

export const useAboutModal = () => {
  const context = useContext(ModalContext);
  if (!context)
    throw new Error("useAboutModal must be used within ModalProvider");
  return context;
};
