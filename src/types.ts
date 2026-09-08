export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  badge: string;
  description: string;
  skills: string[];
  status: string;
  footerNote: string;
}

export interface EducationItem {
  id: string;
  period: string;
  degree: string;
  institution: string;
  affiliation?: string;
  description?: string;
  badge: string;
  isCurrent?: boolean;
}

export interface CertificationItem {
  id: string;
  issuer: string;
  title: string;
  type: string;
  description: string;
  domain: string;
  badgeText: string;
  verificationId?: string;
  skillsLearned: string[];
}

export interface SkillCategory {
  id: string;
  cardNumber: string;
  title: string;
  description: string;
  iconName: string;
  accentColor: string;
  skills: {
    name: string;
    tag: string;
    level?: string;
  }[];
}
