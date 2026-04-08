# Frontend - Sistema de Gestión de Órdenes y Surtido

Aplicación frontend desarrollada en React para gestionar órdenes de productos, incluyendo creación y surtido.

## Tecnologías

- React 18
- React Router DOM
- Vite
- Fetch API
- JavaScript (ES6+)

## Estructura del Proyecto


src/
├── pages/
│ ├── OrdenList.jsx
│ ├── CrearOrden.jsx
│ └── SurtirOrden.jsx
│
├── services/
│ └── api.js
│
├── App.jsx
└── main.jsx


## Instalación


npm install


## Ejecución


npm run start


La aplicación estará disponible en:


http://localhost:5173


## Configuración del Backend

Editar el archivo:


src/services/api.js


Modificar la URL base:

```js
const API_URL = "http://localhost:5000/api";
Funcionalidades
Listado de órdenes
Visualización de órdenes registradas
Acceso a surtido por orden
Crear orden
Permite agregar múltiples productos
Envía la información al backend
Surtir orden
Simulación de escaneo de códigos
Preparado para validaciones de negocio
Reglas de negocio soportadas
Captura de productos por orden
Flujo básico de surtido
Integración con backend para lógica de negocio
Scripts disponibles
npm run start   # Ejecutar en desarrollo
npm run build   # Generar build de producción
Mejoras recomendadas
Manejo global de estado (Context API o Zustand)
Validaciones avanzadas de negocio
Manejo de errores en peticiones HTTP
Indicadores de carga (loading)
Migración a TypeScript
Arquitectura por capas (domain, application, infrastructure, ui)
Implementación de diseño UI con Tailwind o Material UI
Manejo dinámico de estatus de orden
Entrega

Este proyecto forma parte de una prueba técnica que incluye:

Gestión de órdenes
Flujo de surtido
Integración con API REST
