import React, { useState } from 'react'

const Cabanas = () => {
  const [selectedCabana, setSelectedCabana] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)

  const cabanas = [
  {
    id: 'luna1',
    nombre: 'Luna I',
    descripcion: 'Cabaña completa con capacidad ampliada, ideal para familias numerosas o grupos de amigos.',
    capacidad: '7 personas',
    habitaciones: '1 dormitorio',
    bano: '1 baño completo',
    cocina: 'Cocina equipada',
    extras: ['WiFi', 'Alarma de seguridad', 'Parrilla con juego de jardín', 'Hogar a leñas en living', 'Cocina Equipada', 'Galería-cochera individual', 'Calefactores en cada ambiente', 'Ropa blanca', 'DirectTV', 'Juegos infantiles'],
    imagen_principal: '/images/luna1/principal.jpg',
    galeria: [
      '/images/luna1/cabana1-dormi-matrimonial.jpg',
      '/images/luna1/cabana1-dormi-multiple.jpg',
      '/images/luna1/cabana1-comedor.jpg',
      '/images/luna1/cabana1-comedor-cocina.jpg',
      '/images/luna1/cabana1-cocina.jpg',
      '/images/luna1/cabana1-banio.jpg',
      '/images/luna1/cabana1-asador.jpg',
      '/images/luna1/cabana1-escalera.jpg',
      '/images/luna1/cabana1-garage.jpg',
    ]
  },
  {
    id: 'luna2',
    nombre: 'Luna II',
    descripcion: 'Perfecta para familias o grupos medianos que buscan comodidad y tranquilidad.',
    capacidad: '6 personas',
    habitaciones: '2 dormitorios',
    bano: '2 baños completos',
    cocina: 'Cocina completa con comedor',
    extras: ['WiFi', 'Alarma de seguridad', 'Parrilla con juego de jardín', 'Hogar a leñas en living', 'Cocina Equipada', 'Galería-cochera individual', 'Calefactores en cada ambiente', 'Ropa blanca', 'DirectTV', 'Juegos infantiles'],
    imagen_principal: '/images/luna2/principal.jpg',
    galeria: [
      '/images/luna2/cabana2-domi-matrimonial.jpg',
      '/images/luna2/cabana2-dormi-multiple.jpg',
      '/images/luna2/cabana2-dormi-multiple2.jpg',
      '/images/luna2/cabana2-comedor.jpg',
      '/images/luna2/cabana2-banio.jpg',
      '/images/luna2/cabana2-asador.jpg',
      '/images/luna2/cabana2-escalera.jpg',
      '/images/luna2/cabana2-escalera2.jpg',
      '/images/luna2/cabana2-lavadero.jpg',
    ]
  }
  ];


  const selectCabana = (cabana) => {
    setSelectedCabana(cabana)
    // Scroll mínimo, solo hasta ocultar las opciones de selección
    setTimeout(() => {
      const detailsSection = document.querySelector('.cabaña-details')
      if (detailsSection) {
        const rect = detailsSection.getBoundingClientRect()
        const currentScrollY = window.scrollY
        const targetScrollY = currentScrollY + rect.top - 100 // 100px de margen para menos scroll
        
        window.scrollTo({
          top: targetScrollY,
          behavior: 'smooth'
        })
      }
    }, 100)
  }

  const backToSelection = () => {
    setSelectedCabana(null)
  }

  const openModal = (imageIndex) => {
    setSelectedImage(imageIndex)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setSelectedImage(0)
  }

  const nextImage = () => {
    setSelectedImage((prev) => 
      prev === selectedCabana.galeria.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setSelectedImage((prev) => 
      prev === 0 ? selectedCabana.galeria.length - 1 : prev - 1
    )
  }

  return (
    <section id="cabanas" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className={`text-center ${selectedCabana ? 'mb-12 md:mb-16' : 'mb-8'}`}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4 md:mb-6">
            Nuestras Cabañas
          </h2>
          <div className="w-20 md:w-24 h-1 bg-wood-600 mx-auto mb-6 md:mb-8"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6 md:mb-8 px-4">
            Elegí la cabaña que mejor se adapte a tus necesidades
          </p>
          
          {/* Opciones de selección siempre visibles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto px-4">
            {cabanas.map((cabana) => (
              <div 
                key={cabana.id}
                className={`group cursor-pointer transition-all duration-300 ${
                  selectedCabana?.id === cabana.id ? 'shadow-2xl' : ''
                }`}
                onClick={() => selectCabana(cabana)}
                style={{ 
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  transform: 'scale(1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)'
                }}
              >
                <div className="relative shadow-lg bg-black rounded-2xl overflow-hidden h-[280px] md:h-[320px]">
                  <img
                    src={cabana.imagen_principal}
                    alt={cabana.nombre}
                    className={`absolute inset-0 w-full h-full object-cover rounded-xl transition-transform duration-500 ${
                      selectedCabana?.id === cabana.id ? 'brightness-90 saturate-110' : ''
                    } hover:scale-110`}
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                    }}
                  />

                  <div 
                    className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-300 ${
                      selectedCabana?.id === cabana.id ? 'from-black/90 via-black/30' : ''
                    }`}
                  ></div>
                  
                  {/* Estado - derecha arriba */}
                  <div className="absolute top-4 md:top-6 right-4 md:right-6">
                    {selectedCabana?.id === cabana.id ? (
                      <span className="inline-flex items-center px-2 md:px-3 py-1 bg-brick-600/90 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                        <i className="fas fa-check mr-1"></i>
                        Seleccionada
                      </span>
                    ) : (
                      <div className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <span className="inline-flex items-center px-2 md:px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                          <span className="hidden md:inline">Click para más detalles</span>
                          <span className="md:hidden">Ver detalles</span>
                          <i className="fas fa-arrow-right ml-1"></i>
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {/* Título y capacidad - izquierda abajo */}
                  <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 text-white">
                    <h3 className="text-xl md:text-2xl font-display font-bold mb-1">
                      {cabana.nombre}
                    </h3>
                    <div className="flex items-center space-x-1 text-sm opacity-90">
                      <i className="fas fa-users"></i>
                      <span>{cabana.id === 'luna1' ? '7 personas' : '6 personas'}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vista detallada de cabaña seleccionada */}
        {selectedCabana && (
          <div className="max-w-6xl mx-auto cabaña-details px-4">
            {/* Información principal */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-8 md:mb-12">
              {/* Imagen principal - Solo desktop */}
              <div className="relative hidden lg:block">
                <img
                  src={selectedCabana.imagen_principal}
                  alt={selectedCabana.nombre}
                  className="w-full h-64 md:h-96 object-cover rounded-xl md:rounded-2xl shadow-lg md:shadow-2xl"
                  onError={(e) => {
                    e.target.src = `https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`
                  }}
                />
              </div>

              {/* Información */}
              <div className="space-y-4 md:space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-4 sm:space-y-0">
                  <h3 className="text-2xl md:text-4xl font-display font-bold text-gray-900">
                    {selectedCabana.nombre}
                  </h3>
                  <div className="flex items-center space-x-2 text-wood-600 bg-white px-3 md:px-4 py-2 rounded-lg shadow-md w-fit">
                    <i className="fas fa-users text-lg md:text-xl"></i>
                    <span className="text-base md:text-lg font-medium">{selectedCabana.capacidad}</span>
                  </div>
                </div>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  {selectedCabana.descripcion}
                </p>

                {/* Imagen principal - Solo mobile */}
                <div className="relative lg:hidden">
                  <img
                    src={selectedCabana.imagen_principal}
                    alt={selectedCabana.nombre}
                    className="w-full h-64 object-cover rounded-xl shadow-lg"
                    onError={(e) => {
                      e.target.src = `https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`
                    }}
                  />
                </div>

                {/* Comodidades con símbolos específicos */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 md:mb-4 text-base md:text-lg">Comodidades incluidas:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                    <div className="flex items-center space-x-3">
                      <i className="fas fa-wifi text-sage-600 text-base md:text-lg"></i>
                      <span className="text-gray-700 font-medium text-sm md:text-base">WiFi</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="fas fa-drumstick-bite text-wood-600 text-base md:text-lg"></i>
                      <span className="text-gray-700 font-medium text-sm md:text-base">Parrilla con juego de jardín</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="fas fa-fire text-terra-600 text-base md:text-lg"></i>
                      <span className="text-gray-700 font-medium text-sm md:text-base">Hogar a leñas en living</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="fas fa-utensils text-brick-600 text-base md:text-lg"></i>
                      <span className="text-gray-700 font-medium text-sm md:text-base">Cocina Equipada</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="fas fa-car text-sage-600 text-base md:text-lg"></i>
                      <span className="text-gray-700 font-medium text-sm md:text-base">Galería-cochera individual</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="fas fa-thermometer-half text-wood-600 text-base md:text-lg"></i>
                      <span className="text-gray-700 font-medium text-sm md:text-base">Calefactores en cada ambiente</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="fas fa-bed text-terra-600 text-base md:text-lg"></i>
                      <span className="text-gray-700 font-medium text-sm md:text-base">Ropa blanca</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="fas fa-tv text-brick-600 text-base md:text-lg"></i>
                      <span className="text-gray-700 font-medium text-sm md:text-base">DirectTV</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="fas fa-child text-sage-600 text-base md:text-lg"></i>
                      <span className="text-gray-700 font-medium text-sm md:text-base">Juegos infantiles</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Galería */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4 md:mb-6 text-xl md:text-2xl text-center">
                Galería de fotos
              </h4>
              {/* Mobile: Una columna, Desktop: 3 columnas */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                {selectedCabana.galeria.map((imagen, i) => (
                  <div 
                    key={i}
                    className="relative group cursor-pointer overflow-hidden rounded-lg md:rounded-xl shadow-lg hover:shadow-xl md:hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                    onClick={() => openModal(i)}
                  >
                    <img
                      src={imagen}
                      alt={`${selectedCabana.nombre} - Foto ${i + 1}`}
                      className="w-full h-48 md:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = `https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80`
                      }}
                    />
                    <div className="absolute bottom-2 md:bottom-3 right-2 md:right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <i className="fas fa-expand-arrows-alt text-white text-base md:text-lg drop-shadow-lg"></i>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modal de galería */}
      {modalOpen && selectedCabana && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 md:p-8">
          {/* Botón cerrar - Fijo en la pantalla en mobile */}
          <button
            onClick={closeModal}
            className="fixed md:absolute top-4 md:top-4 right-4 md:right-4 text-white hover:text-red-400 z-30 text-3xl md:text-4xl transition-all duration-300 hover:scale-110 bg-transparent md:bg-black/50 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center"
          >
            <i className="fas fa-times"></i>
          </button>

          <div className="relative max-w-6xl w-full max-h-full flex flex-col">
            {/* Imagen principal */}
            <div className="relative flex-1 flex items-center justify-center mb-2 md:mb-6 max-h-[80vh]">
              <img
                src={selectedCabana.galeria[selectedImage]}
                alt={`${selectedCabana.nombre} - Foto ${selectedImage + 1}`}
                className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
                style={{ maxHeight: '75vh' }}
                onError={(e) => {
                  e.target.src = `https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`
                }}
              />

              {/* Navegación */}
              <button
                onClick={prevImage}
                className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-transparent md:bg-black/70 text-white p-3 md:p-4 rounded-full md:hover:bg-black/90 transition-all duration-300 hover:scale-110"
              >
                <i className="fas fa-chevron-left text-lg md:text-xl"></i>
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-transparent md:bg-black/70 text-white p-3 md:p-4 rounded-full md:hover:bg-black/90 transition-all duration-300 hover:scale-110"
              >
                <i className="fas fa-chevron-right text-lg md:text-xl"></i>
              </button>

              {/* Contador */}
              <div className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-md text-white px-3 md:px-4 py-1 md:py-2 rounded-full text-sm font-medium shadow-lg">
                {selectedImage + 1} / {selectedCabana.galeria.length}
              </div>
            </div>

            {/* Thumbnails - Solo en escritorio */}
            <div className="hidden md:flex justify-center mt-2">
              <div className="flex space-x-3 overflow-x-auto pb-4 px-4 max-w-full">
                {selectedCabana.galeria.map((imagen, i) => (
                  <img
                    key={i}
                    src={imagen}
                    alt={`Thumbnail ${i + 1}`}
                    className={`w-20 h-20 object-cover rounded-lg cursor-pointer flex-shrink-0 transition-all duration-300 ${
                      i === selectedImage ? 'ring-3 ring-white scale-110 brightness-100' : 'opacity-60 hover:opacity-100 hover:scale-105'
                    }`}
                    onClick={() => setSelectedImage(i)}
                    onError={(e) => {
                      e.target.src = `https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Cabanas
