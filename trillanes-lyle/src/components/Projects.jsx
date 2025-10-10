import { useState, useEffect } from "react";
import projects from "./data/ProjectsData";
import { X, FileText, Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  // Prevent body scroll when a modal is open
  useEffect(() => {
    if (selectedProject || selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [selectedProject, selectedImage]);

  return (
    <section id="projects" className="py-16 px-4 sm:px-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#fdf8f3] dark:bg-[#1f1d1b] p-6 rounded-xl shadow-md border border-[#d9c8b4] dark:border-[#2a2623] flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2 text-[#3e2f1c] dark:text-[#f4e9dc]">
                {project.title}
              </h3>
              <p className="text-sm text-[#6b4b2f] dark:text-[#d1bfa7] mb-4">
                {project.description}
              </p>
            </div>
            <button
            onClick={() => setSelectedProject(project)}
            className="mt-auto bg-[#8b5e34] hover:bg-[#704a29] dark:bg-[#d7b693] dark:hover:bg-[#c2a67e] text-white dark:text-[#1c1917] px-4 py-2 rounded-lg transition-colors"
            >
            View Details
            </button>
          </div>
        ))}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4 sm:p-6">
          <div className="bg-white dark:bg-[#2b2521] p-6 rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition"
            >
              <X size={22} />
            </button>

            <h2 className="text-2xl font-semibold mb-4 text-[#3e2f1c] dark:text-[#f4e9dc]">
              {selectedProject.title}
            </h2>
            <p className="text-[#6b4b2f] dark:text-[#d1bfa7] mb-6">
              {selectedProject.description}
            </p>

            {/* Media Section */}
            <div className="mb-2 text-sm text-center text-[#8b5e34] dark:text-[#d7b693] opacity-80">
            Click on an image to view it larger
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {selectedProject.media.map((src, idx) => (
                <div
                key={idx}
                className="rounded-lg overflow-hidden border border-[#d9c8b4] dark:border-[#3a322e] flex items-center justify-center bg-gray-100 dark:bg-[#1a1613] cursor-pointer hover:opacity-80 transition"
                onClick={() => {
                    if (!selectedProject.video) setSelectedImage(src);
                }}
                >
                {selectedProject.video ? (
                    <video
                    src={src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto max-h-[60vh] object-contain rounded-lg"
                    />
                ) : (
                    <img
                    src={src}
                    alt={`${selectedProject.title} screenshot ${idx + 1}`}
                    className="w-full h-48 sm:h-56 object-cover"
                    />
                )}
                </div>
            ))}
            </div>

            {/* Tech Stack */}
            {selectedProject.technologies && selectedProject.technologies.length > 0 && (
            <div className="mt-4 mb-6">
                <h3 className="text-md font-semibold text-[#3e2f1c] dark:text-[#f4e9dc] mb-2">
                Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech, idx) => (
                    <span
                    key={idx}
                    className="px-3 py-1 text-xs rounded-full bg-[#8b5e34]/10 dark:bg-[#d7b693]/10 text-[#8b5e34] dark:text-[#d7b693] border border-[#8b5e34]/30 dark:border-[#d7b693]/30"
                    >
                    {tech}
                    </span>
                ))}
                </div>
            </div>
            )}

            {/* Project Links */}
            <div className="flex flex-wrap gap-3 mt-4">
              {selectedProject.doclink && (
                <a
                  href={selectedProject.doclink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg border border-[#d9c8b4] dark:border-[#3a322e] text-[#8b5e34] dark:text-[#d7b693] hover:bg-[#8b5e34]/10 dark:hover:bg-[#d7b693]/10 transition"
                >
                  <FileText size={18} />
                  <span>Publication</span>
                </a>
              )}
              {selectedProject.gitlink && (
                <a
                  href={selectedProject.gitlink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg border border-[#d9c8b4] dark:border-[#3a322e] text-[#8b5e34] dark:text-[#d7b693] hover:bg-[#8b5e34]/10 dark:hover:bg-[#d7b693]/10 transition"
                >
                  <Github size={18} />
                  <span>Code</span>
                </a>
              )}
              {selectedProject.demolink && (
                <a
                  href={selectedProject.demolink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg border border-[#d9c8b4] dark:border-[#3a322e] text-[#8b5e34] dark:text-[#d7b693] hover:bg-[#8b5e34]/10 dark:hover:bg-[#d7b693]/10 transition"
                >
                  <ExternalLink size={18} />
                  <span>Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-[60] p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-5xl max-h-[90vh]">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute top-3 right-3 text-gray-300 hover:text-white transition"
            >
              <X size={24} />
            </button>
            <img
              src={selectedImage}
              alt="Fullscreen preview"
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}
