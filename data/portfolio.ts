export type NavItem = {
  label: string;
  href: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  location?: string;
  period: string;
  bullets: string[];
};

export type SkillGroup = {
  category: string;
  skills: string[];
};

export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
};

export type ContactInfo = {
  email: string;
  phones: string[];
  location: string;
  whatsapp: string;
  linkedin: string;
};

export const site = {
  name: "Manish Kumar Tripathi",
  title: "HR Manager – Admin & Recruitment",
  valueStatement:
    "People-first HR leadership that aligns talent, culture, and compliance with business goals.",
  yearsExperience: 8,
  // TODO: Replace with the confirmed public email address before deploying.
  email: "your.email@example.com",
  phones: ["+91 7905965196", "+91 9793537525"],
  location: "Prayagraj, Uttar Pradesh, India",
  languages: ["English", "Hindi", "Bhojpuri"],
  photo: "/profile.jpg",
  cv: "/cv.pdf",
  cvFileName: "Manish Kumar Tripathi - CV.pdf",
  // Placeholders — update the links below before deploying.
  whatsapp: "https://wa.me/917905965196",
  linkedin: "https://www.linkedin.com/in/manish-kumar-tripathi-1401aa24a/"
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const about = {
  bio: "Result-driven and people-focused HR professional with 8 years of experience in developing and implementing HR strategies aligned with organizational goals. Skilled in talent acquisition, employee engagement, performance management, compliance, and policy development. Strong at building a positive workplace culture, resolving employee relations issues, and collaborating with leadership to support business growth.",
  quickFacts: [
    { label: "Location", value: "Prayagraj, Uttar Pradesh, India" },
    { label: "Languages", value: "English, Hindi, Bhojpuri" },
    { label: "Experience", value: "8 years" },
  ],
};

export const experience: ExperienceItem[] = [
  {
    role: "HR Manager – Admin & Recruitment, Operations",
    company: "SR Technologies (Sociallabs Enterprises Pvt Ltd) – SR Group",
    location: "Prayagraj, UP",
    period: "2020 – Present",
    bullets: [
      "E-recruitment and online talent sourcing",
      "HR generalist activities and HRIS management",
      "HR-legal compliance: PF, ESIC, Gratuity",
      "Payroll processing",
      "Handling HR letters, employee induction, documentation, and employee database",
      "HR operations, vendor management, client handling",
      "Coordination with top management",
      "Experience in direct sales, marketing, customer handling, and branding of financial products",
    ],
  },
  {
    role: "HR Executive",
    company: "RSPL Ltd (Xpert & Uniwash Manufacturing Plant, Rania HCD Unit)",
    period: "2018 – 2020 (2.5 years)",
    bullets: [
      "Manpower planning and budgeting, end-to-end recruitment",
      "Training and development, performance management system",
      "Client relationship management, team development and leading",
      "Full-cycle recruiting: sourcing, screening, interviews, negotiation, closing",
      "Sourcing via Indeed, WorkIndia, Apna, Naukri, Monster, TimesJobs, LinkedIn, Facebook, internal database, and employee referrals",
      "Candidate preparation for client interviews, reference checking",
      "Daily/weekly/monthly reports: interview status, closure, and feedback reports",
    ],
  },
  {
    role: "Recruitment Specialist (PAN India)",
    company: "",
    period: "",
    bullets: [
      "End-to-end recruitment, liaising with recruitment firms",
      "Screening, shortlisting, final HR discussion and salary negotiation",
      "Hiring passive executive talent in IT, Finance, Communications, Insurance, and other industries",
      "Reporting to Regional HR and local management",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Core HR",
    skills: [
      "Talent Acquisition & Recruitment",
      "Employee Relations & Conflict Resolution",
      "Performance Management",
      "HR Policies & Compliance",
      "Training & Development",
      "Workforce Planning & Retention",
      "Payroll & Benefits Administration",
      "Labour Laws & Statutory Compliance",
      "Organizational Development",
      "Change Management",
      "Succession Planning",
      "DEI Initiatives",
      "Strategic HR Planning",
      "Culture Building & Engagement",
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      "Communication & Negotiation",
      "Problem-Solving & Decision-Making",
      "Emotional Intelligence",
      "Team Leadership & Collaboration",
      "Adaptability",
      "Analytical Mindset",
      "Critical Thinking",
      "Creativity",
    ],
  },
  {
    category: "Tools & Software",
    skills: [
      "MS Office (Word, Excel, PowerPoint)",
      "Power BI",
      "Tally ERP 9 (GST)",
      "ESSL Biometric",
      "Zoho",
      "SAP",
      "HRIS/HRMS",
    ],
  },
  {
    category: "Operating Systems",
    skills: ["Windows 7", "Windows 8", "Windows 10", "Windows 11"],
  },
];

export const education: EducationItem[] = [
  {
    degree: "MBA in Human Resource",
    institution: "Swami Vivekanand Subharti University, Meerut",
    period: "2018 – 2020",
  },
  {
    degree: "ADCFA",
    institution: "Anurag Institute of Technology, Prayagraj",
    period: "2016 – 2017",
  },
  {
    degree: "B.A.",
    institution: "Chhatrapati Shahu Ji Maharaj University, Kanpur",
    period: "2013 – 2015",
  },
  {
    degree: "Class 12th (U.P. Board)",
    institution: "",
    period: "2012",
  },
  {
    degree: "Class 10th (U.P. Board)",
    institution: "",
    period: "2010",
  },
];
