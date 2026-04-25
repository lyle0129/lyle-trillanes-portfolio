import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import projects from "./data/ProjectsData";
import { X, FileText, Github, ExternalLink, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Infinite auto-scroll carousel for featured projects
function FeaturedCarousel({ items, onSelect }) {
  const trackRef = useRef(null);
  const animRef = useRef(null);
  const posRef = useRef(0);
  const pausedRef = useRef(false);
  const SPEED = 0.5; // px per frame

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const raf = requestAnimationFrame(() => {
      const halfWidth = track.scrollWidth / 2;

      const step = () => {
        if (!pausedRef.current) {
          posRef.current += SPEED;
          if (posRef.current >= halfWidth) posRef.current = 0;
          track.style.transform = `translateX(-${posRef.current}px)`;
        }
        animRef.current = requestAnimationFrame(step);
      };
      animRef.current = requestAnimationFrame(step);
    });

    return () => {
      cancelAnimationFrame(raf);
      cancelAnimationFrame(animRef.current);
    };
  }, [items]);

  const looped = [...items, ...items];

  return (
    <div
      className="overflow-hidden w-full"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
    >
      <div ref={trackRef} className="flex gap-6 w-max">
        {looped.map((project, i) => (
          <div
            key={i}
            onClick={() => onSelect(project)}
            className="w-80 flex-shrink-0 bg-[#fdf8f3] dark:bg-[#1f1d1b] rounded-xl shadow-md border border-[#d9c8b4] dark:border-[#2a2623] flex flex-col overflow-hidden cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-transform duration-200"
          >
            {project.thumbnail && (
              <div className="w-full aspect-video overflow-hidden">
                <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />
              </div>
            )}
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-lg font-semibold mb-1 text-[#3e2f1c] dark:text-[#f4e9dc]">{project.title}</h3>
              <p className="text-xs text-[#6b4b2f] dark:text-[#d1bfa7] mb-4 line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.technologies?.slice(0, 3).map((tech, idx) => (
                  <span key={idx} className="px-2 py-0.5 text-xs rounded-full bg-[#8b5e34]/10 dark:bg-[#d7b693]/10 text-[#8b5e34] dark:text-[#d7b693] border border-[#8b5e34]/30 dark:border-[#d7b693]/30">
                    {tech}
                  </span>
                ))}
                {project.technologies?.length > 3 && (
                  <span className="px-2 py-0.5 text-xs rounded-full bg-[#8b5e34]/5 text-[#8b5e34] dark:text-[#d7b693] border border-dashed border-[#8b5e34]/30 dark:border-[#d7b693]/30">
                    +{project.technologies.length - 3} more
                  </span>
                )}
              </div>
              <button
                onClick={(e) => { e.stopPropagation(); onSelect(project); }}
                className="mt-auto self-start bg-[#8b5e34] hover:bg-[#704a29] dark:bg-[#d7b693] dark:hover:bg-[#c2a67e] text-white dark:text-[#1c1917] px-4 py-1.5 text-sm rounded-lg transition-colors"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Projects({ showAll = false }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const displayedProjects = showAll ? projects : projects.filter((p) => p.featured);

  useEffect(() => {
    document.body.style.overflow = selectedProject || selectedImage ? "hidden" : "";
  }, [selectedProject, selectedImage]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
        setSelectedImage(null);
        if (window.history.state?.modalOpen) window.history.back();
      }
    };
    const handlePopState = () => {
      if (selectedProject || selectedImage) {
        setSelectedProject(null);
        setSelectedImage(null);
      }
    };
    if (selectedProject || selectedImage) {
      window.history.pushState({ modalOpen: true }, "");
    }
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("popstate", handlePopState);
    };
  }, [selectedProject, selectedImage]);

  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center px-4 sm:px-8">
        {showAll ? "Projects" : "Featured Projects"}
      </h2>

      {/* ── Infinite scroll carousel (home page) ── */}
      {!showAll ? (
        <>
          <FeaturedCarousel items={displayedProjects} onSelect={setSelectedProject} />
          <div className="flex justify-center mt-10 px-4 sm:px-8">
            <Link
              to="/projects"
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-[#8b5e34]/40 dark:border-[#d7b693]/40 text-[#8b5e34] dark:text-[#d7b693] hover:bg-[#8b5e34] hover:dark:bg-[#d7b693] hover:text-white hover:dark:text-[#1c1917] hover:border-transparent transition font-medium"
            >
              See All Projects <ArrowRight size={18} />
            </Link>
          </div>
        </>
      ) : (
        /* ── Grid (all projects page) ── */
        <div className="px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={index}
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.6 }}
              className="bg-[#fdf8f3] dark:bg-[#1f1d1b] rounded-xl shadow-md border border-[#d9c8b4] dark:border-[#2a2623] flex flex-col justify-between hover:translate-y-[-3px] hover:shadow-lg transition overflow-hidden"
            >
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-2 text-[#3e2f1c] dark:text-[#f4e9dc]">{project.title}</h3>
                <p className="text-sm text-[#6b4b2f] dark:text-[#d1bfa7] mb-4">{project.description}</p>
                {project.technologies?.length > 0 && (
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 text-xs rounded-full bg-[#8b5e34]/10 dark:bg-[#d7b693]/10 text-[#8b5e34] dark:text-[#d7b693] border border-[#8b5e34]/30 dark:border-[#d7b693]/30 hover:translate-y-[-3px] hover:bg-[#8b5e34]/20 dark:hover:bg-[#d7b693]/20 transition">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 text-xs rounded-full bg-[#8b5e34]/5 text-[#8b5e34] dark:text-[#d7b693] border border-dashed border-[#8b5e34]/30 dark:border-[#d7b693]/30 hover:translate-y-[-3px] hover:bg-[#8b5e34]/20 dark:hover:bg-[#d7b693]/20 transition">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                )}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="mt-auto bg-[#8b5e34] hover:bg-[#704a29] dark:bg-[#d7b693] dark:hover:bg-[#c2a67e] text-white dark:text-[#1c1917] px-4 py-2 rounded-lg transition-colors"
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Project Details Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4 sm:p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white dark:bg-[#2b2521] p-6 rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setSelectedProject(null)} className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition">
              <X size={22} />
            </button>
            <h2 className="text-2xl font-semibold mb-4 text-[#3e2f1c] dark:text-[#f4e9dc]">{selectedProject.title}</h2>
            <p className="text-[#6b4b2f] dark:text-[#d1bfa7] mb-6">{selectedProject.description}</p>
            <div className="mb-2 text-sm text-center text-[#8b5e34] dark:text-[#d7b693] opacity-80">
              Click on an image to view it larger
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {selectedProject.media.map((src, idx) => (
                <div
                  key={idx}
                  className="rounded-lg overflow-hidden border border-[#d9c8b4] dark:border-[#3a322e] flex items-center justify-center bg-gray-100 dark:bg-[#1a1613] cursor-pointer hover:opacity-80 transition"
                  onClick={() => { if (!selectedProject.video) setSelectedImage(src); }}
                >
                  {selectedProject.video ? (
                    <video src={src} autoPlay loop muted playsInline className="w-full h-auto max-h-[60vh] object-contain rounded-lg" />
                  ) : (
                    <img src={src} alt={`${selectedProject.title} screenshot ${idx + 1}`} className="w-full h-48 sm:h-56 object-cover" />
                  )}
                </div>
              ))}
            </div>
            {selectedProject.technologies?.length > 0 && (
              <div className="mt-4 mb-6">
                <h3 className="text-md font-semibold text-[#3e2f1c] dark:text-[#f4e9dc] mb-2">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 text-xs rounded-full bg-[#8b5e34]/10 dark:bg-[#d7b693]/10 text-[#8b5e34] dark:text-[#d7b693] border border-[#8b5e34]/30 dark:border-[#d7b693]/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
            <div className="flex flex-wrap gap-3 mt-4">
              {selectedProject.doclink && (
                <a href={selectedProject.doclink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2 rounded-lg border border-[#d9c8b4] dark:border-[#3a322e] text-[#8b5e34] dark:text-[#d7b693] hover:bg-[#8b5e34]/10 dark:hover:bg-[#d7b693]/10 transition">
                  <FileText size={18} /><span>Publication</span>
                </a>
              )}
              {selectedProject.gitlink && (
                <a href={selectedProject.gitlink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2 rounded-lg border border-[#d9c8b4] dark:border-[#3a322e] text-[#8b5e34] dark:text-[#d7b693] hover:bg-[#8b5e34]/10 dark:hover:bg-[#d7b693]/10 transition">
                  <Github size={18} /><span>Code</span>
                </a>
              )}
              {selectedProject.demolink && (
                <a href={selectedProject.demolink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2 rounded-lg border border-[#d9c8b4] dark:border-[#3a322e] text-[#8b5e34] dark:text-[#d7b693] hover:bg-[#8b5e34]/10 dark:hover:bg-[#d7b693]/10 transition">
                  <ExternalLink size={18} /><span>Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[60] p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative w-full max-w-5xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedImage(null)} className="absolute top-3 right-3 text-gray-300 hover:text-white transition">
              <X size={24} />
            </button>
            <img src={selectedImage} alt="Fullscreen preview" className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-lg" />
          </div>
        </div>
      )}
    </section>
  );
}
