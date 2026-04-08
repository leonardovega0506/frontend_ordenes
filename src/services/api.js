const API_URL = "http://localhost:7121/api"

export const getOrdenes = async () => {
  const res = await fetch(`${API_URL}/ordenes`)
  return res.json()
}

export const crearOrden = async (data) => {
  const res = await fetch(`${API_URL}/ordenes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
  return res.json()
}
