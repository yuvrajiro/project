// src/hooks/useDarkMode.ts
import { useState, useEffect } from "react";

export function useDarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) {
      setDarkMode(JSON.parse(savedMode));
      if (JSON.parse(savedMode)) {
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
  };

  return { darkMode, toggleDarkMode };
}
