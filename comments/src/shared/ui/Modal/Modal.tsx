import { type ReactNode } from "react";
import { createPortal } from "react-dom";
import { usePortal } from "../../lib/theme/hooks/usePortal";

type PortalType = {
  children: ReactNode;
};

export const Portal = ({ children }: PortalType) => {
  const container = usePortal();

  if (!container) return null;
  return createPortal(children, container);
};
