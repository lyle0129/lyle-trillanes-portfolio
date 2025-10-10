import { Mail, Linkedin, Github, FileText } from "lucide-react";
import resume from '../assets/Resume_Trillanes.pdf'; 

export default function Contact() {
  return (
    <section id="contact" className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-6 text-[#8b5e34] dark:text-[#d7b693]">
        Get in Touch
      </h2>

      <p className="text-[#5b4636] dark:text-[#f4e9dc]/80 mb-8 max-w-lg mx-auto">
        Feel free to reach out for collaborations, project inquiries, or just
        to say hi 👋
      </p>

      {/* Social Links */}
      <div className="flex justify-center gap-8 mb-8">
        {/* Email */}
        <div className="relative group">
          <a
            href="mailto:lyledenzell29@gmail.com"
            className="text-[#8b5e34] dark:text-[#d7b693] hover:text-[#734b2b] dark:hover:text-[#c9a97d] transition transform hover:scale-110"
            aria-label="Email"
          >
            <Mail size={28} />
          </a>
          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs bg-[#8b5e34] dark:bg-[#d7b693] text-white dark:text-[#1c1917] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            Email
          </span>
        </div>

        {/* LinkedIn */}
        <div className="relative group">
          <a
            href="https://www.linkedin.com/in/lyle-denzell-trillanes-593364293/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8b5e34] dark:text-[#d7b693] hover:text-[#734b2b] dark:hover:text-[#c9a97d] transition transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={28} />
          </a>
          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs bg-[#8b5e34] dark:bg-[#d7b693] text-white dark:text-[#1c1917] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            LinkedIn
          </span>
        </div>

        {/* GitHub */}
        <div className="relative group">
          <a
            href="https://github.com/lyle0129"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8b5e34] dark:text-[#d7b693] hover:text-[#734b2b] dark:hover:text-[#c9a97d] transition transform hover:scale-110"
            aria-label="GitHub"
          >
            <Github size={28} />
          </a>
          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs bg-[#8b5e34] dark:bg-[#d7b693] text-white dark:text-[#1c1917] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            GitHub
          </span>
        </div>

        {/* Resume Download */}
        <div className="relative group">
          <a
            href={resume}
            download="Resume_Trillanes.pdf"
            className="text-[#8b5e34] dark:text-[#d7b693] hover:text-[#734b2b] dark:hover:text-[#c9a97d] transition transform hover:scale-110"
            aria-label="Resume"
          >
            <FileText size={28} />
          </a>
          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs bg-[#8b5e34] dark:bg-[#d7b693] text-white dark:text-[#1c1917] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            Download Resume
          </span>
        </div>
      </div>

      {/* Email Button */}
      <a
        href="mailto:lyledenzell29@gmail.com"
        className="px-6 py-3 bg-[#8b5e34] text-white rounded-xl hover:bg-[#734b2b] transition"
      >
        Email Me
      </a>
    </section>
  );
}
