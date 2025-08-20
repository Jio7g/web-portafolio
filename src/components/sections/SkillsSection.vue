<template>
  <section id="habilidades" class="py-20 bg-gray-900">
    <div class="section-container">
      <!-- Section Header -->
      <div class="text-center mb-16 fade-in" ref="sectionHeader">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
          Mi Caja de Herramientas Tecnológicas
        </h2>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          Tecnologías y herramientas con las que construyo soluciones robustas y escalables
        </p>
      </div>
      
      <!-- Skills Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(category, index) in skillCategories" 
          :key="category.category"
          class="fade-in"
          ref="skillCards"
          :style="{ animationDelay: `${index * 0.2}s` }"
        >
          <div class="bg-gray-800 rounded-lg p-6 h-full border border-gray-700 hover:border-accent/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl">
            <!-- Category Header -->
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mr-4 border border-accent/30">
                <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-100">
                {{ category.category }}
              </h3>
            </div>
            
            <!-- Skills List -->
            <div class="space-y-4">
              <div 
                v-for="skill in category.skills" 
                :key="skill.name"
                class="flex items-center justify-between"
              >
                <span class="text-gray-300 font-medium">
                  {{ skill.name }}
                </span>
                
                <!-- Skill Level Badge -->
                <span 
                  class="text-xs font-bold px-2 py-1 rounded-full"
                  :class="getSkillLevelClass(skill.level)"
                >
                  {{ skill.level }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { skillCategories } from '@/data'
import { useIntersectionObserver } from '@/composables/useIntersectionObserver'
import type { Skill } from '@/types'

const { observeElements } = useIntersectionObserver()

const sectionHeader = ref<HTMLElement | null>(null)
const skillCards = ref<HTMLElement[]>([])

// Get skill level styling
const getSkillLevelClass = (level: string) => {
  const classes = {
    'Beginner': 'bg-gray-600 text-gray-200',
    'Intermediate': 'bg-yellow-600 text-yellow-100',
    'Advanced': 'bg-blue-600 text-blue-100',
    'Expert': 'bg-accent text-white'
  }
  return classes[level as keyof typeof classes] || classes['Beginner']
}

// Initialize intersection observer
observeElements([sectionHeader, skillCards])
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