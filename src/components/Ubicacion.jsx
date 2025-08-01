import React from 'react'

const Ubicacion = () => {
  const handleMaps = () => {
    window.open(
      'https://www.google.com/maps/place/Caba%C3%B1as+Dos+Lunas/@-32.6875408,-64.7267041,284m/data=!3m1!1e3!4m6!3m5!1s0x95d25d0050a25673:0xa27ca08813d74a94!8m2!3d-32.687563!4d-64.7258223!16s%2Fg%2F11xp0qgfxn?hl=es-419&entry=ttu',
      '_blank'
    )
  }

  return (
    <section id="ubicacion" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4 md:mb-6">
            Ubicación
          </h2>
          <div className="w-20 md:w-24 h-1 bg-brick-600 mx-auto mb-6 md:mb-8"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Encontranos en el corazón de la naturaleza, un lugar fácil de llegar pero difícil de olvidar
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-2 md:px-0">
          {/* Mapa de Google Maps */}
          <div className="relative mb-4 md:mb-6">
            <div className="bg-gray-200 rounded-xl md:rounded-2xl overflow-hidden shadow-lg h-64 md:h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d940.0252551971785!2d-64.72670410000001!3d-32.6875408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d25d0050a25673%3A0xa27ca08813d74a94!2sCaba%C3%B1as%20Dos%20Lunas!5e1!3m2!1ses-419!2sar!4v1722000000000!5m2!1ses-419!2sar"
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
          <div className="mb-6 md:mb-8 text-justify px-4">
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              <span className="font-bold italic text-brick-600">Aclaración importante:</span> Google Maps muestra incorrectamente el nombre de la calle como "Los Aromos"; la dirección correcta es "El Aguaribay". Sin embargo, las coordenadas son precisas y te llevarán al lugar exacto.
            </p>
          </div>

          {/* Botón para abrir en Google Maps */}
          <div className="text-center px-4">
            <button
              onClick={handleMaps}
              className="inline-flex items-center justify-center space-x-3 md:space-x-4 bg-brick-600 hover:bg-brick-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold transition-colors group text-base md:text-lg"
            >
              <i className="fas fa-map-marker-alt text-lg md:text-xl"></i>
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
