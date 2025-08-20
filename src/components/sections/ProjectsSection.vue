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
          class="fade-in"
          ref="projectCards"
          :style="{ animationDelay: `${index * 0.2}s` }"
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
import { ref } from 'vue'
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

// Initialize intersection observer
observeElements([sectionHeader, ctaSection, projectCards])
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
</style>