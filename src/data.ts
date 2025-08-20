// Tipos TypeScript
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

// Datos de proyectos
export const projects: Project[] = [
  {
    id: 1,
    title: "CoffeeConnect",
    description: "Sistema integral para la gestión de restaurantes, con enfoque en control de inventarios, recetas y costos para optimizar la rentabilidad.",
    role: "Diseño y desarrollo del backend con Django/DRF, creación de modelos de BD (productos, recetas), implementación de lógica de costos. Desarrollo del frontend con Vue.js y Tailwind CSS. Construcción de la API RESTful.",
    challenge: "El reto era manejar la fluctuación de costos de ingredientes.",
    solution: "La solución fue implementar 'snapshots' de inventario para un registro histórico preciso y usar tareas asíncronas con Celery para procesar cálculos en segundo plano, manteniendo la app responsiva.",
    technologies: ['Django', 'Vue.js', 'PostgreSQL', 'Celery', 'Tailwind CSS']
  },
  {
    id: 2,
    title: "ControlCE",
    description: "Aplicación web para el control detallado de cortes de caja, turnos y egresos en múltiples sucursales de un negocio.",
    role: "Construcción de la API RESTful con Django REST Framework. Desarrollo de la UI con Vue.js y TypeScript (usando Pinia para estado). Implementación de autenticación por tokens.",
    challenge: "El reto era asegurar la precisión en los cortes de caja multi-turno y multi-sucursal.",
    solution: "La solución fue un modelo de datos relacional robusto y validaciones estrictas en el backend para garantizar la integridad de los datos antes de guardarlos.",
    technologies: ['Django REST', 'Vue.js', 'TypeScript', 'Pinia']
  },
  {
    id: 3,
    title: "Control de Flota",
    description: "Aplicación monolítica para la administración de flotas de vehículos, controlando viajes, gastos, choferes y consumo de combustible.",
    role: "Desarrollo completo de la aplicación (backend y frontend) con Django. Creación de módulos de gestión y un sistema de reportes con exportación a PDF/Excel. Diseño del esquema de BD en PostgreSQL.",
    challenge: "El reto fue crear un reporte de rentabilidad complejo que cruzaba datos de múltiples módulos.",
    solution: "La solución fue una arquitectura de servicios en el backend para recolectar y procesar los datos, usando consultas optimizadas para presentar los resultados en gráficos y tablas.",
    technologies: ['Django', 'PostgreSQL', 'JavaScript', 'HTML/CSS']
  }
];

// Datos de habilidades organizadas por categorías
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
];

// Información personal
export const personalInfo = {
  name: "Carlos Ramos",
  title: "Desarrollador Backend con capacidades Full-Stack",
  tagline: "Construyendo Soluciones Digitales Seguras y Escalables",
  description: "Soy Carlos Ramos, un Desarrollador Backend con una visión integral de sistemas y seguridad. Transformo ideas complejas en aplicaciones robustas y confiables.",
  motto: "No solo entrego código, entrego soluciones confiables.",
  aboutMe: "Mi experiencia previa en administración de sistemas y mi formación en seguridad informática no son solo un complemento; son el pilar que fortalece mi perfil. Esta combinación me ha dado una perspectiva única. Gracias a mi experiencia como SysAdmin, no solo programo, sino que entiendo cómo desplegar y optimizar la infraestructura. Mi maestría en Seguridad me permite desarrollar software robusto, pensando en la protección de datos y la prevención de vulnerabilidades desde el inicio.",
  email: "carlos@ejemplo.com",
  linkedin: "https://linkedin.com/in/carlos-ramos",
  github: "https://github.com/carlos-ramos"
};