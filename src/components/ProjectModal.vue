<template>
  <div 
    v-if="isOpen && project"
    class="fixed inset-0 z-50 overflow-y-auto"
    @click="closeModal"
  >
    <!-- Backdrop -->
    <div class="fixed inset-0 bg-black bg-opacity-75 transition-opacity"></div>
    
    <!-- Modal Content -->
    <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div 
        class="inline-block align-bottom bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full"
        @click.stop
      >
        <!-- Modal Header -->
        <div class="bg-gray-900 px-6 py-4 border-b border-gray-700">
          <div class="flex items-center justify-between">
            <h3 class="text-2xl font-bold text-gray-100">
              {{ project.title }}
            </h3>
            <button
              @click="closeModal"
              class="text-gray-400 hover:text-text-primary transition-colors duration-300"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
        
        <!-- Modal Body -->
        <div class="px-6 py-6">
          <!-- Project Image Placeholder -->
          <div class="mb-6 h-64 bg-gradient-to-br from-accent/20 to-indigo-600/20 rounded-lg flex items-center justify-center">
            <div class="text-accent">
              <svg class="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
          </div>
          
          <!-- Project Description -->
          <div class="mb-6">
            <h4 class="text-lg font-semibold text-gray-100 mb-3">Descripción del Proyecto</h4>
            <p class="text-gray-300 leading-relaxed">
              {{ project.description }}
            </p>
          </div>
          
          <!-- My Role -->
          <div class="mb-6">
            <h4 class="text-lg font-semibold text-gray-100 mb-3">Mi Rol en el Proyecto</h4>
            <p class="text-gray-300 leading-relaxed">
              {{ project.role }}
            </p>
          </div>
          
          <!-- Challenge and Solution -->
          <div class="grid md:grid-cols-2 gap-6 mb-6">
            <!-- Challenge -->
            <div class="bg-red-900/20 border border-red-700/30 rounded-lg p-4">
              <h4 class="text-lg font-semibold text-red-400 mb-3 flex items-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                </svg>
                Desafío Técnico
              </h4>
              <p class="text-gray-300 leading-relaxed">
                {{ project.challenge }}
              </p>
            </div>
            
            <!-- Solution -->
            <div class="bg-green-900/20 border border-green-700/30 rounded-lg p-4">
              <h4 class="text-lg font-semibold text-green-400 mb-3 flex items-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Solución Implementada
              </h4>
              <p class="text-gray-300 leading-relaxed">
                {{ project.solution }}
              </p>
            </div>
          </div>
          
          <!-- Technologies Used -->
          <div class="mb-6">
            <h4 class="text-lg font-semibold text-gray-100 mb-3">Tecnologías Utilizadas</h4>
            <div class="flex flex-wrap gap-3">
              <span 
                v-for="tech in project.technologies" 
                :key="tech"
                class="inline-block bg-accent/20 text-accent text-sm font-medium px-4 py-2 rounded-lg border border-accent/30"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
        
        <!-- Modal Footer -->
        <div class="bg-gray-900 px-6 py-4 border-t border-gray-700">
          <div class="flex justify-end">
            <button
              @click="closeModal"
              class="btn-secondary"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import type { Project } from '../data'

interface Props {
  isOpen: boolean
  project: Project | null
}

const props = defineProps<Props>()
const emit = defineEmits<{
  close: []
}>()

const closeModal = () => {
  emit('close')
}

// Prevent body scroll when modal is open
watch(() => props.isOpen, (newValue) => {
  if (newValue) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
})

// Handle escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && props.isOpen) {
    closeModal()
  }
})
</script>