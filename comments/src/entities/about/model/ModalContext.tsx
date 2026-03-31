import { createContext, useState, type ReactNode } from "react";

interface ModalContextType {
  isAboutOpen: boolean;
  openAbout: () => void;
  closeAbout: () => void;
}

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const openAbout = () => setIsAboutOpen(true);
  const closeAbout = () => setIsAboutOpen(false);

  return (
    <ModalContext.Provider value={{ isAboutOpen, openAbout, closeAbout }}>
      {children}
    </ModalContext.Provider>
  );
};
