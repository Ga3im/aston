import { useContext } from "react";
import { AppContext } from "./ThemeProvider";

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("Context равен null");
  }
  return context;
};
