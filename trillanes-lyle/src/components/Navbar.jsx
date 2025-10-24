import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [showTooltip, setShowTooltip] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // 🔹 Highlight section in view
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const linkClasses = (id) =>
    `relative transition-colors ${
      activeSection === id
        ? "text-[#8b5e34] dark:text-[#d7b693] font-semibold after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-[#8b5e34] dark:after:bg-[#d7b693]"
        : "hover:text-[#8b5e34] dark:hover:text-[#d7b693]"
    }`;

  return (
    <nav className="fixed top-1 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-[90%] lg:w-[90%] 
      bg-[#fdf8f3]/80 dark:bg-[#1c1917]/80 
      backdrop-blur-xl border border-[#d7b693]/40 dark:border-[#8b5e34]/40 
      rounded-2xl shadow-lg transition-all duration-300">
      <div className="px-6 py-3 flex justify-between items-center">

        {/* Logo / Name */}
        <div
          className="relative cursor-pointer"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          onClick={() => setShowTooltip((prev) => !prev)} // toggle on tap
        >
          <h1 className="text-xl font-bold text-[#8b5e34] dark:text-[#d7b693]">
            Lyle Trillanes
          </h1>

          {/* Tooltip below */}
          {showTooltip && (
            <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 bg-[#8b5e34] dark:bg-[#d7b693] text-white dark:text-[#1c1917] text-xs px-2 py-1 rounded whitespace-nowrap z-50 shadow-md">
              loves Joize Barbie dela Cruz
            </span>
          )}
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#about" className={linkClasses("about")}>
            About
          </a>
          <a href="#projects" className={linkClasses("projects")}>
            Projects
          </a>
          <a href="#experience" className={linkClasses("experience")}>
            Experience
          </a>
          <a href="#contact" className={linkClasses("contact")}>
            Contact
          </a>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden relative w-8 h-8 flex items-center justify-center text-[#8b5e34] dark:text-[#d7b693] focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6">
            <Menu
              size={24}
              className={`absolute inset-0 transform transition-all duration-300 ${
                menuOpen
                  ? "opacity-0 scale-75 rotate-90"
                  : "opacity-100 scale-100 rotate-0"
              }`}
            />
            <X
              size={24}
              className={`absolute inset-0 transform transition-all duration-300 ${
                menuOpen
                  ? "opacity-100 scale-100 rotate-0"
                  : "opacity-0 scale-75 -rotate-90"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#fdf8f3] dark:bg-[#1c1917] border-t border-[#d7b693]/40 dark:border-[#8b5e34]/40">
          <div className="flex flex-col gap-4 py-4 px-10">
            <a href="#about" onClick={toggleMenu} className={linkClasses("about")}>
              About
            </a>
            <a href="#projects" onClick={toggleMenu} className={linkClasses("projects")}>
              Projects
            </a>
            <a href="#experience" onClick={toggleMenu} className={linkClasses("experience")}>
              Experience
            </a>
            <a href="#contact" onClick={toggleMenu} className={linkClasses("contact")}>
              Contact
            </a>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
        </div>
      </div>
    </nav>
  );
}
