import type { SkillCategory } from '@/types'

export const skillCategories: SkillCategory[] = [
  {
    category: "Backend",
    skills: [
      { name: "Python", level: "Expert" },
      { name: "Django", level: "Expert" },
      { name: "Django REST Framework", level: "Advanced" },
    ]
  },
  {
    category: "Frontend",
    skills: [
      { name: "Vue.js", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
      { name: "HTML5", level: "Expert" },
      { name: "CSS3", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
    ]
  },
  {
    category: "Bases de Datos",
    skills: [
      { name: "PostgreSQL", level: "Advanced" },
      { name: "MySQL", level: "Intermediate" },
      { name: "Supabase", level: "Intermediate" },
    ]
  },
  {
    category: "DevOps y Sistemas",
    skills: [
      { name: "Linux", level: "Advanced" },
      { name: "Git", level: "Advanced" },
      { name: "Docker", level: "Intermediate" },
    ]
  },
  {
    category: "Seguridad",
    skills: [
      { name: "Autenticación por Tokens", level: "Advanced" },
      { name: "Hashing de contraseñas", level: "Advanced" },
      { name: "Prevención de Inyección SQL", level: "Advanced" },
    ]
  }
]