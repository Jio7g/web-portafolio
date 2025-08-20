// Tipos principales de la aplicación
export interface Project {
  id: number;
  title: string;
  description: string;
  role: string;
  challenge: string;
  solution: string;
  technologies: string[];
  image?: string;
}

export interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  description: string;
  motto: string;
  aboutMe: string;
  email: string;
  linkedin: string;
  github: string;
}

// Re-export tipos específicos
export * from './navigation'