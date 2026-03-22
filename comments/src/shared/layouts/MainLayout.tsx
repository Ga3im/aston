import { Header } from "../../widgets/LayoutHeader/Header";
import { Footer } from "../../widgets/LayoutFooter/Footer";
import type { ReactNode } from "react";

type MainLayoutType = {
  children: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutType) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
