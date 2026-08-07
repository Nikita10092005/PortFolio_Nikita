"use client";
import { useEffect, useState } from "react";

/** Tracks which section id is currently in view, for nav active-state highlighting. */
export function useScrollSpy(ids: string[], offset = 160) {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => {
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - offset) {
          current = id;
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids, offset]);

  return active;
}
