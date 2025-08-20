<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800">
    <nav class="section-container">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <a href="#" class="text-xl font-bold text-gray-100 hover:text-accent transition-colors duration-300">
            Carlos Ramos
          </a>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <a
              v-for="item in navItems"
              :key="item.name"
              :href="item.href"
              @click="scrollToSection(item.href)"
              class="text-gray-100 hover:text-accent px-3 py-2 text-sm font-medium transition-colors duration-300"
            >
              {{ item.name }}
            </a>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="toggleMobileMenu"
            class="text-gray-100 hover:text-accent focus:outline-none focus:text-accent transition-colors duration-300"
            aria-label="Toggle mobile menu"
          >
            <svg
              class="h-6 w-6"
              :class="{ 'hidden': mobileMenuOpen, 'block': !mobileMenuOpen }"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              class="h-6 w-6"
              :class="{ 'block': mobileMenuOpen, 'hidden': !mobileMenuOpen }"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Menu -->
      <div
        class="md:hidden transition-all duration-300 ease-in-out"
        :class="{ 'max-h-0 opacity-0 overflow-hidden': !mobileMenuOpen, 'max-h-64 opacity-100': mobileMenuOpen }"
      >
        <div class="px-2 pt-2 pb-3 space-y-1 bg-gray-800 rounded-lg mt-2">
          <a
            v-for="item in navItems"
            :key="item.name"
            :href="item.href"
            @click="scrollToSection(item.href, true)"
            class="text-gray-100 hover:text-accent hover:bg-gray-700 block px-3 py-2 text-base font-medium rounded-md transition-colors duration-300"
          >
            {{ item.name }}
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface NavItem {
  name: string
  href: string
}

const mobileMenuOpen = ref(false)

const navItems: NavItem[] = [
  { name: 'Proyectos', href: '#proyectos' },
  { name: 'Sobre Mí', href: '#sobre-mi' },
  { name: 'Habilidades', href: '#habilidades' },
  { name: 'Contacto', href: '#contacto' }
]

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const scrollToSection = (href: string, closeMobile = false) => {
  if (closeMobile) {
    mobileMenuOpen.value = false
  }
  
  const element = document.querySelector(href)
  if (element) {
    const headerHeight = 64 // Height of fixed header
    const elementPosition = element.offsetTop - headerHeight
    
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    })
  }
}
</script>