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

const projects = [
  {
    title: "Auscultawear",
    description: "Wearable device for audio-based physiological monitoring.",
    media: [auscultawear1, auscultawear2, auscultawear3],
    doclink: "https://ieeexplore.ieee.org/abstract/document/11175930",
    gitlink: "https://github.com/lyle0129/Auscultawear.git",
    demolink: "",
    technologies: ["Zephyr RTOS", "C", "Bluetooth Low Energy", "Mic", "IMU (LSM6DSL)", "Flutter", "Python", "Embedded"],
  },
  {
    title: "LCD Machine Problem",
    description: "Interfacing an LCD with an FPGA without using any libraries.",
    media: [fpga],
    video: true,
    doclink: "",
    gitlink: "https://github.com/lyle0129/CoE-168-Machine-Problem.git",
    demolink: "",
    technologies: ["Verilog", "FPGA", "Vivado"],
  },
  {
    title: "Population Monitoring",
    description:
      "Monitoring in-building population in real-time for emergency evacuation.",
    media: [mmwave1, mmwave2, mmwave3],
    doclink: "",
    gitlink: "https://github.com/lyle0129/Population-Monitoring.git",
    demolink: "https://sites.google.com/up.edu.ph/room-monitoring",
    technologies: ["Thingspeak API", "STM32", "mmWave Sensor", "PIR Sensor", "Gas Sensor", "C", "Bare-Metal Programming"],
  },
  {
    title: "The E-waste Project",
    description:
      "Tool for streamlining data collection during the environmental initiative.",
    media: [tep1, tep2],
    doclink: "",
    gitlink: "https://github.com/lyle0129/TEP-12-Automated-Inventory-Tracking.git",
    demolink: "",
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
    technologies: ["ReactJS", "CSS", "JavaScript", "Vercel"],
  },
  {
    title: "Cashly",
    description:
      "A cross-platform wallet application deployed as a web app.",
    media: [cashly1, cashly2, cashly3, cashly4],
    doclink: "",
    gitlink: "https://github.com/lyle0129/Cashly.git",
    demolink: "https://cashly-web.vercel.app/login",
    technologies: ["ReactJS", "ExpressJS", "ClerkAuth", "PostgreSQL", "Tailwind CSS", "NeonDB", "Render", "Vercel"],
  },
  {
    title: "TuldokBenta",
    description:
      "A user-friendly, self-setup POS system for small businesses.",
    media: [tuldokbenta4, tuldokbenta5, tuldokbenta6, tuldokbenta1, tuldokbenta2, tuldokbenta3],
    doclink: "",
    gitlink: "https://github.com/lyle0129/TuldokBenta.git",
    demolink: "https://tuldokbenta-demo.vercel.app",
    technologies: ["ReactJS", "ExpressJS", "Simple Auth", "PostgreSQL", "Tailwind CSS", "NeonDB", "Render", "Vercel"],
  },
  {
    title: "Website Portfolio",
    description:
      "A Personal portfolio showcasing my projects and skills, with a clean simplistic design.",
    media: [portfolio1, portfolio2, portfolio3],
    doclink: "",
    gitlink: "https://github.com/lyle0129/lyle-trillanes-portfolio.git",
    demolink: "https://lyle-trillanes.vercel.app/",
    technologies: ["ReactJS", "Tailwind CSS", "Vercel"],
  },
  {
    title: "Rubiks Race",
    description:
      "An online recreation of me and my girlfriend's favorite board game to play.",
    media: [rubiks1, rubiks2, rubiks3, rubiks4],
    doclink: "",
    gitlink: "https://github.com/lyle0129/Rubiks-Race.git",
    demolink: "https://rubiks-race.vercel.app/",
    technologies: ["ReactJS", "ExpressJS", "Socket.io", "Tailwind CSS", "Render", "Vercel"],
  },
];

export default projects;
