import React from 'react'

const Ubicacion = () => {
  const handleMaps = () => {
    window.open(
      'https://www.google.com/maps/place/32%C2%B041\'15.2%22S+64%C2%B043\'32.9%22W/@-32.6875514,-64.7267353,319m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d-32.687553!4d-64.725802?hl=en-US&entry=ttu',
      '_blank'
    )
  }

  return (
    <section id="ubicacion" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
            Ubicación
          </h2>
          <div className="w-24 h-1 bg-brick-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encontranos en el corazón de la naturaleza, un lugar fácil de llegar pero difícil de olvidar
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Mapa de Google Maps */}
          <div className="relative mb-6">
            <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-lg h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d600.0533138631299!2d-64.725802!3d-32.687553!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDQxJzE1LjIiUyA2NMKwNDMnMzIuOSJX!5e1!3m2!1ses-419!2sar!4v1721899000000!5m2!1ses-419!2sar"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Cabañas Dos Lunas"
              ></iframe>
            </div>
          </div>

          {/* Aclaración importante */}
          <div className="mb-8 text-center">
            <p className="text-gray-700 leading-relaxed">
              <span className="font-bold italic text-brick-600">Aclaración importante:</span> Google Maps muestra incorrectamente el nombre de la calle como "Los Aromos". La dirección correcta es "El Aguaribay". Sin embargo, las coordenadas son precisas y te llevarán al lugar exacto.
            </p>
          </div>

          {/* Botón para abrir en Google Maps */}
          <div className="text-center">
            <button
              onClick={handleMaps}
              className="inline-flex items-center justify-center space-x-4 bg-brick-600 hover:bg-brick-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors group text-lg"
            >
              <i className="fas fa-map-marker-alt text-xl"></i>
              <span>Abrir en Google Maps</span>
              <i className="fas fa-external-link-alt text-sm group-hover:translate-x-1 transition-transform"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Ubicacion
