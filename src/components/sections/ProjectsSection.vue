<template>
  <section id="proyectos" class="py-20 bg-gray-900">
    <div class="section-container">
      <!-- Section Header -->
      <div class="text-center mb-16 fade-in" ref="sectionHeader">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
          Proyectos Destacados
        </h2>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          Una selección de los proyectos más significativos que demuestran mi capacidad para 
          crear soluciones robustas y escalables.
        </p>
      </div>
      
      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(project, index) in projects" 
          :key="project.id"
          ref="projectCards"
          class="project-card"
        >
          <ProjectCard 
            :project="project"
            @open-modal="openProjectModal"
          />
        </div>
      </div>
      
      <!-- Call to Action -->
      <div class="text-center mt-16 fade-in" ref="ctaSection">
        <p class="text-gray-300 mb-6 text-lg">
          ¿Interesado en ver más de mi trabajo o colaborar conmigo?
        </p>
        <button
          @click="scrollToContact"
          class="btn-primary text-lg px-8 py-4"
        >
          Hablemos de tu proyecto
        </button>
      </div>
    </div>
    
    <!-- Project Modal -->
    <ProjectModal
      :is-open="modalOpen"
      :project="selectedProject"
      @close="closeProjectModal"
    />
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
// Cargar Anime.js dinámicamente
let anime: any = null
import { projects } from '@/data'
import { useNavigation } from '@/composables/useNavigation'
import { useIntersectionObserver } from '@/composables/useIntersectionObserver'
import type { Project } from '@/types'

import ProjectCard from '@/components/projects/ProjectCard.vue'
import ProjectModal from '@/components/projects/ProjectModal.vue'

const { scrollToSection } = useNavigation()
const { observeElements } = useIntersectionObserver()

const modalOpen = ref(false)
const selectedProject = ref<Project | null>(null)
const sectionHeader = ref<HTMLElement | null>(null)
const projectCards = ref<HTMLElement[]>([])
const ctaSection = ref<HTMLElement | null>(null)

const openProjectModal = (project: Project) => {
  selectedProject.value = project
  modalOpen.value = true
}

const closeProjectModal = () => {
  modalOpen.value = false
  selectedProject.value = null
}

const scrollToContact = () => scrollToSection('#contacto')

// Initialize intersection observer for projects with Anime.js
const initProjectsAnimation = async () => {
  const observer = new IntersectionObserver(
    async (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting && projectCards.value.length > 0) {
          try {
            // Cargar Anime.js dinámicamente cuando se necesite
            const animeModule = await import('animejs')
            const animeLib = animeModule.default || animeModule
            
            // Verificar que anime sea una función
            if (typeof animeLib === 'function') {
              // Ejecutar animación stagger con Anime.js
              animeLib({
                targets: projectCards.value,
                opacity: [0, 1],
                translateY: [20, 0],
                delay: animeLib.stagger(150), // 150ms de retraso entre cada tarjeta
                duration: 800,
                easing: 'easeOutExpo'
              })
            } else {
              // Si anime no es una función, usar fallback CSS
              throw new Error('Anime.js not loaded properly')
            }
          } catch (error) {
            console.error('Error with Anime.js, using CSS fallback:', error)
            // Fallback a animación CSS
            projectCards.value.forEach((card, index) => {
              if (card) {
                setTimeout(() => {
                  card.style.opacity = '1'
                  card.style.transform = 'translateY(0)'
                  card.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
                }, index * 150)
              }
            })
          }
          
          // Desconectar observer después de la primera animación
          observer.disconnect()
          break
        }
      }
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  )

  // Observar el contenedor de las tarjetas
  const projectsGrid = document.querySelector('#proyectos .grid')
  if (projectsGrid) {
    observer.observe(projectsGrid)
  }
}

// Fallback a animación CSS simple
const initCSSAnimation = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && projectCards.value.length > 0) {
          // Animar con CSS simple
          projectCards.value.forEach((card, index) => {
            if (card) {
              setTimeout(() => {
                card.style.opacity = '1'
                card.style.transform = 'translateY(0)'
                card.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
              }, index * 150)
            }
          })
          
          observer.disconnect()
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  )

  const projectsGrid = document.querySelector('#proyectos .grid')
  if (projectsGrid) {
    observer.observe(projectsGrid)
  }
}

onMounted(async () => {
  // Usar nextTick para asegurar que las referencias estén disponibles
  setTimeout(async () => {
    // Ocultar inicialmente las tarjetas para evitar parpadeo
    if (projectCards.value.length > 0) {
      projectCards.value.forEach((card) => {
        if (card) {
          card.style.opacity = '0'
          card.style.transform = 'translateY(20px)'
        }
      })
    }
    
    // Inicializar animación de proyectos
    await initProjectsAnimation()
  }, 100)
  
  // Inicializar otras animaciones (header y CTA)
  observeElements([sectionHeader, ctaSection])
})
</script>

<style scoped>
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease-out;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

.project-card {
  opacity: 0; /* Ocultas inicialmente para la animación de Anime.js */
}
</style>