"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative w-9 h-9 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
    >
      <div className="relative w-5 h-5">
        <Sun className="absolute h-5 w-5 transition-all dark:opacity-0" />
        <Moon className="absolute h-5 w-5 transition-all opacity-0 dark:opacity-100" />
      </div>
      <span className="sr-only">Toggle theme</span>
    </button>
  );
} 