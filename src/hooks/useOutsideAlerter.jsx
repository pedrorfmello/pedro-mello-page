import { useEffect, useState } from "react";

export default function useOutsideAlerter({menuRef, setMenuOpened}) {
  const viewport_width = document.documentElement.clientWidth;
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        if (viewport_width <= 640) {
            setMenuOpened(false);
        }
      }
    }
    // Binda o event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Disbinda o event listener ao limpar o componente
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

}