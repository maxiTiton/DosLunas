import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Nosotros from './components/Nosotros'
import Cabanas from './components/Cabanas'
import Contacto from './components/Contacto'
import Ubicacion from './components/Ubicacion'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div id="inicio">
        <Hero />
      </div>
      <Nosotros />
      <Cabanas />
      <Contacto />
      <Ubicacion />
    </div>
  )
}

export default App
