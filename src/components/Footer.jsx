import React from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const Footer = () => {
  const [footerRef, isFooterVisible] = useScrollAnimation(0.1)
  
  return (
    <footer ref={footerRef} className={`bg-white border-t border-gray-200 py-6 md:py-8 block w-full fade-up ${isFooterVisible ? 'visible' : ''}`} style={{ position: 'relative', zIndex: 20, display: 'block', width: '100%' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6" style={{ width: '100%' }}>
        <div className="text-center" style={{ width: '100%', textAlign: 'center' }}>
          <p className="text-xs md:text-sm text-gray-500 px-2" style={{ margin: 0, padding: '0 0.5rem' }}>&copy; 2025 Cabañas Dos Lunas. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
