import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

function App() {
  // ✅ Initialize from localStorage (script in index.html already set DOM correctly)
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    console.log("isDark:", isDark); // 👈 see if toggling updates this
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);
  

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <div className="bg-[#fdf8f3] text-[#3e2f1c] dark:bg-[#1c1917] dark:text-[#f4e9dc] transition-colors duration-500 min-h-screen">
      <Navbar theme={isDark} toggleTheme={toggleTheme} />
      <main className="max-w-5xl mx-auto px-6">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="text-center text-sm py-6 text-[#8b5e34] dark:text-[#d7b693]">
        © {new Date().getFullYear()} Lyle Denzell C. Trillanes
      </footer>
    </div>
  );
}

export default App;
