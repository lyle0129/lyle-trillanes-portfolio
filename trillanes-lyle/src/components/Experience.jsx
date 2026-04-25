import { useState } from "react";
import { Briefcase, Users, ArrowRight, ChevronUp, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import experiences from "./data/ExperienceData";

const PREVIEW_COUNT = 3;

export default function Experience() {
  const [showAll, setShowAll] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const displayed = showAll ? experiences : experiences.slice(0, PREVIEW_COUNT);

  return (
    <section id="experience" className="py-16 px-4 sm:px-8">
      {/* Header */}
      <h2 className="text-3xl font-bold mb-2 text-center text-[#3e2f1c] dark:text-[#f4e9dc]">
        Experience
      </h2>
      <p className="text-center text-sm text-[#8b5e34] dark:text-[#d7b693] mb-12">
        Here are some work and organizational experiences I've had so far
      </p>

      {/* Timeline */}
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line — centered on md+, left-pinned on mobile */}
        <div className="absolute left-5 sm:left-5 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-[#d9c8b4] dark:bg-[#2a2623]" />

        <div className="flex flex-col gap-10">
          {displayed.map((exp, index) => {
            const isLeft = index % 2 === 0;
            const isHovered = hoveredIndex === index;
            const Icon = exp.type === "work" ? Briefcase : Users;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.07 }}
                viewport={{ once: true, amount: 0.3 }}
                className="relative flex items-start"
              >
                {/* Mobile layout — dot on left, card + date on right */}
                <div className="flex md:hidden w-full items-start">
                  {/* Dot */}
                  <div
                    className="z-10 w-9 h-9 shrink-0 rounded-full flex items-center justify-center shadow-md border-2 border-[#fdf8f3] dark:border-[#1c1917] transition-transform duration-300"
                    style={{
                      backgroundColor: exp.accentColor,
                      transform: expandedIndex === index ? "scale(1.2)" : "scale(1)",
                    }}
                  >
                    <Icon size={15} color="#fff" />
                  </div>
                  {/* Card + date */}
                  <div className="ml-4 flex-1 min-w-0">
                    <span className="block text-xs text-[#8b5e34]/70 dark:text-[#d7b693]/60 mb-1.5">
                      {exp.date}
                    </span>
                    <TimelineCard
                      exp={exp}
                      isHovered={isHovered}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      accentColor={exp.accentColor}
                      fullWidth
                      isMobileExpanded={expandedIndex === index}
                      onMobileToggle={() =>
                        setExpandedIndex((prev) => (prev === index ? null : index))
                      }
                    />
                  </div>
                </div>

                {/* Desktop layout — alternating */}
                <div className="hidden md:flex w-full items-start">
                  {/* Dot */}
                  <div
                    className="absolute left-1/2 z-10 w-9 h-9 rounded-full flex items-center justify-center shadow-md border-2 border-[#fdf8f3] dark:border-[#1c1917] transition-transform duration-300"
                    style={{
                      backgroundColor: exp.accentColor,
                      transform: `
                        translateX(calc(-50% ${isLeft ? "- 12px" : "+ 12px"}))
                        ${isHovered ? "scale(1.2)" : "scale(1)"}
                      `,
                    }}
                  >
                    <Icon size={15} color="#fff" />
                  </div>

                  {isLeft ? (
                    <>
                      <div className="w-1/2 pr-10 flex justify-end">
                        <TimelineCard
                          exp={exp}
                          isHovered={isHovered}
                          onMouseEnter={() => setHoveredIndex(index)}
                          onMouseLeave={() => setHoveredIndex(null)}
                          accentColor={exp.accentColor}
                        />
                      </div>
                      <div className="w-1/2 pl-10 flex">
                        <div className="h-9 flex items-center">
                          <span className="text-xs text-[#8b5e34]/70 dark:text-[#d7b693]/60">
                            {exp.date}
                          </span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-1/2 pr-10 flex justify-end">
                        <div className="h-9 flex items-center">
                          <span className="text-xs text-[#8b5e34]/70 dark:text-[#d7b693]/60">
                            {exp.date}
                          </span>
                        </div>
                      </div>
                      <div className="w-1/2 pl-10">
                        <TimelineCard
                          exp={exp}
                          isHovered={isHovered}
                          onMouseEnter={() => setHoveredIndex(index)}
                          onMouseLeave={() => setHoveredIndex(null)}
                          accentColor={exp.accentColor}
                        />
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* See All / Show Less */}
      {experiences.length > PREVIEW_COUNT && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-[#8b5e34]/40 dark:border-[#d7b693]/40 text-[#8b5e34] dark:text-[#d7b693] hover:bg-[#8b5e34] hover:dark:bg-[#d7b693] hover:text-white hover:dark:text-[#1c1917] hover:border-transparent transition font-medium"
          >
            {showAll ? (
              <>
                Show Less <ChevronUp size={18} />
              </>
            ) : (
              <>
                See All <ArrowRight size={18} />
              </>
            )}
          </button>
        </div>
      )}
    </section>
  );
}

function TimelineCard({ exp, isHovered, onMouseEnter, onMouseLeave, accentColor, fullWidth, isMobileExpanded, onMobileToggle }) {
  const showHighlights = onMobileToggle ? isMobileExpanded : isHovered;

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`relative cursor-default rounded-xl border bg-[#fdf8f3] dark:bg-[#1f1d1b] shadow-md transition-all duration-300 ${fullWidth ? "w-full" : "w-full max-w-xs"}`}
      style={{
        borderColor: showHighlights ? accentColor : "transparent",
        borderWidth: "1.5px",
        boxShadow: showHighlights
          ? `0 0 0 1px ${accentColor}33, 0 8px 24px ${accentColor}22`
          : undefined,
      }}
    >
      {/* Always-visible header */}
      <div
        className={`p-4 flex items-start justify-between gap-2 ${onMobileToggle ? "cursor-pointer select-none" : ""}`}
        onClick={onMobileToggle}
      >
        <div>
          <p className="text-sm font-semibold text-[#3e2f1c] dark:text-[#f4e9dc] leading-snug">
            {exp.company}
          </p>
          <p className="text-xs text-[#8b5e34] dark:text-[#d7b693] mt-0.5">{exp.role}</p>
        </div>

        {/* Chevron — mobile only */}
        {onMobileToggle && (
          <motion.div
            animate={{ rotate: isMobileExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="shrink-0 mt-0.5"
          >
            <ChevronDown size={16} style={{ color: accentColor }} />
          </motion.div>
        )}
      </div>

      {/* Highlights — hover on desktop, tap-toggle on mobile */}
      <AnimatePresence>
        {showHighlights && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <ul className="px-4 pb-4 space-y-1.5 border-t border-[#d9c8b4] dark:border-[#2a2623] pt-3">
              {exp.highlights.map((point, idx) => (
                <li
                  key={idx}
                  className="flex gap-2 text-xs text-[#6b4b2f] dark:text-[#d1bfa7] leading-relaxed"
                >
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: accentColor }}
                  />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
