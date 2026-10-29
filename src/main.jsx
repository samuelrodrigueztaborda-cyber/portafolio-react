import React from 'react'
import ReactDOM from 'react-dom/client'

// 1) CSS de Bootstrap (debe ir antes de nuestro CSS para poder sobreescribirlo)
import 'bootstrap/dist/css/bootstrap.min.css'
// 2) Iconos de Bootstrap (email, teléfono, flecha...)
import 'bootstrap-icons/font/bootstrap-icons.css'
// 3) Estilos personalizados
import './index.css'

import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
