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
                <component :is="getCategoryIcon(category.category)" class="w-6 h-6 text-accent" />
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
            
            <!-- Visual Progress Indicator -->
            <div class="mt-6 pt-4 border-t border-gray-600">
              <div class="flex justify-between text-sm text-gray-400 mb-2">
                <span>Expertise Level</span>
                <span>{{ getAverageLevel(category.skills) }}%</span>
              </div>
              <div class="w-full bg-gray-700 rounded-full h-2">
                <div 
                  class="bg-gradient-to-r from-accent to-indigo-400 h-2 rounded-full transition-all duration-1000"
                  :style="{ width: getAverageLevel(category.skills) + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Additional Info -->
      <div class="mt-16 text-center fade-in" ref="additionalInfo">
        <div class="bg-gray-800 rounded-xl p-8 border border-gray-700">
          <h3 class="text-2xl font-bold text-gray-100 mb-4">
            Siempre Aprendiendo
          </h3>
          <p class="text-gray-300 mb-6 max-w-2xl mx-auto">
            La tecnología evoluciona constantemente, y yo también. Me mantengo actualizado 
            con las últimas tendencias y mejores prácticas para ofrecer siempre soluciones modernas y eficientes.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <span 
              v-for="learning in currentLearning" 
              :key="learning"
              class="bg-accent/10 text-accent px-4 py-2 rounded-lg border border-accent/30 text-sm font-medium"
            >
              📚 {{ learning }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, h } from 'vue'
import { skillCategories } from '../data'
import type { Skill } from '../data'

const sectionHeader = ref<HTMLElement | null>(null)
const skillCards = ref<HTMLElement[]>([])
const additionalInfo = ref<HTMLElement | null>(null)

const currentLearning = [
  'Kubernetes',
  'AWS Cloud',
  'GraphQL',
  'Microservicios'
]

// Get category icon based on category name
const getCategoryIcon = (category: string) => {
  const icons = {
    'Backend': () => h('svg', {
      fill: 'none',
      stroke: 'currentColor',
      viewBox: '0 0 24 24',
      xmlns: 'http://www.w3.org/2000/svg'
    }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2',
        d: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01'
      })
    ]),
    'Frontend': () => h('svg', {
      fill: 'none',
      stroke: 'currentColor',
      viewBox: '0 0 24 24',
      xmlns: 'http://www.w3.org/2000/svg'
    }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2',
        d: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
      })
    ]),
    'Bases de Datos': () => h('svg', {
      fill: 'none',
      stroke: 'currentColor',
      viewBox: '0 0 24 24',
      xmlns: 'http://www.w3.org/2000/svg'
    }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2',
        d: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4'
      })
    ]),
    'DevOps y Sistemas': () => h('svg', {
      fill: 'none',
      stroke: 'currentColor',
      viewBox: '0 0 24 24',
      xmlns: 'http://www.w3.org/2000/svg'
    }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2',
        d: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
      }),
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2',
        d: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z'
      })
    ]),
    'Seguridad': () => h('svg', {
      fill: 'none',
      stroke: 'currentColor',
      viewBox: '0 0 24 24',
      xmlns: 'http://www.w3.org/2000/svg'
    }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2',
        d: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
      })
    ])
  }
  
  return icons[category as keyof typeof icons] || icons['Backend']
}

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

// Calculate average skill level for progress bar
const getAverageLevel = (skills: Skill[]) => {
  const levelValues = {
    'Beginner': 25,
    'Intermediate': 50,
    'Advanced': 75,
    'Expert': 95
  }
  
  const total = skills.reduce((sum, skill) => {
    return sum + (levelValues[skill.level as keyof typeof levelValues] || 25)
  }, 0)
  
  return Math.round(total / skills.length)
}

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
  if (additionalInfo.value) observer.observe(additionalInfo.value)
  
  skillCards.value.forEach((card) => {
    if (card) observer.observe(card)
  })
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