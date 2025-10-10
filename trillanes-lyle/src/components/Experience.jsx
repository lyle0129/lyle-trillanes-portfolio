import { useState } from "react";
import { X, Briefcase, ArrowRight } from "lucide-react";

const experiences = [
  {
    role: "Full Stack Developer and Shop Manager",
    company: "Spincredible Laundry Shop",
    date: "2024 – Present",
    highlights: [
      "Developed a POS system deployed as a web application using HTML, CSS, and JavaScript, which is used in the family business to help keep track of daily sales and inventory.",
      "Automated laundry shop workflow and maintained operational integrity through streamlined processes.",
      "Integrated the application into a Google sheet for better tabulation and visualization of data.",
      "Oversee daily shop operations, including closing procedures, cash handling, and contributing to key business decisions.",
    ],
  },
  {
    role: "Project Manager",
    company: "Labkeeet-A, UP Circuit",
    date: "2023 – 2024",
    highlights: [
      "Facilitated the overall execution of this project from marketing to operations.",
      "Coordinated project milestones and deliverables.",
      "Delivered a record-breaking increase in social media reach and interaction with an increase of 15.6K in the total reach breakdown.",
    ],
  },
  {
    role: "Logistics Committee",
    company: "TEP 12, UP Circuit",
    date: "2024",
    highlights: [
      "The E-Waste Project (TEP) is an annual event that seeks to address the increasing environmental risks and hazards brought about by the improper disposal of electronic waste.",
      "Helped in overseeing storage management operations, ensuring proper organization and accessibility.",
      "Developed an automated inventory management app using Google Appscript and integrated it with Google Sheets and Google Forms.",
    ],
  },
  {
    role: "Director for Finance",
    company: "IEEE UP Diliman",
    date: "2023 – 2024",
    highlights: [
      "Spearheaded the Finance committee for the Institute of Electrical and Electronics Engineers University of the Philippines Diliman Student Branch.",
      "Fulfilled to liquefy frozen assets of 2 years in this term, raising the organization’s operation equity to more than 500%.",
      "Guided in the return of merchandise selling as one of its income-generating activities.",
      "Responsible for securing sponsorships from partner companies with our events.",
    ],
  },
  {
    role: "Training & Dev Officer",
    company: "UP Badminton Association",
    date: "2023",
    highlights: [
      "Planned and oversaw activities and responsibilities bestowed upon the Training and Development committee.",
      "Helped with the planning and execution of the 2nd BadAss League Cup.",
    ],
  },
  {
    role: "External Affairs Co-Head",
    company: "Lingap, UP SAMANA",
    date: "2021",
    highlights: [
      "Secured 60% of the total funds collected during the fundraising event by successfully closing individual donor contributions.",
      "Managed external Sponsorships, partnerships, and donations.",
      "Organized outreach initiatives and provided documentation.",
    ],
  },
];

export default function Experience() {
  const [selectedExp, setSelectedExp] = useState(null);

  return (
    <section id="experience" className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>

      {/* Experience Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            onClick={() => setSelectedExp(exp)}
            className="bg-[#fdf8f3] dark:bg-[#1f1d1b] p-6 rounded-xl shadow-md border border-[#d9c8b4] dark:border-[#2a2623] cursor-pointer hover:translate-y-[-3px] hover:shadow-lg transition"
          >
            <div className="flex items-center gap-3 mb-2">
              <Briefcase className="text-[#8b5e34] dark:text-[#d7b693]" size={20} />
              <h3 className="text-lg font-semibold text-[#3e2f1c] dark:text-[#f4e9dc]">
                {exp.role}
              </h3>
            </div>
            <p className="text-sm text-[#6b4b2f] dark:text-[#d1bfa7] mb-1">
              {exp.company}
            </p>
            <span className="text-xs text-[#8b5e34]/80 dark:text-[#d7b693]/70 block mb-4">
              {exp.date}
            </span>

            {/* 🔹 "Click for more info" Indicator */}
            <div className="flex items-center text-[#8b5e34] dark:text-[#d7b693] text-sm font-medium group">
              <span className="mr-1">Click for more info</span>
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedExp && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4"
          onClick={() => setSelectedExp(null)}
        >
          <div
            className="relative bg-white dark:bg-[#2b2521] p-6 rounded-xl shadow-xl w-full max-w-lg max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedExp(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition"
            >
              <X size={22} />
            </button>

            {/* Modal Content */}
            <div className="flex items-center gap-3 mb-3">
              <Briefcase className="text-[#8b5e34] dark:text-[#d7b693]" size={24} />
              <h2 className="text-xl font-semibold text-[#3e2f1c] dark:text-[#f4e9dc]">
                {selectedExp.role}
              </h2>
            </div>

            <p className="text-sm text-[#6b4b2f] dark:text-[#d1bfa7] mb-1">
              {selectedExp.company}
            </p>
            <span className="block text-xs text-[#8b5e34]/80 dark:text-[#d7b693]/70 mb-4">
              {selectedExp.date}
            </span>

            <h3 className="text-md font-semibold text-[#3e2f1c] dark:text-[#f4e9dc] mb-2">
              Highlights
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-sm text-[#6b4b2f] dark:text-[#d1bfa7]">
              {selectedExp.highlights.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
