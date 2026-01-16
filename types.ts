export type Language = 'en' | 'jp' | 'ua';

export interface LocalizedText {
  en: string;
  jp: string;
  ua: string;
}

export interface DesignSystem {
  colors: { hex: string; name: string }[];
  typography: { name: string; usage: string }[];
}

export interface CaseStudyContent {
  role: string;
  timeline: string;
  tools: string[];
  overview: string;
  problem: string;
  solution: string;
  process: string[];
  persona?: {
    name: string;
    description: string;
    frustrations: string[];
    goals: string[];
  };
  results: string;
  logoConcept?: string; 
}

export interface ProjectContent {
  title: string;
  category: string;
  description: string;
  tags: string[];
  caseStudy: CaseStudyContent;
}

export interface Project {
  id: string;
  thumbnail: string;
  accentColor: string; 
  figmaUrl?: string; 
  content: {
    en: ProjectContent;
    jp: ProjectContent;
    ua: ProjectContent;
  };
  designSystem?: DesignSystem;
}