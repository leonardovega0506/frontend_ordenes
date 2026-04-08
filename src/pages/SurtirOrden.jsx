import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const SurtirOrden = () => {
  const { id } = useParams()
  const [codigo, setCodigo] = useState("")

  const escanear = () => {
    console.log("Escaneado:", codigo)
    setCodigo("")
  }

  return (
    <div>
      <h1>Surtir Orden #{id}</h1>
      <input
        value={codigo}
        onChange={(e) => setCodigo(e.target.value)}
        placeholder="Escanear código"
      />
      <button onClick={escanear}>Escanear</button>
    </div>
  )
}

export default SurtirOrden
