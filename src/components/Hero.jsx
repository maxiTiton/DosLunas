import React from 'react'

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background Image - aquí colocarás la imagen del cartel con la cabaña */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/src/assets/images/hero-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
          Cabañas Dos Lunas
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Donde la naturaleza y el descanso se encuentran
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#cabanas" 
            className="bg-brick-600 hover:bg-brick-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Ver Cabañas
          </a>
          <a 
            href="#contacto" 
            className="bg-sage-600 hover:bg-sage-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Contactar
          </a>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <i className="fas fa-chevron-down text-white text-2xl"></i>
        </div>
      </div>
    </section>
  )
}

export default Hero
