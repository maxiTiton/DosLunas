import React from 'react'

const Ubicacion = () => {
  // Coordenadas reales de las cabañas
  const coordenadas = "-32.6874453,-64.7259486"
  const direccion = "El Aguaribay (no Los Aromos como muestra Google Maps)"

  const handleMaps = () => {
    window.open(`https://www.google.com.ar/maps/@-32.6874453,-64.7259486,115m/data=!3m1!1e3?hl=es&entry=ttu&g_ep=EgoyMDI1MDcyMi4wIKXMDSoASAFQAw%3D%3D`, '_blank')
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
          <div className="relative mb-8">
            <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-lg h-96">
              <iframe
                src={`https://www.google.com.ar/maps/embed?pb=!1m18!1m12!1m3!1d500!2d-64.7259486!3d-32.6874453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDQxJzE0LjciUyA2NMKwNDMnMzQuNyJX!5e1!3m2!1ses!2sar!4v1634567890123`}
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
              <span className="font-bold !italic text-brick-600">Aclaración importante:</span> Google Maps muestra incorrectamente 
              el nombre de la calle como "Los Aromos" ya que la calle correcta es "El Aguaribay". 
              Las coordenadas están bien marcadas y te dirigirán al lugar exacto.
            </p>
          </div>

          {/* Botón para abrir en Google Maps */}
          <div className="text-center">
            <button
              onClick={handleMaps}
              className="inline-flex items-center justify-center space-x-4 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors group text-lg"
            >
              <i className="fas fa-map-marker-alt text-xl"></i>
              <span>Abrir en Google Maps</span>
              <i className="fas fa-external-link-alt text-sm group-hover:translate-x-1 transition-transform"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 border-t border-gray-200 pt-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="text-3xl font-display font-bold text-gray-900 mb-4">
              Cabañas Dos Lunas
            </div>
            <p className="text-gray-600 mb-6">
              Tu refugio perfecto en la naturaleza
            </p>
            <div className="flex justify-center space-x-6 text-gray-500">
              <button
                onClick={() => window.open(`https://wa.me/5491234567890`, '_blank')}
                className="hover:text-green-500 transition-colors"
              >
                <i className="fab fa-whatsapp text-2xl"></i>
              </button>
              <button
                onClick={() => window.open(`mailto:info@doslunas.com`, '_blank')}
                className="hover:text-brick-600 transition-colors"
              >
                <i className="fas fa-envelope text-2xl"></i>
              </button>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200 text-sm text-gray-500">
              <p>&copy; 2025 Cabañas Dos Lunas. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Ubicacion
