export const useNavigation = () => {
  const scrollToSection = (href: string, offsetTop = 64) => {
    const element = document.querySelector(href)
    if (element) {
      const elementPosition = element.offsetTop - offsetTop
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  return {
    scrollToSection
  }
}