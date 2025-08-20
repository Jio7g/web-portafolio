import { onMounted, type Ref } from 'vue'

export const useIntersectionObserver = () => {
  const observeElements = (elements: Ref<HTMLElement | null>[] | Ref<HTMLElement[]>) => {
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

    onMounted(() => {
      elements.forEach((elementRef) => {
        if (Array.isArray(elementRef.value)) {
          elementRef.value.forEach((el) => {
            if (el) observer.observe(el)
          })
        } else if (elementRef.value) {
          observer.observe(elementRef.value)
        }
      })
    })

    return observer
  }

  return {
    observeElements
  }
}