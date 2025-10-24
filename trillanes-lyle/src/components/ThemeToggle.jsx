import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ theme, toggleTheme }) {
  // theme = true (dark), false (light)
  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center w-14 h-8 rounded-full bg-[#d7b693]/40 dark:bg-[#8b5e34]/40 transition-colors duration-300"
      aria-label="Toggle theme"
    >
      {/* Sliding knob */}
      <span
        className={`absolute w-6 h-6 bg-white dark:bg-gray-800 rounded-full shadow-md transform transition-transform duration-300 ${
          theme ? "translate-x-7" : "translate-x-1"
        }`}
      ></span>

      {/* Icons (sun and moon) */}
      <div className="absolute flex justify-between w-full px-2 text-[#8b5e34] dark:text-[#d7b693]">
        <Sun
          size={16}
          className={`${!theme ? "opacity-100" : "opacity-50"} transition-opacity duration-300`}
        />
        <Moon
          size={16}
          className={`${theme ? "opacity-100" : "opacity-50"} transition-opacity duration-300`}
        />
      </div>
    </button>
  );
}
