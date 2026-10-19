export interface SocialLink {
  name: string;
  url: string;
  icon: 'github' | 'linkedin' | 'mail' | 'phone';
  isPlaceholder?: boolean;
}

export interface PersonalInfo {
  name: string;
  role: string;
  oneLineIntro: string;
  email: string;
  phone: string;
  location: string;
  avatarUrl?: string;
  resumeFile: string;
  socials: {
    github: string;
    linkedin: string;
  };
  placeholders: {
    linkedinUrlMissing: boolean;
    githubUrlMissing: boolean;
    photoMissing: boolean;
  };
}

export interface SkillGroup {
  category: 'Frontend' | 'State Management' | 'Backend' | 'Testing' | 'Tools';
  skills: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  isLivePlaceholder: boolean;
  isGithubPlaceholder: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  year: string;
  score: string;
}

export interface CertificateItem {
  title: string;
  issuer: string;
  date: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  about: string;
  skills: SkillGroup[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  certificates: CertificateItem[];
  languages: string[];
}
