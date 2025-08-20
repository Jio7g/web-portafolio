<template>
  <section id="sobre-mi" class="py-20 bg-gray-800">
    <div class="section-container">
      <!-- Section Header -->
      <div class="text-center mb-16 fade-in" ref="sectionHeader">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
          Mi Trayectoria: De Sistemas al Desarrollo
        </h2>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          Una combinación única de experiencia técnica y visión de seguridad
        </p>
      </div>
      
      <!-- Two Column Layout -->
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left Column - Story -->
        <div class="fade-in" ref="storyContent">
          <div class="prose prose-lg max-w-none">
            <p class="text-gray-300 leading-relaxed mb-6 text-lg">
              {{ personalInfo.aboutMe }}
            </p>
            
            <!-- Key Differentiators -->
            <div class="mt-8 space-y-6">
              <div class="border-l-4 border-accent pl-6">
                <h3 class="text-xl font-semibold text-gray-100 mb-2 flex items-center">
                  <svg class="w-6 h-6 mr-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.012-3H7.5a2.25 2.25 0 00-2.121 1.473L5.012 7.5m4.5 0V1.875a1.125 1.125 0 112.25 0V7.5m-2.25 0H15M15 7.5v11.25A2.25 2.25 0 0112.75 21h-3.75A2.25 2.25 0 016 18.75V7.5"></path>
                  </svg>
                  Visión Holística (SysAdmin)
                </h3>
                <p class="text-gray-300 leading-relaxed">
                  Entiendo cómo desplegar, optimizar y mantener la infraestructura, 
                  lo que me permite tomar decisiones de desarrollo informadas pensando 
                  en la escalabilidad y el rendimiento.
                </p>
              </div>
              
              <div class="border-l-4 border-accent pl-6">
                <h3 class="text-xl font-semibold text-gray-100 mb-2 flex items-center">
                  <svg class="w-6 h-6 mr-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                  Seguridad por Diseño (Maestría en Seguridad)
                </h3>
                <p class="text-gray-300 leading-relaxed">
                  Desarrollo software robusto y resiliente, integrando las mejores 
                  prácticas de seguridad en cada capa de la aplicación desde su concepción.
                </p>
              </div>
            </div>
            
            <!-- Motto -->
            <div class="mt-8 p-6 bg-accent/10 border border-accent/30 rounded-lg">
              <p class="text-accent font-mono text-lg italic text-center">
                "{{ personalInfo.motto }}"
              </p>
            </div>
          </div>
        </div>
        
        <!-- Right Column - Professional Photo Placeholder -->
        <div class="fade-in" ref="photoSection">
          <div class="relative">
            <!-- Photo Container -->
            <div class="aspect-square bg-gradient-to-br from-accent/20 to-indigo-600/20 rounded-2xl flex items-center justify-center border border-accent/30 shadow-2xl">
              <!-- Placeholder for professional photo -->
              <div class="text-center">
                <div class="w-32 h-32 mx-auto mb-4 bg-accent/30 rounded-full flex items-center justify-center">
                  <svg class="w-16 h-16 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
                <p class="text-gray-400 text-sm">Foto Profesional</p>
                <p class="text-gray-400 text-xs mt-1">Próximamente</p>
              </div>
            </div>
            
            <!-- Decorative Elements -->
            <div class="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
            <div class="absolute -bottom-4 -left-4 w-32 h-32 bg-indigo-500/20 rounded-full blur-xl"></div>
          </div>
          
          <!-- Professional Stats -->
          <div class="mt-8 grid grid-cols-2 gap-4">
            <div class="text-center p-4 bg-gray-900 rounded-lg border border-gray-700">
              <div class="text-2xl font-bold text-accent mb-1">3+</div>
              <div class="text-gray-300 text-sm">Años de Experiencia</div>
            </div>
            <div class="text-center p-4 bg-gray-900 rounded-lg border border-gray-700">
              <div class="text-2xl font-bold text-accent mb-1">15+</div>
              <div class="text-gray-300 text-sm">Proyectos Completados</div>
            </div>
            <div class="text-center p-4 bg-gray-900 rounded-lg border border-gray-700">
              <div class="text-2xl font-bold text-accent mb-1">100%</div>
              <div class="text-gray-300 text-sm">Código Seguro</div>
            </div>
            <div class="text-center p-4 bg-gray-900 rounded-lg border border-gray-700">
              <div class="text-2xl font-bold text-accent mb-1">24/7</div>
              <div class="text-gray-300 text-sm">Soporte</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { personalInfo } from '../data'

const sectionHeader = ref<HTMLElement | null>(null)
const storyContent = ref<HTMLElement | null>(null)
const photoSection = ref<HTMLElement | null>(null)

// Intersection Observer for fade-in animations
const observeElements = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  )

  if (sectionHeader.value) observer.observe(sectionHeader.value)
  if (storyContent.value) observer.observe(storyContent.value)
  if (photoSection.value) observer.observe(photoSection.value)
}

onMounted(() => {
  observeElements()
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
</style>