import React from 'react'

const Nosotros = () => {
  // Rutas corregidas para acceder a imágenes dentro de /public/images
  const imagenes = [
    '/images/luna1/principal.jpg',
    '/images/nosotros-1.jpg',
    '/images/alpaCorral.avif',
    '/images/nosotros-3.jpg',
  ]

  return (
    <section id="nosotros" className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4 md:mb-6">
            Sobre Nosotros
          </h2>
          <div className="w-20 md:w-24 h-1 bg-sage-600 mx-auto mb-4 md:mb-6"></div>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 font-medium italic max-w-4xl mx-auto leading-relaxed px-4">
            Evocar la esencia divina de la luna de los Comechingones es encontrarse con la naturaleza.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-1 items-center">
          {/* Grid de imágenes - Primero en mobile */}
          <div className="grid grid-cols-2 gap-2 md:gap-3 max-w-sm md:max-w-lg mx-auto lg:order-2">
            {imagenes.map((imagen, index) => (
              <div
                key={index}
                className="w-36 h-36 md:w-52 md:h-52 rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-2xl hover:shadow-xl md:hover:shadow-3xl transition-shadow duration-300"
                style={{ boxShadow: '0 8px 16px -3px rgba(0, 0, 0, 0.15), 0 4px 6px -2px rgba(0, 0, 0, 0.1)' }}
              >
                <img
                  src={imagen}
                  alt={`Cabaña Dos Lunas ${index + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = `https://images.unsplash.com/photo-1464822759844-d150456e8b80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`
                  }}
                />
              </div>
            ))}
          </div>

          {/* Texto - Segundo en mobile */}
          <div className="bg-white px-6 md:px-10 py-6 md:py-8 rounded-3xl shadow-lg border border-gray-100 relative w-full max-w-xl mx-auto lg:mx-0 lg:ml-16 lg:order-1 mt-6 lg:mt-0">
            <div className="relative z-10">
              <div className="space-y-4 md:space-y-5 text-gray-700 text-justify leading-relaxed">
                <p className="text-sm md:text-base leading-6 md:leading-7">
                  <em>Dos Lunas</em> es un complejo de cabañas totalmente equipadas, ubicado en una colina serrana, en plena naturaleza de Alpa Corral.
                </p>
                <p className="text-sm md:text-base leading-6 md:leading-7">
                  A pocos metros del centro del pueblo, el complejo ofrece tranquilidad sin perder conexión con lo esencial. Al pie de la colina, un breve descenso conduce directamente al río, donde el sonido del agua y la vegetación completan la experiencia.
                </p>
                <p className="text-sm md:text-base leading-6 md:leading-7">
                  El predio ofrece un parque arbolado con juegos infantiles, como hamacas y tobogán, y una amplia zona verde ideal para disfrutar en familia o con amigos.
                </p>
                <p className="text-sm md:text-base leading-6 md:leading-7">
                  Como sugiere el nombre, la <em>luna</em> también forma parte del lugar: rige los ciclos de la naturaleza, ilumina las noches y acompaña el descanso de quienes nos visitan.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tarjetas */}
        <div className="mt-12 md:mt-16 flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 max-w-5xl px-4">
            <div className="bg-white p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-lg w-full mx-auto flex md:flex-col items-center md:items-center space-x-4 md:space-x-0 md:space-y-4 min-h-[5rem] md:min-h-[14rem]">
              <div className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 bg-sage-100 rounded-full flex items-center justify-center">
                <i className="fas fa-water text-lg md:text-2xl text-sage-600"></i>
              </div>
              <div className="flex-1 md:text-center">
                <h3 className="text-sm md:text-lg font-bold text-sage-700 mb-1">A 100 m del río</h3>
                <p className="text-gray-600 text-xs md:text-base leading-tight">Disfrutá el río de Alpa Corral a pasos de tu cabaña.</p>
              </div>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-lg w-full mx-auto flex md:flex-col items-center md:items-center space-x-4 md:space-x-0 md:space-y-4 min-h-[5rem] md:min-h-[14rem]">
              <div className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 bg-wood-100 rounded-full flex items-center justify-center">
                <i className="fas fa-bed text-lg md:text-2xl text-wood-600"></i>
              </div>
              <div className="flex-1 md:text-center">
                <h3 className="text-sm md:text-lg font-bold text-wood-700 mb-1">Cabañas equipadas</h3>
                <p className="text-gray-600 text-xs md:text-base leading-tight">Con todo lo necesario para tu estadía.</p>
              </div>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-lg w-full mx-auto flex md:flex-col items-center md:items-center space-x-4 md:space-x-0 md:space-y-4 min-h-[5rem] md:min-h-[14rem]">
              <div className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 bg-terra-100 rounded-full flex items-center justify-center">
                <i className="fas fa-users text-lg md:text-2xl text-terra-600"></i>
              </div>
              <div className="flex-1 md:text-center">
                <h3 className="text-sm md:text-lg font-bold text-terra-700 mb-1">Ambiente familiar</h3>
                <p className="text-gray-600 text-xs md:text-base leading-tight">Un entorno cálido y seguro para toda la familia.</p>
              </div>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-lg w-full mx-auto flex md:flex-col items-center md:items-center space-x-4 md:space-x-0 md:space-y-4 min-h-[5rem] md:min-h-[14rem]">
              <div className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 bg-brick-100 rounded-full flex items-center justify-center">
                <i className="fas fa-map-marker-alt text-lg md:text-2xl text-brick-700"></i>
              </div>
              <div className="flex-1 md:text-center">
                <h3 className="text-sm md:text-lg font-bold text-brick-700 mb-1">Ubicación ideal</h3>
                <p className="text-gray-600 text-xs md:text-base leading-tight">En una zona elevada y tranquila, a 400 m del centro.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Nosotros

