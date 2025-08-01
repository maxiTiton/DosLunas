import React from 'react'

const Contacto = () => {
  const whatsappNumber = "5493586000002" // Número proporcionado
  const email = "cab_doslunas@yahoo.com.ar" // Email proporcionado

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hola! Me interesa hacer una reserva en Cabañas Dos Lunas. ¿Podrían brindarme más información?")
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

  const handleEmail = () => {
    const subject = encodeURIComponent("Consulta sobre reserva - Cabañas Dos Lunas")
    window.open(`mailto:${email}?subject=${subject}`, '_blank')
  }

  return (
    <section id="contacto" className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4 md:mb-6">
            Contacto
          </h2>
          <div className="w-20 md:w-24 h-1 bg-wood-600 mx-auto mb-6 md:mb-8"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Reservá tu estadía o consultanos cualquier duda que tengas
          </p>
        </div>

        {/* Botones de contacto centrados */}
        <div className="max-w-lg mx-auto space-y-4 md:space-y-6 px-4">
          {/* WhatsApp */}
          <button
            onClick={handleWhatsApp}
            className="w-full flex items-center space-x-4 md:space-x-6 bg-sage-600 hover:bg-sage-800 text-white px-4 md:px-8 py-4 md:py-6 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl group min-h-[4rem] md:min-h-0"
          >
            <div className="flex-shrink-0">
              <i className="fab fa-whatsapp text-2xl md:text-3xl"></i>
            </div>
            <div className="flex-1 text-left">
              <div className="text-base md:text-lg font-bold">WhatsApp</div>
              <div className="text-xs md:text-sm opacity-90">Sr. Guillermo Ropolo - +54 9 358 600-0002</div>
            </div>
            <div className="flex-shrink-0">
              <i className="fas fa-external-link-alt text-base md:text-lg group-hover:translate-x-1 transition-transform"></i>
            </div>
          </button>

          {/* Email */}
          <button
            onClick={handleEmail}
            className="w-full flex items-center space-x-4 md:space-x-6 bg-brick-600 hover:bg-brick-800 text-white px-4 md:px-8 py-6 md:py-6 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl group min-h-[5rem] md:min-h-0"
          >
            <div className="flex-shrink-0">
              <i className="fas fa-envelope text-2xl md:text-3xl"></i>
            </div>
            <div className="flex-1 text-left">
              <div className="text-base md:text-lg font-bold">Email</div>
              <div className="text-xs md:text-sm opacity-90">cab_doslunas@yahoo.com.ar</div>
            </div>
            <div className="flex-shrink-0">
              <i className="fas fa-external-link-alt text-base md:text-lg group-hover:translate-x-1 transition-transform"></i>
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Contacto
