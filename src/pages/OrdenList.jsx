import React, { useEffect, useState } from 'react'
import { getOrdenes } from '../services/api'
import { Link } from 'react-router-dom'

const OrdenList = () => {
  const [ordenes, setOrdenes] = useState([])

  useEffect(() => {
    getOrdenes().then(setOrdenes)
  }, [])

  return (
    <div>
      <h1>Órdenes</h1>
      <Link to="/crear">Crear Orden</Link>
      <ul>
        {ordenes.map(o => (
          <li key={o.id}>
            Orden #{o.id} - {o.estatus}
            <Link to={`/surtir/${o.id}`}> Surtir</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default OrdenList
