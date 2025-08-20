<template>
  <div 
    class="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer border border-gray-700 hover:border-accent/50"
    @click="$emit('openModal', project)"
  >
    <!-- Project Image Placeholder -->
    <div class="h-48 bg-gradient-to-br from-accent/20 to-indigo-600/20 flex items-center justify-center">
      <div class="text-accent">
        <svg class="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
      </div>
    </div>
    
    <!-- Card Content -->
    <div class="p-6">
      <!-- Project Title -->
      <h3 class="text-xl font-bold text-gray-100 mb-3 group-hover:text-accent transition-colors duration-300">
        {{ project.title }}
      </h3>
      
      <!-- Project Description -->
      <p class="text-gray-300 mb-4 line-clamp-3 leading-relaxed">
        {{ project.description }}
      </p>
      
      <!-- Technologies -->
      <div class="mb-4">
        <div class="flex flex-wrap gap-2">
          <span 
            v-for="tech in project.technologies" 
            :key="tech"
            class="inline-block bg-accent/20 text-accent text-xs font-medium px-2.5 py-0.5 rounded-full border border-accent/30"
          >
            {{ tech }}
          </span>
        </div>
      </div>
      
      <!-- Call to Action -->
      <div class="flex items-center justify-between">
        <span class="text-accent font-medium text-sm hover:text-indigo-400 transition-colors duration-300">
          Ver detalles →
        </span>
        
        <!-- Visual indicator -->
        <div class="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '@/types'

interface Props {
  project: Project
}

defineProps<Props>()
defineEmits<{
  openModal: [project: Project]
}>()
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>