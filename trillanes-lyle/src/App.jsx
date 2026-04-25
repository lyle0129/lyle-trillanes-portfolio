import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

function DotGrid({ isDark }) {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: -9999, y: -9999 });
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const SPACING = 28;
    const RADIUS = 1.5;
    const MAX_DIST = 120;

    const dotColor = isDark ? [215, 182, 147] : [139, 94, 52]; // warm tones

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cols = Math.ceil(canvas.width / SPACING);
      const rows = Math.ceil(canvas.height / SPACING);
      const mx = mouse.current.x;
      const my = mouse.current.y;

      for (let r = 0; r <= rows; r++) {
        for (let c = 0; c <= cols; c++) {
          const x = c * SPACING;
          const y = r * SPACING;
          const dx = mx - x;
          const dy = my - y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const proximity = Math.max(0, 1 - dist / MAX_DIST);
          const alpha = 0.08 + proximity * 0.7;
          const radius = RADIUS + proximity * 2.5;

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${dotColor[0]}, ${dotColor[1]}, ${dotColor[2]}, ${alpha})`;
          ctx.fill();
        }
      }
      animRef.current = requestAnimationFrame(draw);
    }

    const onMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    const onMouseLeave = () => {
      mouse.current = { x: -9999, y: -9999 };
    };

    resize();
    window.addEventListener("resize", resize);
    window.removeEventListener("scroll", resize);
    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}

function App() {
  // ✅ Initialize from localStorage (script in index.html already set DOM correctly)
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <div className="relative bg-[#fdf8f3] text-[#3e2f1c] dark:bg-[#1c1917] dark:text-[#f4e9dc] transition-colors duration-500 min-h-screen">
      <DotGrid isDark={isDark} />
      <div className="relative z-10">
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
    </div>
  );
}

export default App;
