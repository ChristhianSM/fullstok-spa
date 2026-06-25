import React, { useEffect, useState } from "react";
import { Button } from "../ui";

type theme = "light" | "dark";

export const ThemeToggler = () => {
  const [theme, setTheme] = useState<theme>(() => {
    return document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
  });

  useEffect(() => {
    const html = document.documentElement;
    html.classList.remove("dark", "light");
    html.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    function handleChange(e: MediaQueryListEvent) {
      if (!localStorage.getItem("theme")) {
        setTheme(e.matches ? "dark" : "light");
      }
    }

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  function toggleTheme() {
    const nextTheme: theme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
  }

  const isDark = theme === "dark";
  const label = isDark ? "Cambiar a modo Claro" : "Cambiar a modo oscuro";

  return (
    <Button
      type="button"
      variant="ghost"
      size="xl-icon"
      aria-label={label}
      onClick={toggleTheme}
    >
      <img
        src={isDark ? "/images/icons/sun.svg" : "/images/icons/moon.svg"}
        alt=""
      />
    </Button>
  );
};

export default ThemeToggler;
