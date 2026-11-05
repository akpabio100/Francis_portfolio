// All portfolio content lives here. Edit this file to update the site.

/** Seconds the intro loader runs before the hero animations start. */
export const START = 1.9;

export const PROFILE = {
  name: "Adekunle Francis Ayomide",
  short: "Francis",
  title: "Flutter Mobile App Developer",
  location: "Lagos, Nigeria",
  email: "adekunlefrancis2003@gmail.com",
  phone: "+234 913 691 4589",
  phoneHref: "tel:+2349136914589",
  phone2: "+234 705 824 9646",
  phone2Href: "tel:+2347058249646",
  // WhatsApp number in international format, digits only (no + or spaces)
  whatsapp: "2347058249646",
  // Put your PDF in the /public folder with this exact name
  cvFile: "/Adekunle_Francis_Flutter_Developer_CV.pdf",
  // Optional photo: put an image in /public (e.g. /photo.jpg) and set it here
  photo: "",
  githubUser: "akpabio100",
  // Optional: paste your Formspree form ID here (e.g. "xyzabcde") to receive messages by email
  formspreeId: "",
  // Recommended: free access key from https://web3forms.com (emailed to you instantly)
  web3formsKey: "",
  github: "https://github.com/akpabio100",
  linkedin: "https://linkedin.com/in/adekule-francis-8896b82b8",
};

export const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const ROLES = [
  "Flutter Developer",
  "Mobile App Engineer",
  "Dart Enthusiast",
  "Cross-Platform Builder",
];

export const STATS = [
  { value: 3, label: "Flutter apps in development" },
  { value: 5, label: "Projects built" },
  { value: 2, label: "Platforms: Android & iOS" },
];

export const MARQUEE = [
  "Flutter",
  "Dart",
  "Riverpod",
  "Provider",
  "Firebase Auth",
  "Hive",
  "SharedPreferences",
  "Secure Storage",
  "REST APIs",
  "Node.js",
  "Express.js",
  "Git & GitHub",
  "CI/CD",
  "Unit Testing",
  "Widget Testing",
  "Linux",
];

export type IconKey = "mobile" | "layers" | "database" | "shield" | "check" | "code";

export type SkillGroup = {
  title: string;
  icon: IconKey;
  items: string[];
};

export const SKILLS: SkillGroup[] = [
  {
    title: "Mobile Development",
    icon: "mobile",
    items: ["Flutter", "Dart", "Widgets", "Responsive UI", "Navigation", "Animations"],
  },
  { title: "State Management", icon: "layers", items: ["Provider", "Riverpod"] },
  {
    title: "Backend & APIs",
    icon: "database",
    items: ["REST API Integration", "Firebase Authentication", "Node.js", "Express.js"],
  },
  {
    title: "Local Storage",
    icon: "shield",
    items: ["SharedPreferences", "Flutter Secure Storage", "Hive"],
  },
  {
    title: "Testing & Debugging",
    icon: "check",
    items: ["Unit Testing", "Widget Testing", "Postman", "Debugging"],
  },
  {
    title: "Languages & Tools",
    icon: "code",
    items: ["Dart", "JavaScript", "HTML5", "CSS3", "Git", "GitHub", "CI/CD", "Linux", "AWS", "Azure"],
  },
];

export type Job = {
  role: string;
  org: string;
  date: string;
  points: string[];
};

export const EXPERIENCE: Job[] = [
  {
    role: "Flutter Mobile App Developer",
    org: "Integrated Software Service Limited (ISSL)",
    date: "May 2026 – Present",
    points: [
      "Develop three cross-platform mobile applications with Flutter and Dart, including a savings (ajo) app and an educational payment app.",
      "Manage application state with Provider and Riverpod to keep code organized and scalable.",
      "Implement user authentication with Firebase Authentication.",
      "Store data locally with SharedPreferences and Hive, and protect sensitive data with Flutter Secure Storage.",
      "Write unit and widget tests to improve app reliability.",
    ],
  },
  {
    role: "IT Trainee and Tutor",
    org: "Joshmit Technology",
    date: "Sep 2024 – Feb 2025",
    points: [
      "Gained hands-on experience with web technologies through practical, project-based training.",
      "Moved into a tutoring role, teaching students frontend development fundamentals.",
      "Built a Data Privacy Guard browser extension as part of practical training.",
    ],
  },
];

export type Project = {
  title: string;
  kind: "company" | "academic" | "live";
  badge: string;
  description: string;
  tags: string[];
  link?: string;
  linkLabel?: string;
  note?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Savings (Ajo) Mobile App",
    kind: "company",
    badge: "Company project · In development",
    description:
      "A cross-platform mobile app for digital savings (ajo) on Android and iOS, built with Flutter and Dart.",
    tags: ["Flutter", "Dart"],
    note: "Confidential. Details and demo available upon request.",
  },
  {
    title: "Educational Payment Mobile App",
    kind: "company",
    badge: "Company project · In development",
    description:
      "A cross-platform mobile app for educational payments on Android and iOS, built with Flutter and Dart.",
    tags: ["Flutter", "Dart"],
    note: "Confidential. Details and demo available upon request.",
  },
  {
    title: "Web Tracker Detection & Blocking Extension",
    kind: "academic",
    badge: "Final year project · 2025",
    description:
      "A browser extension that detects and blocks third-party trackers in real time to protect user privacy.",
    tags: ["JavaScript", "Browser Extension", "Privacy"],
  },
  {
    title: "To-Do Application",
    kind: "live",
    badge: "Live",
    description:
      "A task manager with search, All/Completed/Pending filters, a task counter, and validation for empty inputs. Tasks persist with local storage.",
    tags: ["JavaScript", "Local Storage", "Vercel"],
    link: "https://todo-list-eta-three-51.vercel.app/",
    linkLabel: "Live demo",
  },
  {
    title: "DW Legal Practitioners Website",
    kind: "live",
    badge: "Live",
    description: "A website developed and deployed for a law firm.",
    tags: ["Web Development", "Render"],
    link: "https://dw-legal-practitioners.onrender.com/",
    linkLabel: "Live site",
  },
];

export const EDUCATION = [
  {
    date: "Aug 2021 – Aug 2025",
    title: "BSc in Computer Science",
    place: "Kwara State University",
    text: "Coursework in programming, algorithms, and computer systems, with projects in web development and data privacy.",
  },
  {
    date: "Dec 2025",
    title: "Linux – Level 1",
    place: "KodeKloud",
    text: "Topic Completion Certificate.",
  },
];
