import tep1 from "./projects-images/tep1.png";
import tep2 from "./projects-images/tep2.png";
import todoro1 from "./projects-images/todoro1.png";
import auscultawear1 from "./projects-images/auscultawear1.png";
import auscultawear2 from "./projects-images/auscultawear3.png";
import auscultawear3 from "./projects-images/auscultawear2.png";
import mmwave1 from "./projects-images/mmwave1.png";
import mmwave2 from "./projects-images/mmwave2.png";
import mmwave3 from "./projects-images/mmwave3.png";
import cashly1 from "./projects-images/cashly1.png";
import cashly2 from "./projects-images/cashly2.png";
import cashly3 from "./projects-images/cashly3.png";
import cashly4 from "./projects-images/cashly4.png";
import cashly5 from "./projects-images/cashly5.png";
import fpga from "./projects-images/FPGA.mp4";
import tuldokbenta1 from "./projects-images/tuldokbenta1.png";
import tuldokbenta2 from "./projects-images/tuldokbenta2.png";
import tuldokbenta3 from "./projects-images/tuldokbenta3.png";
import tuldokbenta4 from "./projects-images/tuldokbenta4.png";
import tuldokbenta5 from "./projects-images/tuldokbenta5.png";
import tuldokbenta6 from "./projects-images/tuldokbenta6.png";
import portfolio1 from "./projects-images/portfolio1.png";
import portfolio2 from "./projects-images/portfolio2.png";
import portfolio3 from "./projects-images/portfolio3.png";
import rubiks1 from "./projects-images/rubiks1.png";
import rubiks2 from "./projects-images/rubiks2.png";
import rubiks3 from "./projects-images/rubiks3.png";
import rubiks4 from "./projects-images/rubiks4.png";
import rubiks5 from "./projects-images/rubiks5.png";
import rubiks6 from "./projects-images/rubiks6.png";
import apex1 from "./projects-images/ApexDC.png";
import apex2 from "./projects-images/ApexDC1.png";
import apex3 from "./projects-images/ApexDC2.png";
import apex4 from "./projects-images/ApexDC3.png";
import apex5 from "./projects-images/ApexDC4.png";
import apex6 from "./projects-images/ApexDC5.png";
import marci1 from "./projects-images/Marci1.png";
import marci2 from "./projects-images/Marci2.png";
import marci3 from "./projects-images/Marci3.png";
import marci4 from "./projects-images/Marci4.png";

const projects = [
  {
    title: "Website Revamp",
    description: "An improved website of the current website of Marci Metzger.",
    media: [marci1, marci2, marci3, marci4],
    thumbnail: marci1,
    doclink: "",
    gitlink: "",
    demolink: "https://junior-wb-applicant-lyle-trillanes.vercel.app",
    featured: true,
    technologies: ["ReactJS", "TailwindCSS", "Vercel"],
  },
  {
    title: "Rubiks Race",
    description:
      "An online recreation of me and my girlfriend's favorite board game to play.",
    media: [rubiks1, rubiks2, rubiks3, rubiks4, rubiks5, rubiks6],
    thumbnail: rubiks1,
    doclink: "",
    gitlink: "https://github.com/lyle0129/Rubiks-Race.git",
    demolink: "https://rubiksrace.online/",
    featured: true,
    technologies: ["ReactJS", "ExpressJS", "Socket.io", "Tailwind CSS", "Render", "Vercel"],
  },
  {
    title: "Apex Design & Construction Website",
    description: "A responsive multi-page website to strengthen the company’s online presence and brand visibility.",
    media: [apex1, apex2, apex3, apex4, apex5, apex6],
    thumbnail: apex1,
    doclink: "",
    gitlink: "",
    demolink: "https://apexdesignconstruction.com/",
    featured: true,
    technologies: ["NextJS", "Mailtrap", "React", "TailwindCSS", "Vercel"],
  },
  {
    title: "Auscultawear",
    description: "Wearable device for audio-based physiological monitoring.",
    media: [auscultawear1, auscultawear2, auscultawear3],
    thumbnail: auscultawear1,
    doclink: "https://ieeexplore.ieee.org/abstract/document/11175930",
    gitlink: "https://github.com/lyle0129/Auscultawear.git",
    demolink: "",
    featured: true,
    technologies: ["Flutter", "Python", "Embedded C", "Bluetooth Low Energy", "Electret Mic (MAX4466)", "IMU (LSM6DSL)", "Zephyr RTOS",],
  },
  {
    title: "LCD Machine Problem",
    description: "Interfacing an LCD with an FPGA without using any libraries.",
    media: [fpga],
    thumbnail: fpga,
    video: true,
    doclink: "",
    gitlink: "https://github.com/lyle0129/CoE-168-Machine-Problem.git",
    demolink: "",
    featured: false,
    technologies: ["Verilog", "FPGA", "Vivado"],
  },
  {
    title: "Population Monitoring",
    description:
      "Monitoring in-building population in real-time for emergency evacuation.",
    media: [mmwave1, mmwave2, mmwave3],
    thumbnail: mmwave3,
    doclink: "",
    gitlink: "https://github.com/lyle0129/Population-Monitoring.git",
    demolink: "https://sites.google.com/up.edu.ph/room-monitoring",
    featured: true,
    technologies: ["Thingspeak API", "STM32", "Bare-Metal Programming", "mmWave Sensor", "PIR Sensor", "Gas Sensor", "Embedded C"],
  },
  {
    title: "The E-waste Project",
    description:
      "Tool for streamlining data collection during the environmental initiative.",
    media: [tep1, tep2],
    doclink: "",
    gitlink: "https://github.com/lyle0129/TEP-12-Automated-Inventory-Tracking.git",
    demolink: "",
    featured: false,
    technologies: ["Google Apps Script", "Google Sheets", "JavaScript"],
  },
  {
    title: "To-doro",
    description:
      "A blend of a classic to-do list app + Pomodoro timer, made while learning React.",
    media: [todoro1],
    doclink: "",
    gitlink: "https://github.com/lyle0129/To-doro.git",
    demolink: "https://to-doro.vercel.app/",
    featured: false,
    technologies: ["ReactJS", "CSS", "JavaScript", "Vercel"],
  },
  {
    title: "Cashly",
    description:
      "A cross-platform wallet application deployed as a web app.",
    media: [cashly1, cashly2, cashly3, cashly4, cashly5],
    thumbnail: cashly1,
    doclink: "",
    gitlink: "https://github.com/lyle0129/Cashly.git",
    demolink: "https://cashly-2-0.vercel.app/",
    featured: true,
    technologies: ["ReactJS", "ExpressJS", "Tailwind CSS", "Clerk Auth", "PostgreSQL", "NeonDB", "Render", "Vercel"],
  },
  {
    title: "TuldokBenta",
    description:
      "A user-friendly, self-setup POS system for small businesses.",
    media: [tuldokbenta4, tuldokbenta5, tuldokbenta6, tuldokbenta1, tuldokbenta2, tuldokbenta3],
    thumbnail: tuldokbenta6,
    doclink: "",
    gitlink: "https://github.com/lyle0129/TuldokBenta.git",
    demolink: "https://tuldokbenta-demo.vercel.app",
    featured: true,
    technologies: ["ReactJS", "ExpressJS", "PostgreSQL", "Simple Auth", "Tailwind CSS", "NeonDB", "Render", "Vercel"],
  },
  {
    title: "Website Portfolio",
    description:
      "A Personal portfolio showcasing my projects and skills, with a clean simplistic design.",
    media: [portfolio1, portfolio2, portfolio3],
    doclink: "",
    gitlink: "https://github.com/lyle0129/lyle-trillanes-portfolio.git",
    demolink: "https://lyle-trillanes.vercel.app/",
    featured: false,
    technologies: ["ReactJS", "Tailwind CSS", "Vercel"],
  },
];

export default projects;
