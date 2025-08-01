import { useState, useEffect, useRef } from 'react'

const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Una vez que se hace visible, dejamos de observar para mejor rendimiento
          observer.unobserve(entry.target)
        }
      },
      {
        threshold,
        // Agregar rootMargin para que se active un poco antes de que sea completamente visible
        rootMargin: '50px'
      }
    )

    const currentElement = elementRef.current
    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [threshold])

  return [elementRef, isVisible]
}

export default useScrollAnimation
