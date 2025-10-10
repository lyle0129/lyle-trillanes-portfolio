import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ theme, toggleTheme }) {
  console.log("ToggleTheme sees theme:", theme);
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-[#8b5e34]/10 dark:hover:bg-[#d7b693]/10 transition-colors"
      aria-label="Toggle theme"
    >
      {theme ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}
