import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Projects from "../components/Projects";
import Navbar from "../components/Navbar";

export default function AllProjectsPage({ isDark, toggleTheme }) {
  return (
    <>
      <Navbar theme={isDark} toggleTheme={toggleTheme} isProjectsPage />
      <main className="max-w-5xl mx-auto px-6 pt-24">
        <div className="flex items-center gap-3 mb-2">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-[#8b5e34] dark:text-[#d7b693] hover:underline"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
        <Projects showAll />
      </main>
      <footer className="text-center text-sm py-6 text-[#8b5e34] dark:text-[#d7b693]">
        © {new Date().getFullYear()} Lyle Denzell C. Trillanes
      </footer>
    </>
  );
}
