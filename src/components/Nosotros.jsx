import React from 'react'

const Nosotros = () => {
  // Aquí pondrás las 4 imágenes generales que mencionaste
  const imagenes = [
    '/src/assets/images/luna1/principal.jpg',
    '/src/assets/images/nosotros-1.jpg',
    '/src/assets/images/alpaCorral.avif',
    '/src/assets/images/nosotros-3.jpg',
    
  ]

  return (
    <section id="nosotros" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
            Sobre Nosotros
          </h2>
          <div className="w-24 h-1 bg-sage-600 mx-auto mb-6"></div>
          <p className="text-base md:text-lg text-gray-600 font-medium italic max-w-4xl mx-auto leading-relaxed">
            Evocar la esencia divina de la luna de los Comechingones es encontrarse con la naturaleza.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-1 items-center">
          {/* Texto justificado en formato hoja */}
          <div className="bg-white px-10 py-8 rounded-3xl shadow-lg border border-gray-100 relative w-full max-w-xl" style={{marginLeft: '4rem'}}>
            <div className="relative z-10">
              <div className="space-y-5 text-gray-700 text-justify leading-relaxed">
                <p className="text-base leading-7">
                  <em>Dos Lunas</em> es un complejo de cabañas totalmente equipadas, ubicado en lo alto de una colina serrana, en plena naturaleza de Alpa Corral.
                </p>
                
                <p className="text-base leading-7">
                  A pocos metros del centro del pueblo, el complejo ofrece tranquilidad sin perder conexión con lo esencial. Al pie de la colina, un breve descenso conduce directamente al río, donde el sonido del agua y la vegetación completan la experiencia.
                </p>
                
                <p className="text-base leading-7">
                  El predio cuenta con un parque arbolado con juegos infantiles —hamacas, tobogán y espacio verde para disfrutar en familia—, a solo pasos del cauce.
                </p>
                
                <p className="text-base leading-7">
                  Como sugiere el nombre, la <em>luna</em> también forma parte del lugar: rige los ciclos de la naturaleza, ilumina las noches claras y acompaña el descanso de quienes nos visitan.
                </p>
              </div>
            </div>
          </div>

          {/* Grid de imágenes mejorado */}
          <div className="grid grid-cols-2 gap-3 max-w-lg mx-auto">
            {imagenes.map((imagen, index) => (
              <div 
                key={index}
                className="w-52 h-52 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300"
                style={{boxShadow: '0 15px 20px -5px rgba(0, 0, 0, 0.2), 0 8px 8px -5px rgba(0, 0, 0, 0.15)'}}
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
        </div>

        {/* Tarjetas de características */}
        <div className="mt-16 flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl">
            <div className="bg-white p-6 rounded-3xl shadow-lg text-center w-60">
              <div className="w-16 h-16 mx-auto mb-4 bg-sage-100 rounded-full flex items-center justify-center">
                <i className="fas fa-water text-2xl text-sage-600"></i>
              </div>
              <h3 className="text-lg font-bold text-sage-700 mb-2">A 100 m del río</h3>
              <p className="text-gray-600 text-sm">Disfrutá el río de Alpa Corral a pasos de tu cabaña.</p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg text-center w-60">
              <div className="w-16 h-16 mx-auto mb-4 bg-wood-100 rounded-full flex items-center justify-center">
                <i className="fas fa-bed text-2xl text-wood-600"></i>
              </div>
              <h3 className="text-lg font-bold text-wood-700 mb-2">Cabañas equipadas</h3>
              <p className="text-gray-600 text-sm">Con todo lo necesario para tu estadía.</p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg text-center w-60">
              <div className="w-16 h-16 mx-auto mb-4 bg-terra-100 rounded-full flex items-center justify-center">
                <i className="fas fa-users text-2xl text-terra-600"></i>
              </div>
              <h3 className="text-lg font-bold text-terra-700 mb-2">Ambiente familiar</h3>
              <p className="text-gray-600 text-sm">Un entorno cálido y seguro para toda la familia.</p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg text-center w-60">
              <div className="w-16 h-16 mx-auto mb-4 bg-brick-100 rounded-full flex items-center justify-center">
                <i className="fas fa-map-marker-alt text-2xl text-brick-700"></i>
              </div>
              <h3 className="text-lg font-bold text-brick-700 mb-2">Ubicación ideal</h3>
              <p className="text-gray-600 text-sm">En una zona elevada y tranquila, a 200 m del centro.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Nosotros
