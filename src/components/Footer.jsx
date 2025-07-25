import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <div className="text-3xl font-display font-bold text-gray-900 mb-4">
            Cabañas Dos Lunas
          </div>
          <p className="text-gray-600 mb-6">
            Tu refugio perfecto en la naturaleza
          </p>
          <div className="flex justify-center space-x-6 text-gray-500 mb-8">
            <button
              onClick={() => window.open(`https://wa.me/5493586000002`, '_blank')}
              className="hover:text-green-500 transition-colors"
            >
              <i className="fab fa-whatsapp text-2xl"></i>
            </button>
            <button
              onClick={() => window.open(`mailto:cab_doslunas@yahoo.com.ar`, '_blank')}
              className="hover:text-brick-600 transition-colors"
            >
              <i className="fas fa-envelope text-2xl"></i>
            </button>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[28rem] h-px bg-gray-200 mb-8"></div>
            <p className="text-sm text-gray-500 mb-1">&copy; 2025 Cabañas Dos Lunas. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
