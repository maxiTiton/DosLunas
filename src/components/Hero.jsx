import React from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const Hero = () => {
  const [heroRef, isHeroVisible] = useScrollAnimation(0.1)
  const [titleRef, isTitleVisible] = useScrollAnimation(0.1)
  const [subtitleRef, isSubtitleVisible] = useScrollAnimation(0.1)
  const [buttonsRef, isButtonsVisible] = useScrollAnimation(0.1)
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Imagen de fondo del Hero */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Contenido del Hero */}
      <div ref={heroRef} className="relative z-10 text-center text-white px-6 sm:px-8 md:px-0 max-w-4xl mx-auto">
        <h1 ref={titleRef} className={`text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight fade-up ${isTitleVisible ? 'visible' : ''}`}>
          Cabañas Dos Lunas
        </h1>
        <p ref={subtitleRef} className={`text-base sm:text-lg md:text-2xl mb-8 max-w-xl mx-auto fade-up fade-up-delay-1 ${isSubtitleVisible ? 'visible' : ''}`}>
          Donde la naturaleza y el descanso se encuentran
        </p>
        <div ref={buttonsRef} className={`flex flex-col sm:flex-row gap-4 justify-center items-center fade-up fade-up-delay-2 ${isButtonsVisible ? 'visible' : ''}`}>
          <a 
            href="#cabanas" 
            className="bg-brick-600 hover:bg-brick-800 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl w-40 sm:w-auto text-center"
          >
            Ver Cabañas
          </a>
          <a 
            href="#contacto" 
            className="bg-sage-600 hover:bg-sage-800 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl w-40 sm:w-auto text-center"
          >
            Contactar
          </a>
        </div>
      </div>

      {/* Indicador de scroll hacia abajo */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          {/* Usar SVG o componente React FontAwesome si querés */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="w-8 h-8 text-white"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero

