import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center text-center py-24"
    >
      <motion.h1
        className="text-4xl sm:text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        Hi, I'm{" "}
        <span className="text-[#8b5e34] dark:text-[#d7b693]">
          Lyle Trillanes
        </span>
      </motion.h1>

      <motion.p
        className="text-lg max-w-xl mb-6 text-[#5b4636] dark:text-[#f4e9dc]/80"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        A passionate developer creating smart, aesthetic, and functional digital
        experiences.
      </motion.p>

      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
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
      </motion.div>
    </section>
  );
}
