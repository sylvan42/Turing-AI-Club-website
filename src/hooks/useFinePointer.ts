"use client";

import { useEffect, useState } from "react";

/** True on devices with a precise pointer (mouse/trackpad). */
export function useFinePointer() {
  const [fine, setFine] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(pointer: fine)");
    setFine(query.matches);
    const onChange = (e: MediaQueryListEvent) => setFine(e.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return fine;
}
