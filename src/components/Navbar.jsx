import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    // Verificar posición inicial al cargar la página
    const checkInitialPosition = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    // Llamar inmediatamente para verificar posición inicial
    checkInitialPosition()
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-gradient-to-b from-black/50 via-black/30 to-black/10 backdrop-blur-[2px]'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-2.5">
        <div className="flex justify-between items-center">
          <a 
            href="#inicio"
            className={`flex items-center cursor-pointer transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            <img 
              src="/images/logo.png" 
              alt="Dos Lunas" 
              className="h-14 w-auto mr-3 transition-all duration-300"
              style={{
                filter: isScrolled ? 'invert(1) brightness(0)' : 'none'
              }}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <span className="text-xl font-display font-bold hidden">
              Dos Lunas
            </span>
          </a>
          
          {/* Desktop Menu */}
          <div className={`hidden md:flex space-x-12 font-medium transition-colors duration-300 ${
            isScrolled ? 'text-gray-700' : 'text-white'
          }`}>
            <a href="#nosotros" className="relative py-2 transition-all duration-300 ease-out group hover:text-sage-600">
              <span className="relative z-10">Nosotros</span>
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-full transform -translate-x-1/2 bg-sage-600"></div>
            </a>
            <a href="#cabanas" className="relative py-2 transition-all duration-300 ease-out group hover:text-wood-600">
              <span className="relative z-10">Cabañas</span>
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-full transform -translate-x-1/2 bg-wood-600"></div>
            </a>
            <a href="#contacto" className="relative py-2 transition-all duration-300 ease-out group hover:text-terra-600">
              <span className="relative z-10">Contacto</span>
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-full transform -translate-x-1/2 bg-terra-600"></div>
            </a>
            <a href="#ubicacion" className="relative py-2 transition-all duration-300 ease-out group hover:text-brick-600">
              <span className="relative z-10">Ubicación</span>
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-full transform -translate-x-1/2 bg-brick-600"></div>
            </a>
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <a 
              href="#contacto" 
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ease-out hover:scale-110 hover:shadow-lg ${
                isScrolled
                  ? 'bg-brick-600 hover:bg-brick-800 text-white shadow-md hover:shadow-xl transform hover:-translate-y-0.5' 
                  : 'bg-white/20 backdrop-blur-sm hover:bg-white hover:text-gray-800 text-white border border-white/30 hover:border-white hover:backdrop-blur-md hover:drop-shadow-lg'
              }`}
            >
              Reservar
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
