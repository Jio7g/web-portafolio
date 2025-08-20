<template>
  <section class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 pt-16">
    <div class="section-container">
      <div class="text-center fade-in" ref="heroContent">
        <!-- Main Heading -->
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-100 mb-6 leading-tight">
          {{ personalInfo.tagline }}
        </h1>
        
        <!-- Subtitle -->
        <p class="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          {{ personalInfo.description }}
        </p>
        
        <!-- Motto -->
        <div class="mb-12">
          <p class="text-accent font-mono text-lg md:text-xl italic">
            "{{ personalInfo.motto }}"
          </p>
        </div>
        
        <!-- Call to Action Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            @click="scrollToProjects"
            class="btn-primary text-lg px-8 py-4 w-full sm:w-auto"
          >
            Ver mis Proyectos
          </button>
          <button
            @click="scrollToContact"
            class="btn-secondary text-lg px-8 py-4 w-full sm:w-auto"
          >
            Contactarme
          </button>
        </div>
        
        <!-- Scroll Indicator -->
        <div class="mt-16 animate-bounce">
          <button
            @click="scrollToProjects"
            class="text-accent hover:text-indigo-400 transition-colors duration-300"
            aria-label="Scroll down"
          >
            <svg class="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    
    <!-- Background Animation -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-4 -right-4 w-72 h-72 bg-accent opacity-5 rounded-full blur-3xl"></div>
      <div class="absolute top-1/2 -left-4 w-96 h-96 bg-indigo-400 opacity-3 rounded-full blur-3xl"></div>
      <div class="absolute bottom-4 right-1/3 w-64 h-64 bg-accent opacity-4 rounded-full blur-3xl"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { personalInfo } from '../data'

const heroContent = ref<HTMLElement | null>(null)

const scrollToProjects = () => {
  const element = document.querySelector('#proyectos')
  if (element) {
    const headerHeight = 64
    const elementPosition = element.offsetTop - headerHeight
    
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    })
  }
}

const scrollToContact = () => {
  const element = document.querySelector('#contacto')
  if (element) {
    const headerHeight = 64
    const elementPosition = element.offsetTop - headerHeight
    
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    })
  }
}

onMounted(() => {
  if (heroContent.value) {
    heroContent.value.classList.add('visible')
  }
})
</script>