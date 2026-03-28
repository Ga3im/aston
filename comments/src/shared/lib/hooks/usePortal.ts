import { useEffect, useState } from "react";

export const usePortal = (id = "portal-root") => {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    let el = document.getElementById(id);
    if (!el) {
       el = document.createElement("div");
       el.id = id;
       document.body.appendChild(el);
    }
    setContainer(el);
  }, [id]);

  return container;
};