import { EducationItem, CertificationItem, SkillCategory, ProjectItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Bhoomika Anand',
  handle: 'bhoomika-anand',
  role: 'B.Tech AI & Data Science Student · REVA University',
  discipline: 'AI & Data Science',
  status: 'Open to Opportunities',
  cohortYear: '2025',
  institution: 'REVA University',
  coreSkills: 'C · Python · Stats',
  crossField: 'Logic & Design',
  headline: {
    line1: 'Learning.',
    line2: 'Building.',
    line3: 'Designing.',
  },
  bio: 'An AI & Data Science student exploring programming, data, statistics, and creative problem solving.',
  email: 'bhoomikanand9@gmail.com',
  linkedin: 'https://www.linkedin.com/in/bhoomika-anand-64ba2a338',
  github: 'https://github.com/bhoomikaanand9-bit',
  location: 'BENGALURU, INDIA',
  timezone: 'IST (UTC +5:30)',
};

export const ABOUT_PARAGRAPHS = [
  'I am Bhoomika Anand, an undergraduate student pursuing my B.Tech in Artificial Intelligence and Data Science at REVA University.',
  'My focus is built on disciplined curiosity, honest exploration, and continuous growth. Rather than skimming high-level abstractions, I prioritize building robust fundamentals across procedural and object-oriented programming, data structures, and mathematical statistics.',
  'Alongside technical problem solving, I cultivate a deep appreciation for UI/UX principles and structured product design systems. I believe computational algorithms gain true utility only when married to thoughtful, clear, and human-centric interfaces. My aspiration is to operate effectively at the intersection of data-driven logic and intuitive software interaction.',
];

export const PRINCIPLES = [
  {
    number: '01',
    title: 'Analytical Rigor',
    description: 'Grounded in statistical hypotheses, algorithmic efficiency, and verified computational proofs.',
    tagBg: 'bg-[#ffdad5]',
    tagText: 'text-[#3a0905]',
  },
  {
    number: '02',
    title: 'Human-Centric Design',
    description: 'Prioritizing clarity, visual hierarchy, and intuitive user ergonomics across interactive tools.',
    tagBg: 'bg-[#d9e7ce]',
    tagText: 'text-[#141e0f]',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'programming',
    cardNumber: 'CARD // 01',
    title: 'Programming',
    description: 'Syntactical and algorithmic problem-solving across system and high-level environments.',
    iconName: 'code',
    accentColor: '#8d483f',
    skills: [
      { name: 'Python', tag: 'Core Language', level: 'Intermediate / Scientific computation' },
      { name: 'C', tag: 'Procedural & Memory', level: 'Low-level CLI & pointers' },
      { name: 'Basic C++', tag: 'OOP Foundations', level: 'Object-oriented modeling' },
    ],
  },
  {
    id: 'datascience',
    cardNumber: 'CARD // 02',
    title: 'Data Science & Analytics',
    description: 'Essential libraries for matrix computation, data manipulation, and scientific visualization.',
    iconName: 'analytics',
    accentColor: '#56624f',
    skills: [
      { name: 'Pandas', tag: 'DataFrames', level: 'Data manipulation & cleansing' },
      { name: 'NumPy', tag: 'N-D Arrays', level: 'Vectorized mathematical operations' },
      { name: 'Matplotlib', tag: 'Plotting', level: 'Cartesian & scientific visualizations' },
      { name: 'Seaborn', tag: 'Statistical Graphics', level: 'Categorical & distribution plots' },
    ],
  },
  {
    id: 'statistics',
    cardNumber: 'CARD // 03',
    title: 'Statistics',
    description: 'Mathematical grounding required for sound inference and algorithmic validity.',
    iconName: 'functions',
    accentColor: '#7c514b',
    skills: [
      { name: 'Probability', tag: 'Core Axioms', level: 'Conditional, Bayes & combinations' },
      { name: 'Distributions', tag: 'Normal · Discrete', level: 'Gaussian, Binomial, Poisson' },
      { name: 'Hypothesis Testing', tag: 'Significance', level: 'p-value, z-test, t-test' },
      { name: 'Correlation', tag: 'Covariance', level: 'Pearson & Spearman coefficients' },
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'smart-parking',
    number: '01',
    title: 'SMART PARKING SYSTEM',
    category: 'Hardware / Logic Exploration',
    badge: 'Concept & Architecture',
    description: 'A project exploring smart parking system concepts and practical problem solving.',
    skills: ['Sensor Integration', 'State Telemetry', 'Logic Routing', 'Array Topology'],
    status: 'Status: Exploratory Phase',
    footerNote: 'View Architectural Overview',
  },
  {
    id: 'graphics-editor',
    number: '02',
    title: 'MENU-DRIVEN 2D GRAPHICS EDITOR',
    category: 'Procedural C System',
    badge: 'Procedural C System',
    description: 'Menu driven 2D-Graphics Editor in C using character arrays.',
    skills: ['C', 'Character Arrays', 'CLI Graphics', 'Procedural Logic'],
    status: 'Buffer: Low-Level CLI',
    footerNote: 'REVA Academic Submission',
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'reva',
    period: '2025 — Present',
    degree: 'B.Tech in Artificial Intelligence and Data Science',
    institution: 'REVA University',
    description: 'Undergraduate coursework in AI, data structures, mathematics, and algorithms.',
    badge: 'Undergraduate Degree',
    isCurrent: true,
  },
  {
    id: 'soundarya-pu',
    period: '2024',
    degree: 'Pre-University Course (PUC) / 12th Grade',
    institution: 'Soundarya Pre University College',
    affiliation: 'Affiliation: Karnataka State Board',
    badge: 'Higher Secondary',
  },
  {
    id: 'soundarya-school',
    period: '2022',
    degree: '10th Grade / SSLC',
    institution: 'Soundarya School',
    affiliation: 'Affiliation: Karnataka State Board',
    badge: 'Secondary School',
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'ibm-python',
    issuer: 'IBM',
    title: 'IBM Certificate in Python for Data Science',
    type: 'Technical Professional Credential',
    description: 'Foundational Python programming applied to structured data analysis, data structures, and scientific computation.',
    domain: 'Python & Data Science',
    badgeText: 'Verified Certificate',
    skillsLearned: ['Python Syntax', 'Data Structures', 'Pandas & NumPy Basics', 'API Consumption'],
  },
  {
    id: 'wadhwani-entrepreneurship',
    issuer: 'WADHWANI FOUNDATION',
    title: 'Wadhwani Milestone Certificates — Innovation and Entrepreneurship',
    type: 'Milestone Program',
    description: 'Curriculum focused on structured problem framing, market need validation, and iterative entrepreneurial mindsets.',
    domain: 'Innovation & Venture Logic',
    badgeText: 'Milestone Achieved',
    skillsLearned: ['Design Thinking', 'Problem Framing', 'Customer Discovery', 'Value Proposition Design'],
  },
];
