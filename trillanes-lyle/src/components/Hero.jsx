export default function Hero() {
    return (
      <section
        id="hero"
        className="flex flex-col items-center justify-center text-center py-24"
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Hi, I'm{" "}
          <span className="text-[#8b5e34] dark:text-[#d7b693]">
            Lyle Trillanes
          </span>
        </h1>
        <p className="text-lg max-w-xl mb-6 text-[#5b4636] dark:text-[#f4e9dc]/80">
          A passionate developer creating smart, aesthetic, and functional
          digital experiences.
        </p>
        <div className="flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-[#8b5e34] text-white rounded-xl hover:bg-[#734b2b] transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-[#8b5e34] text-[#8b5e34] dark:border-[#d7b693] dark:text-[#d7b693] rounded-xl hover:bg-[#8b5e34]/10 dark:hover:bg-[#d7b693]/10 transition"
          >
            Contact Me
          </a>
        </div>
      </section>
    );
  }
  