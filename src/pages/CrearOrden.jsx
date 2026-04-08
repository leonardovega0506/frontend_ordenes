import React, { useState } from 'react'
import { crearOrden } from '../services/api'

const CrearOrden = () => {
  const [productos, setProductos] = useState([{ productoId: '', cantidad: 1 }])

  const handleChange = (index, field, value) => {
    const nuevos = [...productos]
    nuevos[index][field] = value
    setProductos(nuevos)
  }

  const agregarProducto = () => {
    setProductos([...productos, { productoId: '', cantidad: 1 }])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await crearOrden({ productos })
    alert("Orden creada")
  }

  return (
    <div>
      <h1>Crear Orden</h1>
      <form onSubmit={handleSubmit}>
        {productos.map((p, i) => (
          <div key={i}>
            <input
              placeholder="Producto ID"
              onChange={(e) => handleChange(i, "productoId", e.target.value)}
            />
            <input
              type="number"
              onChange={(e) => handleChange(i, "cantidad", e.target.value)}
            />
          </div>
        ))}
        <button type="button" onClick={agregarProducto}>Agregar</button>
        <button type="submit">Guardar</button>
      </form>
    </div>
  )
}

export default CrearOrden
