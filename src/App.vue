<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Header from '@/components/layout/Header.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import AboutMeSection from '@/components/sections/AboutMeSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import Footer from '@/components/layout/Footer.vue'

const showScrollButton = ref(false)

// Handle scroll events for scroll-to-top button
const handleScroll = () => {
  showScrollButton.value = window.scrollY > 400
}

// Scroll to top function
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// Mount and unmount scroll listeners
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div id="app" class="min-h-screen bg-gray-900">
    <!-- Header Component -->
    <Header />
    
    <!-- Main Content -->
    <main>
      <!-- Hero Section -->
      <HeroSection />
      
      <!-- Projects Section -->
      <ProjectsSection />
      
      <!-- About Me Section -->
      <AboutMeSection />
      
      <!-- Skills Section -->
      <SkillsSection />
      
      <!-- Contact Section -->
      <ContactSection />
    </main>
    
    <!-- Footer Component -->
    <Footer />
    
    <!-- Scroll to Top Button -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-2 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 translate-y-2 scale-95"
    >
      <button
        v-if="showScrollButton"
        @click="scrollToTop"
        class="fixed bottom-8 right-8 z-40 w-12 h-12 bg-accent hover:bg-indigo-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        aria-label="Scroll to top"
      >
        <svg 
          class="w-6 h-6 transform group-hover:-translate-y-0.5 transition-transform duration-300" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
        </svg>
      </button>
    </transition>
  </div>
</template>

<style>
/* Global styles are handled in style.css */

/* Smooth scrolling for the entire page */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #1F2937;
}

::-webkit-scrollbar-thumb {
  background: #4F46E5;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #4338CA;
}

/* Focus styles for accessibility */
*:focus {
  outline: 2px solid #4F46E5;
  outline-offset: 2px;
}

/* Selection styles */
::selection {
  background-color: #4F46E5;
  color: #E5E7EB;
}

::-moz-selection {
  background-color: #4F46E5;
  color: #E5E7EB;
}
</style>
