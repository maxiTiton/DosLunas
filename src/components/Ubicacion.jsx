import React from 'react'

const Ubicacion = () => {
  const handleMaps = () => {
    window.open(
      'https://www.google.com/maps/place/Caba%C3%B1as+Dos+Lunas/@-32.6875408,-64.7267041,284m/data=!3m1!1e3!4m6!3m5!1s0x95d25d0050a25673:0xa27ca08813d74a94!8m2!3d-32.687563!4d-64.7258223!16s%2Fg%2F11xp0qgfxn?hl=es-419&entry=ttu',
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
