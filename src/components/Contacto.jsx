import React from 'react'

const Contacto = () => {
  // Aquí pondrás los datos reales de contacto
  const whatsappNumber = "5491234567890" // Reemplaza con el número real
  const email = "info@doslunas.com" // Reemplaza con el email real

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hola! Me interesa hacer una reserva en Cabañas Dos Lunas. ¿Podrían brindarme más información?")
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

  const handleEmail = () => {
    const subject = encodeURIComponent("Consulta sobre reserva - Cabañas Dos Lunas")
    const body = encodeURIComponent("Hola! Me interesa hacer una reserva en Cabañas Dos Lunas. ¿Podrían brindarme más información sobre disponibilidad y tarifas?")
    window.open(`mailto:${email}?subject=${subject}&body=${body}`, '_blank')
  }

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
            Contacto
          </h2>
          <div className="w-24 h-1 bg-terra-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Listo para vivir una experiencia única? Contactanos para consultar disponibilidad y hacer tu reserva
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-display font-semibold text-gray-900 mb-6">
                Reservas y Consultas
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Nos encanta ayudarte a planificar tu escapada perfecta. Elegí la forma que prefieras para comunicarte con nosotros:
              </p>
            </div>

            {/* Botones de contacto */}
            <div className="space-y-4">
              <button
                onClick={handleWhatsApp}
                className="w-full flex items-center justify-center space-x-4 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-lg font-semibold transition-colors group"
              >
                <i className="fab fa-whatsapp text-2xl"></i>
                <span>Contactar por WhatsApp</span>
                <i className="fas fa-external-link-alt text-sm group-hover:translate-x-1 transition-transform"></i>
              </button>

              <button
                onClick={handleEmail}
                className="w-full flex items-center justify-center space-x-4 bg-brick-600 hover:bg-brick-700 text-white px-6 py-4 rounded-lg font-semibold transition-colors group"
              >
                <i className="fas fa-envelope text-xl"></i>
                <span>Enviar Email</span>
                <i className="fas fa-external-link-alt text-sm group-hover:translate-x-1 transition-transform"></i>
              </button>
            </div>

            {/* Información adicional */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-info-circle text-sage-600 mr-2"></i>
                Información importante
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-brick-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Las reservas se confirman con 50% de seña</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-brick-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Check-in: 15:00 hs | Check-out: 11:00 hs</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-brick-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Consultá por estadías de más de 7 días</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-brick-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Mascotas bienvenidas (consultar condiciones)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Imagen o contenido visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-wood-100 to-wood-200 rounded-lg p-8 h-full min-h-96">
              <div className="text-center h-full flex flex-col justify-center">
                <div className="w-24 h-24 bg-sage-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-comments text-white text-3xl"></i>
                </div>
                <h3 className="text-2xl font-display font-semibold text-gray-900 mb-4">
                  ¡Estamos aquí para ayudarte!
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Nuestro equipo está disponible para responder todas tus consultas y 
                  ayudarte a planificar la escapada perfecta a Cabañas Dos Lunas.
                </p>
                <div className="mt-8 space-y-2 text-gray-600">
                  <p className="flex items-center justify-center">
                    <i className="fas fa-clock mr-2"></i>
                    Respuesta rápida garantizada
                  </p>
                  <p className="flex items-center justify-center">
                    <i className="fas fa-heart mr-2"></i>
                    Atención personalizada
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacto
