<template>
  <section id="contacto" class="py-20 bg-gray-800">
    <div class="section-container">
      <!-- Section Header -->
      <div class="text-center mb-16 fade-in" ref="sectionHeader">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
          ¿Tienes una idea? Hablemos.
        </h2>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          Estoy disponible para nuevos proyectos y oportunidades de colaboración. 
          Transformemos tu visión en realidad.
        </p>
      </div>
      
      <div class="grid lg:grid-cols-2 gap-12 items-start">
        <!-- Contact Form -->
        <div class="fade-in" ref="contactForm">
          <div class="bg-gray-900 rounded-xl p-8 border border-gray-700">
            <h3 class="text-2xl font-bold text-gray-100 mb-6">
              Envíame un mensaje
            </h3>
            
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <!-- Name Field -->
              <div>
                <label for="name" class="block text-sm font-medium text-gray-300 mb-2">
                  Nombre *
                </label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full px-4 py-3 bg-dark-secondary border border-gray-600 rounded-lg text-text-primary placeholder-gray-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors duration-300"
                  placeholder="Tu nombre completo"
                />
              </div>
              
              <!-- Email Field -->
              <div>
                <label for="email" class="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 bg-dark-secondary border border-gray-600 rounded-lg text-text-primary placeholder-gray-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors duration-300"
                  placeholder="tu@email.com"
                />
              </div>
              
              <!-- Subject Field -->
              <div>
                <label for="subject" class="block text-sm font-medium text-gray-300 mb-2">
                  Asunto
                </label>
                <input
                  id="subject"
                  v-model="form.subject"
                  type="text"
                  class="w-full px-4 py-3 bg-dark-secondary border border-gray-600 rounded-lg text-text-primary placeholder-gray-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors duration-300"
                  placeholder="¿De qué quieres hablar?"
                />
              </div>
              
              <!-- Message Field -->
              <div>
                <label for="message" class="block text-sm font-medium text-gray-300 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="5"
                  class="w-full px-4 py-3 bg-dark-secondary border border-gray-600 rounded-lg text-text-primary placeholder-gray-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors duration-300 resize-none"
                  placeholder="Cuéntame sobre tu proyecto o idea..."
                ></textarea>
              </div>
              
              <!-- Submit Button -->
              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full btn-primary flex items-center justify-center"
                :class="{ 'opacity-50 cursor-not-allowed': isSubmitting }"
              >
                <svg 
                  v-if="isSubmitting"
                  class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24"
                >
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {{ isSubmitting ? 'Enviando...' : 'Enviar Mensaje' }}
              </button>
            </form>
            
            <!-- Success/Error Messages -->
            <div v-if="submitMessage" class="mt-4 p-4 rounded-lg" :class="submitSuccess ? 'bg-green-900/20 border border-green-700/30 text-green-400' : 'bg-red-900/20 border border-red-700/30 text-red-400'">
              {{ submitMessage }}
            </div>
          </div>
        </div>
        
        <!-- Contact Info -->
        <div class="fade-in" ref="contactInfo">
          <!-- Get in Touch -->
          <div class="mb-8">
            <h3 class="text-2xl font-bold text-gray-100 mb-6">
              Otras formas de contacto
            </h3>
            
            <div class="space-y-4">
              <!-- Email -->
              <div class="flex items-center p-4 bg-dark-primary rounded-lg border border-gray-700 hover:border-accent/50 transition-colors duration-300">
                <div class="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <p class="text-gray-300 text-sm">Email</p>
                  <a :href="`mailto:${personalInfo.email}`" class="text-text-primary font-medium hover:text-accent transition-colors duration-300">
                    {{ personalInfo.email }}
                  </a>
                </div>
              </div>
              
              <!-- Response Time -->
              <div class="flex items-center p-4 bg-dark-primary rounded-lg border border-gray-700">
                <div class="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <p class="text-gray-300 text-sm">Tiempo de respuesta</p>
                  <p class="text-text-primary font-medium">24-48 horas</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Social Links -->
          <div>
            <h3 class="text-2xl font-bold text-gray-100 mb-6">
              Sígueme en redes
            </h3>
            
            <div class="flex gap-4">
              <!-- LinkedIn -->
              <a
                :href="personalInfo.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-center w-16 h-16 bg-dark-primary border border-gray-700 rounded-lg hover:border-accent hover:bg-accent/10 transition-all duration-300 group"
              >
                <svg class="w-8 h-8 text-gray-400 group-hover:text-accent transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
              <!-- GitHub -->
              <a
                :href="personalInfo.github"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-center w-16 h-16 bg-dark-primary border border-gray-700 rounded-lg hover:border-accent hover:bg-accent/10 transition-all duration-300 group"
              >
                <svg class="w-8 h-8 text-gray-400 group-hover:text-accent transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <!-- Availability Status -->
          <div class="mt-8 p-6 bg-green-900/20 border border-green-700/30 rounded-lg">
            <div class="flex items-center mb-2">
              <div class="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <span class="text-green-400 font-medium">Disponible para proyectos</span>
            </div>
            <p class="text-gray-300 text-sm">
              Actualmente aceptando nuevos proyectos y oportunidades de trabajo remoto.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { personalInfo } from '../data'

const sectionHeader = ref<HTMLElement | null>(null)
const contactForm = ref<HTMLElement | null>(null)
const contactInfo = ref<HTMLElement | null>(null)

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitSuccess = ref(false)

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const handleSubmit = async () => {
  isSubmitting.value = true
  submitMessage.value = ''
  
  try {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // In a real application, you would send the data to your backend
    console.log('Form submitted:', form)
    
    submitMessage.value = '¡Mensaje enviado exitosamente! Te contactaré pronto.'
    submitSuccess.value = true
    
    // Reset form
    Object.assign(form, {
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  } catch (error) {
    submitMessage.value = 'Error al enviar el mensaje. Por favor, intenta de nuevo.'
    submitSuccess.value = false
  } finally {
    isSubmitting.value = false
    
    // Clear message after 5 seconds
    setTimeout(() => {
      submitMessage.value = ''
    }, 5000)
  }
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
  if (contactForm.value) observer.observe(contactForm.value)
  if (contactInfo.value) observer.observe(contactInfo.value)
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