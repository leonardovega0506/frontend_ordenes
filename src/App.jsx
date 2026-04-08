import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import OrdenList from './pages/OrdenList'
import CrearOrden from './pages/CrearOrden'
import SurtirOrden from './pages/SurtirOrden'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OrdenList />} />
        <Route path="/crear" element={<CrearOrden />} />
        <Route path="/surtir/:id" element={<SurtirOrden />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
