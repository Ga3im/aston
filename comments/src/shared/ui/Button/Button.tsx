import type { MouseEventHandler, ReactNode } from "react";

type ButtonType = {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const Button = ({ children, onClick }: ButtonType) => {
  return (
    <>
      <button onClick={onClick}>{children}</button>
    </>
  );
};
